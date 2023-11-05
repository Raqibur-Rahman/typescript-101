//

//Normal Function
{


function add( num1:number, num2:number):number{
    return num1+num2;
}

let see=add(2,5);
console.log(see)

const addArrow = (num1:number, num2:number): number => num1+num2


const richUser ={
    name:"Raqibur",
    balance:0,
    addBalance(balance:number):string{
        return `My new balance is ${this.balance+balance}`;
    }
}


const arr : number [] =[1,4,10]

const newArray :number[] = arr.map((element : number) :number =>element*element);

}