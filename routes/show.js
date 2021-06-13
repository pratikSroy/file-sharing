const router = require('express').Router()
const File = require('../models/file')

router.get('/:uuid',async (req,res)=>{
    try{
        const file = await File.findOne({uuid: req.params.uuid})
        if(!file){
            res.render('download',{error : 'Link has been expired!'})
        }

        res.render('download',{
            uuid : file.uuid, 
            fileName : file.filename,
            fileSize : file.fileSize,
            downloadLink : `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
            //http:localhost:3000/files/download/dadsad-dasfdafadas
        })
    }catch(err){
        res.render('download',{error : 'Something Went Wrong!'})
    }
    
})

module.exports = router