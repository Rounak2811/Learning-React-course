function Task(){
    return (
      <>
        <div class="row">
          <div class="col-5">
            <div class="p-2">
              <label for="exampleFormControlInput1" class="form-label">
                Task
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="go to library"
              />
            </div>
          </div>
          <div class="col-5">
            <div class="p-2">
              <label for="exampleFormControlInput1" class="form-label">
                Date
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
          </div>
          <div class="col-2">
            <div class="p-2">
              <label for="exampleFormControlInput1" class="form-label">
                Action
              </label>
              <br />
              <button type="button" class="btn btn-success">
                Success
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Task;