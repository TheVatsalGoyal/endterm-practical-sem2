import React, { useState } from "react";

function App() {

  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");

  const calculateSI = () => {
    setInterest((principal * rate * time) / 100);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Simple Interest Calculator</h1>

      <input
        type="number"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Rate of Interest"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Time in Years"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        style={styles.input}
      />

      <button onClick={calculateSI} style={styles.button}>
        Calculate
      </button>

      <h2 style={styles.result}>
        Simple Interest: {interest}
      </h2>
    </div>
  );
}
const styles = {
    container: {
      width: "400px",
      margin: "100px auto",
      padding: "20px",
      textAlign: "center",
      border: "1px solid black",
      borderRadius: "10px",
      backgroundColor: "#f5f5f5",
    },

    input: {
      width: "90%",
      padding: "10px",
      margin: "10px 0",
    },

    button: {
      padding: "10px 20px",
      marginTop: "10px",
      cursor: "pointer",
    },

    heading: {
      color: "darkblue",
    },

    result: {
      color: "green",
      marginTop: "20px",
    },
  };

export default App;