import { mySqlConnection } from "../shared/constant/mySqlConnection.js";

const departmentManagerSalary = async () => {
  try {
    const data = await mySqlConnection.query(
      `SELECT concat_ws(' ',e.first_name,e.last_name) as manager_name , e.gender as manager_gender , d.dept_name as department_name , s.salary as salary 
        FROM employees  e
        JOIN dept_manager dm 
        ON e.emp_no=dm.emp_no 
        JOIN departments d
        ON dm.dept_no=d.dept_no 
        JOIN salaries s 
        ON e.emp_no=s.emp_no
        `
    );

    return data[0];
  } catch (error) {
    return error.message;
  }
};

const departmentWiseMaxSalary = async (deptName) => {
  try {
    const data = await mySqlConnection.query(
      `SELECT d.dept_name as department_name ,concat_ws(' ',e.first_name,e.last_name) as employee_name ,(s.salary) as max_salary 
        FROM employees  e
        JOIN dept_emp de 
        ON e.emp_no=de.emp_no 
        JOIN departments d 
        ON de.dept_no=d.dept_no 
        JOIN salaries s 
        ON e.emp_no=s.emp_no 
        WHERE d.dept_name='${deptName}'
        ORDER BY max_salary DESC LIMIT 1`
    );
    return data[0];
  } catch (error) {
    return error.message;
  }
};

const sumOfDeptEmployeeSalary = async (deptName) => {
  try {
    const data = await mySqlConnection.query(
      ` SELECT d.dept_name as department_name  ,SUM(salary) as total_salary 
        FROM employees  e
        JOIN dept_emp de 
        ON e.emp_no=de.emp_no
        JOIN departments d
        ON de.dept_no=d.dept_no
        JOIN salaries s 
        ON e.emp_no=s.emp_no 
        WHERE d.dept_name='${deptName}'`
    );
    return data[0];
  } catch (error) {
    return error.message;
  }
};

export {
  departmentManagerSalary,
  departmentWiseMaxSalary,
  sumOfDeptEmployeeSalary,
};
