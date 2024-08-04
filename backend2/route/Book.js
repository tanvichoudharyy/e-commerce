const express=require("express");

const { getBook }=require("../controller/Book");

const router = express.Router();

router.get("/", getBook);

module.exports=router;