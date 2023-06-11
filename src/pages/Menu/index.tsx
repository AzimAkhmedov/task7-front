import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate()
  return (
    <div className="container menu">
      <ul>
        <li onClick={()=>{
          navigate('/tictactoe')
        }}>
          <NavLink to={"/tictactoe"}>Играть в Крестики-Нолики</NavLink>
        </li>
        <li>
          <NavLink to={"/seawar"}>Играть в Морской бой</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
