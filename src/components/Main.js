export default function Main() {
	const handleEditAvatarClick = () => {
		const avatar = document.querySelector('#popup-avatar');
		avatar.classList.add('popup_opened');
	}
	const handleEditProfileClick = () => {
		const profile = document.querySelector('#edit-form');
		profile.classList.add('popup_opened');
	}
	const  handleAddPlaceClick = () => {
		const addPlace = document.querySelector('#add-Form');
		addPlace.classList.add('popup_opened');
	}
	return (

			<main className="main conteiner">
				<section className="profile">
					<div className="profile__avatar-container"
					     onClick={handleEditAvatarClick}>
						<img
								className="profile__avatar"
								alt="Фото профиля"
						/>
					</div>

					<div className="profile__info">
						<div className="profile__capion">
							<h1 className="profile__name">Жак-Ив Кусто</h1>
							<p className="profile__profession">Иследователь океана</p>
						</div>
						<button
								type="button"
								className="profile__edit-button link"
								onClick={handleEditProfileClick}
						>
						</button>
					</div>
					<button
							type="button"
							className="profile__add-button link"
							onClick={handleAddPlaceClick}
					></button>
				</section>
				<section className="photo">
					<ul className="photo__cards">
					</ul>
				</section>
			</main>
	)
}