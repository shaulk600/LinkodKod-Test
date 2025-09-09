import { useState } from "react";
import type { Post } from "../../logic/post/Post";
import "./PostComponents.css";

export default function PostComponents({ postObj, idToBtn }) {
    const imageUrl = postObj.imageUrl;
    const description = postObj.description;
    const likes: string[] = postObj.likes;
    const countLikes: number = likes.length;
    // ///////
    // const [imageUrl, setImageUrl] = useState(postObj.imageUrl);
    // const [description, setDescription] = useState(postObj.description);
    // const [likes, setLikes] = useState(postObj.likes);
    // const countLikes: number = likes.length;
    // ////
    // userName and CreateAt can not by change

    //like . :
    const [inLiked, setInLiked] = useState(false);
    const btnIdLike = document.getElementById(idToBtn);
    const addLike = () => {
        if (!inLiked) {
            //Currently it works even without entering a username. We will change this later.
            likes.push('a');
            btnIdLike?.classList.add('btnClassLikeIsTrue');
        } else {
            likes.pop();
            btnIdLike?.classList.remove('btnClassLikeIsTrue');
        }
        setInLiked(e => !e);

        // if(inLiked){
        //     // setLikes(userCurrect)
        // }

        // setLikes()  // method to create in logic files and fetch
    }
    
    // useEffect(() => {

    // }, [inLiked])
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
                            <button id="btnIDLike" className="btnclassLike" onClick={addLike}><img src="/compsImg/likeR.png" alt="like" /></button>
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
