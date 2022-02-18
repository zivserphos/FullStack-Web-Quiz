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
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const fs_1 = require("fs");
const dynamodb = new aws_sdk_1.default.DynamoDB({ region: "eu-west-1" });
const genTables = () => __awaiter(void 0, void 0, void 0, function* () {
    const tablesToBeCreatedInDynamoDB = yield fs_1.promises
        .readdir("./src/db/questions", "utf-8")
        .catch((err) => console.log(err));
    if (!tablesToBeCreatedInDynamoDB)
        return;
    tablesToBeCreatedInDynamoDB.map((fileName) => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            TableName: fileName.split(".json")[0],
            KeySchema: [
                { AttributeName: "id", KeyType: "HASH" },
                { AttributeName: "difficulty", KeyType: "RANGE" }, // Sort key
            ],
            AttributeDefinitions: [
                { AttributeName: "id", AttributeType: "N" },
                { AttributeName: "difficulty", AttributeType: "S" },
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 2,
                WriteCapacityUnits: 2,
            },
        };
        return dynamodb
            .createTable(params)
            .promise()
            .then((data) => console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2)))
            .catch((err) => {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
        });
    }));
});
genTables();
