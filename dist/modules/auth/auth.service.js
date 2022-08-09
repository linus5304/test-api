"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const __1 = require("../..");
const register = async ({ email, password }) => {
    if (!email && !password)
        throw Error("All input is required");
    const testUser = await __1.prisma.user.findFirst({
        where: { email },
    });
    if (testUser)
        throw Error("User already Exist");
};
exports.register = register;
//# sourceMappingURL=auth.service.js.map