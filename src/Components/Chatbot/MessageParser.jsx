import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (
      message.includes(" what is SciAstra") ||
      message.includes("about sciAstra") ||
      message.includes("about SciAstra") ||
      message.includes("about sciastra")
    ) {
      actions.AboutSciAstra();
    } else if (
      message.includes("hello") ||
      message.includes("Hello") ||
      message.includes("Hi") ||
      message.includes("hi")
    ) {
      actions.initialAction();
    } else {
      actions.HandleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
