import {useEffect, useState, useContext} from 'react';
import {api} from '../utils/Api.js';
import Cards from './Cards.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

export default function Main(
		{
			onEditProfile,
			onEditAvatar,
			onAddPlace,
			onCardClick
		}
) {

	const [cards, setCards] = useState([]);
	const [myId, setMyId] =useState('')
	const {
		name:userName,
		about:userDescription,
		avatar:userAvatar
	} = useContext(CurrentUserContext);



	useEffect(() => {
		api.getCardInfo().then(data => {
			setCards(data.map(item => ({
				likes: item.likes,
				link: item.link,
				name: item.name,
				key: item._id
			})
			));
		})
				.catch(err => console.log('что-то пошло не так', err));
	}, []);

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
						{cards.map(card => (<Cards card={card} key={card.key} onCardClick={onCardClick} />))}
					</ul>
				</section>
			</main>
	)
}