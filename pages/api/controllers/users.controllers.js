const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            status: 'success',
            message: 'Obtained all users.',
            data: users,
        });
    } catch (err) {
        console.log(err);
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params;
        const user = await User.findOne({ where: { id } });
        if (!user) {
            return res.staus(404).json({
                status: 'error',
                message: 'No user found with given id.',
            });
        } else {
            return res.status(200).json({
                status: 'success',
                message: 'Obtained user.',
            });
        }
    } catch (err) {
        console.log(err);
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await User.create({ name, email, password });
        res.status(201).json({
            status: 'success',
            message: 'Successfully created user.',
            data: newUser,
        });
    } catch (err) {
        console.log(err);
    }
}   

module.exports = {
    getAllUsers, 
    getUserById,
    createUser,
};