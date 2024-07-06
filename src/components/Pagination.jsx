import react, { useState, useContext, useEffect } from "react"
import TablePagination from '@mui/material/TablePagination';
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import { Filter } from "@mui/icons-material";





const Pagination = ({ postList }) => {

    // const { deletePost } = useContext(PostList);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [mainCardData, setMainCardData] = useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {

        setMainCardData(postList?.[0])

    }, [postList])

    


    const deletePost = (id) => {

         let DeletedFilterData= mainCardData.filter(user => user.id !== id);

        console.log("smdbngchshd", DeletedFilterData)
        setMainCardData(DeletedFilterData)

    }


    return (
        <div>
            <div className="main-table-container" >

                {mainCardData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)?.map((post) => {
                    return (
                        <div className="card post-card  " style={{ width: "30rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {post.tittle}
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" 
                                        type="button"
                                        onClick={() => deletePost(post.id)}>
                                        <AiFillDelete />
                                    </span>
                                </h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    );
                })}


            </div>


            <TablePagination
                rowsPerPageOptions={[6, 20, 60, 100]}
                component="div"
                count={mainCardData?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />



        </div>
    );
}

export default Pagination