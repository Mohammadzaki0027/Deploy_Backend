const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("please login again");
  }

  const token = req.headers?.authorization?.split(" ")[1];

  jwt.verify(token, "foo", function (err, decoded) {
    if (err) {
      res.status(401).send("Please Login Again");
    } else {
      if (req.method === "GET") {
        req.body.user = decoded.user;
        next();
      } else if (req.method === "POST" && req.url === "/tasks") {
        req.body = { ...req.body, user: decoded.user };

        next();
      } else if (req.method === "DELETE") {
        next();
      } else if (req.method === "POST" && req.url === "/tagList") {
       
        next();
      }else{
        next()
      }
    }
  });
};

module.exports = { Auth };
