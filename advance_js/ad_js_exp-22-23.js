var INDIA = {
    "capital":"delhi",
    "state":28,
    "unionTerritories":8,
    "finance-capital":"mumbai",
    "bigStateArea":"rajastan",
    "bigStatePopulation":"uttarpradesh",
    "bigStateCapital":"maharashtra"
}

console.log("india's capital is " +"'"+ INDIA.capital+"'" + " & it has total " + ""+ INDIA.state+" state"+ " & " + INDIA.unionTerritories +""+ " union territories but I'm living in " +""+ INDIA.bigStateCapital);

dis = (location, location1)=>{
    location= "Pune"
    location1= "Mumbai"
    console.log("I'm living in" +" "+ location +" & "+ location1+" "+ "district");
    console.log(location1);
    console.log(location);
}

dis();
// dis(location1);