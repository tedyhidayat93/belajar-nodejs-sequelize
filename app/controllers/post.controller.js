const db = require('../models');
const Post = db.posts;
const Op = db.Sequelize.Op;


// Create
exports.create = (req, res) => {
    // validation request
    if(!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    // create function
    const post = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    }

    Post.create(post)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while creaating post"
            });
        });
};

// Get All
exports.getAll = (req, res) => {

};

// Get All Status Active
exports.getAllActive = (req, res) => {

};

// Get All Status InActive
exports.getAllInActive = (req, res) => {

};

// Get by ID
exports.getById = (req, res) => {

};

// Update
exports.update = (req, res) => {

};

// Delete
exports.delete = (req, res) => {

};

// Soft delete
exports.softDelete = (req, res) => {

};
