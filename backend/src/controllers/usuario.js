const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")




const login = async (req, res) => {
  const usuarios = await prisma.usuario.findMany({
      where: {
          senha: req.body.senha
      },
      select: {
          id: true,
          id_perfil: true
      }
  })

  if (usuarios.length === 0) {
      res.status(404).json(false).end()
  } else { 
      res.status(200).json(usuarios).end() 
  }


}




const read = async (req, res) => {
    let usuarios = await prisma.usuario.findMany({
        select: {
            id:true,
            senha: true,
            perfil:true,
        }
    });

    res.status(200).json(usuarios).end();
}

module.exports = {
    login,
    read
}

