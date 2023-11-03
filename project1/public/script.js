const showHeros = async () => {
    const heroJSON = await getJSON();
    if (heroJSON == "") {
        return;
    }

    let heroDiv = document.getElementById("project-list");

    heroJSON.forEach((hero) => {
        let section = document.createElement("section");
        heroDiv.append(section);
       
        let img = document.createElement("img");
        section.append(img);
        img.src = "http://localhost:3000/" + hero.img;

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = "Name: " + hero.name;

        let h4 = document.createElement("p");
        section.append(h4);
        h4.innerHTML = "<b>Alias:</b> " + hero.alias;

        let h5 = document.createElement("p");
        section.append(h5);
        h5.innerHTML = "<b>Suit Colors:</b> " + hero.color;

        let h6 = document.createElement("p");
        section.append(h6);
        h6.innerHTML = "<b>City:</b> " + hero.city;

        let h7 = document.createElement("p");
        section.append(h7);
        h7.innerHTML = "<b>Abilities:</b> " + hero.abilities;

    });
};

const getJSON = async () => {
    try {
        let response = await fetch("http://localhost:3000/api/project");
        return await response.json();
    } catch(error) {
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () => {
    showHeros();
};