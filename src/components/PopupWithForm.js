export default function PopupWithForm({title, name, children}) {
	return (
			<div className="popup popup_opacity_mid" id={name}>
				<div className="popup__conteiner">
					<h2 className="edit-form__title">{title}</h2>
						{children}
					<button type="button" aria-label="Закрыть"
					        className="popup__button-close link"></button>
				</div>
			</div>
	);
}