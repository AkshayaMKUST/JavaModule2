class Emplo{

empno:number;
ename:string;
sal : number;
attendance : any;
    
constructor(){

    this.empno = 101;
    this.ename = "abc";
    this.sal = 20000;
    this.attendance = 18;
    }



print():void{
        
        console.log(this.empno, this.ename, this.sal, this.attendance);
        console.log(typeof this.attendance === "number" );
}
}

var emp = new Emplo();
var emp1 = new Emplo();
emp1.empno = 102;
var emp2 = new  Emplo();
emp2.empno = 103;
emp.print();

var emparray1 : Emplo[] = [emp,emp1, emp2];

for (let index = 0; index < emparray1.length; index++) {
    const element = emparray1[index];
      element.print();
    
}

var emparray2: Emplo[]= [];

console.log(typeof(emparray2));

emparray2[0] = emp;

emparray2.push(emp);
emparray2.push(emp1);
emparray2.push(emp2);


for (let index = 0; index < emparray2.length; index++) {
    const element = emparray2[index];
      element.print();
    
}
    



