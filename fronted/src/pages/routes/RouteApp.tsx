import { Route, Routes } from 'react-router';
import DisplayPosts from '../post/DisplayPosts';
import DisplayPostOne from "../post/DisplayPostOne";

export default function RouteApp() {
    return (
        <div>
            
            <Routes>
                <Route path="/a" element={< DisplayPostOne /> } />
                <Route path="/" element={< DisplayPosts /> } />
            </Routes>
          
            
        </div>
    )
}
