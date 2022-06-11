export default function Main(
		{onEditProfile,
		onEditAvatar,
		onAddPlace}
) {

	return (

			<main className="main conteiner">
				<section className="profile">
					<div className="profile__avatar-container"
					     onClick={onEditAvatar}>
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
					</ul>
				</section>
			</main>
	)
}