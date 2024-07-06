const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1> There are no posts</h1>
      <button type="button" class="btn btn-info" onClick={onGetPostsClick}>
        Get Post fron Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
