const express = require('express');
const router = express.Router();

const NotFoundError = require('../errors/NotFoundError');
const productsController = require('../controllers/productsController');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        return productsController.getProductInformations(id);
    }catch(err){
        if(err instanceof NotFoundError){
            res.status(404).send({ error: "Produto não encontrado!" })
        }else{
            res.status(500).send({ error: 'call someone' });
        }
    }
});

module.exports = router;