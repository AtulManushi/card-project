import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Pagination from "./Pagination";
const Postlist = () => {


  const { postList, addInitialPosts } = useContext(PostListData);
 
  const handleGetPostsClick = async () => { 
    let headersList = {
      "Accept": "*/*",
    }

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: headersList
    });

    let data = await response.text();
    let parshData = JSON.parse(data)
    
 
    addInitialPosts(parshData)

  }

  useEffect(() => {
    handleGetPostsClick()

  }, []) 


  return (
    <>
      <Pagination postList={postList} />

    </>
  );
};
export default Postlist;
