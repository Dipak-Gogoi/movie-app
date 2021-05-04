import React, { useState } from 'react';
import { FaStar } from "react-icons/fa"
import './MovieCard.css';


const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null)
    return (
        <>
            <div className="">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return <label>
                        <input type="radio" name="rating" value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar className="star_icon"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#b1b2b4"}
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                })}

            </div>
        </>
    );
};

export default Rating;