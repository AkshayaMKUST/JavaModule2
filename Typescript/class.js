var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    //     this.attendance=18;
    // }
    function Employee(empno, ename, sal, attendance) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendance = attendance;
    }
    Employee.prototype.getEmpno = function () {
        return this.empno;
    };
    Employee.prototype.getEname = function () {
        return this.ename;
    };
    Employee.prototype.getSal = function () {
        return this.sal;
    };
    Employee.prototype.getAttendance = function () {
        return this.attendance;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
    };
    return Employee;
}());
var emp = new Employee(101, "abc", 20000, 18);
var emp1 = new Employee(102, "def", 30000, 20);
// emp1.empno=102;
var emp2 = new Employee(103, "ghi", 50000, 25);
// emp2.empno=103;
emp.print();
emp1.print();
emp2.print();
var emparray = [emp, emp1, emp2];
emparray.forEach(function (element) {
    console.log(element);
});
