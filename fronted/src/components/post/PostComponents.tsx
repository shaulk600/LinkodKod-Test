import { useState } from "react";
// import type { Post } from "../../logic/post/Post";
import "./PostComponents.css";

export default function PostComponents({ postObj }) {
    const imageUrl = postObj.imageUrl;
    const description = postObj.description;
    const likes = postObj.likes;
    const countLikes: number = likes.length;

    // userName and CreateAt can not by change
    const [inLiked, setInLiked] = useState(false);
    const addLike = () => {
        setInLiked(e => !e);
        // if(inLiked){
        //     // setLikes(userCurrect)
        // }

        // setLikes()  // method to create in logic files and fetch
    }
    const editPost = () => {
        // method to create in logic files and fetch
        // end use UseState to do
    }

    return (
        <>
            <section id="showPostComps">

                <div id="show-UserName">
                    <p>{postObj.userName}</p>
                </div>

                <section>
                    <div id="div-img">
                        <img id="imgToPost" src={imageUrl} alt="img post" />
                    </div>

                    <div id="Bar">
                        <div id="BarLike">
                            <p>{countLikes}</p>
                            <button id="btnToLike" onClick={addLike}><img src="/compsImg/likeR.png" alt="like" /></button>
                        </div>
                        <div id="BarDetails">
                            <p>{postObj.createdAt}</p>
                        </div>
                        <button id="btnEdit" onClick={editPost}> Edit Post</button>
                    </div>

                </section>

                <div id="descriptionDiv">
                    <p>{description}</p>
                </div>

                <div id="moreOption">

                </div>

            </section>
        </>
    )
}
