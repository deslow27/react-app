import "./App.css";
import Article from "./components/Article";

function App() {
    return (
        <>
            <Article name="Saut" titles={["Reactjs", "Nextjs", "Nodejs"]} />
            <br></br>
            <Article name="Pangidoan" titles={["Reactjs", "Nextjs", "Nodejs"]} />
        </>
    );
}

export default App;
