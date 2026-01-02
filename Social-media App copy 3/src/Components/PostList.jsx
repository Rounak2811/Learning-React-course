import { useContext, useEffect, useState} from "react";
import Post from "./Post";
import { contextPostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addPosts } = useContext(contextPostList);
  let [fetching,setFetching]=useState(true);
  useEffect(()=>{
    setFetching(true);
    const controller =new AbortController();
    const signal=controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {addPosts(data.posts);
        setFetching(false);
      });

      return ()=>{//Whenever we switch to a different component then this code runs .
        console.log("Cleaning up useEffect");
        controller.abort();
      }
    
  },[]);

  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default PostList;
