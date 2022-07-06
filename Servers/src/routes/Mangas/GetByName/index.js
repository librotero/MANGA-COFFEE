const { Router } = require('express');
const router = Router();
const Manga = require('../../../models/Manga.js')

router.get('/', async(req, res, next) => {
    console.log('ruta')
    const {name} = req.query;
    try { 
        const manga = await Manga.findAll({ where: { name:{[Op.iLike]:`%${name}%`}}}).lean()
        res.status(200).json(manga)
    } catch (error) {
        next(error)
    }
})

module.exports = router;