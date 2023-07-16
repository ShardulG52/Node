import { age } from "../shared/constant/age.js";
import { mySqlConnection } from "../shared/constant/mySqlConnection.js";
import { emptyOrRows, getOffSet } from "../shared/constant/pagination.js";

const employeeAgeBetweenThirtyAndForty = async () => {
  try {
    const data = await mySqlConnection.query(
      `SELECT concat_ws(' ',first_name,last_name) as employee_name, salary 
      FROM employees e 
      JOIN  salaries s 
      ON e.emp_no = s.emp_no 
      WHERE ${age} BETWEEN 30 AND 40`
    );
    if (data[0]) {
      return data[0];
    } else {
      throw new Error("No Record Found");
    }
  } catch (error) {
    return error.message;
  }
};

const employeePagination = async (page = 1) => {
  try {
    const listPerPage = 10;
    const offSet = getOffSet(page, listPerPage);
    const rows = await mySqlConnection.query(
      `SELECT concat_ws(' ',first_name,last_name) as employee_name , d.dept_name as dept_name , ${age} as employee_age , t.title as employee_title 
      FROM employees  e 
      JOIN dept_emp de 
      ON e.emp_no=de.emp_no 
      JOIN departments d 
      ON de.dept_no=d.dept_no 
      JOIN titles t 
      ON e.emp_no=t.emp_no 
      ORDER BY employee_age  
      LIMIT ${offSet},${listPerPage}
        `
    );
    const data = emptyOrRows(rows);
    return { data };
  } catch (error) {
    return error.message;
  }
};

const employeeSortingAscAgeDescHireDate = async () => {
  try {
    const data = await mySqlConnection.query(
      `SELECT * FROM employees ORDER BY ${age} ASC , hire_date DESC   `
    );
    return data[0];
  } catch (error) {
    return error.message;
  }
};

const getByEmployeeNumber = async (empNumber) => {
  try {
    const data = await mySqlConnection.query(
      `SELECT * FROM employees where emp_no=${empNumber}`
    );
    if (data[0]) {
      return data[0];
    } else {
      throw new Error("No Record Found");
    }
  } catch (error) {
    return error.message;
  }
};

export {
  employeeAgeBetweenThirtyAndForty,
  employeePagination,
  employeeSortingAscAgeDescHireDate,
  getByEmployeeNumber,
};
