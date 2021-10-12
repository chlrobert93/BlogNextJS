import { useState } from 'react';

import classes from './contact-form.module.css';


function ContactForm() {

   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredName, setEnteredName] = useState('');
   const [enteredMessage, setEnteredMessage] = useState('');
  console.log(enteredMessage)

   function sendMessageHandler(event){
       event.preventDefault();

       //optional: add client-side validation
       fetch('/api/contact',{
           method: 'POST',
           //Caden JSON un objecto
           body: JSON.stringify({
               email: enteredEmail,
               name: enteredName,
               message: enteredMessage,
           }),
               
           //Encabezado del tipo  de contenid en la aplicación JSON
           //Para ahcer  que el backend sea consistente de que esta solicitud llevará datos JSON
           headers:{
            'Content-Type': 'application/jsoN',
          }
       });
   }

  return (
    <section className={classes.contact}>
    <h1>Como puedo ayudarte?</h1>
    <form className={classes.form} onSubmit={sendMessageHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='message'>Menssage</label>
        <textarea
          id='message'
          rows='5'
          required
          value={enteredMessage}
          onChange={(event) => setEnteredMessage(event.target.value)}
        ></textarea>
      </div>

      <div className={classes.actions}>
        <button>Enviar Mensaje</button>
      </div>
    </form>
  </section>
  );
}

export default ContactForm;
