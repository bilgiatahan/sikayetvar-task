import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from '../../services/UserSevice';
import map from '../../assests/img/maps.svg';
import marker from '../../assests/img/marker.svg';
import {
  ScUserDetailWrapper, ScUserDetailLocationWrapper,
  ScNameWrapper, ScUserInfoLabel, ScUserInfo, ScUserDetailContentWrapper, ScCityWrapper,
  ScUserDetailFooter, ScUserDetailFooterText, ScLinkWrapper
} from "./ScUserDetail";

const UserDetail = () => {
  let { id } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const { name } = userDetail.company || '';
  const { city } = userDetail.address || '';

  useEffect(() => {
    getUser(id)
      .then((res) => setUserDetail(res.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <section className="card">
      {
        <ScUserDetailWrapper key={userDetail.id}>
          <div>
            <ScNameWrapper>{userDetail.name}</ScNameWrapper>
            <ScCityWrapper>{city}</ScCityWrapper>
            <ScUserDetailContentWrapper>
              <div>
                <ScUserInfoLabel>Username</ScUserInfoLabel>
                <ScUserInfoLabel>Email</ScUserInfoLabel>
                <ScUserInfoLabel>Phone</ScUserInfoLabel>
                <ScUserInfoLabel>Website</ScUserInfoLabel>
                <ScUserInfoLabel>Company</ScUserInfoLabel>
              </div>
              <div>
                <ScUserInfo>{userDetail.username}</ScUserInfo>
                <ScUserInfo>{userDetail.email}</ScUserInfo>
                <ScUserInfo>{userDetail.phone}</ScUserInfo>
                <ScUserInfo className="website">{userDetail.website}</ScUserInfo>
                <ScUserInfo>{name}</ScUserInfo>
              </div>
            </ScUserDetailContentWrapper>
          </div>
          <ScUserDetailLocationWrapper>
            <img src={map} alt="Google Maps" className="maps" />
            <img src={marker} alt="Marker" className="marker" />
          </ScUserDetailLocationWrapper>
        </ScUserDetailWrapper>
      }
      <ScUserDetailFooter>
        <ScUserDetailFooterText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
          Ut ea nostrum numquam officiis quas commodi dolores nobis eaque veniam quos impedit sit,<br />
          eligendi architecto cum vitae minima suscipit cupiditate iure ratione asperiores rerum atque aperiam deserunt est.
        </ScUserDetailFooterText>
        <ScLinkWrapper>Show More</ScLinkWrapper>
      </ScUserDetailFooter>
    </section>
  )
};

export default UserDetail;