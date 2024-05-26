import React from 'react';

function Article({ title, date, preview, minutes }) {
  const readingTime = () => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return `${'☕️'.repeat(cups)} ${minutes} min read`;
    } else {
      const bentos = Math.ceil(minutes / 10);
      return `${'🍱'.repeat(bentos)} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <small>{readingTime()}</small>
    </article>
  );
}

export default Article;
