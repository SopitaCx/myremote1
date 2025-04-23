const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;

app.use(cors()); //para las peticiones del frontend
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//traernos la cadena de conexion de mongodb
const {MongoClient, ServerApiVersion} = require('mongodb');

const uri='kñl{n'

//Creamos la conexion

const cliente=new MongoClient(uri,{
    serverApi:{
         version:ServerApiVersion.v1,
         strict:true,
         deprecationErrors:true,
   }
});

//CRUD --> Create, Retrieve, Update y Delete
app.post('insertar',async (req,res)=>{
       try{
          await cliente.connect();
          const db=cliente.db('MiBaseDatos');
          const coleccion=db.collection("usuarios");
          const resultado= coleccion.insertOne({usuario: 'Sixteco' ,password: 'sixteco123';
          res.send(`
          <script>
           alert("Documento agregado exitosamente");
           window.location.href="http://localhost:3000/home";
           </script>

   }finally{
      await cliente.close();
   }

}):

app.get('/home', (req,res)=>);

//hacer la consulta para un usuario
app.post('/consultar' async(req,res)=>{
   try{
   

   }finally{
       await cliente.close();
   }
});

app.listen(port,() =>



