import styles from "./App.module.css";
import InputBox from "./InputBox";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

function App() {

  let [numInput,setNumInput]=useState("");

  const handleOnClick=(buttonText)=>{
      if(buttonText==='C'){
        setNumInput("");
      }
      else if(buttonText==='='){
        const result=eval(numInput);
        setNumInput(result);
      }
      else {
        let numEntered = numInput + buttonText;;
        setNumInput(numEntered);
      }
  }

  return (
    <div className={styles.outerDisplay}>
      <InputBox numInput={numInput} />
      <ButtonContainer handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
