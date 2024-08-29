"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userController_1 = require("../controllers/userController");
var auth_1 = require("../middlewear/auth");
var multer_1 = __importDefault(require("multer"));
var userRouter = express_1.default.Router();
var upload = (0, multer_1.default)({ dest: 'uploads/avatars' });
userRouter.post('/register', userController_1.register);
userRouter.post('/login', userController_1.login);
userRouter.get('/user', auth_1.Authenticate, userController_1.profile);
userRouter.put('/user', auth_1.Authenticate, upload.single('avatar'), userController_1.updateProfile);
exports.default = userRouter;
