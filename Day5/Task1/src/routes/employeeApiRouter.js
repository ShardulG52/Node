import express from "express";
import {
  employeeAgeBetweenController,
  employeePaginationController,
  employeeSortingAscAgeDescHireDateController,
  getByEmployeeNumberController,
} from "../controller/employeeApiController.js";

var employeeRouter = express.Router();

employeeRouter.get("/employeeAgeDiff", employeeAgeBetweenController);
employeeRouter.get("/employeePagination", employeePaginationController);
employeeRouter.get(
  "/sortedDetails",
  employeeSortingAscAgeDescHireDateController
);
employeeRouter.get("/:employeeNumber", getByEmployeeNumberController);

export default employeeRouter;
