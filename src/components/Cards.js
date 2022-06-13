export default function (props) {
	const {name, link, likes} = props.card;
	const likeCounter = likes.length;
	const handleCardClick = () => {
		props.onCardClick(props.card);
	}
	return (
				<li className="card">
					<div className="card__border-image">
						<div style={{backgroundImage: `url(${link})`}}
						     className="card__image"
						      onClick={handleCardClick}
						/>
					</div>
					<div className="card__description">
						<h2 className="card__title">{name}</h2>
						<div className="card__like-container">
							<button type="button" className={`card__button-like`}></button>
							<span className="card__like-counter">{likeCounter}</span>
						</div>
					</div>
					<button className="card__trash card__trash_hidden link"></button>
				</li>
	)
}