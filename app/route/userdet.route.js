const express=require('express');
const router =express.Router();
const userDetController =require('../controller/userdet.controller');

router.get('/',userDetController.getAllUsrDet);
router.get('/:id',userDetController.getSingleUsrDet);
router.post('/',userDetController.createUsrDet);
router.put('/',userDetController.updateUsrDet);
router.delete('/',userDetController.deleteUsrDet);

module.exports=router;