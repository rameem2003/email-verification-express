const { registeruser, varifyUser } = require("../controllers/auth.controllers");

const router = require("express").Router();

router.post("/register", registeruser);
router.get("/verify-email", varifyUser);

module.exports = router;
