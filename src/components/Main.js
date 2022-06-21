import {useContext} from 'react';
import Cards from './Cards.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import {CardsContext} from '../contexts/CardsContext.js';

export default function Main(
		{
			onEditProfile,
			onEditAvatar,
			onAddPlace,
			onCardClick
		}
) {

	const {
		name:userName,
		about:userDescription,
		avatar:userAvatar
	} = useContext(CurrentUserContext);

	const cards = useContext(CardsContext)
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