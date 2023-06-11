import React from "react";
// import { WS } from "../api/ws";
// import { useWS } from "../hooks/ws";

const CloseButton = () => {
  // const { ws, isWs } = useWS();
  const handleClick = () => {
    // ws?.close();
  };
  return <button onClick={handleClick}>Close</button>;
};

export default CloseButton;
