import { useEffect, useState } from "react";
import { connectRoomHandler, connectSocketServer } from "../api/ws";

const Board = () => {
  const [socket, setSocket] = useState<any>(null);

  // const { map, handleClear, handleStep, steps, gameStatus } = useBoard();
  // useEffect(() => {
  // console.log("a", gameStatus);
  // }, [gameStatus]);
  useEffect(() => {
    setSocket(connectSocketServer());
    console.log(socket);
  }, []);
  useEffect(() => {
    console.log(socket);
  }, [socket]);
  return (
    <div className="box">
      <div className="control">
        <button
          onClick={() => {
            socket.emit("connect", prompt("Номер Комнаты"));
          }}
        >
          Connect to room
        </button>
      </div>
      <div className="board">
        <ul className="map">
          {/* {map.map((e, i) =>
            e === "None" ? (
              <li onClick={() => handleStep(i)} key={i}></li>
            ) : (
              <li key={i} className="cell">
                {e}
              </li>
            )
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Board;
