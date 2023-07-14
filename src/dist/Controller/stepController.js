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
exports.creatingStep = void 0;
const taskModel_1 = __importDefault(require("../Model/taskModel"));
const authModel_1 = __importDefault(require("../Model/authModel"));
const stepModel_1 = __importDefault(require("../Model/stepModel"));
//creating a a step by that is been assigned to a particular task
const creatingStep = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { assignedName, assignedPriority, assignedTask } = req.body;
        //getting who the task is bbben assigned to my the team lead
        const userAuth = yield authModel_1.default.findOne({ userName: assignedName });
        // geeting the task that step wiil be created for
        const task = yield taskModel_1.default.findById(id);
        //checking
        if (userAuth) {
            const step = yield stepModel_1.default.create({
                assignedTask,
                assignedName: userAuth === null || userAuth === void 0 ? void 0 : userAuth.userName,
                assignedAvatar: userAuth.avatar,
                assignedPriority
            });
            //pushing the id of the creted step to the user
        }
        else {
            res.status(404).json({
                message: "An error occured while creating the steps for to the assigned user"
            });
        }
    }
    catch (error) {
        res.status(404).json({
            message: "Error Creating task",
        });
    }
});
exports.creatingStep = creatingStep;
