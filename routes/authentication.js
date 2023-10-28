const express = require("express");
const User = require("../models/User");
const Joi = require("joi");
const router = express.Router();

const userValidationSchema = Joi.object({
  name: Joi.string().min(6).required(),
  address: Joi.string().min(6).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().min(6).email().required(),
});

// Register a new user
router.post("/register", async (req, res) => {
  const { error } = await userValidationSchema.validateAsync(req.body);

  if (error) {
    return res.send(error.details);
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password,
  });

  try {
    const regUser = await user.save();
    res.json(regUser);
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: "Failed to register user" });
  }
});

router.get("/login", (req, res) => {
  const userCredential = req.body.username;
  const isregisteredUser = User.findOne(userCredential);
  console.log(isregisteredUser);
});

module.exports = router;
