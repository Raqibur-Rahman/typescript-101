//type Alias
//what is alias?
{

    type Student = {
        name: string,
        age: number,
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1:Student = {
        name: "Raqib",
        age: 50,
        gender: 'Male',
        contactNo: '01545262562',
        address: 'Dhaka'
    }

    const student2: Student= {
        name: "Mir",
        age: 40,
        gender: 'Male',
        address: "Ctg"
    }


    type UserName = string;
    type IsAdmin= boolean;

    const user : UserName = "Raqib";
    const isAdmin : IsAdmin =true; 

    
}
