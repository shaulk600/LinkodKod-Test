import { useState, useEffect } from 'react'
import "./Register.css";

export default function Register() {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    // const [postsFromUser, setPostsFromUser] = useState([]);
    // אוטוריזיישן
    const [idManager, setIdManager] = useState("");

    const [result, setResult] = useState(null);

    async function sendRegister() {
        const res = await fetch(`http://localhost:3302/Register/${idManager}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: userName, password: pass, email: email })
        })
        setResult(await res.json());
    }

    useEffect(() => {

    }, [result])


    return (
        <div>
            <div id='header'> <h3>hello Register: </h3></div>
            <section id='loginInside'>

                <form action="/login" method="post">
                    <div>
                        <label htmlFor="userName">userName : </label>
                        <input type="text" id='userName' name='userName' onChange={(e) => setUserName(e.target.value)} />
                        <br />
                        <label htmlFor="pass">pass : </label>
                        <input type="password" id='pass' name='pass' onChange={(e) => setPass(e.target.value)} />
                    </div>

                    <div id='showMoreOPtion'>
                        <label htmlFor="email">email : </label>
                        <input type="email" id='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                        <br />
                        <label htmlFor="idManager">idManager : </label>
                        <input type="password" id='idManager' name='idManager' onChange={(e) => setIdManager(e.target.value)} />
                    </div>

                    <div><button type='submit' onSubmit={sendRegister}></button></div>
                </form>
            </section>
            <div>
                <div id='resonse'>{result}</div>
            </div>
        </div>
    )
}