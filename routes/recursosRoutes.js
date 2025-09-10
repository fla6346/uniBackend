import express from 'express';
const router= express.Router();

router.get('/', async(req,res)=>{
    try{
        console.log('Modelo Recurso:', req.app.get('models').Recurso);
        const recursos=await req.app.get('models').Recurso.findAll();
        res.json(recursos);

    }catch(error){
          console.log('Entrando al catch');
         console.log(error);
        res.status(500).json({
            error:'Error al obtener los recurosos'
        });
    }
})
export default router;