import { useState } from 'react';
import Stars from '../Components/Stars'
import { useRouter } from 'next/router';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(2);

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      const reviewWithRating = {
        review: newReview,
        rating: rating,
      };
      setReviews([...reviews, reviewWithRating]);
      setNewReview('');
      setRating(0);
    }
  };
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  }
  return (
    <div>
       <div className="navbar bg-white">
       <button onClick={handleClick} className='pt-1 text-pink-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#EC53B0" width="26" height="26" viewBox="0 0 32 32">
               <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" data-name="4-Arrow Left"/>
            </svg>
       </button>
        <a onClick={handleClick} className="btn btn-ghost normal-case text-xl">Rating & review</a>
         
        </div>
     <div className='card w-auto bg-pink-100 shadow-sm mt-4 mx-4'>
      <h1 className='text-center font-semibold font-xl pt-4'>Rate us</h1>
      <form onSubmit={handleSubmit}>
        <div className="rating flex justify-center pt-2">
          <input type="radio" name="rating-2" value="1" className="mask mask-star-2 bg-pink-500" checked={rating === 1} onChange={handleRatingChange} />
          <input type="radio" name="rating-2" value="2" className="mask mask-star-2 bg-pink-500" checked={rating === 2} onChange={handleRatingChange} />
          <input type="radio" name="rating-2" value="3" className="mask mask-star-2 bg-pink-500" checked={rating === 3} onChange={handleRatingChange} />
          <input type="radio" name="rating-2" value="4" className="mask mask-star-2 bg-pink-500" checked={rating === 4} onChange={handleRatingChange} />
          <input type="radio" name="rating-2" value="5" className="mask mask-star-2 bg-pink-500" checked={rating === 5} onChange={handleRatingChange} />
        </div>
        <div className='flex justify-center mx-2 pt-4'>
        <textarea value={newReview} placeholder="Write a review" onChange={(e) => setNewReview(e.target.value)} className="textarea textarea-bordered textarea-secondary textarea-md w-full max-w-xs"/>
        </div>
        <div className='flex justify-center pt-4 pb-4 '>
        <button className='btn btn-sm btn-secondary' type="submit">Submit</button>
        </div>
        
      </form>
      </div>
      <div>
        <h2 className='font-semibold font-xl text-pink-500 pt-4 pl-6 '>Latest Reviews</h2>
        
        <ul>
          {reviews.map((review, index) => (
            <li className='card w-auto bg-pink-100 shadow-md mt-4 p-4 mx-4' key={index}>
                <div >
                <Stars rating={review.rating} />
              </div>
              <div>{review.review}</div>
            </li>
          ))}
        </ul>
        </div>
      
    </div>
  );
};

export default Review;
