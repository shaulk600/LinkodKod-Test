import  "./NavHome.css";
import { Link } from "react-router";


export default function NavHome() {
    return (
        <div id="compsNavHome">
            <button className="btnNavHead"> <Link to='/'> home </Link> </button>
            <button className="btnNavHead"> <Link to='/searchPost'> search Post by ID </Link> </button>
            <button className="btnNavHead"> <Link to='/searchPost'> search Post by URL </Link> </button>
        </div>
    )
}
