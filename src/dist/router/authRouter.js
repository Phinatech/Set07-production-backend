"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../Controller/AuthController");
const router = express_1.default.Router();
router.route("/all-users").get(AuthController_1.AllUser);
router.route("/:id/get-one-user").get(AuthController_1.getOneUser);
router.route("/:id/update-users").patch(AuthController_1.updateOneUser);
router.route("/:id/delete-users").delete(AuthController_1.deleteOneUser);
router.route("/register").post(AuthController_1.createUser);
router.route("/sign-in").post(AuthController_1.login);
exports.default = router;
