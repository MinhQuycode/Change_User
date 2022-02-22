import React from "react";
import { useSelector } from "react-redux";
import "./header.css";

export default function Header(props) {
  const { setEdit } = props;
  const handleEdit = () => {
    setEdit(true);
  };
  const { name, age, avaUrl, about, themeColor } = useSelector(
    (state) => state.user
  );
  return (
    <>
      <header
        style={{
          backgroundColor: `${themeColor}`,
          backgroundImage: `linear-gradient(180deg,${themeColor},2%,${themeColor},65%,#181818 100%)`,
        }}
      >
        <div className="info-container">
          <div className="info-edit" onClick={handleEdit}>
            Edit
          </div>
          <img className="info-avt" src={avaUrl} alt="Waiting"></img>
          <div className="info-username">{name}</div>
          <div className="info-age">{age}</div>
          <div className="info-about">{about}</div>
        </div>
      </header>
    </>
  );
}
