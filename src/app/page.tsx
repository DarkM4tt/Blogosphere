"use client"

import { useState, useEffect } from "react";
import BlogPost from "./components/BlogPost";
import styles from "./page.module.css";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  thumbnail: string;
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  //SearchLogic
  // const handleSearch = (searchTerm: string) => {
  //   if (searchTerm === "") {
  //     setFilteredPosts(posts);
  //   } else {
  //     const filtered = posts.filter((post) =>
  //       post.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setFilteredPosts(filtered);
  //   }
  // };

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold mt-7 mb-12">Blog</h1>
      {/* <SearchBar onSearch={handleSearch} /> */}
      {filteredPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
