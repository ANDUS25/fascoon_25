// loops

// IF loop
age=10
// age=18
// age=19

if (age < 18){
    console.log("you can't drive");
} 
else if(age == 18) { 
    console.log("you're just 18");
}
else if (age > 18) {
    console.log("you can drive");
}

// while loop
while (age<=25) {
    console.log("I'm in while loop = "+""+age);
    age=age+2;
}

// do while loop
number=20;
do {
    console.log("I'm in do while loop = " +""+ number);
    number=number+2;
} while ( number<=29);