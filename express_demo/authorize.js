const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "savan") {
    req.user = { name: "savan", id: 7 };
    next();
  } else {
    res.status(401).send("Unauthorize");
  }
};

module.exports = authorize;
