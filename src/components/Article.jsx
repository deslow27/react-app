function Article() {
    const name = "Saut";
    const titles = ["Tutorial Reactjs", "Tutorial Nextjs", "Tutoial Nodejs"];

    return (
        <>
            <div>{name}</div>
            <div>
                {titles.map((title) => {
                    return (
                        <>
                            <div>{title}</div>
                            <div>{title}</div>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Article;
