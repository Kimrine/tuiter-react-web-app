import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { createTuitThunk } from "../../services/tuits-thunks";

const WhatsHappening = () => {
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const tuit = {
            ...newTuit,
            _id: (new Date()).getTime() + '',
            postedBy: {
                "username": "kimrine"
            },
            handle: "kimrine",
            avatarImage: "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg",
            liked: false,
            disliked: false,
            likes: 0,
            dislikes: 0,
            stats: {
                retuits: 0,
                comments: 0
            }
        }
        console.log(tuit);
        dispatch(createTuitThunk(tuit))
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img src="https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg" width={60} className="rounded-5"/>
            </div>
            <div className="col-10">
       <textarea placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) =>
                     setNewTuit(
                         {...newTuit,
                             tuit: event.target.value
                         })}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-1 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-4 mt-2">
                        <i className="bi bi-card-image me-3"/>
                        <i className="bi bi-filetype-gif me-3"/>
                        <i className="bi bi-bar-chart me-3"/>
                        <i className="bi bi-emoji-smile me-3"/>
                        <i className="bi bi-geo-alt"/>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}

export default WhatsHappening;