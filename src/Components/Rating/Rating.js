import "./Rating.css";
import React from "react";
import { Flex, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Rating = ({ rating, setRating, isMovieRating, movieRating }) => {
	const handleChange = (value) => {
		setRating(Number(value));
	};
	return isMovieRating ? (
		<div className="rating-container">
        <Flex gap='middle' vertical>
            <Rate disabled value={movieRating} />
        </Flex>
        </div>
	) : (
		<div className="rating-container">
        <Flex gap='middle' vertical>
            <Rate allowHalf={false} tooltips={desc} onChange={handleChange} value={rating} />
        </Flex>
        </div>
	);
};

export default Rating;