"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var user_1 = __importDefault(require("./routes/user"));
var recipeRouter_1 = __importDefault(require("./routes/recipeRouter"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', user_1.default);
app.use('/uploads', express_1.default.static('uploads'));
app.use('/api', recipeRouter_1.default);
mongoose_1.default.connect("mongodb+srv://adkishani:dbRecipeApp@cluster0.c8wjr.mongodb.net/RecipeApp?retryWrites=true&w=majority", {
    dbName: "RecipeApp",
})
    .then(function () { return console.log("MongoDB is Connected"); })
    .catch(function (err) { return console.log(err.message); });
var port = 3000;
app.listen(port, '0.0.0.0', function () { return console.log("server is running on port ".concat(port)); });
