import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import {
  ScPost, ScPostTitle, ScPostId, ScActionButton, ScActionWrapper,
  ScPaginationWrapper, ScPopup, ScUpdateFormInput, ScUpdateFormLabel, ScUpdateFormTextArea,
  ScPopupHeader, ScUpdateForm, ScPopupHeaderTitle, ScPopupCloseButton,
  ScPopupWarningTextWrapper, ScPopupWarningText, ScPopupWarningSubText,
  ScActionButtonWrapper
} from "./ScPost";

const Post = ({ currentPosts, onDelete, onUpdate, setCurrentPage, postsPerPage, postsLength }) => {
  const [deleteWarningModal, setDeleteWarningModal] = useState(false);
  const [updateWaningModal, setUpdateWarningModal] = useState(false);
  const [updatePost, setupdatePost] = useState([]);
  const [postId, setPostId] = useState(0);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleDelete = () => {
    onDelete(postId);
    setDeleteWarningModal(false);
  };

  const handleSubmitEdit = () => {
    const form = document.querySelector("form");
    let newTitle = form.title.value;
    let newBody = form.body.value;
    onUpdate(updatePost.id, newTitle, newBody, updatePost.userId);
  };

  return (
    <div>
      <section className="card">
        {
          currentPosts.map(post => (
            <ScPost key={post.id} >
              <ScPostId>{post.id}</ScPostId>
              <ScPostTitle>{post.title}</ScPostTitle>
              <ScActionWrapper>
                <ScActionButton className="detail" >
                  <Link to={`/post/${post.id}`} >Detay</Link>
                </ScActionButton>
                <ScActionButton className="update" onClick={() => { setUpdateWarningModal(true); setupdatePost(post) }}>Düzenle</ScActionButton>
                <ScActionButton className="delete" onClick={() => { setDeleteWarningModal(true); setPostId(post.id) }}>Sil</ScActionButton>
              </ScActionWrapper>
            </ScPost>
          ))
        }
        {
          deleteWarningModal && (
            <ScPopup>
              <ScPopupHeader>
                <ScPopupHeaderTitle>Sil</ScPopupHeaderTitle>
                <ScPopupCloseButton onClick={() => setDeleteWarningModal(false)}>X</ScPopupCloseButton>
              </ScPopupHeader>
              <ScPopupWarningTextWrapper>
                <ScPopupWarningText>Post'u Silmek Üzeresiniz</ScPopupWarningText>
                <ScPopupWarningSubText>Silinsin mi ?</ScPopupWarningSubText>
              </ScPopupWarningTextWrapper>
              <ScActionButton onClick={handleDelete} className="popup-Delete">Evet, Sil</ScActionButton>
            </ScPopup>
          )
        }
        {
          updateWaningModal && (
            <ScPopup>
              <ScPopupHeader>
                <ScPopupHeaderTitle>Düzenle</ScPopupHeaderTitle>
                <ScPopupCloseButton onClick={() => setUpdateWarningModal(false)}>X</ScPopupCloseButton>
              </ScPopupHeader>
              <ScUpdateForm onSubmit={(e) => handleSubmitEdit(e)}>
                <ScUpdateFormLabel>Title</ScUpdateFormLabel>
                <ScUpdateFormInput placeholder={updatePost.title} name="title" />
                <ScUpdateFormLabel>Body</ScUpdateFormLabel>
                <ScUpdateFormTextArea placeholder={updatePost.body} name="body" />
              </ScUpdateForm>
                  <ScActionButton className="popup-Edit" onClick={()=>{setUpdateWarningModal(false); handleSubmitEdit();}}>Güncelle</ScActionButton>
            </ScPopup>
          )
        }
      </section>
      <ScPaginationWrapper>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={postsLength}
          paginate={paginate}
        />
      </ScPaginationWrapper>

    </div>
  )
};

export default Post;