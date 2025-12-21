const InputBox = ({ handleOnKeyDown }) => {
  return (
    <>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter the item you want to buy"
          aria-label="Username"
          aria-describedby="visible-addon"
          // onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
      </div>
    </>
  );
};
export default InputBox;