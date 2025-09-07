import "./DisplayPostOne.css";
import PostComponents from "../../components/post/PostComponents";

//  to more obj

export default function DisplayPostOne() {
    
    return (
        <div id="showOnePost">
            < PostComponents postObj={{ imageUrl: "/IMG-20250907-WA0006.jpg", description: "sfgrdfbgdfbd", likes: ['shaul001'],
        userName: 'ddd', createdAt: "18-07-25" }} />
        </div>
    )
}
