import "bootstrap/dist/css/bootstrap.min.css";
import { MdDeleteOutline } from "react-icons/md";
import { contextPostList } from "../store/post-list-store";
import { useContext } from "react";


const Post = ({ post }) => {
  const {deletePost}=useContext(contextPostList)
  
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
            <MdDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span  key={tag} className="badge text-bg-primary tag">{tag}</span>
        ))}
        <button type="button" className="btn btn-primary reactions">
          Reactions <span className="badge text-bg-secondary">{post.reactions.likes+post.reactions.dislikes}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
