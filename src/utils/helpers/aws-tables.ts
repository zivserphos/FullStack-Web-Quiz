import AWS from "aws-sdk";
import { promises as fsPromises } from "fs";

const dynamodb = new AWS.DynamoDB({ region: "eu-west-1" });

const genTables = async () => {
  const tablesToBeCreatedInDynamoDB: void | string[] = await fsPromises
    .readdir("./src/db/questions", "utf-8")
    .catch((err) => console.log(err));
  if (!tablesToBeCreatedInDynamoDB) return;

  tablesToBeCreatedInDynamoDB.map(async (fileName) => {
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
