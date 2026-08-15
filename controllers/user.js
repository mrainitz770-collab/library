const userModel = require('../models/user');
const bcrypt = require('bcrypt');
module.exports = {
    register: async (req, res) => {
        try {
            const hashdPassword = await bcrypt.hash(req.body.password, 10);
            const data = await userModel.create({
                name:req.body.name,
                email:req.body.email,
                password: hashdPassword
            });
            return res.redirect('/users/login');
        }
        catch (err) {
            return res.status(500).json(err);
        }
    },
   login: async (req, res) => {
    try {
        const user = await userModel.findOne({
            email: req.body.email
        });

        if(!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if(!isMatch) {
            return res.status(401).json({
                message: 'Worng password'
            });
        }

        return res.redirect('/books');

    } 
    catch (err) {
        return res.status(500).json(err);
    }
   }
}