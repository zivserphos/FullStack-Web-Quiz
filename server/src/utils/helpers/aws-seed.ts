import AWS from "aws-sdk";
import { promises as fsPromises } from "fs";

const docClient = new AWS.DynamoDB.DocumentClient({ region: "eu-west-1" });

const saveItem = async (Item: Question, TableName: string) => {
  const params = {
    TableName,
    Item,
  };
  const newItem = await docClient
    .put(params)
    .promise()
    .catch((err) => console.log(`could not upload this item because:${err}`));
  console.log(newItem);
};

const batchInsert = async () => {
  const filesToBeSavedInDynamoDB: void | string[] = await fsPromises
    .readdir("./src/db/questions", "utf-8")
    .catch((err) => console.log(err));
  if (!filesToBeSavedInDynamoDB) return;

  filesToBeSavedInDynamoDB.map(async (fileName) => {
    const fileContent: Question[] = JSON.parse(
      fsPromises.readFile(`./src/db/questions/${fileName}`).toString()
    );
    fileContent.map((question) =>
      saveItem(question, fileName.split(".json")[0])
    );
  });
};

batchInsert();
