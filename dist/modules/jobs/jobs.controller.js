"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRouter = void 0;
const express_1 = require("express");
const jobs_service_1 = require("./jobs.service");
exports.jobRouter = (0, express_1.Router)();
exports.jobRouter.post("/", async (req, res) => {
    const data = req.body;
    console.log("Post data ", data);
    try {
        const result = await (0, jobs_service_1.createJob)(Object.assign(Object.assign({}, data), { userId: '48e4e1ad-4523-4c19-b13c-5ab213a0bef3' }));
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.jobRouter.get("/", async (_, res) => {
    try {
        const result = await (0, jobs_service_1.getJobs)();
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.jobRouter.get("/:id", async (req, res) => {
    try {
        const result = await (0, jobs_service_1.getJobById)(req.params.id);
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
exports.jobRouter.patch("/:id", async (req, res) => {
    try {
        const result = await (0, jobs_service_1.updateJob)(req.params.id, req.body);
        res.send(result);
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=jobs.controller.js.map