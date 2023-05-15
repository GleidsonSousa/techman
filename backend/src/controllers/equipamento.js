const { PrismaClient } = require('@prisma/client');

const multer = require('multer');
const path = require('path');

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../assets/upload/');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(
      null,
      file.originalname.split('.')[0] +
        '-' +
        datetimestamp +
        '.' +
        file.originalname.split('.')[file.originalname.split('.').length - 1]
    );
  },
});

const upload = multer({ storage });

const create = async (req, res) => {
  upload.fields([
    { name: 'imagem', maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {
      res.status(500).json({ error: 1, payload: err }).end();
    } else {  
                  req.body.ativo = Boolean(req.body.ativo)
              const equipamento = await prisma.equipamento.create({
                data: {
                  equipamento: req.body.equipamento,
                  imagem: req.files.imagem[0].filename,
                  descricao: req.body.descricao,
                  ativo: req.body.ativo
                },
              });

              res.status(200).json(equipamento).end();

        }
    })
}






const read = async (req, res) => {
    let equipamentos = await prisma.equipamento.findMany({
        select: {
            id:true,
            equipamento:true,
            imagem:true,
            descricao: true,
            ativo:true,
            data:true,
            comentarios:true
        }
    });

    res.status(200).json(equipamentos).end();
}


const remove = async (req, res) => {
    const equipamento = await prisma.equipamento.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(200).json(equipamento).end()
}



module.exports = {
    create,
    remove,
    read
}

