var Employee2 = /** @class */ (function () {
    function Employee2(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee2.prototype.getMname = function () {
        return this.mname;
    };
    return Employee2;
}());
var e2 = new Employee2('a', 'b', 'c');
console.log(e2.getMname());
