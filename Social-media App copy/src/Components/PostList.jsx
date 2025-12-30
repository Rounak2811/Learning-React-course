import { useContext } from "react";
import Post from "./Post";
import { contextPostList } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(contextPostList);
  console.log(postList);
  return (
    <>
     {postList.map((post)=>{
      return <Post key={post.id} post={post}/>;
     })}
    </>
  );
};

export default PostList;
