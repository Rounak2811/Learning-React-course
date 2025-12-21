function Task(){
    return (
      <>
        <div className="row">
          <div className="col-5">
            <div className="p-2">
              <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">
                Task
              </label>
              <br />
              <input
                type="text"
                className="htmlForm-control"
                id="examplehtmlFormControlInput1"
                placeholder="go to library"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="p-2">
              <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">
                Date
              </label>
              <br></br>
              <input
                type="date"
                className="htmlForm-control"
                id="examplehtmlFormControlInput1"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="p-2">
              <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">
                Action
              </label>
              <br />
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Task;