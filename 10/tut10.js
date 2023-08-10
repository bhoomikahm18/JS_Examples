const mygreet = function (name, thank = 'Thank you') {
    let msg = `Happy Birthday ${name} Another year, and you're just getting sweeter.You look ageless, grow wiser and get more fun every year.It's your special day—the day you get a free dessert at a restaurant in exchange for being stared at by everyone in the place! I can't wait to celebrate with you tonight.I love you for so many reasons, and today you're giving me an excuse to eat cake, so it's really over the top Happy birthday! ${thank}`;
    return msg;
}
let name = 'Madhumitha';
let name2 = 'Bhoomi';


let val = mygreet(name, 'Thanks a lot');
console.log(val);
// console.log(`Happy Birthday ${name2} When someone near and dear to you turns another year older, you’ll want to do everything you can to make their day extra memorable. Whether you’re throwing a birthday party, a cocktail party, or planning a dinner at the honoree’s favorite restaurant, you’ll want to give the guest of honor a Happy Birthday card and birthday gift.`);
const myobj = {
    name: "Madhumitha",
    game: function() {
        return "GTA";
    }
}
console.log(myobj.game());

arr = ['fruits','vegetables','non-veg'];
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});