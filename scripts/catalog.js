let cakes;
let choosedCakes = [];

const chooseCake = (element) => {
    if (choosedCakes.includes(element.id)) {
        choosedCakes = choosedCakes.filter(cakeId => cakeId !== element.id);
        element.classList.remove("active");
    } else {
        choosedCakes.push(element.id);
        element.classList.add("active");
    }
};

const getCakes = async () => {
    const response = await fetch("https://6654d0c33c1d3b6029377970.mockapi.io/api/cakes");
    return await response.json();
}

const renderCakes = () => {
    let types = new Set(
        cakes.map(cake => cake.type)
    );
    types = Array.from(types);
    
    const cakesContainer = document.getElementsByClassName("cakes")[0];
    
    types.forEach(type => {
        const catalogSection = document.createElement("div");
        catalogSection.classList.add("cake-section");

        const catalogSectionTitleContainer = document.createElement("div");
        catalogSectionTitleContainer.classList.add("catalog-title");
        catalogSectionTitleContainer.id = type;

        const catalogSectionTitleText = document.createElement("p");
        const title = document.createTextNode(type);
        const cellsContainer = document.createElement("div");

        cellsContainer.classList.add("cells");

        const cakesByType = cakes.filter(cake => cake.type === type);

        cakesByType.forEach(cake => {
            const cell = document.createElement("div");
            cell.classList.add("cells-item");
            cell.id = cake.id;
            cell.onclick = () => chooseCake(cell);

            const cakeTitle = document.createElement("h2");
            cakeTitle.classList.add("cake-name");
            const cakeTitleText = document.createTextNode(cake.name);
            cakeTitle.appendChild(cakeTitleText);

            const image = document.createElement("img");
            image.src = cake.image;
            image.width = 400;
            image.height = 350;

            const cakeDesc = document.createElement("p");
            cakeDesc.classList.add("cake-description");
            const cakeDescText = document.createTextNode(cake.description);
            cakeDesc.appendChild(cakeDescText);

            cell.appendChild(cakeTitle);
            cell.appendChild(image);
            cell.appendChild(cakeDesc);
            cellsContainer.appendChild(cell);
        });

        catalogSectionTitleText.appendChild(title);
        catalogSectionTitleContainer.appendChild(catalogSectionTitleText);
        catalogSection.appendChild(catalogSectionTitleContainer);
        catalogSection.appendChild(cellsContainer);
        cakesContainer.appendChild(catalogSection);
    });
};

getCakes().then((data) => {
    cakes = data;
    renderCakes();
});

const redirectToCart = () => {
    if (choosedCakes.length === 0) {
        return alert("Сначала выберите тортик");
    }

    const params = choosedCakes.map(id => `id=${id}`).join("&");
    window.location.href = "cart.html?" + params;
};