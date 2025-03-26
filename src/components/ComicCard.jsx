import React from "react";

const ComicCard = ({ comic }) => {
    return (
        <div id="comic_row">
            <div className="comic_card">
                <img src={comic.thumb} alt={comic.title} className="comic_image" />
                <h3>{comic.title}</h3>

            </div>
        </div>
    );
};

export default ComicCard;
