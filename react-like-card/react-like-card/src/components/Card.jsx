import { useState } from 'react';

function Card({ title, tag, description }) {
  // Every rendered <Card /> gets its own call to useState, so each card's
  // "liked" value lives in its own isolated slice of memory. Liking the
  // React card has zero effect on the Python card's state.
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <article className={`card ${liked ? 'card--liked' : ''}`}>
      <div className="card__top">
        <span className="card__tag">{tag}</span>
        <span className="card__status-dot" aria-hidden="true" />
      </div>

      <div className="card__heart" aria-hidden="true">
        {liked ? '❤️' : '🤍'}
      </div>

      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>

      <p className={`card__status ${liked ? 'liked' : 'not-liked'}`}>
        {liked ? 'Liked' : 'Not Liked'}
      </p>

      <button
        type="button"
        className={`card__button ${liked ? 'is-liked' : ''}`}
        onClick={toggleLiked}
        aria-pressed={liked}
        aria-label={liked ? `Unlike ${title}` : `Like ${title}`}
      >
        {liked ? 'Unlike ❤️' : 'Like 🤍'}
      </button>
    </article>
  );
}

export default Card;
