const bookModel = require('../models/book');
module.exports ={

    getAll: async (req, res) => {
        try {
             const data = await bookModel.find().lean();
             return res.render('books', { books: data});

        } 
        catch (err){
            return res.status(500).json(err);

        }

       
    },
    getById: async (req, res) => {
        try{
             const id = req.params.id;
           const data = await bookModel.findById(id);
           return res.status(200).json(data);

        }
        catch (err) {
            return res.status(500).json(err);
        }
          
    },
    add: async(req, res) => {
        try{
            const data = await bookModel.create(req.body);
            return res.status(201).json(data);
        }
        catch(err){
            return res.status(500).json(err);
        }
         
    },
    update: async (req, res) => {
        try{
            const id = req.params.id;
            const data = await bookModel.findByIdAndUpdate(id, req.body, {new: true}); 
            return res.status(200).json(data);
        }
        catch (err){
            return res.status(500).json(err);
        }
        
    },
    remove: async (req, res) => {
        try {
             const id = req.params.id;
             const data = await bookModel.findByIdAndDelete(id);
             return res.status(200).json(data);
        }
        catch (err){
            return res.status(500).json(err);
        }
        
        
    }
};