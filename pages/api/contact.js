import { MongoClient } from 'mongodb';
    
async function handler(req, res){
    

    //Verificar si el método es igual a post
    if(req.method === 'POST'){const expReg =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        const { email, name, message } = req.body;

         const esValido = expReg.test(email);

        if(
           !email ||
           /*!esValido || */
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
              
        let client;

         const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.chpsn.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
        try{
            client = await MongoClient.connect(connectionString);
        
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
       
        res
        .status(201)
        .json({ message: 'Mensjae almacenado con éxito!', message: newMessage});
    }


}


export default handler;