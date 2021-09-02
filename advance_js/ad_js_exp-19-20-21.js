function multi(x,y,callback){
    console.log(x*y);
    callback();
}

function dis(){
    console.log("total is " +"" +200 );
}

multi(10,20,dis);

// this is a JSON object //
var info = {
    "fname":"Andy!",
    "lname":'unknown',
    "age":23,
    "language":"JSON"
}

console.log("My name is " +"'"+ info.fname +"'"+ " and I'm learning "+"'"+ info.language+"'." );

// This is a JSON array //

var ME=[
    {"fname":"ABC","lname":"XYZ", "age":"Infinte", "country":"INDIA"},
    {"fname":"DEF","lname":"UVW", "age":"Infinte", "country":"INDIA"},
    {"fname":"GHI","lname":"RST", "age":"Infinte", "country":"INDIA"}
]

console.log();