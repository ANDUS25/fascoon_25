// Create New object
const today = new Date();

// Create new object
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
};

// Create heading using "option" array
document.getElementById("heading").innerHTML = today.toLocaleDateString("en-US", options);

// 
var d = new Date();
var currentMonthAndDate = (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "/" + d.getDate();

// Store data in object
const data = [
    {
        id: 1,
        name: "Bertie Yates",
        date: "01/25/2000",
        image:"https://images.unsplash.com/photo-1461800919507-79b16743b257?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Hester Hogan",
        date: currentMonthAndDate + "/1997",
        image:"https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo="
    },
    {
        id: 3,
        name: "Larry Little",
        date: currentMonthAndDate + "/1996",
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Sean Walsh",
        date: currentMonthAndDate + "/1996",
        image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        id: 5,
        name: "Lola Gardner",
        date: "05/25/1996",
        image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-5_rfzshl.jpg"
    },
    {
        id: 6,
        name: "Lola Gardner",
        date: "05/25/1996",
        image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-7_rfzshl.jpg"
    },
    {
        id: 7,
        name: "Lola Gardner",
        date: "05/25/1996",
        image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-9_rfzshl.jpg"
    },
];

var todayData = [];

const currentDate = new Date().getDate();
const currentMonth = new Date().getMonth();

todayData = data.filter((person, index) => {
    const { date } = person;
    return (
        parseInt(date.substring(3, 5)) === currentDate &&
        parseInt(date.substring(0, 2)) === currentMonth + 1
    );
});


var noOfBirthdays = document.getElementById("noOfBirthdays");
noOfBirthdays.innerHTML = todayData.length + " birthdays today";

var people = document.getElementById("people");

todayData.forEach((person) => {
    const { id, name, date, image } = person;

    var article = document.createElement("article");
    article.setAttribute("class", "person");

    var img = new Image();
    img.src = image;
    img.setAttribute("alt", name);

    var info = document.createElement("div");

    var h4 = document.createElement("h4");
    h4.setAttribute("id", "name");
    h4.innerHTML = name;

    var p = document.createElement("p");
    var dob = new Date(date);
    var month_diff = Date.now() - dob.getTime();

    var age_dt = new Date(month_diff);

    var year = age_dt.getUTCFullYear();

    var age = Math.abs(year - 1970);
    p.innerHTML = age + " years";

    info.appendChild(h4);
    info.appendChild(p);

    article.appendChild(img);
    article.appendChild(info);

    people.appendChild(article);
});


function Blank() {
    people.innerHTML = "";
    noOfBirthdays.innerHTML = "0 birthdays today";
}