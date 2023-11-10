import produtos from "../models/produtos.js"
import produtos from "../models/produtos.js"
import mongoose from "mongoose"

const Produtos = mongoose.model("Produtos", produtos)

class ProdutoService {
    Create(numero,valor) {
        const newProduto = new Produtos({
            
        })
        newPedido.save()
    }
    
    GetAll() {
        const produtos = produtos.find()
        return produtos
    }

    GetOne(id) {
        const client = produtos.findOne({_id: id})
        return client
    }

    Delete(id) {
        produtos.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado.`)
        }).catch(err => {
            console.log(err)
        })
    }

    Update(id, name, cpf, address) {
        produtos.findByIdAndUpdate(id, {
            numero: String,
            valor: String
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados com sucesso.`)
        }).catch(err => {
            console.log(err)
        })
    }
}

export default new ProdutoService()


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
    const produtos = await Client.find()
    return produtos
}


async FindAll() {
    const produtos = await Client.find()
    return produtos
} 
*/
