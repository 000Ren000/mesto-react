import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
     <header className="header">
       <img className="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип"/>
     </header>

     <main className="main conteiner">
       <section className="profile">
         <div className="profile__avatar-container">
           <img
               className="profile__avatar"
               alt="Фото профиля"/>
         </div>

         <div className="profile__info">
           <div className="profile__capion">
             <h1 className="profile__name"></h1>
             <p className="profile__profession"></p>
           </div>
           <button
               type="button"
               className="profile__edit-button link"
           >
           </button>
         </div>
         <button
             type="button"
             className="profile__add-button link"
         ></button>
       </section>
       <section className="photo">
         <ul className="photo__cards">
         </ul>
       </section>
     </main>
     <footer className="footer conteiner">
       <p className="footer__text">&copy; 2020 Mesto Russia</p>
     </footer>

     <div className="popup popup_opacity_mid" id="edit-form">
       <div className="popup__conteiner">
         <form name="editForm" className="edit-form" noValidate>
           <h2 className="edit-form__title">Редактировать профиль</h2>
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
         <button type="button" aria-label="Закрыть"
                 className="popup__button-close link"></button>
       </div>
     </div>

     <div className="popup popup_opacity_mid" id="add-Form">
       <div className="popup__conteiner">
         <form name="editForm" className="edit-form" noValidate>
           <h2 className="edit-form__title">Новое место</h2>
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
         <button type="button" aria-label="Закрыть"
                 className="popup__button-close link"></button>
       </div>
     </div>

     <div className="popup popup_opacity_hard" id="image-popup">
       <div className="popup__image-conteiner">
         <img src="#" alt="" className="popup__image"/>
           <p className="popup__image-description"></p>
           <button className="popup__button-close link"></button>
       </div>
     </div>

     <div className="popup popup_opacity_mid" id="popup-confirmation">
       <div className="popup__conteiner popup__conteiner_minimize">
         <form name="editForm" className="edit-form" noValidate>
           <h2 className="edit-form__title edit-form__title_minimize">Вы уверены</h2>
           <button
               type="submit"
               className="edit-form__button-save"
           >Да
           </button
           >
         </form>
         <button type="button" aria-label="Закрыть"
                 className="popup__button-close link"></button>
       </div>
     </div>

     <div className="popup popup_opacity_mid" id="popup-avatar">
       <div className="popup__conteiner popup__conteiner_minimize">
         <form name="editForm" className="edit-form" noValidate>
           <h2 className="edit-form__title ">Обновить аватар</h2>
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
         <button type="button" aria-label="Закрыть"
                 className="popup__button-close link"></button>
       </div>
     </div>

     <template id="photo__card">
       <li className="card">
         <div className="card__border-image">
           <img src="#" className="card__image" alt=""/>
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
   </>
  );
}

export default App;
