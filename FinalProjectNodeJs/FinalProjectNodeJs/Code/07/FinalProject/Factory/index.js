import EmployeeFactory from "./EmployeeFactory.js";

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Nguyễn Tiến Phát", 1));
employees.push(employeeFactory.create("Nguyễn Minh Đức", 2));
employees.push(employeeFactory.create("Bùi Sỹ Phú", 3));
employees.push(employeeFactory.create("Nguyễn Văn An", 4));

employees.forEach((emp) => {
    console.log(emp);
});
