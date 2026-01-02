import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useRef } from "react";
import { contextPostList } from "../store/post-list-store";


const CreatePost = ({ setSelectedTab }) => {
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const hashtagsElement = useRef();
  const { addPost } = useContext(contextPostList);
  const handleSubmit = (event) => {
    event.preventDefault();
    let userID = userIdElement.current.value;
    let postTitle = postTitleElement.current.value;
    let postBody = postBodyElement.current.value;
    let reactions = reactionsElement.current.value;
    let hashtags = hashtagsElement.current.value.split(/\s+/);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    hashtags = [];
    setSelectedTab('Home');
    addPost(userID, postTitle, postBody, reactions, hashtags);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your user Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Your user Id here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          placeholder="Give your post a title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          ref={postBodyElement}
          placeholder="Write something here"
          rows="7"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          placeholder="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={hashtagsElement}
          placeholder="Enter the hashtags seperated by spaces"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
