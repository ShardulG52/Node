import { greet } from "./greet.js";
//import { argv } from "process";

//const myName = argv[2];

const myName = process.argv[2];

greet(myName);
