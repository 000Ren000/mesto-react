import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from'./PopupWithForm.js'
import ImagePopup from './ImagePopup.js';
function App() {
  return (
   <div className='root'>
    <Header />

    <Main />
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
    }/>

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
     }/>

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
     }/>
     <PopupWithForm title="Вы уверены?" name='add-Form' children={
       <form name="editForm" className="edit-form" noValidate>
         <button
             type="submit"
             className="edit-form__button-save"
         >Да
         </button
         >
       </form>
     }/>

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
