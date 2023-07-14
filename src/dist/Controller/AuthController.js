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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = exports.updateOneUser = exports.getOneUser = exports.login = exports.AllUser = exports.createUser = void 0;
const authModel_1 = __importDefault(require("../Model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
//creating all user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, avatar, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const CreatingUser = yield authModel_1.default.create({
            userName,
            email,
            avatar,
            password: hash
        });
        return res.status(200).json({
            message: "User created successfully",
            data: CreatingUser
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "An error occured while creating a user"
        });
    }
});
exports.createUser = createUser;
//getting all user
const AllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find();
        return res.status(200).json({
            message: `Gotten ${user.length} successfully`,
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating"
        });
    }
});
exports.AllUser = AllUser;
//login in a user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const getuser = yield authModel_1.default.findOne({ email });
        //comparing the signed password
        const hash = yield bcrypt_1.default.compare(password, getuser === null || getuser === void 0 ? void 0 : getuser.password);
        //checking if user exist
        if (getuser) {
            if (getuser) {
                res.status(200).json({
                    message: `Gotten ${getuser.userName}`,
                    data: getuser._id,
                });
            }
            else {
                res.status(404).json({
                    message: "password is not correct",
                });
            }
        }
        else {
            res.status(404).json({
                message: "usser cannot be found"
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating"
        });
    }
});
exports.login = login;
//getting a single user
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findById(id);
        return res.status(200).json({
            message: "Gotten one user ",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating"
        });
    }
});
exports.getOneUser = getOneUser;
//updating a user
const updateOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { userName, avatar } = req.body;
        const user = yield authModel_1.default.findByIdAndUpdate(id, {
            userName,
            avatar
        }, { new: true });
        return res.status(201).json({
            message: "updating one user ",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error updating on user"
        });
    }
});
exports.updateOneUser = updateOneUser;
//deleting a user
const deleteOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield authModel_1.default.findByIdAndUpdate(id);
        return res.status(201).json({
            message: "deleting one user ",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error deleting on user"
        });
    }
});
exports.deleteOneUser = deleteOneUser;
