function IndiTask({taskName,taskDate}) {
  return (
    <>
      <div className="p-2">
        <div className="row">
          <div className="col-5">{taskName}</div>
          <div className="col-5">{taskDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndiTask;
