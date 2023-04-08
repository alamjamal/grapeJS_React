import React, {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { API_HOST } from "../api_utils";
import { ReGenerate } from "../redux/actions/pageAction";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { right } from '@popperjs/core';


function PageDetail({ page }) {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [content, setContent]=useState([])
  const [copy, setCopy]=useState("Copy")
  console.log(content,"content")
  const { name } = page;
  // console.log(name,"name")


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  



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

  const getText = async (event) => {
    console.log(event,"event")
    //  ReGenerate(event)(dispatch);
    try {
      const response = await axios.get(`${API_HOST}/assets/content/${event}`);
      setContent(response.data);
      handleClickOpen()
    } catch (error) {
      setContent(error.message);
    }
     
 
   };
 






 


  return (
    <>

    
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link className="text-decoration-none" to={`/editor/${page._id}`}>
        {name}
      </Link>
      <div>
      <button className="btn btn-sm btn-outline-primary">
          <i className="fa fa-file-text" 
          onClick={()=>getText(page._id)}
          // onClick={handleClickOpen}
          >
            
          </i>
        </button>
        <button className="btn btn-sm btn-outline-primary">
          <i className="fa fa-refresh" onClick={()=>handleSubmit(page._id)}></i>
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={(e)=>handleDelete(e)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>


 


<div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Copy Content from here..."}
        </DialogTitle>
        <hr/>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
       
{content.map((item)=>{
  return<>
  <div>



<p>{item.content}</p>


<div style={{textAlign:"right"}}>
<button 
  onClick={() => {navigator.clipboard.writeText(item.content);setCopy("Copied")} }
>
  {copy}
</button>
</div>
<hr/>
  </div>
</>

})}

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}

export default PageDetail;
