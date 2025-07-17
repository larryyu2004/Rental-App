"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tanantControllers_1 = require("../controllers/tanantControllers");
const router = express_1.default.Router();
router.get("/:cognitoId", tanantControllers_1.getTenant);
router.post("/", tanantControllers_1.createTenant);
exports.default = router;
