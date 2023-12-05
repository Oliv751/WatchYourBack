const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const serieControllers = require("./controllers/serieControllers");
const episodeControllers = require("./controllers/episodeControllers");
const episodeUserControllers = require("./controllers/episodeUserControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/series", serieControllers.browse);
router.get("/series/:id", serieControllers.read);
router.put("/series/:id", serieControllers.edit);
router.post("/series", serieControllers.add);
router.delete("/series/:id", serieControllers.destroy);

router.get("/episodes", episodeControllers.browse);
router.get("/episodes/:id", episodeControllers.read);
router.put("/episodes/:id", episodeControllers.edit);
router.post("/episodes", episodeControllers.add);
router.delete("/episodes/:id", episodeControllers.destroy);

router.get("/episode_users", episodeUserControllers.browse);
router.get("/episode_users/:id", episodeUserControllers.read);
router.put("/episode_users/:id", episodeUserControllers.edit);
router.post("/episode_users", episodeUserControllers.add);
router.delete("/episode_users/:id", episodeUserControllers.destroy);

module.exports = router;
