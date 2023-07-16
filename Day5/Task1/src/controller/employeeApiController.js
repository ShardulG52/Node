import {
  employeeAgeBetweenThirtyAndForty,
  employeePagination,
  employeeSortingAscAgeDescHireDate,
  getByEmployeeNumber,
} from "../service/employeeApi.js";

const employeeAgeBetweenController = async (req, res) => {
  const employeeAgeBetween = await employeeAgeBetweenThirtyAndForty();
  res.send(employeeAgeBetween);
};

const employeePaginationController = async (req, res) => {
  const page = req.query.page;
  const employeePaged = await employeePagination(page);
  res.send(employeePaged);
};

const employeeSortingAscAgeDescHireDateController = async (req, res) => {
  const sortedDetails = await employeeSortingAscAgeDescHireDate();
  res.send(sortedDetails);
};

const getByEmployeeNumberController = async (req, res) => {
  const { employeeNumber } = req.params;
  const getByEmployeeNum = await getByEmployeeNumber(employeeNumber);
  res.send(getByEmployeeNum);
};

export {
  employeeAgeBetweenController,
  employeePaginationController,
  employeeSortingAscAgeDescHireDateController,
  getByEmployeeNumberController,
};
