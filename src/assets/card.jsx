function Card({ title, type, hp, attack, image, alt }) {
  return (
    <article className="card">
      <h2 className="card-title">{title}</h2>
      {image && (
        <div className="card-image-wrap">
          <img className="card-image" src={image} alt={alt || title} />
        </div>
      )}
      <div className="card-content">
        <p className="card-description">Type: {type}</p>
        <p className="card-stats">HP: {hp}</p>
        <p className="card-stats">Attack: {attack}</p>
      </div>
    </article>
  );
}

export default Card;
