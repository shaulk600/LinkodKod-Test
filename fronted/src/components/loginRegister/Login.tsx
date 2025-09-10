import { useState, useContext, useEffect } from 'react'
import "./Login.css";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");

    const [result, setResult] = useState(null);

    async function sendLog() {
        const res = await fetch(`http://localhost:3302/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: userName, password: pass })
        })
        setResult(await res.json());
    }

    useEffect(() => {

    }, [result])


    return (
        <div>
            <div id='header'> <h3>hello login: </h3></div>
            <div id='loginInside'>
                <form action="/login" method="post">
                    <label htmlFor="userName">userName : </label>
                    <input type="text" id='userName' name='userName' onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <label htmlFor="pass">userName : </label>
                    <input type="password" id='pass' name='pass' onChange={(e) => setPass(e.target.value)} />
                    <div><button type='submit' onSubmit={sendLog}></button></div>
                </form>
            </div>
            <div>
                <div id='resonse'>{result}</div>
            </div>
        </div>
    )
}