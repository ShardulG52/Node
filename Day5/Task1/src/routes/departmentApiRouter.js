import express from "express";
import {
  departmentManagerSalaryController,
  departmentWiseMaxSalaryController,
  sumOfDeptEmployeeSalaryController,
} from "../controller/departmentApiController.js";

var departmentRouter = express.Router();

departmentRouter.get("/managerSalary", departmentManagerSalaryController);
departmentRouter.get("/maxSalary/:deptName", departmentWiseMaxSalaryController);
departmentRouter.get("/sumSalary/:deptName", sumOfDeptEmployeeSalaryController);

export default departmentRouter;
