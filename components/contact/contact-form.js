import classes from './contact-form.module.css';

function ContactForm() {
  return (
    <section className={classes.contact}>
    <h1>Como puedo ayudarte?</h1>
    <form className={classes.form} >
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            required
          />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='message'>Menssage</label>
        <textarea
          id='message'
          rows='5'
          required
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
