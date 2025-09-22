import React, { useState } from "react";

function SendMessage() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const handleSend = async () => {
    try {
      const res = await fetch(
        "https://mybackend-5-fzao.onrender.com/api/send-data/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error("Error sending data:", err);
      setResponse({ status: "error", message: "Request failed" });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Send Message to Django</h2>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "8px", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "8px 16px" }}>
        Send
      </button>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <strong>Response:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default SendMessage;
