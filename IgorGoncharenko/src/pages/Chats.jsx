import React from "react";
import MainContent from "../components/MainContent.jsx";
import { useParams } from "react-router-dom";

const Chats = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Chart{[id]}</h1>
      <MainContent />
    </div>
  );
};

export default Chats;
