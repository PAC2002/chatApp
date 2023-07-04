const asyncHandler = require("express-async-handler");
const Chat = require("../model/chatModel");
const User = require("../model/user");
const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log("userId not sent");
        return res.status(400);
    }

    var isChat = await Chat.findOne({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ]
    }).populate("users", "-password").populate("latestMessage");
    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "username email",
    })

    if (isChat != null && isChat.length > 0) {
        res.send(isChat[0]);
    } else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        }

        try {
            const createChat = await Chat.create(chatData);
            const FullChat = await Chat.findOne({ _id: createChat._id }).populate("users", "-password");
            res.status(200).send(FullChat);
        } catch (error) {
            res.status(400);
            throw new Error(error.message);
        }
    }
})
const getChats = asyncHandler(async (req, res) => {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } }).populate("users", "-password")
            .populate("latestMessage").populate("groupAdmin", "-password")
            .sort({ updatedAt: -1 }).then(async (result) => {
                result = await User.populate(result, {
                    path: "latestMessage.sender",
                    select: "username email",
                })
                res.status(200).send(result);
            })

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})
const createGroup = asyncHandler(async (req, res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "please fill all details" });
    }

    var users = JSON.parse(req.body.users);
    if (users != null && users.length < 2) {
        return res.status(400).send({ message: "more than two users require" });
    }
    users.push(req.user);
    try {
        const groupChat = await Chat.create({

            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.user,

        })
        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password");

        res.status(200).json(fullGroupChat);
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})
const renameGroup = asyncHandler(async () => {
    const { chatId, chatName } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(chatId, {
        chatName,
    }, {
        new: true,
    }
    ).populate("users", "-password")
        .populate("groupAdmin", "-password");
    if (!updatedChat) {
        res.status(404);
        throw new Error("Chat Not Found");
    } else {
        res.json(updatedChat);
    }
})
const addInGroup = asyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;
    const added = await Chat.findByIdAndUpdate(
        chatId,
        {
            $push: { users: userId },
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password");

    if (!added) {
        res.status(404);
        throw new Error("Chat Not Found");
    } else {
        res.json(added);
    }
})

// /remove functionality not working
const removeFromGroup = asyncHandler(async (req, res) => {
    const { chatId, userId } = req.body;
    const removed = await Chat.findByIdAndUpdate(
        chatId,
        {
            $pull: { users: userId },
        },
        {
            new: true,
        }
    ).populate("users", "-password").populate("groupAdmin", "-password");

    if (!removed) {
        res.status(404);
        throw new Error("Chat Not Found");
    } else {
        res.json(removed);
    }
})
module.exports = { accessChat, getChats, createGroup, renameGroup, addInGroup, removeFromGroup };