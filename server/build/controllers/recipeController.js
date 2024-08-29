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
exports.searchRecipes = exports.getFavoriteRecipes = exports.updateRecipeFavoriteStatus = exports.getRecipeById = exports.addRecipe = exports.getRecipes = void 0;
var Recipe_1 = __importDefault(require("../models/Recipe"));
// Get all recipes
var getRecipes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var recipes, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Recipe_1.default.find()];
            case 1:
                recipes = _a.sent();
                res.status(200).json(recipes);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({ message: 'Failed to fetch recipes', error: error_1 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRecipes = getRecipes;
// Add a new recipe
var addRecipe = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, image, ingredients, instructions, category, newRecipe, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, image = _a.image, ingredients = _a.ingredients, instructions = _a.instructions, category = _a.category;
                newRecipe = new Recipe_1.default({ name: name, image: image, ingredients: ingredients, instructions: instructions, category: category });
                return [4 /*yield*/, newRecipe.save()];
            case 1:
                _b.sent();
                res.status(201).json(newRecipe);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error('Failed to add recipe:', error_2);
                res.status(500).json({ message: 'Failed to add recipe', error: error_2 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addRecipe = addRecipe;
// Get a recipe by ID
var getRecipeById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var recipe, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Recipe_1.default.findById(req.params.id)];
            case 1:
                recipe = _a.sent();
                if (recipe) {
                    res.status(200).json(recipe);
                }
                else {
                    res.status(404).json({ message: 'Recipe not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ message: 'Failed to fetch recipe', error: error_3 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRecipeById = getRecipeById;
// Update favorite status of a recipe
var updateRecipeFavoriteStatus = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, isFavorite, updatedRecipe, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                isFavorite = req.body.isFavorite;
                return [4 /*yield*/, Recipe_1.default.findByIdAndUpdate(id, { isFavorite: isFavorite }, { new: true } // This option returns the updated document
                    )];
            case 1:
                updatedRecipe = _a.sent();
                if (!updatedRecipe) {
                    return [2 /*return*/, res.status(404).json({ message: 'Recipe not found' })];
                }
                res.status(200).json(updatedRecipe);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.error('Failed to update favorite status:', error_4);
                res.status(500).json({ message: 'Failed to update favorite status', error: error_4 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateRecipeFavoriteStatus = updateRecipeFavoriteStatus;
// Get all favorite recipes
var getFavoriteRecipes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var favoriteRecipes, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Recipe_1.default.find({ isFavorite: true })];
            case 1:
                favoriteRecipes = _a.sent();
                res.status(200).json(favoriteRecipes);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.error('Failed to fetch favorite recipes:', error_5);
                res.status(500).json({ message: 'Failed to fetch favorite recipes' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getFavoriteRecipes = getFavoriteRecipes;
var searchRecipes = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, recipes, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                searchTerm = req.query.searchTerm;
                return [4 /*yield*/, Recipe_1.default.find({ name: new RegExp(searchTerm, 'i') })];
            case 1:
                recipes = _a.sent();
                res.status(200).json(recipes);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.status(500).json({ message: 'Error searching recipes', error: error_6 });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.searchRecipes = searchRecipes;
