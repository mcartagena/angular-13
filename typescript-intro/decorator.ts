function MenuItem(itemID: string) {
    return function (value){
        return class extends value{
            id = itemID;
        }
    };    
}

@MenuItem('abc')
class Pizza{
    id: string;
}

@MenuItem('xyz')
class Hamburger {
    id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);