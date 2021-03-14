window.addEventListener('DOMContentLoaded', ()=> {
  'use strict';


  //mobile menu

  const menuBtn = document.querySelector('.mobile-button'),
        mobileNav = document.querySelector('.mobile__nav'),
        buttonClose = document.querySelector('.mobile__close'),
        superimposition = document.querySelector('.superimposition');

        menuBtn.addEventListener('click', ()=> {
          mobileNav.classList.add('mobile__nav--active');
          document.body.overflow = 'hidden';
          superimposition.classList.add('active');
        });
        buttonClose.addEventListener('click', ()=> {
          mobileNav.classList.remove('mobile__nav--active');
          superimposition.classList.remove('active');
        });
});