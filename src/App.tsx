import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import Menu from "./pages/Menu";
import TicTacToe from "./pages/TicTacToeRoom";
import Start from "./pages/TicTacToeRoom/Start";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Menu />} path="/" />
        <Route element={<Start />} path="/tictactoe" />
        <Route path="/tictactoe/game" element={<TicTacToe/>} />
        <Route path="/seawar" element={<div className="banner"> Coming SOON</div>} />
      </Routes>
    </div>           
  );
}

export default App;
