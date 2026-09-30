import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";

function HomePage() {
    const [search, setSearch] = useState("");
    const changeSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <h1>Simple Blog</h1>
            <div>
                Cari Artikel : <input type="text" onChange={changeSearch} />
            </div>
            <small>Ditemukan 0 data pada kata {search}</small>
            {posts.map((blog, index) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} key={index} />
            ))}
        </>
    );
}

export default HomePage;
