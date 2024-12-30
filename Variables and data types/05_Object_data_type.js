const student={
    fullName : "Anisul Alam",
    age : 23,
    address : "Chittagong",
    cgpa : 3.56,
    isPass : true,
};

console.log(student);
console.log(typeof(student));

console.log(student["fullName"], typeof(student["fullName"]));
console.log(student["age"], typeof(student["age"]));

console.log(student.address, typeof(student.address));
console.log(student.cgpa, typeof(student.cgpa));
console.log(student.isPass, typeof(student.isPass));

// change any object value -->
student["fullName"] = "Ariful Islam";
student["age"] = 25;
student["isPass"] = false;

console.log(student)