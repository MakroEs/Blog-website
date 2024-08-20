'use client'
import React, { useEffect, useState } from 'react'
import BlogItem from '@/Components/BlogItem'
import axios from 'axios';

const BlogList = () => {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div>
            <div className='flex justify-center gap-6 my-10 '>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => (
                    <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
                ))}
            </div>
     
            </div>
         
        </div>
    )
}

export default BlogList;
