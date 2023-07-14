"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mainapp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Mainapp = (app) => {
    app.use((0, cors_1.default)())
        .use(express_1.default.json());
    app.get("/", (req, res) => {
        try {
            res.status(200).json({
                message: "Awesome request"
            });
        }
        catch (error) {
            res.status(404).json({
                message: "Error found"
            });
        }
    });
};
exports.Mainapp = Mainapp;
