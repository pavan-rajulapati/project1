import React, { useState } from 'react';
import '../styles/review.css';
import { FaStar } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx"; 

const Review = () => {
	const [rating, setRating] = useState(0); 
	const [hover, setHover] = useState(null); 
	const [review, setReview] = useState(''); 

	const handleSubmit = (e) => {
		e.preventDefault();
		if (rating === 0 || review.trim() === '') {
		alert('Please provide a rating and a review.');
		return;
		}

		console.log('Review submitted:', { rating, review });
		setRating(0); 
		setReview(''); 
	};

	return (
		<div className="review">
			<div className="container">
				<span className='cancel'><RxCross2 /></span>
				<div className="review-container">
					<form onSubmit={handleSubmit}>
						<div className="head-container">
							<p>Give Your Feedback Here</p>
						</div>

						<div className="rating">
							{[1, 2, 3, 4, 5].map((star) => (
								<span
								key={star}
								className={`star ${star <= (hover || rating) ? 'filled' : ''}`}
								onClick={() => setRating(star)} 
								onMouseEnter={() => setHover(star)} 
								onMouseLeave={() => setHover(null)} 
								>
								<FaStar />
								</span>
							))}
						</div>

						<div className="textarea-container">
							<textarea
								placeholder="Write your opinion here..."
								value={review}
								onChange={(e) => setReview(e.target.value)}
							/>
						</div>

						<div className="submit-container">
							<button type="submit" className="submit-btn">
								Submit Review
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Review;
