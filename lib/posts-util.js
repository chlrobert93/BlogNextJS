import fs from 'fs';

import path from 'path';

import matter from 'gray-matter';


//node js esto permite construir un camino absoluto.

//Instalar librereria



const postsDirectory = path.join(process.cwd(), 'posts');

//console.log(postsDirectory)

//Obtener archivos de publicaciones
export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}

//Leer contenido de un archivo
//Para un solo archivo

//Esperar obtener el nombre del archivo como argumento

export function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/,'');  //Remove the file extension, seleccionar md y remplasar.
    //console.log(fileName)
    //Ruta
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    //console.log(filePath)
    //UTF-8 Administra los caracteres unicode.
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    //data, content   estosnombres son propiedades de ese objecto
    const { data, content } = matter(fileContent);
    //console.log(content);
    //Preparar los datos de la publicación que devolvemos.
    //Es un objecto que contiene los datos para una sola publicación leída.
    const postData ={
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}


export function getAllPosts(){

    //Leer todo el contenido de un directorio de una vez.
    //Esto devolverá una matriz.

    /* const postFiles = fs.readdirSync(postsDirectory); */
    const postFiles = getPostsFiles();



    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    //Es el método de clasisficación de JS por lo que
    //las publicaciones más recientes se ordenan en delante de
    //las publicaciones más antiguas.
    //Devuelve una matriz.

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}


//Es responsable de obtener todas las publicaciones destacadas.

export function getFeacturedPosts(){
    const allPosts = getAllPosts();

    const feacturedPosts = allPosts.filter(post => post.isFeactured);

   //console.log(feacturedPosts)
    return feacturedPosts;

}