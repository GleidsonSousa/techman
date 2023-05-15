const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const read = async(req, res) => {
    let perfis = await prisma.perfil.findMany();
    res.status(200).json(perfis).end();
}

const create = async (req, res) => {
    const perfis = await prisma.perfil.createMany({
        data: req.body
    })
    res.status(200).json(perfis).end();
}

module.exports = {
    read,
    create
}