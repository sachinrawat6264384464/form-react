import React, { useState } from "react";
import axios from "axios";

function SendData() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post(
        "https://mybackend-5-fzao.onrender.com/api/send-data/",
        { message }  // backend ko ye JSON send hoga
      );
      setResponse(res.data); // backend ka response show karne ke liye
    } catch (err) {
      console.error(err);
      setResponse("Error sending data");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={handleSend}>Send</button>

      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default SendData;
