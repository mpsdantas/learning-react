const index = require('../controllers/index.js');
module.exports = (application) => {
	application.post('/', (req,res) => index.index(application,req,res));
};