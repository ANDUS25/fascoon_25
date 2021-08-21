class Name{
    // using constructor 
    constructor(){
        this.MyName= "Invisible"
    }

    // using "this"
    fname(){
        this.MyName = "Iron Man"
        console.log(this.MyName);
    }
}

// for constructor
aa = new Name()
console.log(aa.MyName);

// for this 
aa.fname()