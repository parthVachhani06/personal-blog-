const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const blogc = require("../controllers/blogcontroler")


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/',blogc.homecontroler);
router.post("/blogform",blogc.blogformcontroler);
router.get('/views',blogc.viewcontroler );
router.get('/editblog/:id',blogc.editcontroler);
router.get("/deleteblog/:id",blogc.deletcontroler);



module.exports = router;