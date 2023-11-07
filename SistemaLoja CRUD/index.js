import express from 'express' //Importando o Express
import mongoose from 'mongoose' //Importando o Mongoose
//import ClientService from './services/ClientService.js' //Importando o service de cliente
import bodyParser from 'body-parser' //Importando a biblioteca body-parser
import ClientService from './services/ClientService.js'
import PedidosService from './services/PedidosService.js'
const app = express() //Iniciando o Express

app.use(bodyParser.urlencoded({extended: false})) // Decodifica os dados recebidos
app.use(bodyParser.json()) //Permite receber dados via json


// Iniciando conexão com o banco de dados do MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/loja1", {useNewUrlParser: true, useUnifiedTopology: true})

// Indica ao Express a pasta public para arquivos estáticos
app.use(express.static("public"))

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// ROTA CLIENTES
app.get("/clientes", (req,res) => {
    ClientService.GetAll().then(clients => {
        res.render("clientes", {
            clients: clients        
        })
    })
})

// ROTA PEDIDOS
app.get("/pedidos", (req,res) => {
    PedidosService.GetAll().then(pedidos => {
        res.render("clientes", {
            pedidos:pedidos        
        })
    })
})

// ROTA DE CRIAÇÃO DE CLIENTES
app.post("/createClient", (req, res) => {
    ClientService.Create(
        req.body.name,
        req.body.cpf,
        req.body.address
    )
    res.redirect("/clientes")
})

app.post("/createPedidos", (req, res) => {
    PedidosService.Create(
        req.body.numero,
        req.body.valor,
    )
    res.redirect("/pedidos")
})


// ROTA DE EXCLUSÃO DE CLIENTE
app.get("/deletePedido/:id", (req, res) => {
    const id = req.params.id
    PedidosService.Delete(id)
    res.redirect("/pedidos")  
})

app.get("/deleteClient/:id", (req, res) => {
    const id = req.params.id
    ClientService.Delete(id)
    res.redirect("/clientes")  
})

// ROTA DE BUSCA DE CLIENTE
app.get("/findClient/:id", (req, res) => {
    const id = req.params.id
    ClientService.GetOne(id).then(Client => {
        res.render("dadoscliente", {
            Client : Client
        })
    })
})

app.get("/findPedido/:id", (req, res) => {
    const id = req.params.id
    PedidosService.GetOne(id).then(pedidos => {
        res.render("dadospedidos", {
            pedidos: pedidos
        })
    })
})

// ROTA DE ALTERAÇÃO DE CLIENTE
app.post("/updateClient/:id", (req, res) => {
        ClientService.Update(
            req.body.id,
            req.body.name,
            req.body.cpf,
            req.body.address
        )
        res.redirect("/clientes")
})

app.post("/updatePedido/:id", (req, res) => {
    PedidosService.Update(
        req.body.id,
        req.body.numero,
        req.body.valor,
        
    )
    res.redirect("/pedidos")
})



// ROTA PRODUTOS
app.get("/produtos",function(req,res){
    const produtos = [
        
    ]
    res.render("produtos", {
        produtos: produtos
    })

})

app.post("/updatePedido/:id", (req, res) => {
    PedidosService.Update(
        req.body.id,
        req.body.numero,
        req.body.valor,
        
    )
    res.redirect("/pedidos")
})


// INICIA O SERVIDOR NA PORTA 8080
app.listen(8080,function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})