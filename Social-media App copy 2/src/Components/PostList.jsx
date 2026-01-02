import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { contextPostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addPosts } = useContext(contextPostList);
  // const [isFetched, setIsFetched] = useState(false);
  // if (!isFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => addPosts(data.posts));

  //   setIsFetched(true);
  // }
  useEffect(()=>{
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addPosts(data.posts));
  },[]);

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
