import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js'
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import {useState} from 'react';
import {useEffect} from 'react';
import {api} from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js'

function App() {

	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

	const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
	const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
	const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
	const closeAllPopups = () => {
		setEditAvatarPopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({name: '', link: ''});
	}
	const [currentUser, setCurrentUser] = useState({
		myID: '',
		about: '',
		avatar: '',
		cohort: '',
		name: ''
	})
	useEffect(() => {
		api.getUserInfo().then(setCurrentUser
		).catch(err => console.log('что-то пошло не так', err));
	}, []);

	const handleUpdateUser = (data) => {
		api.setUserInfo(data).then(setCurrentUser)
				.catch(err => console.log('что-то пошло не так', err));
	}

	return (
			<CurrentUserContext.Provider value={currentUser}>
					<div className='root'>

						<Header/>

						<Main onEditProfile={handleEditProfileClick}
						      onAddPlace={handleAddPlaceClick}
						      onEditAvatar={handleEditAvatarClick}
						      onCardClick={setSelectedCard}
						/>
						<Footer/>
						<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
						                  onUpdateUser={handleUpdateUser}
						/>

						<PopupWithForm title="Новое место" name='add-Form'
						               buttonText="Создать"
						               isOpen={isAddPlacePopupOpen}
						               onClose={closeAllPopups}>
							<input name="name"
							       id="input-name"
							       placeholder="Название"
							       type="text"
							       className="edit-form__input edit-form__input_type_name "
							       minLength="2"
							       maxLength="30"
							       required
							/>
							<span className="popup__error" id="input-name-error"></span>
							<input name="link"
							       id="input-link"
							       placeholder="Ссылка на картинку"
							       type="url"
							       className="edit-form__input edit-form__input_type_link"
							       required
							/>
							<span className="popup__error" id="input-link-error"></span>
						</PopupWithForm>

						<PopupWithForm title="Обновить аватар" name='add-Form'
						               buttonText="Сохранить"
						               isOpen={isEditAvatarPopupOpen}
						               onClose={closeAllPopups}>
							<input name="link"
							       id="input-avatar"
							       placeholder="Ссылка на картинку"
							       type="url"
							       className="edit-form__input edit-form__input_type_link"
							       required
							/>
							<span className="popup__error" id="input-avatar-error"></span>
						</PopupWithForm>

						<PopupWithForm title="Вы уверены?" name='add-Form'
						               onClose={closeAllPopups}
						               buttonText="Да"
						/>

						<ImagePopup card={selectedCard} onClose={closeAllPopups}/>

					</div>
			</CurrentUserContext.Provider>
	);
}

export default App;
