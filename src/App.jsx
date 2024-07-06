import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Postlist from "./components/Postlist";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footerr";
import Createpost from "./components/Createpost";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {



  return (
    <PostListProvider>
    <div className="display">
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="header">
        <Header></Header>
       <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
