const { Router } = require("express");
const City = require("../models").city;
const User = require("../models").User;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const cities = await City.findAll();
    res.status(200).send({ message: "ok", cities });
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { name, imgUrl, vidUrl, songUrl } = req.body;
    if (!name || !imgUrl || !vidUrl || !songUrl) {
      return res.status(400).send({
        message: "Not all required fields are entered, please check again!",
      });
    }
    const newCity = await City.create({
      name,
      imgUrl,
      vidUrl,
      songUrl,
    });
    return res.status(201).send({ message: "City created!", newCity });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const cityDetails = await City.findByPk(id);
    if (cityDetails === null) {
      return res.status(404).send({ message: "City does not exist (yet)" });
    }
    return res.status(200).send({ message: "Ok", cityDetails });
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const city = await City.findByPk(id);
    const cityDelete = await city.destroy();
    return res
      .status(200)
      .send({ message: "City successfully destroyed", city, cityDelete });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
