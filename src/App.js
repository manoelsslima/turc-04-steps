import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  // hooks in React are prefixed with "use", so useState is a hook.
  // the argument is the default value of the state variable
  // returns an array with two items. 1) the default value of the stae
  // 2) a function to update this value. It's common to destructure the
  // array. We can only call hooks at the top level of the function
  // Do not use State for data that shouldn't trigger component re-renders
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // shouldn't update state based on current state like this
    // we should use an arrow function
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((ip) => !ip)}>
        &times;
      </button>

      {isOpen && (
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
            <Button
              backgroundColor="#7950f2"
              textColor="#FFF"
              onClick={handlePrevious}
            >
              <span>👈</span> Previus
            </Button>
            <Button
              backgroundColor="#7950f2"
              textColor="#FFF"
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Child props is a props that each React component automatically receives.
 * The value of the children props is what is between the opening and enclosing tag
 * We must use the key-word "children" to receive the children props.
 * Ex.: props.children or we can destructure {children}
 * It's useful for modals
 */
function Button({ backgroundColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
