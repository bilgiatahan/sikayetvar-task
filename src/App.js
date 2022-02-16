import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from './components/Post'
import PostDetail from './components/PostDetail'
import UserDetail from './components/UserDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import { getAllPosts, deletePost, updatePost } from './services/PostService'
import { ScMainWrapper, ScMainContainer } from './ScApp'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    getAllPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, []);

  const onUpdate = async (id, title, body, userId) => {
    const data = {
      id: id,
      title: title,
      body: body,
      userId: userId
    }
    updatePost(data)
      .then((res) => {
        if (res.status !== 200) return
      })
      .then(() => {
        const newPosts = posts.map((post) => {
          if (post.id === id) {
            post.title = title;
            post.body = body;
          }
          return post
        })
        setPosts(newPosts);
      })
      .catch((err) => console.log(err))
  };

  const onDelete = async (id) => {
    deletePost(id)
      .then((res) => {
        if (res.status !== 200) return;
        else {
          setPosts(
            posts.filter(post => {
              return post.id !== id;
            })
          )
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <ScMainWrapper>
        <ScMainContainer>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Post
                  currentPosts={currentPosts}
                  setCurrentPage={setCurrentPage}
                  postsPerPage={postsPerPage}
                  postsLength={posts.length}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              }
            />
            <Route
              path="/post/:id"
              exact
              element={<PostDetail />}
            />
            <Route
              path="/profile/:id"
              exact
              element={<UserDetail />}
            />
          </Routes>
          <Footer />
        </ScMainContainer>
      </ScMainWrapper>

    </Router>
  );
}

export default App;
