const express=require('express');
const router =express.Router();
const vehicleController =require('../controller/vehicle.controller');

router.get('/',vehicleController.getAllVehi);
router.get('/:id',vehicleController.getSingleVehi);
router.post('/',vehicleController.createVehi);
router.put('/',vehicleController.updateVehi);
router.delete('/:id',vehicleController.deleteVehi);

module.exports=router;