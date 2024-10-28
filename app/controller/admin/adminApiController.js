// // controllers/adminController.js
// const userRepository = require('../../repositories/userRepository');
// const bookingRepository = require('../../repositories/bookingRepository');

// class adminApiController{

//     createEmployee = async (req, res) => { 
//         try {
//             const { username,location } = req.body;
//             await userRepository.createUser({ username,role: 'employee', location });
//             res.redirect('/admin/employees');
//         } catch (err) {
//             res.status(500).send(err.message); 
//         }
//     };
    
//     deleteEmployee = async (req, res) => {
//         try {
//             const { id } = req.params;
//             await userRepository.deleteUser(id);
//             res.redirect('/admin/employees');
//         } catch (err) {
//             res.status(500).send(err.message);
//         }
//     };
    
//     assignWork = async (req, res) => {
//         try {
//             const { bookingId, employeeId } = req.body;
//             await bookingRepository.updateWork(bookingId, { assignedTo: employeeId });
//             res.redirect('/admin/works');
//         } catch (err) {
//             res.status(500).send(err.message);
//         }
//     };
    

// }

// module.exports = new adminApiController()
