const CAKES = [
    {
        id: 1,
        name: "Торт Прага",
        image: "images/chocolate1.png",
        description: "Описание торта Прага",
        price: 3500,
        type: "Шоколадные 123",
    },
    {
        id: 2,
        name: "Торт Наполеон",
        image: "images/vanilla2.png",
        description: "Описание торта Наполеон",
        price: 2700,
        type: "Сливочные 123",
    },
    {
        id: 3,
        name: "Торт Шоколад",
        image: "images/chocolate2.png",
        description: "Описание торта Шоколад",
        price: 4100,
        type: "Шоколадные 123",
    },
];

let types = new Set(
    CAKES.map(cake => cake.type)
);
types = Array.from(types);


const cakesContainer = document.getElementsByClassName("cakes")[0];

console.log(cakesContainer);

types.forEach(type => {
    const catalogSection = document.createElement("div");
    catalogSection.classList.add("chocolate");

    const catalogSectionTitleContainer = document.createElement("div");
    catalogSectionTitleContainer.classList.add("catalog-title");

    const catalogSectionTitleText = document.createElement("p");
    const title = document.createTextNode(type);
    const cellsContainer = document.createElement("div");

    cellsContainer.classList.add("cells");

    const cakesByType = CAKES.filter(cake => cake.type === type);

    cakesByType.forEach(cake => {
        const cell = document.createElement("div");
        cell.classList.add("cells-item");

        const image = document.createElement("img");
        image.src = cake.image;
        image.width = 400;
        image.height = 350;

        cell.appendChild(image);
        cellsContainer.appendChild(cell);
    });

    catalogSectionTitleText.appendChild(title);
    catalogSectionTitleContainer.appendChild(catalogSectionTitleText);
    catalogSection.appendChild(catalogSectionTitleContainer);
    catalogSection.appendChild(cellsContainer);
    cakesContainer.appendChild(catalogSection);
});