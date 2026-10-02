import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");
    const onSearchChange = (event) => {
        props.onSearchChange(search);
    };

    const searchKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearchChange();
        }
    };

    return (
        <>
            <div>
                Cari Artikel : <input type="text" onChange={(e) => setSearch(event.target.value)} onKeyDown={searchKeyDown} />
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>
                Ditemukan {props.totalPosts} data pada kata {search}
            </small>
        </>
    );
}

export default Search;
