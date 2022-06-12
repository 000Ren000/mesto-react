import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from'./PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
import {useState} from 'react';
function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen ] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const  handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  }

  return (
   <div className='root'>
    <Header />

    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
     <Footer />
    <PopupWithForm title="Редактировать профиль" name='edit-form' children={
        <form name="editForm" className="edit-form" noValidate>
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
          <button
              type="submit"
              className="edit-form__button-save"
          >Сохранить
          </button
          >
        </form>
    } isOpen={isEditProfilePopupOpen}
                   onClose={closeAllPopups}
    />

     <PopupWithForm title="Новое место" name='add-Form' children={
       <form name="editForm" className="edit-form" noValidate>
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
         <button
             type="submit"
             className="edit-form__button-save"
         >Создать
         </button
         >
       </form>
     }
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
     />

     <PopupWithForm title="Обновить аватар" name='add-Form' children={
         <form name="editForm" className="edit-form" noValidate>
           <input name="link"
                  id="input-avatar"
                  placeholder="Ссылка на картинку"
                  type="url"
                  className="edit-form__input edit-form__input_type_link"
                  required
           />
           <span className="popup__error" id="input-avatar-error"></span>
           <button
               type="submit"
               className="edit-form__button-save"
           >Сохранить
           </button
           >
         </form>
     }
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
     />
     <PopupWithForm title="Вы уверены?" name='add-Form' children={
       <form name="editForm" className="edit-form" noValidate>
         <button
             type="submit"
             className="edit-form__button-save"
         >Да
         </button
         >
       </form>
     }
                    onClose={closeAllPopups}
     />

     <ImagePopup />


     <template id="photo__card">
       <li className="card">
         <div className="card__border-image">
           <img src="src/components/App.js#" className="card__image" alt=""/>
         </div>
         <div className="card__description">
           <h2 className="card__title"></h2>
           <div className="card__like-container">
             <button type="button" className="card__button-like"></button>
             <span className="card__like-counter"></span>
           </div>
         </div>
         <button className="card__trash card__trash_hidden link"></button>
       </li>
     </template>
   </div>
  );
}

export default App;
