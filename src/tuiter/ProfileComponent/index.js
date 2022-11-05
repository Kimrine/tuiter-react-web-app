import {React, useState} from "react";
import { useSelector } from "react-redux";
import Profile from "./profile";
import "./index.css";
import EditProfile from "./edit-profile";

const ProfileScreen = () => {
    const profile = useSelector((store) => store.profile);
    const [editing, setEditing] = useState(false);

    return (
        <>
            {
                !editing ?
                (<Profile profile={profile} onEdit={() => setEditing(true)} />) :
                (<EditProfile profile={profile} leaveEdit={() => setEditing(false)} />)
            }
        </>
    );

};

export default ProfileScreen;