let obj = {
    name: 'harry',
    channel: 'codeWithHarry',
    address: 'Mars'
}
function Obj(givenName) {
    this.name = givenName
}

Obj.prototype.getName = function(){
    return this.name;
}
Obj.prototype.setName = function(newName){
    this.name = newName;
}

let obj2 = new Obj("Harry");
console.log(obj2);