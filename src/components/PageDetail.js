import { Link } from "react-router-dom";
import axios from "axios";
import { API_HOST } from "../api_utils";
import { ReGenerate } from "../redux/actions/pageAction";
import { useSelector, useDispatch } from "react-redux";


function PageDetail({ page }) {

  const dispatch = useDispatch();
  const { name } = page;
  const handleDelete =async (e)=>{
    e.preventDefault();
    const response = await axios.delete(`${API_HOST}pages/${page._id}`);
    console.log(response.status);
    if(response.status === 200){
      await axios.get(`${API_HOST}pages`);
    }
  }



  const handleSubmit = async (event) => {
   console.log(event,"event")
    ReGenerate(event)(dispatch);
  };
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link className="text-decoration-none" to={`/editor/${page._id}`}>
        {name}
      </Link>
      <div>
        <button className="btn btn-sm btn-outline-primary">
          <i className="fa fa-refresh" onClick={()=>handleSubmit(page._id)}></i>
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={(e)=>handleDelete(e)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default PageDetail;
