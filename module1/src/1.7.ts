{
    //spread operator
    //rest operator
    //destructuring

    //spread operator

    const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
    const bros2: string[] = ["Rahat", 'Tonmoy', 'Nahid']

    bros1.push(...bros2);


    const mentors1 = {
        typeScript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    }
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid"
    }


    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    //rest operator
    
    const greetFriends = (...friends:string[])=>{
       friends.forEach((friend:string)=>console.log(`hi ${friend}`))
    }


    greetFriends("a",'b','c','d');


}