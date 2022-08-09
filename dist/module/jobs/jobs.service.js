"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJob = exports.getJobById = exports.getJobs = exports.createJob = void 0;
const __1 = require("../..");
const createJob = async (data) => {
    const result = await __1.prisma.job.create({
        data: {
            title: data.title,
            description: data.description,
            userId: data.userId,
        },
    });
    return result;
};
exports.createJob = createJob;
const getJobs = async (where) => {
    const result = await __1.prisma.job.findMany({
        where,
    });
    return result;
};
exports.getJobs = getJobs;
const getJobById = async (id) => {
    const result = await __1.prisma.job.findUnique({ where: { id } });
    return result;
};
exports.getJobById = getJobById;
const updateJob = async (id, data) => {
    const result = await __1.prisma.job.update({ where: { id }, data: Object.assign({}, data) });
    return result;
};
exports.updateJob = updateJob;
//# sourceMappingURL=jobs.service.js.map