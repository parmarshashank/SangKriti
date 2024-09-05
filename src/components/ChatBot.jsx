import React, { useEffect, useState } from "react";

const ChatBot = () => {
  const [isBotpressLoaded, setIsBotpressLoaded] = useState(false);

  useEffect(() => {
    // Botpress cloud webchat injection script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=57b980a2-42a4-4ddd-beaa-e1e2f8e42386";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/26a83f89-ace1-4045-92ba-95b836f75669/webchat/v2/config.js";
    script2.async = true;
    document.body.appendChild(script2);

    script1.onload = script2.onload = () => {
      // Check if botpress is available
      setIsBotpressLoaded(true);
    };

    return () => {
      // Clean up the scripts when component is unmounted
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const handleOpen = () => {
    if (isBotpressLoaded && window.botpress) {
      window.botpress.open();
    } else {
      console.log("Botpress is not loaded yet");
    }
  };

  const handleClose = () => {
    if (isBotpressLoaded && window.botpress) {
      window.botpress.close();
    } else {
      console.log("Botpress is not loaded yet");
    }
  };

  const handleToggle = () => {
    if (isBotpressLoaded && window.botpress) {
      window.botpress.toggle();
    } else {
      console.log("Botpress is not loaded yet");
    }
  };

  const handleConfigure = () => {
    if (isBotpressLoaded && window.botpress) {
      window.botpress.config({
        configuration: {
          botName: "New Webchat Title",
          botDescription: "Updated description",
        },
      });
    } else {
      console.log("Botpress is not loaded yet");
    }
  };

  const handleSendEvent = () => {
    if (isBotpressLoaded && window.botpress) {
      window.botpress.sendEvent({
        type: "event-sent",
      });
    } else {
      console.log("Botpress is not loaded yet");
    }
  };

  const handleSendMessage = () => {
    if (isBotpressLoaded && window.botpress) {
      window.botpress.sendMessage("Hi! My name is John.");
    } else {
      console.log("Botpress is not loaded yet");
    }
  };

  return (
    <div className="gap-2 flex fixed bottom-0 m-6 z-20">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleOpen}
      >
        Open
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleClose}
      >
        Close
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleToggle}
      >
        Toggle
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleConfigure}
      >
        Configure
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleSendEvent}
      >
        Send Event
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
        onClick={handleSendMessage}
      >
        Send Message
      </button>
    </div>
  );
};

export default ChatBot;
