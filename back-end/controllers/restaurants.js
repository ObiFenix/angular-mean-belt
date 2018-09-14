const Model = require('../models/restaurant')

module.exports = {

    getRestaurants: (req, res) => {
        Model.Restaurant.find({}, null, {sort:'name'}, (err, allitems) => {
            // console.log('\n\n\n\n=============> [ allitems Info ]\n', allitems);
            if (err) { return res.json({message: "Error", 'errors': ['Unable to find restaurants']}) }        // respond with JSON
            else     { return res.json({message: "Success", 'items': allitems}) }   // respond with JSON
        });
    },

    getRestaurant: (req, res) => {
        Model.Restaurant.findById(req.params.id, (err, item) => {
            console.log('\n\n\n\n=============> [ item Info ]\n', item);
            if (err) { return res.json({message: "Error", errors: err}); }          // respond with JSON
            else     { return res.json({message: "Success", item: item}); }         // respond with JSON
        })
    },

    editRestaurant: (req, res) => {
        // console.log('\n\nHere:\n\n',req.params._id, '\n\n\n');
        Model.Restaurant.findById({ _id: req.params.id }, (err, item) => {
            // console.log('\n| => Returned ERROR:\n', err.errors);
            if (err) { return res.json({ message: "Sorry! couldn't update item info", 'errors': err}); }
            else {
                item.name=req.body.name,
                item.cuisine=req.body.cuisine,
                item.save((err) => {
                    if (err) { return res.json({ message: "Sorry! couldn't update item info", 'errors': err}); }
                    else     { return res.json({ message: "item info has been updated!", 'item': item}); }
                });
            }
        })
    },

    updateRestaurant: (req, res) => {
        Model.Restaurant.update({ _id: req.body.id }, req.body, (err, item) => {
            console.log('\n| => Returned ERROR:\n', err.errors);
            if (err) { return res.json({ message: "Sorry! couldn't update item info", 'errors': err}); }
            else     { return res.json({ message: "item info has been updated!", 'item': item}); }
        });
    },

    addRestaurant: (req, res) => {
        // console.log(req.body);
        let item = new Model.Restaurant({
            name   : req.body.name,
            cuisine: req.body.cuisine,
        });
        console.log(item)
        item.save((err) => {
            if (err) {
                console.log(item.err);
                return res.json({ msg: 'Sorry... something went wrong creating this item!', 'errors': err });
            }   return res.json({ msg: 'Successfully added a item!'});
        });
    },

    deleteRestaurant: (req, res) => {
        console.log('We are on DELETE =================\n\n\n');
        console.log('ID: ', req);
        Model.Restaurant.findByIdAndRemove({_id: req.params.id}, req.body, (err, item) => {
            console.log('item: ', item);
            if (err) { return res.json({ message: "Sorry! Something went wrong. item was not deleted!", 'errors': err }); }
            else     { return res.json({ message: "Deleted Record" }); }
        });
    },
}
