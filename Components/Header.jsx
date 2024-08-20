import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await axios.post('/api/email', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success(response.data.msg);
        setEmail("");
      } else {
        toast.error(response.data.msg || 'Bir hata oluştu.');
      }
    } catch (error) {
      console.error('İstemci Hatası:', error);
      toast.error('Sunucu tarafında bir hata oluştu.');
    }
  };

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
      <button className="relative inline-flex items-center justify-center p-4 rounded-lg overflow-hidden bg-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
    <span className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></span>
    <a href="./" className="relative text-3xl font-bold font-serif z-10 transition-transform transform hover:scale-105">
        Makro..
    </a>
</button>
  
       
    
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>Makro <span className='text-gray-600'>Blogs</span> </h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Farklı Yazılım Dilleri, Farklı Kullanım Alanları: Hangi Dil Nerede Kullanılır?</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
            placeholder='E-mail Adresiniz'
            className='pl-4 outline-none'
            required
          />
          <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
            Abone Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
