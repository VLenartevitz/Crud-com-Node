import Pedidos from "../models/Pedidos"
import mongoose from "mongoose"

const Pedidos = mongoose.model("Pedidos", Pedidos)

class PedidosService {
    Create(numero,valor) {
        const newPedido = new Pedidos({
            numero: numero,
            valor: valor
        })
        newPedido.save()
    }
    
    GetAll() {
        const pedidos = Pedidos.find()
        return pedidos
    }

    GetOne(id) {
        const pedido = Pedidos.findOne({_id: id})
        return pedido
    }

    Delete(id) {
        Pedidos.findByIdAndDelete(id).then(() => {
            console.log(`Pedido com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }

    Update(id, numero, valor) {
        Pedidos.findByIdAndUpdate(id, {
            numero: numero,
            valor: valor
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new ClientService()


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
    const clients = await Client.find()
    return clients
}


async FindAll() {
    const clients = await Client.find()
    return clients
} 
*/
