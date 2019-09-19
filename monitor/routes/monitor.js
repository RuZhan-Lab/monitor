const express = require('express');

const router = express.Router();

const monitor = require('../controllers/monitor');

router.get('/getData', monitor.getMonitorData);
router.get('/deleteData', monitor.deleteMonitorData);
router.post('/errCatch', monitor.setMonitorData);


module.exports = router;
