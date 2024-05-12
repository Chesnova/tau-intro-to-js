const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function () {
        console.log("I am eating " + this.name);
    }
};
console.log(cookie);
cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;

console.log(cookie);
console.log(cookie["+Yummy"]);

cookie.eatCookie();


class Cookie {
    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    eatCookie() {
        console.log("I am eating " + this.name);
    }
}

const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie);
console.log(myCookie.name);
console.log(myCookie["name"]);
myCookie.eatCookie();
