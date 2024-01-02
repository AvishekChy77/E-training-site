import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import Overview from "./Overview";
import Start from "./Start";

const botName = "Ping";
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Welcome to SciAstra. Hi! I'm ${botName}`),
    createChatBotMessage("I'm here to help you, tell me what you need", {
      withAvatar: true,
      delay: 800,
    }),
  ],
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
    },
    {
      widgetName: "start",
      widgetFunc: (props) => <Start {...props} />,
    },
  ],
};

export default config;
