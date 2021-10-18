import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
/* import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; */
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'; 
/* import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; */
import  atomDark  from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from  'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from './post-header';
import classes from './post-content.module.css';
/*react-syntax-highlighter instalar npm install react-syntax-highligter
esto nos dará un contenedor que es cpaz de codificar y formatear de una forma agradable
*/

/* 
const DUMMY_POST = {
  slug: 'empezando-con-nextjs1',
  title: 'Empezando con NextJS',
  image: 'Empezando-NextJS.png',
  date: '2022-02-10',
  content: '# Este es un primer post',
};
 */

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css); 


function PostContent(props) {
   //console.log(props)
  const { post } = props;
 // console.log(post.slug);
  
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
 

  /* const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`; */
  //markdown llamará a este método
  //este método, obtenemos datos sobre la imagen que se encontro
  const customRenderers = {
    /* img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    }, */
    //Revisar los parrafos

    p(paragraph) {
      //extraer el nodo real que sería renderizado por react-markdown
      const { node } = paragraph;
      //Solo renderizar la imgagens

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return(
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
 
    //Aquí obtenemos nuestro objecto de código de react-markdown
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
     return(
       <SyntaxHighlighter
        style={atomDark}
        language={language}
        children={children}
       />
      );
    }, 
    
  };



  return (
    <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>    </article>
  );
}

export default PostContent;