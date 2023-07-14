import express, { Router } from "express";
import {
    AllUser,
  createUser,
  deleteOneUser,
  getOneUser,
  login,
  updateOneUser,
} from "../Controller/AuthController";

const router: Router = express.Router();

router.route("/all-users").get( AllUser);
router.route("/:id/get-one-user").get(getOneUser);
router.route("/:id/update-users").patch(updateOneUser);
router.route("/:id/delete-users").delete(deleteOneUser);
router.route("/register").post(createUser);
router.route("/sign-in").post(login);

export default router;
