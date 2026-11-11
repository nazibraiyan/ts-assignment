const multiplyValue =(value :number,multiplier?:number):number =>

{
  if(multiplier==undefined)
    return value*2;
  return value*multiplier;
}


const processInput =(value: number|string|boolean): number | string=>
{
  if(typeof value==="string")
  {
    return value.trim().toLowerCase();
  }
  else if(typeof value==="number")
  {
    return value*10;
  }
  else
  {
    if(value) return "Active";
    else return "Inactive";
  }
}

const formatCoordinate=(location :readonly[number,number,string]):string=>
{
  return `Location: ${location[2]} (${location[0]},${location[1]})`
};


const concatenateArrays=<T>(...arrays: T[][]):T[]=>

{
  return arrays.flat();
};
 
interface Course{
  title: string;
  students:number;
  isPublished :boolean;
}

const getPopularCourses=
(
  courses: Course[],
  minStudents: number
):Course[] => { const result: Course[]=[];

for (let i =0;i <courses.length; i++)
  {
    if (
      courses[i].isPublished ===true 
      &&
      courses[i].students >= minStudents
    ) {
      
      result.push(courses[i]);
    }
  }

  return result;
};

const pluckValues= <T, K extends keyof T>
(
  items: T[],
  key:K
): T[K][] => 
{
 let arr: T[K][]= [];
 items.forEach((item) => {
  arr.push(item[key]);
});

return arr;
}

class Employee{
  protected name :string;
  private baseSalary: number;

  constructor(name:string,baseSalary:number)
  {
    this.name=name;
    this.baseSalary=baseSalary;
  }

  getDetails():string
  {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;

  }


}

class Manager extends Employee{
  private department: string;



  constructor(name:string,baseSalary:number,department: string)
  {
    super(name,baseSalary);
    this.department=department;
  }

  getRoleInfo():string
  {
    return `Manager of ${this.department}: ${this.name}`;
  }
}



async function validateAgeAsync(age:number ): Promise<string>
{
  return new Promise<string>((resolve,reject)=>{

    if(age>=18)
    {
      setTimeout(()=>
      {
        resolve("Access Granted");
      },1000);
    }

    else{
      reject(new Error("Access Denied: Must be 18 or older"));

    }
  });
}  


