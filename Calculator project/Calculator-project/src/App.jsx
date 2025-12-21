import styles from "./App.module.css";
import InputBox from "./InputBox";
import ButtonContainer from "./ButtonContainer";

function App() {
  return (
    <div className={styles.outerDisplay}>
      <InputBox />
      <ButtonContainer />
    </div>
  );
}

export default App;
