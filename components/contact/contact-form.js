import { useState, useEffect } from 'react';

import classes from './contact-form.module.css';
import Notification from '../ui/notification';


  //Función envio de datos de contacto asíncrono
  //contactDetails------> Esperar recibir los datos de contacto
  async function sendContactData(contactDetails) {
    //optional: add client-side validation
    const response = await fetch("/api/contact", {
      method: "POST",
      //Caden JSON un objecto
      body: JSON.stringify(contactDetails),
      //Encabezado del tipo  de contenid en la aplicación JSON
      //Para ahcer  que el backend sea consistente de que esta solicitud llevará datos JSON
      headers: {
        "Content-Type": "application/json ",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }

  }

function ContactForm() {
   //Para leer el valor del formulario
   const [enteredEmail, setEnteredEmail] = useState('');
   const [enteredName, setEnteredName] = useState('');
   const [enteredMessage, setEnteredMessage] = useState('');
   const [requestStatus, setRequestStatus] = useState(); // 'pending', 'succes', 'error'
   const [requestError, setRequestError] = useState();

   useEffect(() => {
     if(requestStatus === 'success' || requestStatus == 'error'){
        
      const timer = setTimeout(() =>{
         setRequestError(null);
         setRequestStatus(null);
       },3000);

       return () => clearTimeout(timer);
     }
   },[requestStatus])


   async function sendMessageHandler(event){
       event.preventDefault();
       //console.log(enteredEmail)

       //optional: add client-side validation

       setRequestStatus('pending');

       try{
        await sendContactData({
          email: enteredEmail,
          name: enteredName,
          message: enteredMessage
        });
          setRequestStatus('success');
          setEnteredMessage('');
          setEnteredEmail('');
          setEnteredName('');
       }catch(error){
          setRequestError(error.message);
          setRequestStatus('error');
       }
   }

   
   //Obtener los datos de mi notificación

       let notification;

       if(requestStatus === 'pending'){
        notification = {
           status: 'pending',
           title: 'Sending message...',
           message: 'Tu mensaje está en camino!'
         };
       }

       if(requestStatus == 'success'){
         notification = {
           status: 'success',
           title: 'Success!',
           message: 'Mensaje enviado con éxito!',
         };
       }

       if(requestStatus === 'error'){
        notification = {
          status: 'error',
          title: 'Error!',
          message: requestError,

        };
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
    {notification  && (
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
       />
    )}
  </section>
  );
}

export default ContactForm;
