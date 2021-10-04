import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import Feacture from '../components/home-page/feacture-posts';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <Feacture />
    </Fragment>
  );
}

export default HomePage;
