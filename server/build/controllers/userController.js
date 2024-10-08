"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfile = exports.profile = exports.login = exports.register = void 0;
var User_1 = require("../models/User");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, user, hashPass, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (user) {
                    res.status(400).json({ message: "User already exists" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 10)];
            case 3:
                hashPass = _b.sent();
                return [4 /*yield*/, User_1.User.create({ username: username, email: email, password: hashPass })];
            case 4:
                // Create new user
                user = _b.sent();
                res.status(201).json({ message: "User registered successfully!" });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.error("Registration error:", error_1); // Log the error for debugging
                res.status(500).json({ message: error_1.message || 'An error occurred during registration.' });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, validPass, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, User_1.User.findOne({ email: email })];
            case 2:
                user = _b.sent();
                //console.log("User is coming from login",user)
                if (!user)
                    return [2 /*return*/, res.json({ message: "User not exist..!" })];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 3:
                validPass = _b.sent();
                if (!validPass)
                    return [2 /*return*/, res.json({ message: "Invalid credentials" })];
                token = jsonwebtoken_1.default.sign({ userId: user._id }, "!@#$%^&*()", {
                    expiresIn: '1d'
                });
                res.json({ message: "Welcome ".concat(user.username), token: token });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _b.sent();
                res.json({ message: error_2 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var profile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            res.status(200).json({ user: req.user });
        }
        catch (error) {
            res.status(500).json({ message: "Server error", error: error });
        }
        return [2 /*return*/];
    });
}); };
exports.profile = profile;
var updateProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstname, lastname, bio, avatar, updatedUser, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstname = _a.firstname, lastname = _a.lastname, bio = _a.bio;
                avatar = req.user.avatar;
                if (req.file) {
                    avatar = req.file.path;
                }
                return [4 /*yield*/, User_1.User.findByIdAndUpdate(req.user._id, {
                        firstname: firstname,
                        lastname: lastname,
                        bio: bio,
                        avatar: avatar
                    }, { new: true })];
            case 1:
                updatedUser = _b.sent();
                res.json({ message: "Profile updated successfully", user: updatedUser });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                res.status(500).json({ message: "Error updating profile", error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateProfile = updateProfile;
