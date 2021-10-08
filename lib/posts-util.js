import fs from 'fs';
//node js esto permite construir un camino absoluto.
import path from 'path';
import matter from 'gray-master';

const postsDirectory = path.join(process.cwd(), 'posts');


//Leer contenido de un archivo
//Para un solo archivo
function getPostData(file){
    const filePath = path.join(postsDirectory, fileName);
    //UTF-8 Administra los caracteres unicode.
    const fileContent = fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/,''); //Remove the file extension.

    //Preparar los datos de la publicación que devolvemos.
    //Es un objecto que contiene los datos para una sola publicación leída.
    const postData ={
        slug: postSlug,
        ...data,
        content,
    };
}


export function getAllPosts(){

    //Leer todo el contenido de un directorio de una vez.
    //Esto devolverá una matriz.
    const postFile = fs.reddirSync(postsDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    //Es el método de clasisficación de JS por lo que
    //las publicaciones más recientes se ordenan en delante de
    //las publicaciones más antiguas.
    //Devuelve una matriz.
    const sortedPosts = allPosts.sort((postA, postB) => postA.data > postB.data ? -1 : 1);s

    return sortedPosts;
}


//Es responsable de obtener todas las publicaciones destacadas.

export function getFeacturedPosts(){
    const allPosts = getAllPosts();

    const feacturedPosts = allPosts.filter(post => post.isFeactured);

    return feacturedPosts;

}