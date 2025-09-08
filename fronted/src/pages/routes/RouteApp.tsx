import { Route, Routes } from 'react-router';
import Layout from "../layout/Layout";

export default function RouteApp() {
    return (
        <div>
            
            <Routes>
                <Route path="/" element={< Layout /> } />
            </Routes>
          
            
        </div>
    )
}
