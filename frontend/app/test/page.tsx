"use client";

import axios from "axios";
import React from "react";
import useSWR from "swr";

const baseURL = "http://127.0.0.1:8000/system-messages/";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Test = () => {
  const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  function createPost() {
    axios
      .post(baseURL, {
        message: "test3"
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return <div>No post!<button onClick={createPost}>Create Post</button></div>

  return (
    <div>
      <h1>{post.message}</h1>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
};

export default Test;
