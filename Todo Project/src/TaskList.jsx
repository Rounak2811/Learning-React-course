function TaskList(){
    return (
      <>
      <div class="p-2">
        <div class="row">
            <div class="col-5">College lecture</div>
            <div class="col-5">20-1-2025</div>
            <div class="col-2">
                <button type="button" class="btn btn-danger">
                Delete
                </button>
            </div>
        </div>
      </div>
      <div class="p-2">
        <div class="row">
            <div class="col-5">To Gym</div>
            <div class="col-5">27-10-2025</div>
            <div class="col-2">
                <button type="button" class="btn btn-danger">
                Delete
                </button>
            </div>
        </div>
      </div>
      </>
    );
}

export default TaskList;