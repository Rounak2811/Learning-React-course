
import styles from './InputBox.module.css';

const InputBox = ({numInput}) => {
  return(
    <div className={styles.inputBox}>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        value={numInput}
        readOnly
      />
    </div>
  );
};
export default InputBox;
