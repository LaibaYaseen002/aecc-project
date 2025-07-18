"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { fetchPosts } from "@/lib/posts";

type Post = {
  id: number;
  image: string;
  title: string;
  date: string;
  year: string;
  author: string;
};

export default function LatestNews() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
    };

    loadPosts();
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
        Latest News & Events Post
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="shadow-lg rounded overflow-hidden text-left bg-white group"
          >
            <div className="overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex">
              <div className="bg-blue-900 text-white text-center px-6 py-2">
                <p className="text-2xl font-bold leading-none">{post.date}</p>
                <p className="text-sm">{post.year}</p>
              </div>
              <div className="p-4 flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <FaUser className="text-gray-600" />
                  <span>{post.author}</span>
                  <BsBookmark className="ml-2 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  {post.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
