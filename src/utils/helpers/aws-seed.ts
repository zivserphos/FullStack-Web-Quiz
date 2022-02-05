import AWS from "aws-sdk";
// import path from "path";
import { promises as fsPromises } from "fs";

const dynamodb = new AWS.DynamoDB({ region: "eu-west-1" });

const genTables = async () => {
  const filesToSaveInDynamoDB: void | string[] = await fsPromises
    .readdir("./src/db/questions", "utf-8")
    .catch((err) => console.log(err));
  if (!filesToSaveInDynamoDB) return;

  filesToSaveInDynamoDB.map(async (fileName) => {
    const params = {
      TableName: fileName.split(".json")[0],
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" }, // Partition key
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
      .then((data: AWS.DynamoDB.CreateTableOutput) =>
        console.log(
          "Created table. Table description JSON:",
          JSON.stringify(data, null, 2)
        )
      )
      .catch((err: AWS.AWSError) => {
        console.error(
          "Unable to create table. Error JSON:",
          JSON.stringify(err, null, 2)
        );
      });
  });
};

genTables();
const z =  "accounting
- adobe_acrobat
- adobe_photoshop
- adobe_premiere
- android
- angular
- autocad
- aws
- c_plusplus
- css
- cybersecurity
- dictionary
- django
- frontend
- git
- google_ads
- google_analytics
- hadoop
- jquery
- kotlin
- lambda
- linux
- maven
- microsoft-access
- microsoft-power-bi
- microsoft-word
- mongodb
- mysql
- nodejs
- nosql
- objC
- oop
- outlook
- php
- python
- quickbooks
- rails
- react
- restApi
- rprogramming
- rust
- scala
- seo
- sharepoint
- spring
- swift
- t_sql
- unity
- visio
- windows_server
- xml "

// const awsConfig = {
//   region: "eu-west-1",
//   endpoint: "http://dynamodb.eu-west-1.amazonaws.com",
//   accessKeyId: "AKIA3577MFVADHPJNG72",
//   secretAccessKey: "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",
// };
// AWS.config.update(awsConfig);

// const docClient = new AWS.DynamoDB.DocumentClient();
// const counter = 24000;

// const save = function () {
//   for (let i = 0; i < 3000; i += 1) {
//     if (counter === 113375) break;
//     const input = {
//       word: "",
//       pos: "",
//       definitions: "=",
//     };
//     counter += 1;
//     const params = {
//       TableName: "dictionary",
//       Item: input,
//     };
//     docClient.put(params, (err, data) => {});
//   }
// };

// save();
