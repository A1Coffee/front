import React from "react"
import {useState, useEffect} from "react"
import '../css/main.css'
function Hat() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
      setShowMenu(!showMenu);
    };
    const handleCloseMenu = () => {
      setShowMenu(false);
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (showMenu && !event.target.closest('.dropdown-content') && !event.target.closest('.menu1')) {
          handleCloseMenu();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [showMenu]);

    return (<div className="name">
      
      <div class="heada">
        <div class="overlay" />
          <div class="iconufu"/>
      <div class="sobaka"/>
          <div class="logo2"/>
          <div class="logo3"/>
          <div class="button6">Главная</div>
          <div class="button6">Направления</div>
          <div class="button6">О школе</div>
          <div class="dropdown">
            <div class="menu1" onClick={handleClick}/>
              <nav className={`dropdown-content ${showMenu ? "active" : ""}`}>
                <a href="#">Направления</a>
                <a href="#">О школе</a>
                <a href="#">Расписание</a>
                <a href="#">Подать заявку</a>
                <a href="#">Преподаватели</a>
                <a href="#">Интенсивы</a>
              </nav>
            </div>      
          </div>
        </div>)
}

export default Hat