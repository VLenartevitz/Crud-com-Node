import pedidos from "../models/Pedidos.js"
import pedidos from "../models/Pedidos.js"
import mongoose from "mongoose"

const Pedidos = mongoose.model("Pedidos", pedidos)

class PedidoService {
    Create(numero,valor) {
        const newPedido = new Pedidos({
            numero: String,
            valor: String
        })
        newPedido.save()
    }
    
    GetAll() {
        const pedidos = pedidos.find()
        return pedidos
    }

    GetOne(id) {
        const client = pedidos.findOne({_id: id})
        return client
    }

    Delete(id) {
        pedidos.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }

    Update(id, numero, valor) {
        pedidos.findByIdAndUpdate(id, {
            numero: String,
            valor: String
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new PedidoService()


/* async Create(name, cpf, adress) {
    const newClient = new Client({
        name,
        cpf,
        adress
    })
    try {
        await newClient.save()
        return true
    }catch(err){
        console.log(err)
        return false
    }
}

async GetAll() {
    const pedidos = await Client.find()
    return pedidos
}


async FindAll() {
    const pedidos = await Client.find()
    return pedidos
} 
*/
