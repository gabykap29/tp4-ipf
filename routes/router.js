const express = require('express');
const router = express.Router();

const res = require('express/lib/response');

router.get('/', (req,res)=>{
    res.send('Get');
})
router.post('/post',(req,res)=>{
    res.send('POST');
})
router.put('/put',(req,res)=>{
    res.send('PUT');
})
router.delete('/delete',(req,res)=>{
    res.send('delete');
})
router.get('/');
router.post('/post');
router.put('/put');
router.delete('/delete')

module.exports = router

