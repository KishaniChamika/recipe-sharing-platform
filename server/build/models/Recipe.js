"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var recipeSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    ingredients: String,
    instructions: String,
    category: String,
    isFavorite: { type: Boolean, default: false },
});
var Recipe = (0, mongoose_1.model)('Recipe', recipeSchema);
exports.default = Recipe;
