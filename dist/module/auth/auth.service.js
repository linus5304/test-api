"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const __1 = require("../..");
const register = async (data) => {
    const testUser = await __1.prisma.user.findFirst();
};
exports.register = register;
//# sourceMappingURL=auth.service.js.map