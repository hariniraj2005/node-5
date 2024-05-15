const express=require('express');
const path=require('path')
const rootDir=require('../util/path')
const router=express.Router();

router.get('/contactus', (req, res) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
  });

  router.post('/contactus', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.redirect('/success');
    });
    router.get('/success', (req, res) => {
        res.send('Form successfully filled');
      });
      
 

    module.exports=router;