"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
const Page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex  items-center">
          <Link href="/">
            <button className="relative inline-flex items-center justify-center p-4 rounded-lg overflow-hidden bg-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              <span className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></span>
              Makro..
            </button>
          </Link>
         
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          
          <Image
            className="mx-auto mt-6 border border-white rounded-full "
            src={assets.profile_icon}
            alt=""
            width={60}
            height={60}
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          alt=""
          width={1280}
          height={720}
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="my-24">
          <p className="black font-semibold my-4">Sosyal medya hesaplarım</p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} color="black" />
            </a>
            <a
              href="https://www.linkedin.com/in/eren-öztürk-9027a0249/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={25} color="black" />
            </a>
            <a
              href="https://github.com/MakroEs"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} color="black" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
