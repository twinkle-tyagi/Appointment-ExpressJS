
const sequelize = require('sequelize');
const Users = require('../Model/user');

exports.getAddUser = (req, res, next) => {
    /*res.render('View/index', {
        pageTitle: 'Add User',
        path: '/View/index',
        editing: false
      });
      */
     //console.log(req.name);
    res.sendFile(path.join(__dirname,'View','index.html'));

};

exports.postAddUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    Users.create({
        name: name,
        email: email,
        phone: phone
    })
    .then(res => console.log('saved'))
    .catch();
    
    res.redirect('/addUser');
    
};

exports.getEditUser = (req, res, next) => {

}
