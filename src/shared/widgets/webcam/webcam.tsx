import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

import * as utilities from "./utilities";

export const WebCam: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadModel = async () => {
    const modelURL =
      "https://tensorflowjs-model.s3.us-south.cloud-object-storage.appdomain.cloud/model.json";
    const net = await tf.loadGraphModel(modelURL);

    const detectionSpeed = 16.7;

    setInterval(() => {
      detect(net);
    }, detectionSpeed);
  };

  const detect = async (net: tf.GraphModel<string | tf.io.IOHandler>) => {
    if (
      webcamRef.current &&
      typeof webcamRef.current.video !== "undefined" &&
      webcamRef.current.video !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      if (canvasRef.current) {
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const img = tf.browser.fromPixels(video);
        const resized = tf.image.resizeBilinear(img, [640, 480]);
        const casted = resized.cast("int32");
        const expanded = casted.expandDims(0);
        const obj = await net.executeAsync(expanded) as tf.Tensor[];
        const boxes = await obj[1].array() as number[][];
        const classes = await obj[2].array() as number[][];
        const scores = await obj[4].array() as number[][];

        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          requestAnimationFrame(() => {
            utilities.drawRect(
              boxes[0],
              classes[0],
              scores[0],
              0.8,
              videoWidth,
              videoHeight,
              ctx
            );
          });
        }

        // Memory cleanup
        tf.dispose(img);
        tf.dispose(resized);
        tf.dispose(casted);
        tf.dispose(expanded);
        tf.dispose(obj);
      }
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  return (
    <div>
      <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 10,
            width: 640,
            height: 480,
          }}
        />
    </div>
  );
};
