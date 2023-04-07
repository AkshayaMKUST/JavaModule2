var Emplo = /** @class */ (function () {
    function Emplo() {
        this.empno = 101;
        this.ename = "abc";
        this.sal = 20000;
        this.attendance = 18;
    }
    Emplo.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendance);
        console.log(typeof this.attendance === "number");
    };
    return Emplo;
}());
var emp = new Emplo();
var emp1 = new Emplo();
emp1.empno = 102;
var emp2 = new Emplo();
emp2.empno = 103;
emp.print();
var emparray1 = [emp, emp1, emp2];
for (var index = 0; index < emparray1.length; index++) {
    var element = emparray1[index];
    element.print();
}
var emparray2 = [];
console.log(typeof (emparray2));
emparray2[0] = emp;
emparray2.push(emp);
emparray2.push(emp1);
emparray2.push(emp2);
for (var index = 0; index < emparray2.length; index++) {
    var element = emparray2[index];
    element.print();
}
