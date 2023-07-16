import {
  departmentManagerSalary,
  departmentWiseMaxSalary,
  sumOfDeptEmployeeSalary,
} from "../service/departmentApi.js";

const departmentManagerSalaryController = async (req, res) => {
  const managerSalary = await departmentManagerSalary();
  res.send(managerSalary);
};

const departmentWiseMaxSalaryController = async (req, res) => {
  const { deptName } = req.params;
  const maxSalary = await departmentWiseMaxSalary(deptName);
  res.send(maxSalary);
};

const sumOfDeptEmployeeSalaryController = async (req, res) => {
  const { deptName } = req.params;
  const sumOfDeptSalary = await sumOfDeptEmployeeSalary(deptName);
  res.send(sumOfDeptSalary);
};

export {
  departmentManagerSalaryController,
  departmentWiseMaxSalaryController,
  sumOfDeptEmployeeSalaryController,
};
