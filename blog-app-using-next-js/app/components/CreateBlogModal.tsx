"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from "./Input"
import Button2 from "./Buttoncomp"
import {auth, db} from "../firebase/config.js"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { userId } from './GetCurrentUser';
import { toast, ToastContainer } from 'react-toastify';







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  backgroundColor:"gray"
};

export default function CreateBlogModal() {

  const [blogForm,setBlogForm] = React.useState({
    title: "",
    description : ""
  })  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
  const saveDataIntoDb = async (data) => {
    try {
      const blogData = await addDoc(collection(db, "blogs"), {
       title : data.title,
       description : data.description,
       authorId : userId,
       createdAt : serverTimestamp()
      });
      console.log("Saved", blogData);
      if(blogData) {
        toast.success("Blog Created Successfully!")
      }
    } catch (error) {
      console.log(error);
    }
  };

// console.log(userId);


  const createBlogForm = () => {
console.log("Mian Chala" , blogForm)
saveDataIntoDb(blogForm)
  }
  


  const handleInputChange = (key:unknown, value:string) => {
  
      setBlogForm((prev) => ({...prev , [key] : value}));
    //   console.log(blogForm)

  }




  return (
   <>
    <div>
      <Button onClick={handleOpen}>Create Blog</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Your Blog
          </Typography>
          <Input handler={handleInputChange} title={"Blog Title"} type={""} id={"title"} value={blogForm.title}/>
          <Input handler={handleInputChange} title={"Blog Description"} type=""  id={"description"} value={blogForm.description}/>
          <Button2 title={"Create Blog"} icon={""} handler={createBlogForm}/>
        </Box>
      </Modal>
   </div>
    <ToastContainer />
   </>
  );
}
