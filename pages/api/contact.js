function handler(req, res){
    //Verificar si el método es igual a post
    if(req.method === 'POST'){const expReg =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const { email, name, message } = req.body;

        console.log(email)
         const esValido = expReg.test(email);


        if(
           !email ||
  /*          !esValido || */
           !name ||
           name.trim() === '' ||
           !message ||
           message.trim() === ''
        ){
          res.status(422).json({ message: 'Invalid input.'});
          return;
        }

        //Agregar un nuevo objecto
        const newMessage = {
            email,
            name,
            message
        };

        console.log(newMessage);

        res
        .status(201)
        .json({ message: 'Mensjae almacenado con éxito!', message: newMessage});
    }


}


export default handler;