import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeacturePosts from '../components/home-page/feacture-posts';

function HomePage() {

  const DUMMY_POSTS = [
    {
      slug: 'empezando-con-nextjs1',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
    {
      slug: 'empezando-con-nextjs2',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
    {
      slug: 'empezando-con-nextjs3',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    },
    {
      slug: 'empezando-con-nextjs4',
      title: 'Empezando con NextJS',
      image: 'Empezando-NextJS.png',
      excerpt:
      'NextJS es un framework de React para la producción: hace que la construcción de aplicaciones y sitios React completos sea muy fácil.',
      date: '2022-02-10',
    }
]

  return (
    <Fragment>
      <Hero />
      <FeacturePosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
