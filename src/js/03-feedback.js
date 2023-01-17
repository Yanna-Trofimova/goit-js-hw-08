import throttle from 'lodash.throttle';

import '../css/common.css';
import '../css/03-feedback.css';

const STOREGE_KEY = 'feedback-form-state';

const formData = {email:' ', message:' '};


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector(' textarea'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
};

// const formFeedback = 

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle (onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name]= e.target.value;

    // console.log(formData);

    localStorage.setItem(STOREGE_KEY, JSON.stringify(formData));

});

populateTextarea ();


function onFormSubmit (evt) { 
    evt.preventDefault();
    // console.log('send');

    evt.target.reset();

    localStorage.removeItem(STOREGE_KEY);
}

function onTextareaInput(evt) { 
    const message = evt.target.value;

    localStorage.setItem(STOREGE_KEY, message);
}

function populateTextarea () {
    const savedMessage = localStorage.getItem(STOREGE_KEY);
    const parselMessage = JSON.parse(savedMessage);

    if (savedMessage) {
        console.log(parselMessage);

        
        refs.email.value=  parselMessage.email;
        refs.message.value=  parselMessage.message;
    }

    
}
