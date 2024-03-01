const userMiddleware = (req, res, next) => {
    const user = req.body
    console.log(`DADOS RECEBIDOS DO USUÁRIO PARA A ROTA DE CADASTRO DE USUARIOS: ${JSON.stringify(req.body)}`)
    if (!user.nome) {
        return res.status(400).json('Inserir nome do usuário')
    }
    if (!user.cidade) {
        return res.status(400).json('Inserir cidade do usuário')
    }
    if (!user.idade) {
        return res.status(400).json('Inserir idade do usuário')
    }
    next()
}

const petMiddleware = (req, res, next) => {
    const pet = req.body
    
    if (!pet.endereco) {
        return res.status(400).json('Inserir endereco do pet')
    }

    if (!pet.info) {
        return res.status(400).json('Inserir info do pet')
    }

    if (!pet.estado) {
        return res.status(400).json('Inserir estado do pet')
    }
     
    next()
}

module.exports = {userMiddleware, petMiddleware}