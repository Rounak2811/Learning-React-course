import { useContext } from "react";
import Post from "./Post";
import { contextPostList } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList,addPosts} = useContext(contextPostList);
  const handlePosts=()=>{
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=>addPosts(data.posts));
  }
  return (
    <>
    {postList.length===0 && <WelcomeMessage fetchPosts={handlePosts}/>}
     {postList.map((post)=>{
      return <Post key={post.id} post={post}/>;
     })}
    </>
  );
};

export default PostList;
