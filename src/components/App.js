import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from'./PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import {useState} from 'react';
function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen ] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({name: '', link: ''});

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const  handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
   <div className='root'>
    <Header />

     <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={setSelectedCard}
    />
     <Footer />
    <PopupWithForm title="Редактировать профиль" name='edit-form'
                   buttonText="Сохранить"
                   isOpen={isEditProfilePopupOpen}
                   onClose={closeAllPopups}>
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
                    onClose={closeAllPopups}>
       <button
           type="submit"
           className="edit-form__button-save"
       >Да
       </button
       >
     </PopupWithForm>

     <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

   </div>
  );
}

export default App;
