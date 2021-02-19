// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../views/layouts/main"));

    if(req.user) {
      console.log("Is authorized user")
     // res.redirect("/members")
     // res.render('members');
    } else {
      res.render('index');
    }
  
  });

  app.get("/signup", function(req, res) {
    if(req.user) {
        console.log("Is registered user.")
      // res.redirect("/members");
      
     //res.render("members", hbsObject);
    } else {
      res.render("signup");
    }
  })

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.render("index");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
 
  /*
  app.get("/members", isAuthenticated, function(req, res) {
    console.log("user authenticated html-routes.js....app.get, isAuthenticated")
    res.render("members");
  });
 */ 

}