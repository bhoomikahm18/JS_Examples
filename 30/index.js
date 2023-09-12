const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "ML"},
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    },1000);
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Student have been fetched");
    },5000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
// getStudents();