
function change1() {
    document.getElementById("carouselImg").src = "c1.jpeg"
}
function change2() {
    document.getElementById("carouselImg").src = "c2.jpeg"
}
function change3() {
    document.getElementById("carouselImg").src = "c3.jpeg"
}

setInterval(change1, 2000)
setInterval(change2, 4000)
setInterval(change3, 6000)

var team = [
    {
        "teamPhoto": "download.png",
        "teamName": "Mumbai Chennai",
        "wonMatch": "Won Count :5",
        "url": "file:///E:/IPL/topPlayer.html"
    },
    {
        "teamPhoto": "t2.jpeg",
        "teamName": "Mumbai Chennai",
        "wonMatch": "Won Count :5"
    },
    {
        "teamPhoto": "t3.jpeg",
        "teamName": "Mumbai Chennai",
        "wonMatch": "Won Count :5"
    },
    {
        "teamPhoto": "t5.jpeg",
        "teamName": "Mumbai Chennai",
        "wonMatch": "Won Count :5"
    },
    {
        "teamPhoto": "t3.jpeg",
        "teamName": "Mumbai Chennai",
        "wonMatch": "Won Count :5"
    },
    {
        "teamPhoto": "t6.jpeg",
        "teamName": "Mumbai Chennai",
        "wonMatch": "Won Count :90"
    }
]
console.clear()
let ff = document.getElementById("cards");
ff.classList.add("flex")
for (let i = 0; i < team.length; i++) {
    const nam1 = document.createElement("div");//create card 
    nam1.classList.add("card")

    const tphoto = document.createElement("img");//team photo
    tphoto.src = team[i]["teamPhoto"]
    tphoto.classList.add("teamPhoto")

    const tname = document.createElement("p")//create a team name
    tname.appendChild(document.createTextNode(team[i]["teamName"]))
    tname.style.color = "white"


    const wmatch = document.createElement("p");//create h2 for wonmatch
    wmatch.appendChild(document.createTextNode(team[i]["wonMatch"]))
    wmatch.style.color = "white"

    const anchor = document.createElement("a");//create a anchor tag
    anchor.setAttribute("href", team[i]["url"])
    anchor.style.height = "320px"


    const twappend = document.createElement("div")
    twappend.classList.add("twappend")

    anchor.appendChild(nam1)
    nam1.appendChild(tphoto)
    nam1.appendChild(twappend)
    twappend.appendChild(tname)
    twappend.appendChild(wmatch)


    // ff.appendChild(nam1);
    ff.appendChild(anchor)

}


