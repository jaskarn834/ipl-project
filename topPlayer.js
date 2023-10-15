var team = [
    {
        "teamName": "Mumbai Chennai",
        "teamPhoto": "download.png",
        "playercount": "5",
        "topbatsman": "rohit",
        "topblower": "bhumara",
        "wonMatch": "Won Count :5"
    }
]

var player = [
    {
        "playerPhoto": "m1.png",
        "playerName": "Mumbai Chennai",
        "worth": "Won Count :5",
        "playing": "playing : playing",
        "type": "batsman"
    },
    {
        "playerPhoto": "m2.png",
        "playerName": "Mumbai Chennai",
        "worth": "Won Count :5",
        "playing": "playing : playing",
        "type": "batsman"

    },
    {
        "playerPhoto": "m3.png",
        "playerName": "Mumbai Chennai",
        "worth": "Won Count :5",
        "playing": "playing : playing",
        "type": "batsman"

    },
    {
        "playerPhoto": "m4.png",
        "playerName": "Mumbai Chennai",
        "worth": "Won Count :5",
        "playing": "playing : playing",
        "type": "batsman"

    },
    {
        "playerPhoto": "m5.png",
        "playerName": "Mumbai Chennai",
        "worth": "Won Count :5",
        "playing": "playing : playing",
        "type": "batsman"

    }
]
const table = document.getElementById("playertable")
for (let i = 0; i < team.length; i++) {

    const table1 = document.createElement("table")
    const tr1 = document.createElement("tr")
    const tr2 = document.createElement("tr")
    const tr3 = document.createElement("tr")
    const tr4 = document.createElement("tr")
    const tr5 = document.createElement("tr")
    const tr6 = document.createElement("tr")

    const td1 = document.createElement("td")
    td1.appendChild(document.createTextNode("Team name"))
    const td2 = document.createElement("td")
    td2.appendChild(document.createTextNode(team[i]["teamName"]))

    const tphoto = document.createElement("img");//team photo
    tphoto.src = team[i]["teamPhoto"]
    tphoto.classList.add("tphoto")
    const td3 = document.createElement("td")
    td3.appendChild(document.createTextNode("Team photo"))
    const td4 = document.createElement("td")
    td4.appendChild(tphoto)

    const td5 = document.createElement("td")
    td5.appendChild(document.createTextNode("player count"))
    const td6 = document.createElement("td")
    td6.appendChild(document.createTextNode(team[i]["playercount"]))

    const td7 = document.createElement("td")
    td7.appendChild(document.createTextNode("Top batsman"))
    const td8 = document.createElement("td")
    td8.appendChild(document.createTextNode(team[i]["topbatsman"]))

    const td9 = document.createElement("td")
    td9.appendChild(document.createTextNode("Top blower"))
    const td10 = document.createElement("td")
    td10.appendChild(document.createTextNode(team[i]["topblower"]))

    const td11 = document.createElement("td")
    td11.appendChild(document.createTextNode("Won Match"))
    const td12 = document.createElement("td")
    td12.appendChild(document.createTextNode(team[i]["wonMatch"]))

    tr1.appendChild(td1)
    tr1.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)
    tr3.appendChild(td5)
    tr3.appendChild(td6)
    tr4.appendChild(td7)
    tr4.appendChild(td8)
    tr5.appendChild(td9)
    tr5.appendChild(td10)
    tr6.appendChild(td11)
    tr6.appendChild(td12)

    table1.appendChild(tr1)
    table1.appendChild(tr2)
    table1.appendChild(tr3)
    table1.appendChild(tr4)
    table1.appendChild(tr5)
    table1.appendChild(tr6)

    table.appendChild(table1)
}



console.clear()
let ff = document.getElementById("cards");
ff.classList.add("flex")
for (let i = 0; i < player.length; i++) {
    const nam1 = document.createElement("div");//create card 
    nam1.classList.add("card")

    const pphoto = document.createElement("img");//team photo
    pphoto.src = player[i]["playerPhoto"]
    pphoto.classList.add("teamPhoto")

    const pname = document.createElement("p")//create a team name
    pname.appendChild(document.createTextNode(player[i]["playerName"]))
    pname.style.color = "white"


    const worth = document.createElement("p");//create h2 for wonmatch
    worth.appendChild(document.createTextNode(player[i]["worth"]))
    worth.style.color = "white"

    const playing = document.createElement("p");//create h2 for wonmatch
    playing.appendChild(document.createTextNode(player[i]["playing"]))
    playing.style.color = "white"

    const ptype = document.createElement("p");//create h2 for wonmatch
    ptype.appendChild(document.createTextNode(player[i]["type"]))
    ptype.style.color = "white"

    const anchor = document.createElement("a");//create a anchor tag
    anchor.setAttribute("href", player[i]["url"])

    const twappend = document.createElement("div")
    twappend.classList.add("twappend")

    anchor.appendChild(nam1)
    nam1.appendChild(pphoto)
    nam1.appendChild(twappend)

    twappend.appendChild(pname)
    twappend.appendChild(worth)
    twappend.appendChild(playing)
    twappend.appendChild(ptype)


    // ff.appendChild(nam1);
    ff.appendChild(anchor)

}
