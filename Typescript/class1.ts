class Employee2{
    private fname:string;
    private mname!:string;
    private lname:string;

    constructor(fname,mname,lname){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }

    getMname():string{
        return this.mname;
    }
}

let e2=new Employee2('a','b','c');
console.log(e2.getMname());