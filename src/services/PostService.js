import axios from "axios";

export const getAllPosts = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

export const getPost = async (id) =>{
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export const updatePost = async (data) =>{
  return axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`,data);
}

export const deletePost = async (id) =>{
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

