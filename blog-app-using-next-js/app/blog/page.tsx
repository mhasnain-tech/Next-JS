"use client"

import React, { useEffect, useState } from 'react'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';
import BlogCard from '../components/BlogCard'

const page = () => {
const [allBlogs, setAllBlogs] = useState([]);
console.log(allBlogs);

  const getData = async () => {
    try{
      const q = query(collection(db, "blogs"));
    
      const querySnapshot = await getDocs(q);
      const blogsGetData = querySnapshot.docs.map((doc) => ({
        // doc.data() is never undefined for query doc snapshots
        
        id: doc.id , 
        ...doc.data()
      }));
    
      console.log(blogsGetData);
      setAllBlogs(blogsGetData)
      
    }
    catch(error) {
    console.log(error.message);
    console.log(error.code);
    
    }
    }
    
    
    useEffect(() => {
    getData()

    },[])

  return (
    <div className={"h-screen w-screen"}>
      <h1 className="text-center text-3xl font-bold mt-4">All Blogs</h1>
  <div className="flex justify-between items-center flex-wrap p-4">
  {allBlogs.length > 0 ? allBlogs.map((b,idx) => ( <BlogCard b={b} key={idx}/>)) : <p>Blogs Finding...</p>}
  </div>

    </div>
  )
}

export default page
