'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => { // Fonksiyon adını büyük harfle başlatın

    const [blogs, setBlogs] = useState([]); // Başlangıç değeri olarak boş bir dizi kullanın

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blog');
            setBlogs(response.data.blogs);
        } catch (error) {
            toast.error('Blogs could not be fetched.');
        }
    };

    const deleteBlog = async (mongoId) => {
        try {
            const response = await axios.delete('/api/blog', {
                params: { id: mongoId }
            });
            toast.success(response.data.msg);
            fetchBlogs();
        } catch (error) {
            toast.error('Blog could not be deleted.');
        }
    };

    useEffect(() => {
        fetchBlogs(); // Parametre olmadan çağırın
    }, []);

    return (
        <div className='flex-1 pt-5 sm:pt-12 sm:pl-16'>
            <h1>All blogs</h1>
            <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-3'>
                                Yazar adı
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Blog Başlığı
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Blog Tarihi
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Aksiyon
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item) => (
                            <BlogTableItem
                                key={item._id}
                                mongoId={item._id}
                                title={item.title}
                                author={item.author}
                               
                                date={item.date}
                                deleteBlog={deleteBlog}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
