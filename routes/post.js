const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/post", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

router.get("/post", async (req, res) => {
  try {
    const getPosts = await Post.find();
    res.json(getPosts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const getSinglePost = await Post.findById(req.params.id);
    res.json(getSinglePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
