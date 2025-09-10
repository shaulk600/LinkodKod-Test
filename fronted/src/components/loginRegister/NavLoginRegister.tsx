import { Link } from 'react-router'
import "./NavLoginRegister.css";

export default function NavLoginRegister() {
    return (
        <div>
            <div id="navLoginRegister">
                <button className='btnLogin' > <Link to='/Register'> Sign up </Link></button>
                <button className='btnLogin'><Link to='/Login'> Log in </Link></button>
            </div>
        </div>
    )
}
