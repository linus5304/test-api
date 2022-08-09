"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const jobs_controller_1 = require("./modules/jobs/jobs.controller");
const users_controller_1 = require("./modules/users/users.controller");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
exports.prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
}));
app.use(express_1.default.json());
app.use("/users", users_controller_1.userRouter);
app.use("/jobs", jobs_controller_1.jobRouter);
app.get("/", async (_, res) => {
    const data = await exports.prisma.job.findMany();
    res.send(data);
});
app.listen(4000, () => {
    console.log(`Server running on http://localhost:4000`);
});
//# sourceMappingURL=index.js.map