const Todo = require('../models/crud.model');
const fs = require('fs');

class CrudController {
// method list

    async Home(req, res) {
        try {
            let ToDoList = await Todo.find().sort({ createdAt: -1 });
            // console.log(all_data);

            res.render('home', {
                title: "Home page",
                ToDoList,
            })
        } catch (err) {
            throw err;
        }
    }

//  method insert

    async insert(req, res) {

        try{

            


            let save_data = await Todo.create(req.body)
            console.log(save_data);
           

            
            

        }catch(err){
            throw err
        }
   


    }
 

//    method soft delete

    async delete(req, res) {
        try {
            let updated_obj = {
                isDeleted: true
            }
            let deleted_data = await Todo.findByIdAndUpdate(req.params.id, updated_obj);


            console.log(req.params.id);
            res.redirect('/')

    
        } catch (err) {
            throw err;
        }
    }


    
    async delete2(req, res) {
        try {
            let updated_obj = {
                isDeleted: false
            }
            let deleted_data = await Todo.findByIdAndUpdate(req.params.id, updated_obj);

            
            console.log(req.params.id);
            res.redirect('/')

    
        } catch (err) {
            throw err;
        }
    }
}


module.exports = new CrudController();