#!/usr/bin/env node

// todo: update file in courses.json to delete or rename title and price

// console.log("Hi!");

// console.log(process.argv);

// if(process.argv[2]==="add"){
//   console.log("you are going to add course with name: " + process.argv[3]);
// }

// const { Command } = require("commander");
import {Command} from "commander";
import inquirer from "inquirer";
import fs from "node:fs";

const program = new Command();
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter course title!"
  },
  {
    type: "number",
    name: "price",
    message: "Enter your course's price"
  }
];

const filePath = "./courses.json";




program
  .name("codeZone_courses_manager")
  .description("CLI to make courses")
  .version("1.0.0");


program
  .command("add")
  .alias("a")
  .description("Add a course")
  // .argument("<title>", "Add course title")
  // .option("--price <price>", "Add course price") // to assign option a value put option name inside <> such as: <option-name> like <price>
  .action(() => {
    // console.log(option);
    // console.log("param, option", param, option);
    inquirer
      .prompt(questions)
      .then((answers) => {
        console.log(answers);
        if(fs.existsSync(filePath)){
          fs.readFile(filePath, "utf-8", (err, fileContent)=>{
            if(err){
              console.log("Error", err);
              process.exit();
            }
            // console.log("fileContent -- ", fileContent);
            const fileContentAsJson = JSON.parse(fileContent);
            fileContentAsJson.push(answers);
            fs.writeFile(filePath, JSON.stringify(fileContentAsJson), "utf8", ()=>{
              console.log("Add Course Done");
              console.log("File Content:", fileContentAsJson);
            })
          });
        }else{
          fs.writeFile('./courses.json', JSON.stringify([answers]), "utf8", (err)=>{
            if(err) console.log("Error:", err);
            else console.log("Add Course Done");
          });
        }
      });
  });



program
  .command("list")
  .alias("l")
  .description("list all Courses")
  .action(() => {
    fs.readFile(filePath, "utf8", (err, content)=>{
      if(err){
        console.log("Error:", err);
        process.exit();
      }else{
        console.table(JSON.parse(content));
      }
    });
  });



// program.parse(process.argv);
program.parse();