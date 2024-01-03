import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import Courses from "./Courses";
import Iat from "./Iat";
import Material from "./Material";
import Nest from "./NEST";
import Team from "./Team";

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
      widgetName: "courses",
      widgetFunc: (props) => <Courses {...props} />,
    },
    {
      widgetName: "nest",
      widgetFunc: (props) => <Nest {...props} />,
    },
    {
      widgetName: "team",
      widgetFunc: (props) => <Team {...props} />,
    },
    {
      widgetName: "material",
      widgetFunc: (props) => <Material {...props} />,
    },
    {
      widgetName: "iat",
      widgetFunc: (props) => <Iat {...props} />,
    },
  ],
};

export default config;
