import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { Outlet } from "react-router-dom";
import ActionProvider from "../Components/Chatbot/ActionProvider";
import MessageParser from "../Components/Chatbot/MessageParser";
import "../Components/Chatbot/chatbot.css";
import config from "../Components/Chatbot/config";
import ButtonIcon from "../assets/robot.svg";
const Root = () => {
  const [showChatbot, toggleChatbot] = useState(false);
  return (
    <div>
      <div className=" flex flex-col min-h-screen">
        <div className="flex-1 grow">
          <Outlet></Outlet>
          <div className="app-chatbot-container">
            {showChatbot && (
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            )}
          </div>
          <button
            className="app-chatbot-button"
            onClick={() => toggleChatbot((prev) => !prev)}
          >
            {/* <ButtonIcon className="app-chatbot-button-icon" /> */}
            <img src={ButtonIcon} className="app-chatbot-button-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root;
