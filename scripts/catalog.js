const CAKES = [
    {
        id: 1,
        name: "Классический шоколадный",
        image: "images/chocolate1.png",
        description: "Насыщенный шоколадный вкус крема, хрустящая шоколадная крошка, слегка горьковатый шоколадный корж",
        price: 3500,
        type: "ШОКОЛАДНЫЕ",
    },
    {
        id: 2,
        name: "Шоколадный замок",
        image: "images/chocolate2.png",
        description: "Хрустящие шоколадные чипсы, шоколадный бисквит и нежнейший шоколадный крем",
        price: 4100,
        type: "ШОКОЛАДНЫЕ",
    },
    {
        id: 3,
        name: "Шоколадный ломтик",
        image: "images/chocolate3.png",
        description: "Мягкие шоколадные коржи, легкий шоколадный крем и хрустящая шоколадная крошка",
        price: 3800,
        type: "ШОКОЛАДНЫЕ",
    },
    {
        id: 4,
        name: "Шоколадное гнездо",
        image: "images/chocolate4.png",
        description: "Свежая клубника, хрустящие шоколадные веточки и нежный шоколадный крем",
        price: 3800,
        type: "ШОКОЛАДНЫЕ",
    },
    {
        id: 5,
        name: "Орео",
        image: "images/chocolate5.png",
        description: "Глубокий шоколадный вкус, 2 вида крема на основе темного и белого шоколада и печенье орео",
        price: 3000,
        type: "ШОКОЛАДНЫЕ",
    },
    {
        id: 6,
        name: "Шоколадное наслаждение",
        image: "images/chocolate6.png",
        description: "Пропитанные кофе шоколадные коржи, хрустящие шоколадгные чипсы и вкуснейший крем на основе темного шоколадаы",
        price: 4000,
        type: "ШОКОЛАДНЫЕ",
    },
    {
        id: 7,
        name: "Сирень",
        image: "images/vanilla1.png",
        description: "Нежный ванильный бисквит с кремом из ванили и свежими ягодами",
        price: 4500,
        type: "ВАНИЛЬНЫЕ",
    },
    {
        id: 8,
        name: "Ванильная роза",
        image: "images/vanilla2.png",
        description: "Деликатный ванильный торт с клубничным кремом и декорациями из макаронс и съедобных розочек из шоколада",
        price: 3800,
        type: "ВАНИЛЬНЫЕ",
    },
    {
        id: 9,
        name: "Ванильное облако",
        image: "images/vanilla3.png",
        description: "Воздушный ванильный торт с нежным крем-чиз и макаронс",
        price: 3800,
        type: "ВАНИЛЬНЫЕ",
    },
    {
        id: 10,
        name: "Ягодный рай",
        image: "images/vanilla4.png",
        description: "Легкий ванильный бисквит с кремом из маскарпоне и ягодным декором",
        price: 5000,
        type: "ВАНИЛЬНЫЕ",
    },
    {
        id: 11,
        name: "Экзотик",
        image: "images/vanilla5.png",
        description: "Нежнейшие ванильные коржи, крем из маракуйи и свежие ягоды",
        price: 4900,
        type: "ВАНИЛЬНЫЕ",
    },
    {
        id: 12,
        name: "Зефирное чудо",
        image: "images/vanilla6.png",
        description: "Клубничный крем-чиз, нежнейшие ванильные коржи, маршмеллоу и свежие ягоды",
        price: 4500,
        type: "ВАНИЛЬНЫЕ",
    },
    {
        id: 13,
        name: "Цитрусовое настроение",
        image: "images/muss1.png",
        description: "Легкий цитрусовый мусс, украшенный ломтиками апельсина и сладкими вишенками",
        price: 3500,
        type: "МУССОВЫЕ",
    },
    {
        id: 14,
        name: "Экзотический оазис",
        image: "images/muss2.png",
        description: "Нежный мусс из маракуйи, украшенный кусочками ананаса и сладкими вишенками",
        price: 3800,
        type: "МУССОВЫЕ",
    },
    {
        id: 15,
        name: "Тропическая фантазия",
        image: "images/muss3.png",
        description: "Манго-папайя мусс, украшенный клубникой, персиком, голубикой и киви",
        price: 4800,
        type: "МУССОВЫЕ",
    },
    {
        id: 16,
        name: "Арбузный бриз",
        image: "images/muss4.png",
        description: "Арбузный мусс , украшенный белым и молочным шоколадом",
        price: 3500,
        type: "МУССОВЫЕ",
    },
    {
        id: 17,
        name: "Ароматная вишня",
        image: "images/muss5.png",
        description: "Вишневый мусс, нежный крем, мини печеньки орео",
        price: 3500,
        type: "МУССОВЫЕ",
    },
    {
        id: 18,
        name: "Лето",
        image: "images/muss6.png",
        description: "Сочный торт с муссом из манго, украшенный киви и персиком.",
        price: 4500,
        type: "МУССОВЫЕ",
    },
];
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

const renderCakes = () => {
    let types = new Set(
        CAKES.map(cake => cake.type)
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

        const cakesByType = CAKES.filter(cake => cake.type === type);

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

renderCakes();

const redirectToCart = () => {
    if (choosedCakes.length === 0) {
        return alert("Сначала выберите тортик");
    }

    const params = choosedCakes.map(id => `id=${id}`).join("&");
    window.location.href = "cart.html?" + params;
};