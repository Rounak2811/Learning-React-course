import { createContext, useReducer } from "react";

export const contextPostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((post) => post.id != action.payload);
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
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

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
        deletePost,
      }}
    >
      {children}
    </contextPostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hey guys, whatsApp, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Goa",
    body: "Hey guys, whatsApp, I am going to Goa for my vacations. Hope to enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-12",
    tags: ["vacation", "Goa", "EnjoyingWithFamily"],
  },
];

export default PostListProvider;
