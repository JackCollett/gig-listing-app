// contains information abour a gig on the website, It should contain:
// 1. A h3 (heading) element listing the name of the band
// 2. A img (image) element for an image of the band, using the src attribute to link to an image.
// 3. A p (paragraph) element containing a description of the event
// 4. A p element containing the time and date of the event
// 5. A p element containing the location of the event

import React, { useState } from "react";

const Gig = (props) => {
    const [favourite, setFavourite] = useState(0);
    return (
        <div className="artist">
        <h3>{props.name}</h3>
        <button onClick={props.handleClick}></button>
        <img src={props.image}></img>
                <p>{props.desc}</p>
                <p>{props.location}</p>
                <p>{props.time}</p>
        </div>
    );
};

export default Gig;