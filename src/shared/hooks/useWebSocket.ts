import { useEffect, useState } from "react";

export const useWebSocket = (url: string, uuids: string[]) => {
  const [websocket, setWebsocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      const subscriptions = {
        throttle: "10s",
        uuids,
      };

      ws.send(JSON.stringify(subscriptions));
    };

    ws.onclose = () => console.log("disconnected");
    ws.onerror = (event) => console.log("error", event);
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setWebsocket(message);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  return { websocket };
};
