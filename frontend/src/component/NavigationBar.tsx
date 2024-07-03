import React from "react";
import "./../css/NavigationBar.css";

const NavigationBar: React.FC = () => {
  return (
    <div className="nav-bar">
      <button className="nav-button">홈</button>
      <button className="nav-button">검색</button>
      <button className="nav-button">피드</button>
      <button className="nav-button">내 예약</button>
      <button className="nav-button">메뉴</button>
    </div>
  );
};

export default NavigationBar;
