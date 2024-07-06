import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = [action.payload.posts, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, [] );

  const addPost = (userId, postTitle, postBody) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        tittle: postTitle,
        body: postBody,
        userId: userId,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    tittle: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    userId: 5,
  },
  {
    id: "2",
    tittle: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    userId: 6,
  },
  {
    id: "3",
    tittle: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    userId: 5,
  },
  {
    id: "4",
    tittle: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    userId: 6,
  },
  {
    id: "5",
    tittle: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    userId: 5,
  },
  {
    id: "6",
    tittle: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut",
    userId: 6,
  },
];

export default PostListProvider;
