import "./App.css";
import Home from "./pages/Index";
import { GlobalContext } from "./context";
import { createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
    const user = {
        username: "Saut",
    };

    return (
        <GlobalContext.Provider value={user}>
            <RouterProvider router={router} />
        </GlobalContext.Provider>
    );
}

export default App;
