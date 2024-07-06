import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Createpost = ()=>{

    const {addPost} = useContext(PostList);
   const navigate = useNavigate();

const userIdElement =  useRef();
const postTitleElement =  useRef();
const postBodyElement =  useRef();

const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value; 
    const postTitle = postTitleElement.current.value; 
    const postBody = postBodyElement.current.value;

    addPost(userId, postTitle, postBody);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    
    navigate("/");
};

    return <form className="create-post">
 <div className="mb-3">
      <label htmlFor="userId" className="form-label">UserId</label>
      <input type="text" ref={userIdElement} className="form-control" placeholder="Enter your UserId" id="userId" />
      
    </div>
    <div className="mb-3">
      <label htmlFor="tittle" className="form-label">Post Tittle</label>
      <input type="text" ref= {postTitleElement} className="form-control" placeholder= "Enter your Tittle" id="tittle" />
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Body</label>
      <textarea type="text-area" ref={postBodyElement} rows = "4" className="form-control" placeholder= "How are you feeling today" id="body">
    </textarea>
    </div>
   {/* <button type="button" className="btn btn-success" onClick={handleSubmit} >Submit 
</button> */}
  </form>
}

export default Createpost;