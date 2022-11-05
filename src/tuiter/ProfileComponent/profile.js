import React from "react";

const Profile = ({profile, onEdit}) => {
    return(
        <>
            <div className="wd-profile-header">
                <img src={profile.bannerPicture} className="wd-banner-photo"/>
                <img src={profile.profilePicture} className="wd-profile-photo"/>
                <button type='submit' className="btn btn-outline-primary fa-pull-right rounded-pill mt-2 pt-1 pb-1 fw-bold"
                        onClick={onEdit}>
                    Edit Profile
                </button>
            </div>
            <div className="ms-3 wd-color-gray">
                <h5 className="wd-color-white mb-0"><b>{profile.firstName} {profile.lastName}</b></h5>
                <p>@{profile.handle}</p>
                <p className="wd-color-white">{profile.bio}</p>

                <p><i className="fas fa-link"/> <a href={profile.website}>Website</a></p>
                <p>
                    <i className="fas fa-map-marker-alt me-1"/>
                    <span className="me-3">{profile.location}</span>
                    <i className="fas fa-birthday-cake me-1"/>
                    <span className="me-3">Born {profile.dateOfBirth}</span>
                    <i className="fas fa-calendar-alt me-1"/>
                    <span className="me-3">Joined {profile.dateJoined}</span>
                </p>
                <p>
                    <span className="wd-color-white me-1"><b>{profile.followingCount}</b></span>
                    <span className="me-3">Following</span>
                    <span className="wd-color-white me-1"><b>{profile.followersCount}</b></span>
                    <span className="me-3">Followers</span>
                </p>
            </div>
        </>
    )
}

export default Profile;