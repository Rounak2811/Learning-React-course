import { createContext, useReducer } from "react";

export const contextPostList = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id != action.payload);
  } else if (action.type === "INSERT_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "INSERT_POST") {
    const newPost = {
      id: Date.now(),
      userId: action.payload.userID,
      title: action.payload.postTitle,
      body: action.payload.postBody,
      reactions: action.payload.reactions,
      tags: action.payload.hashtags,
    };
    newPostList = [newPost, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userID, postTitle, postBody, reactions, hashtags) => {
    const postItemAction = {
      type: "INSERT_POST",
      payload: {
        userID,
        postTitle,
        postBody,
        reactions,
        hashtags,
      },
    };
    dispatchPostList(postItemAction);
  };
  const addPosts = (posts) => {
    const postItemAction = {
      type: "INSERT_INITIAL_POST",
      payload: {
        posts,
      },
    };
    dispatchPostList(postItemAction);
  };
  const deletePost = (postId) => {
    const postItemAction = {
      type: "DELETE_POST",
      payload: postId,
    };
    dispatchPostList(postItemAction);
  };

  return (
    <contextPostList.Provider
      value={{
        postList,
        addPost,
        addPosts,
        deletePost,
      }}
    >
      {children}
    </contextPostList.Provider>
  );
};

export default PostListProvider;
