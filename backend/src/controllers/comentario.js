const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
   
    req.body.equipamento = Number(req.body.equipamento)
    req.body.perfil = Number(req.body.perfil)

    let comentario = await prisma.comentario.create({
        data: req.body
    });

    res.status(200).json(comentario).end();
}



const read = async (req, res) => {
    let comentarios = await prisma.comentario.findMany();
    res.status(200).json(comentarios).end();
}



module.exports = {
    create,
    read
}