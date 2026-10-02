import "./App.css";
import Home from "./pages/Index";
import { GlobalContext } from "./context";
import { createContext } from "react";

function App() {
    const user = {
        username: "Saut",
    };

    return (
        <GlobalContext.Provider value={user}>
            <Home />
        </GlobalContext.Provider>
    );
}

export default App;
