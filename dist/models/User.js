"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const __1 = require("..");
const createUser = async ({ email, firstname, lastname, password, phone, }) => {
    const result = await __1.prisma.user.create({
        data: {
            email,
            lastname,
            firstname,
            phone,
            password,
        },
    });
    return result;
};
exports.createUser = createUser;
const getUsers = async () => {
    const result = await __1.prisma.user.findMany();
    return result;
};
exports.getUsers = getUsers;
const getUserById = async (id) => {
    const result = await __1.prisma.user.findUnique({ where: { id } });
    return result;
};
exports.getUserById = getUserById;
const updateUser = async (id, data) => {
    const result = await __1.prisma.user.update({ where: { id }, data: Object.assign({}, data) });
    return result;
};
exports.updateUser = updateUser;
//# sourceMappingURL=User.js.map