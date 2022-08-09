"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_1 = require("../models/User");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/", async (req, res) => {
    const data = req.body;
    try {
        const result = await (0, User_1.createUser)(Object.assign({}, data));
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.userRouter.get("/", async (_, res) => {
    try {
        const result = await (0, User_1.getUsers)();
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.userRouter.get("/:id", async (req, res) => {
    try {
        const result = await (0, User_1.getUserById)(req.params.id);
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.userRouter.patch("/:id", async (req, res) => {
    try {
        const result = await (0, User_1.updateUser)(req.params.id, req.body);
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=jobs.js.map