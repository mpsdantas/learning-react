exports.index = (application,req,res) => {
	res.status(200).json({email:req.body.email,senha:req.body.senha});
	return;
};