import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReviewAction } from "../redux/actions/review.action";
import '../styles/review.css'
import LocalTime from "../utils/LocalTime";

const Review = ({ productId }) => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.review);

    useEffect(() => {
        if (productId) {
            dispatch(ReviewAction(productId));
        }
    }, [dispatch, productId]);

    console.log("this is data", data);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error: {error}</p>;

    const reviews = data?.data || [];

    return (
        <div className="review-section">
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review._id} className="review">
                        <div className="user-info">
                            <img src={review.userId.profilePic} alt="hello" />
                            <div className="comment-review">
                                <div className="user-info">
                                    <p><strong>{review.userId.userName}</strong></p>
                                    <span><LocalTime dateAndTime={review.createdAt}></LocalTime></span>
                                </div>
                                <div className="review-rating">
                                    <p>Review : {review.rating}</p>
                                    <p>{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="empty">
                    <img src="/photos/noData.jpg" alt="review" />
                    <p>No reviews available on this product</p>
                </div>
            )}
        </div>
    );
};

export default Review;
