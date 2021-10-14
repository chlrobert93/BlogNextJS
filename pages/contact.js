import { Fragment } from 'react';
import Head from 'next/head';


import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contacto</title>
        <meta name="descripcion" content="Enviame tu mensaje" />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage;
