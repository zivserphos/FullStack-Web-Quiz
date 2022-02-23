"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./utils/config"));
require("./db/mongo");
const PORT = config_1.default.port || 3001;
app_1.default.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
