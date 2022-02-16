import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUser } from '../../services/UserSevice';
import { getPost } from '../../services/PostService';
import avatar from '../../assests/img/avatar.png';

import { ScPostDetailWrapper, ScPostDetailUserNameWrapper, ScPostDetailLabel, ScPostDetailText } from './ScPostDetail';

const PostDetail = () => {
  let { id } = useParams();
  const [detailPost, setDetailPost] = useState({});
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    getPost(id)
      .then((res) => setDetailPost(res.data))
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    getUser(detailPost.userId)
      .then((res) => setUserDetail(res.data))
      .catch((err) => console.log(err))
  }, [detailPost]);

  return (
    <section className="card">
      {
        <ScPostDetailWrapper key={detailPost.id}>
          <div>
            <ScPostDetailUserNameWrapper>
              <img src={avatar}/>
              <Link to={`/profile/${detailPost.userId}`}>{userDetail.username}</Link>
            </ScPostDetailUserNameWrapper>
            <ScPostDetailLabel>Title</ScPostDetailLabel>
            <ScPostDetailText>{detailPost.title}</ScPostDetailText>
            <ScPostDetailLabel>Body</ScPostDetailLabel>
            <ScPostDetailText>{detailPost.body}</ScPostDetailText>
          </div>
        </ScPostDetailWrapper>
      }
    </section>
  )
};

export default PostDetail;