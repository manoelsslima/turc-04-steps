import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // hooks in React are prefixed with "use", so useState is a hook.
  // the argument is the default value of the state variable
  // returns an array with two items. 1) the default value of the stae
  // 2) a function to update this value. It's common to destructure the
  // array. We can only call hooks at the top level of the function
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {1}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          // we cannot call the function direct
          // we just pass the function value. We don't call it
          // onClick={() => alert("Previous")}
          onClick={() => handlePrevious()}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#FFF" }}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
