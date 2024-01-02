import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage(
      "Hello, what's your enquiry about Sciastra?"
    );

    updateState(message);
  };
  const AboutSciAstra = () => {
    const message = createChatBotMessage(
      "Sciastra is an E-Learning Provider. SciAstra helps students to think differently instead of just memorizing the concepts to qualify for competitive exams. SciAstra's mission is to make you think like a scientist."
    );

    updateState(message);
  };
  const HandleUnknown = () => {
    const message = createChatBotMessage(
      "Sorry, I don't understand.If you have any further enquiry send us a mail at support@sciastra.com"
    );

    updateState(message);
  };

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { initialAction, AboutSciAstra, HandleUnknown },
        });
      })}
    </div>
  );
};

export default ActionProvider;
