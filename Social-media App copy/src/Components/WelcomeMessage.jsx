const WelcomeMessage = ({ fetchPosts }) => {
  return (
    <center className="welcome-message">
      <h2>No posts now, please click on Create post from Explorer</h2>
      <button type="button" className="btn btn-primary" onClick={fetchPosts}>
        Retrieve Posts
      </button>
    </center>
  );
};

export default WelcomeMessage;
