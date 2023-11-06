{
    //union types

    type FrontendDeveloper = 'unskilledDeveloper' | 'juniorDeveloper';
    type developer = FrontendDeveloper | FullStackDeveloper;
    type FullStackDeveloper = "frontendDeveloper" | "ExpertDeveloper";

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    //
    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "AB+";
    }

    const user1: User = {
        name: "Raqib",
        gender: "male",
        bloodGroup: "A+"


    }



    type FrontendDeveloperN = {
        skills: string[];
        designation1: "Frontend Developer"
    }

    type BackendDeveloperN = {
        skills: string[];
        designation2: "Backend Developer"
    }

    type FullstackDeveloperN = FrontendDeveloperN & BackendDeveloperN;

    const fullstackDeveloperN: FullstackDeveloperN = { 
        skills: ['r', 'm'],
        designation1: 'Frontend Developer',
        designation2:'Backend Developer'

    }
    




}