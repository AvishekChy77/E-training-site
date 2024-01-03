import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (
      message.includes("what is SciAstra") ||
      message.includes("What is SciAstra") ||
      message.includes("about sciAstra") ||
      message.includes("about Sciastra") ||
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
    } else if (
      message.includes("instructors") ||
      message.includes("team") ||
      message.includes("member") ||
      message.includes(
        "Can you tell me more about the instructors or faculty members for the courses"
      )
    ) {
      actions.HandleTeam();
    } else if (
      message.includes("NEST") ||
      message.includes(
        "What is the syllabus and eligibility criteria for NEST"
      ) ||
      message.includes(" Can you tell me about NISER") ||
      message.includes("NISER") ||
      message.includes("What courses are available for NEST preparation")
    ) {
      actions.HandleNest();
    } else if (
      message.includes("contact") ||
      message.includes("Contact") ||
      message.includes("mail") ||
      message.includes("Mail") ||
      message.includes("How can I contact SciAstra for further assistance")
    ) {
      actions.HandleContact();
    } else if (
      message.includes("example video") ||
      message.includes("Demo") ||
      message.includes("demo") ||
      message.includes("Is there any demo available for the courses")
    ) {
      actions.HandleDemo();
    } else if (
      message.includes("offline download") ||
      message.includes("offline access") ||
      message.includes("Can I access the course material offline")
    ) {
      actions.HandleOffline();
    } else if (
      message.includes("free study material") ||
      message.includes("free material") ||
      message.includes("Do you have any free study material")
    ) {
      actions.HandleFree();
    } else if (
      message.includes("IAT") ||
      message.includes("Tell me about the IAT exam pattern")
    ) {
      actions.HandleIAT();
    } else if (
      message.includes("course") ||
      message.includes("Course") ||
      message.includes("How can I enroll in a course") ||
      message.includes("What courses do you offer") ||
      message.includes(
        "Can you provide information on the different types of courses available"
      )
    ) {
      actions.HandleCourse();
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
