{



    // type GenericArray = Array <boolean|string|number>;
    type GenericArray<T> = Array<T>;


    //generic type
    const rollNumbers: GenericArray<number> = [3, 6, 8];

    // const mentors : string [] =["x","y", "z"]
    const mentors: GenericArray<string> = ["x", "y", "z"]

    // const boolArray:boolean[]=[true,false,true]
    const boolArray: GenericArray<boolean> = [true, false, true];

    interface User{
        name:string;
        age:number;
    }

    const user: GenericArray<User> = [
        {
            name: 'Raqib',
            age: 100

        }, {
            name: "Jhankar vai",
            age: 150
        }]


        //generic tuple 
        type GenericTuple<X,Y>=[X,Y]

       
        const manus:GenericTuple<string,string> =['X','Y']


      


        const UserWithID:GenericTuple<number,{name:string, email:string}> = [12345,{name:"Raqib", email:"raqib1345@gmail.com"}]

     

      



        

}