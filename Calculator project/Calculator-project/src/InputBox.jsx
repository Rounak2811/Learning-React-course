import styles from "./InputBox.module.css";

const InputBox = () => {
  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder="Enter the numbers to calculate"
      />
    </div>
  );
};
export default InputBox;
