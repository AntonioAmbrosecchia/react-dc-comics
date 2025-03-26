import React from "react";
import ComicCard from "./ComicCard";

import comics from "../Comics";
const ComicList = () => {
    return (
        <div>
            <div className="comic-list">
                {comics.map((comic) => (
                    <ComicCard key={comic.id} comic={comic} />
                ))}

            </div>
            <div id="butt_c_list">
                <a href="#"><div id="butt_load_more"><p>LOAD MORE</p></div></a>
            </div>
        </div>
    );
};

export default ComicList;