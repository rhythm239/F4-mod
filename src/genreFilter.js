const GenreFilter = ({genres}) => {
    const run = (x) => {
        console.log(`Filtered by ${x}`);
    }

    return(
        <div className="genres">
            {
                genres.map((x) => {
                    return(
                        <div className="box" onClick={() =>  run(x)}>
                            <p>{x}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default GenreFilter; 