import {useContext, useState} from 'react';
import Cards from './Cards.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {api} from '../utils/Api.js';
import {useEffect} from 'react';

export default function Main(
		{
			onEditProfile,
			onEditAvatar,
			onAddPlace,
			onCardClick
		}
) {

	const {
		name: userName,
		about: userDescription,
		avatar: userAvatar,
		_id: myId
	} = useContext(CurrentUserContext);
	//Получение массива с карточками
	const [cards, setCards] = useState([]);
	useEffect(() => {
		api.getCardInfo().then(data => {
			setCards(data.map(item => ({
						likes: item.likes,
						link: item.link,
						name: item.name,
						_id: item._id,
						key: item._id,
						authorCardId:item.owner._id
					})
			));
		})
				.catch(err => console.log('что-то пошло не так', err));
	}, []);


	function handleCardLike(card) {
		// Снова проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some(i => i._id === myId);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
			setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
		});
	}

	function handleCardDelete (card) {
		api.deleteCard(card._id).then (newCard => {
			setCards((state) => state.filter(c => c._id !== card._id))
		})

	}
	return (

			<main className="main conteiner">
				<section className="profile">
					<div className="profile__avatar-container"
					     onClick={onEditAvatar}>
						<div
								className="profile__avatar"
								style={{backgroundImage: `url(${userAvatar})`}}
						/>
					</div>

					<div className="profile__info">
						<div className="profile__capion">
							<h1 className="profile__name">{userName}</h1>
							<p className="profile__profession">{userDescription}</p>
						</div>
						<button
								type="button"
								className="profile__edit-button link"
								onClick={onEditProfile}
						>
						</button>
					</div>
					<button
							type="button"
							className="profile__add-button link"
							onClick={onAddPlace}
					></button>
				</section>
				<section className="photo">
					<ul className="photo__cards">
						{cards.map(card => (
								<Cards card={card}
								       key={card.key}
								       onCardClick={onCardClick}
								       onCardLike={handleCardLike}
								       onCardDelete={handleCardDelete}
								/>)
						)}
					</ul>
				</section>
			</main>
	)
}