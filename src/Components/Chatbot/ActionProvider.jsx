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
      "Sorry, I don't understand.Could you be more specific? Or If you like you can send us a mail at support@sciastra.com"
    );

    updateState(message);
  };

  const HandleContact = () => {
    const message = createChatBotMessage(
      "Thank you for your interest in SciAstra. You can send us an email at support@sciastra.com"
    );

    updateState(message);
  };

  const HandleOffline = () => {
    const message = createChatBotMessage(
      "SciAstra offers live and recorded class. You can download the video in the app for offline access."
    );

    updateState(message);
  };

  const HandleCourse = () => {
    const message = createChatBotMessage(
      "SciAstra offers a diverse range of educational courses. You can see course details and enroll procedure here. ",
      {
        withAvatar: true,
        delay: 800,
        widget: "courses",
      }
    );

    updateState(message);
  };

  const HandleFree = () => {
    const message = createChatBotMessage(
      "SciAstra offers free mock test, study material, exam analysis etc. Click on the button to see details",
      {
        withAvatar: true,
        delay: 800,
        widget: "material",
      }
    );

    updateState(message);
  };

  const HandleIAT = () => {
    const message = createChatBotMessage(
      "IAT exam, eligibility criteria,Syllabus, available courses- All you need to know about IAT or IISER you can find here, click on the button below",
      {
        withAvatar: true,
        delay: 800,
        widget: "iat",
      }
    );

    updateState(message);
  };

  const HandleDemo = () => {
    const message = createChatBotMessage(
      "Absolutely! SciAstra provides demo classes that are uploaded on our website for users to explore and experience. Click on the button to see the demo classes!",
      {
        withAvatar: true,
        delay: 800,
        widget: "courses",
      }
    );

    updateState(message);
  };

  const HandleTeam = () => {
    const message = createChatBotMessage(
      "At SciAstra you can learn from Scientists, Research Scholars from the top Institutes in the world.",
      {
        withAvatar: true,
        delay: 800,
        widget: "team",
      }
    );

    updateState(message);
  };

  const HandleNest = () => {
    const message = createChatBotMessage(
      "NEST exam, eligibility criteria,Syllabus, available courses- All you need to know about NEST or NISER you can find here, click on the button below",
      {
        withAvatar: true,
        delay: 800,
        widget: "nest",
      }
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
          actions: {
            initialAction,
            AboutSciAstra,
            HandleUnknown,
            HandleCourse,
            HandleTeam,
            HandleNest,
            HandleContact,
            HandleDemo,
            HandleOffline,
            HandleFree,
            HandleIAT,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
