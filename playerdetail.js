var team = [
    {
        "pimg": "m1.png",
        "teamName": "ishan khan",
        "teamPhoto": "download.png",
        "playercount": "5",
        "topbatsman": "rohit",
        "topblower": "bhumara",
        "wonMatch": "Won Count :5"
    }
]

const table = document.getElementById("playertable")
for (let i = 0; i < team.length; i++) {

    const img = document.createElement("img")
    img.src = team[i]["pimg"]
    img.classList.add("pimage")


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
    tr3.appendChild(td5)
    tr3.appendChild(td6)
    tr4.appendChild(td7)
    tr4.appendChild(td8)
    tr5.appendChild(td9)
    tr5.appendChild(td10)
    tr6.appendChild(td11)
    tr6.appendChild(td12)

    // table1.appendChild(img)
    table1.appendChild(tr1)
    table1.appendChild(tr3)
    table1.appendChild(tr4)
    table1.appendChild(tr5)
    table1.appendChild(tr6)

    table.appendChild(img)
    table.appendChild(table1)

}
