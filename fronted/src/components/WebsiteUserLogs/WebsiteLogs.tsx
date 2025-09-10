// import { useState useContent } from "react";

// /**
//  * 
//  * @returns logs if connect to dataServer or not
//  */
// export default function WebsiteLogs(props) {
//     const [message, setMessage] = useState("");
//     const WebsiteUserLogs = useContext(WebsiteUserLogsContext);
//     setMessage(WebsiteUserLogs);

    
//     const exitPage = (eventTarget) => {
//         const myDialog = eventTarget;
//         myDialog.close();
//     }


//     return (
//         <div>
//             <h3> {message} </h3>

//             <dialog id="myDialog" onClick={(e)=>exitPage(e.target)}> exit </dialog>
//         </div>
//     )
// }
