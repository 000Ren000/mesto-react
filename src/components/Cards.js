import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

export default function (props) {
	const {name, link, likes, _id:cardID} = props.card;
	const likeCounter = likes.length;
	const handleCardClick = () => {
		props.onCardClick(props.card);
	}

	const currentUser = useContext(CurrentUserContext);
	// Определяем, являемся ли мы владельцем текущей карточки
	const isOwn = cardID === currentUser._id;

// Создаём переменную, которую после зададим в `className` для кнопки удаления
	const cardDeleteButtonClassName = (
			`card__trash ${isOwn ? '' : 'card__trash_hidden'}`
	);

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
					<button className={`${cardDeleteButtonClassName} link`}></button>
				</li>
	)
}