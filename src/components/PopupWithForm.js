export default function PopupWithForm({title, name, children, isOpen, onClose, buttonText}) {
	return (
			<form name="editForm" className="edit-form" noValidate>
				<div className={`popup popup_opacity_mid ${isOpen ? 'popup_opened' : ''} `} id={name}>
					<div className="popup__conteiner">
						<h2 className="edit-form__title">{title}</h2>
						{children}
						<button
								type="submit"
								className="edit-form__button-save"
						>{buttonText}
						</button>
						<button type="button" aria-label="Закрыть"
						        className="popup__button-close link"
						        onClick={onClose}
						/>
					</div>
				</div>
			</form>
	);
}