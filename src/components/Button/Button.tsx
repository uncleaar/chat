import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean }>`
  width: 100%;
  background-color: #2b09ff;

  background: ${(props) => (props.$primary ? "#2b09ff" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#2b09ff")};

  border: none;
  outline: none;
  padding: 15px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Inter";
  font-size: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${(props) => (props.$primary ? "#270cd9" : "white")};
  }
`;
