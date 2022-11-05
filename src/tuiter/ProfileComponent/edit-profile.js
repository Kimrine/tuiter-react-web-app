import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateProfile}
    from "../reducers/profile-reducer";


const EditProfile = ({profile, leaveEdit}) => {
    const dispatch = useDispatch();
    const [newFirstName, setNewFirstName] = useState(profile.firstName);
    const [newLastName, setNewLastName] = useState(profile.lastName);
    const [newBio, setNewBio] = useState(profile.bio);
    const [newLocation, setNewLocation] = useState(profile.location);
    const [newWebsite, setNewWebsite] = useState(profile.website);
    const [newDob, setNewDob] = useState(profile.dateOfBirth);
    const saveEditClickHandler = () => {
        const profile = {
            firstName: newFirstName,
            lastName: newLastName,
            bio: newBio,
            location: newLocation,
            website: newWebsite,
            dateOfBirth: newDob
        }
        dispatch(updateProfile(profile));
    };

    return(
        <>
            <div className="wd-color-white wd-edit-header mb-2">
                <span>
                    <i className='fas fa-times me-2' onClick={leaveEdit}/>
                    <b className="fs-4">Edit Profile</b>
                </span>
                <button type='submit' className="btn btn-outline-primary fa-pull-right rounded-pill mt-2 pt-1 pb-1"
                        onClick={saveEditClickHandler}>
                    Save
                </button>
            </div>
            <div className="wd-profile-header">
                <img src={profile.bannerPicture} className="wd-banner-photo"/>
                <img src={profile.profilePicture} className="wd-profile-photo"/>
            </div>
            <form className="form-floating wd-edit-box-border mb-3">
                <input id="firstName"
                       value={newFirstName}
                       onChange={(event) => setNewFirstName(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="firstName">First Name</label>
            </form>
            <form className="form-floating wd-edit-box-border mb-3">
                <input id="lastName"
                       value={newLastName}
                       onChange={(event) => setNewLastName(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="LastName">Last Name</label>
            </form>
            <form className="form-floating wd-edit-box-border mb-3">
                <input id="bio"
                       value={newBio}
                       onChange={(event) => setNewBio(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="bio">Bio</label>
            </form>
            <form className="form-floating wd-edit-box-border mb-3">
                <input id="location"
                       value={newLocation}
                       onChange={(event) => setNewLocation(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="location">Location</label>
            </form>
            <form className="form-floating wd-edit-box-border mb-3">
                <input id="website"
                       value={newWebsite}
                       onChange={(event) => setNewWebsite(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="website">Website</label>
            </form>
            <form className="form-floating wd-edit-box-border mb-3">
                <input id="dob"
                       value={newDob}
                       onChange={(event) => setNewDob(event.target.value)}
                       className="form-control wd-edit-box" type="Date"/>
                <label htmlFor="dob">Date of Birth</label>
            </form>
        </>

    )

}

export default EditProfile;