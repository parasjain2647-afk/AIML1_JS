function result(){ 
var subjects = document.getElementById("sub").value; 
var total = 0; 
for(var i=1; i<=subjects; i++) 
{ 
var marks = prompt("Enter marks of subject " + i); 
total = total + Number(marks); 
var average = total / subjects; 
var grade; 
}
if(average >= 60) 
{ 
    grade = "A";
    document.getElementById("output").style.background="green";
} 
else if(average >= 50) 
{ 
    grade = "B";
    document.getElementById("output").style.background="green";
} 
else if(average >= 40) 
{ 
    grade = "C";
    document.getElementById("output").style.background="green";
} 
else 
{ 
    grade = "Fail";
    document.getElementById("output").style.background="red";
}  
document.getElementById("output").innerHTML = "Total Marks = " + total + "<br>" + "Average Marks = " + average + "<br>" + "Grade = " + grade; 
}