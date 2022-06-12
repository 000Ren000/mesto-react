export default function ({name, link, likes, myId}) {
	const likeCounter = likes.length;
	const isLiked = () => {
		if ((likes.find(item =>
				item._id === myId) !== undefined)) return true;
	}
	return (
				<li className="card">
					<div className="card__border-image">
						<div style={{backgroundImage: `url(${link})`}} className="card__image"/>

					</div>
					<div className="card__description">
						<h2 className="card__title">{name}</h2>
						<div className="card__like-container">
							<button type="button" className={`card__button-like 
							${isLiked() ? 'card__button-like_active' : ''}`}></button>
							<span className="card__like-counter">{likeCounter}</span>
						</div>
					</div>
					<button className="card__trash card__trash_hidden link"></button>
				</li>
	)
}