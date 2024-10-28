
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const CheckAuth = async (req, res, next) => {
  try {
    // Check if the token exists in cookies
    if (req.cookies && req.cookies.usertoken) {
      // Extract the token from the cookies
      const token = req.cookies.usertoken;

      // Verify the token
      const decoded = jwt.verify(token, "ghjgfhwmhfvvfgvwyvfwtyfsejvwu");
      
      // Attach the decoded user information to the request object
      req.user = decoded;

      // Proceed to the next middleware or route handler
      return next();
    } else {
      res.redirect('/signin')
      // No token provided 
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided",
      });
    }
  } catch (error) {
    // Handle any errors that occurred during verification
    return res.status(400).json({
      success: false,
      message: "Unauthorized: Invalid token",
      error: error.message,
    });
  }
};

//------------------------------------------

// Middleware to authenticate admin
const jwtAuthAdmin = (req, res, next) => {
    const token = req.cookies && req.cookies.admintoken;

    if (!token) {
        console.log('token is missing');
        return res.redirect('/admin/');  // Redirect to signin or error page
    }

    jwt.verify(token, 'ghcghvchvmjhadmin', (err, decoded) => {
        if (err) {
            console.error('Error verifying admin token:', err);
            return res.redirect('/signin');  // Redirect to signin or error page
        }

        req.admin = decoded;
        next();
    });
};



// Middleware to authenticate employee
const isEmployee = (req, res, next) => {
  const token = req.cookies && req.cookies.employeetoken;

  if (!token) {
      console.log('token is missing');
      return res.redirect('/employee/');  // Redirect to signin or error page
  }

  jwt.verify(token, 'ghcghvchvmjhemployee', (err, decoded) => {
      if (err) {
          console.error('Error verifying employee token:', err);
          return res.redirect('/signin');  // Redirect to signin or error page
      }

      req.employee = decoded;
      next();
  });
};

  






module.exports={
    CheckAuth,
    jwtAuthAdmin,
    isEmployee
}
