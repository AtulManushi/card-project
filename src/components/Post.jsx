import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";


const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  console.log("dshfvsjdfsd",post)

  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.tittle}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" onClick={() => deletePost(post.id)}>
              <AiFillDelete />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
