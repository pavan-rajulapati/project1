import React, { useEffect, useState } from 'react';
import '../styles/reviewForm.css';
import { FaStar } from 'react-icons/fa';
import { GiCrossMark } from "react-icons/gi";
import { AddReviewAction } from '../redux/actions/addReview.action';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../redux/reducers/addReview.reducer';
import Loader from './Loader';
import { toast, Toaster } from 'react-hot-toast';
import { ReviewAction } from '../redux/actions/review.action';

const ReviewForm = ({ handleShowForm, productId }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { loading, data, error, status } = useSelector((state) => state.addReview);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            console.log('Error:', error);
        }
        if (status === 'success') {
            toast.success('Review added successfully');
            setRating(0);
            setComment('');
        }
    }, [error, status]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating === 0 || !comment) {
            toast.error("Please provide both a rating and a comment.");
            return;
        }
        dispatch(resetState());
        dispatch(AddReviewAction( { rating, comment, productId } ));
        dispatch(ReviewAction(productId))
        console.log(data)
    };

    return (
        <div className="review-form-section">
            <div className="review-container">
                <div className="review-section">
                    <div className="cancel">
                        <span onClick={() => handleShowForm()}><GiCrossMark /></span>
                    </div>
                    <div className="top-section">
                        <p>How are you feeling?</p>
                    </div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        size={24}
                                        className={star <= rating ? "selected" : ""}
                                        onClick={() => setRating(star)}
                                    />
                                ))}
                            </div>

                            <textarea
                                placeholder='Add a comment...'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                required
                            />

                            <button type="submit">Submit Now</button>
                        </form>
                    )}
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ReviewForm;
