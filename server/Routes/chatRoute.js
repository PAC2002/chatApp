const express = require("express");
const { Protect } = require("../middleWare/authWare");
const router = express.Router();
const { accessChat, getChats, createGroup, renameGroup, addInGroup, removeFromGroup } = require("../controller/chatController");

router.route("/").post(Protect, accessChat);
router.route("/").get(Protect, getChats);
router.route("/group").post(Protect, createGroup);
router.route("/groupRename").put(Protect, renameGroup);
router.route("/groupAdd").put(Protect, addInGroup);
router.route("/groupRemove").put(Protect, removeFromGroup);

module.exports = router;