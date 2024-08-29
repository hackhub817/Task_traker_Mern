const router = require("express").Router();
const User = require("../models/user");

//Sign IN LOGIc

router.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    // console.log(req.body);

    const user = new User({ email, name, password });
    await user
      .save()
      .then(() => res.status(200).json({ message: "Sign Up Successfull" }));
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "User aleady exist" });
  }
});

//login
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  const userFind = await User.findOne({ email: email, password: password });
  console.log(userFind);
  try {
    if (userFind) {
      const { password, ...others } = userFind._doc;
      res.status(200).json({ others });
    } else {
      res.send("not found");
    }
  } catch (error) {
    res.status(200).json(error);
  }
});

module.exports = router;
