import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
           <Image src="/images/site/eder.jpg" 
            alt="imagen showing Eder" 
            width={300} 
            height={300} />
          </div>
      <h1>Hola soy Eder!</h1>
      <p>
      Escribo un blog sobre desarrollo web, especialmente sobre frameworks frontend como React.
      </p>
    </section>
  );
}

export default Hero;
