const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.



for(var i=0; i<planets.length;i++){
    
    
    var planet= document.createElement("div");
    planet.className="planet";
    
    var radius= (planets[i].diameter/500);
    planet.style.height=radius+"px";
    planet.style.width=radius+"px";
    planet.style.backgroundColor=planets[i].color
    // planet.style.backgroundColor=""
    planet.style.cssText+= " background-image: radial-gradient(circle at left,"+planets[i].color+",#000);";
    var planet_detail= document.createElement("a");
    planet_detail.innerHTML="Name: "+planets[i].name +"<br>"+"Diameter: "+planets[i].diameter;
    
    planet.appendChild(planet_detail);


    solarSystem.appendChild(planet);

}
