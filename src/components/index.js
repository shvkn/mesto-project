import { renderProfile } from './utils';
import { renderCards } from './card';

import {
  profileFormSubmitHandler,
  profileAddCardButtonHandler,
  profileEditButtonHandler,
} from './profile';

export const pageEl = document.querySelector('.page');
export const cardsContainerEl = document.querySelector('.cards');
export const cardTemplate = document.querySelector('#card-template');
export const modalNewCardEl = document.querySelector('#modal-new-card');
const profileAddCardButtonEl = document.querySelector('.profile__add-btn');

export const modalImageEl = document.querySelector('#modal-image');
export const modalImageCoverEl = modalImageEl.querySelector('.modal__cover-image');
export const modalImageHeadingEl = modalImageEl.querySelector('.modal__heading');

export const newCardFormEl = document.querySelector('#form-new-card');
export const newCardFormHeadingEl = newCardFormEl.querySelector('#new-card-heading');
export const newCardFormImageLink = newCardFormEl.querySelector('#new-card-link');

export const modalProfileEl = document.querySelector('#modal-profile');
const profileFormEl = modalProfileEl.querySelector('#form-profile');
export const profileFormNameEl = profileFormEl.querySelector('#profile-name');
export const profileFormCaptionEl = profileFormEl.querySelector('#profile-caption');

const profileEl = document.querySelector('.profile');
export const profileNameEl = profileEl.querySelector('.profile__name');
export const profileCaptionEl = profileEl.querySelector('.profile__caption');
export const profileAvatarEl = profileEl.querySelector('.profile__avatar');
const profileEditButtonEl = profileEl.querySelector('.profile__edit-btn');

window.addEventListener('load', () => {
  renderCards();
  renderProfile();
});

profileAddCardButtonEl.addEventListener('click', profileAddCardButtonHandler);
profileEditButtonEl.addEventListener('click', profileEditButtonHandler);
profileFormEl.addEventListener('submit', profileFormSubmitHandler);
