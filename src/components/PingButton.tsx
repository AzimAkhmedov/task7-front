import React from "react";
// import { useWS } from "../hooks/ws";

const PingButton = () => {
  // const { ws, isWs } = useWS();

  const handleClick = () => {
    // ws?.send(JSON.stringify({ type: "ping" }));
  };
  return (
    <button onClick={handleClick} >
      Ping
    </button>
  );
};

export default PingButton;
