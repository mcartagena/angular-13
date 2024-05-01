// string, number, boolean, null, undefined
let myName: string | null = null;

myName = 'test';

// Arrays
let items = [5, 'luis'];

// objects
interface IAccount {
    name: string,
    balance: number,
    status?: string
    deposit?: () => void
}

const account: IAccount = {
    name: 'Marcelo',
    balance: 10
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount{
    constructor(public name, public balance){

    }
    private withdraw(){
        
    }
}