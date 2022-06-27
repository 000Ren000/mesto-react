import PopupWithForm from './PopupWithForm.js';

export default function EditProfilePopup({isOpen, onClose}) {
	return (
			<PopupWithForm title="Редактировать профиль" name='edit-form'
			               buttonText="Сохранить"
			               isOpen={isOpen}
			               onClose={onClose}>
				<input name="name"
				       type="text"
				       className="edit-form__input edit-form__input_type_name"
				       id="input-profile-name"
				       minLength="2"
				       maxLength="40"
				       required
				/>
				<span className="popup__error" id="input-profile-name-error"></span>
				<input name="about"
				       type="text"
				       className="edit-form__input edit-form__input_type_profession"
				       id="input-profession"
				       minLength="2"
				       maxLength="200"
				       required
				/>
				<span className="popup__error" id="input-profession-error"></span>
			</PopupWithForm>
	)
}
