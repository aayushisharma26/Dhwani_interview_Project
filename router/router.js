const express=require("express")

const router = express.Router()

const user = require("../controller/controller.js")



router.post("/signup",user.signup)

router.post("/login",user.login)

router.post("/post_state",verifyToken,user.post_state)

router.get("/get_state",user.get_state)

router.post("/post_district",verifyToken,user.create_district)

router.get("/get_district",user.get_district)

router.post("/post_childs",verifyToken,user.create_childs)

router.get("/get_childs",user.get_childs)


module.exports =router