import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);



  //BAD WAY TO UPDATE SATTE
  // function handlePrevious() {
  //   if (step > 1) setStep(step - 1);
  // }

  // function handleNext() {
  //   if (step < 3) setStep(step + 1);
  // 

  //Good WAy to Updaet State
  function handlePrevious() {
    //  if (step > 1) setStep(step - 1);// it works butits bad way always use callback ie\
    if (step > 1) setStep((s) => s - 1);  // Good wayExplained in below handler function
  }

  function handleNext() {
    // if (step < 3) setStep(step + 1);  //BAd Way   cuz is we use setStep(step +1) two time in this if condition component will only run setState one time 
    if (step < 3) setStep((s) => s + 1); //Good WAy  => By thsi approach if we update setStep(step+1) multiple times in if block it all will be execute ie 
    //if( step <3){
    //setStep((s)=> s + 1);
    //setStep((s)=> s + 1);
  // } this will update step by +2 but  old/bad way only update it once thats  why its bad way and this is the way to update state manually 
    // 
// 
      
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p>
            Step {step}: {messages[step - 1]}{" "}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "red", color: "white" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
