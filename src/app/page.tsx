"use client"

import { useState, useEffect } from "react";
import BlogPost from "./components/BlogPost";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";

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
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPosts = () => {
    setLoading(true);
    fetch("/blogPosts.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  // SearchLogic
  const handleSearch = (searchTerm: string) => {
    if (searchTerm === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center flex-wrap mt-5 mb-7">
        <h1 className="text-3xl font-bold">Blog</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      {loading && <h1 className="text-lg text-black">Loading........</h1>}
      {filteredPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}
