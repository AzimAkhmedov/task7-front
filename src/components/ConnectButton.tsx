import React from "react";
// import { useWS } from "../hooks/ws";

const ConnectButton = () => {
  // const { ws, isWs } = useWS();

  const handleClick = (socket: any) => {
    // ws?.connect( );
    // socket.on("send", (message) => {
    //   console.log("message", message);
    // });
  };
  return <button onClick={handleClick}>Connect</button>;
};

export default ConnectButton;
