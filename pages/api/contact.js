import { MongoClient } from 'mongodb';

async function handler(req, res){
    console.log(req.method)
    //Verificar si el método es igual a post
    if(req.method === 'POST'){const expReg =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const { email, name, message } = req.body;
         
         /* console.log(email)
         console.log(name)
         console.log(message) */
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
              
        console.log(newMessage)
        let client;

        try{
            client = await MongoClient.connect(
                '   '
            );
        
        }catch (error) {
            res.status(500).json({ message: 'Could not conect to database,'});
            return;
        }        
        
        //Para conectarme a la bd
        const db = client.db();

        try{
            //Mongo DB. los datos se almacenan en las llmadas conexiones.
            //Insertar un nuevo documento
            const result = await db.collection('messages').insertOne(newMessage);
            //Agregar un campo ID generada automáticamente
            newMessage.id = result.insertedId;
        } catch (error){
            client.close();
            res.status(500).json({ message: 'Storing message faild!'});
            return;
        }

        client.close();
       

        //sconsole.log(newMessage);

        res
        .status(201)
        .json({ message: 'Mensjae almacenado con éxito!', message: newMessage});
    }


}


export default handler;