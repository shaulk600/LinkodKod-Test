import { Route, Routes } from 'react-router';
import Layout from "../layout/Layout";
import { createContext } from "react";



// useContent
const WebsiteUserLogsContext = createContext({});


export default function RouteApp() {
    return (
        <div>
            <WebsiteUserLogsContext value={{ message: "The request was not completed. Please try again." }}>


                <Routes>
                    <Route path="/" element={< Layout />} />
                </Routes>

            </WebsiteUserLogsContext>

        </div>
    )
}
