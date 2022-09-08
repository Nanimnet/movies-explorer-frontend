import "../MoviesCardList/MoviesCardList.css";

function ShowMoreButton(props) {
    return (
        <>
            {
                (props.isNothingFound || props.moviesToRender.length === props.movies.length)
                    ? "" : (
                        <button className="movies__more style_hover" onClick={props.onShowMore}>Ещё</button>
                    )
            }
        </>
    )
}

export default ShowMoreButton;