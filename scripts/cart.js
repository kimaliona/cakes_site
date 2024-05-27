const form = {
    payment_method: "",
    client_name: "",
    contact_number: "",
    email: "",
    address: "",
}

const getCakes = async () => {
    const response = await fetch("https://6654d0c33c1d3b6029377970.mockapi.io/api/cakes");
    return await response.json();
}

const renderCart = (cakes) => {
    const params = window.location.search.substring(1);
    const choosedCakesIds = params.split("&").map(param => param.split("=")[1]);
    const cakesToRender = [];
    
    for (const id of choosedCakesIds) {
        const cake = cakes.find(item => item.id === Number(id));
        cakesToRender.push(cake);
    }

    const cakeInfo = document.getElementsByClassName("cake-info")[0];
    const cakeInfoTitle = document.createElement("h3");
    cakeInfoTitle.classList.add("cake-info_title");
    const cakeInfoTitleText = document.createTextNode("Вы выбрали:")

    cakeInfoTitle.appendChild(cakeInfoTitleText);
    cakeInfo.appendChild(cakeInfoTitle);

    for (const cake of cakesToRender) {
        const cakeImgContainer = document.createElement("div");
        cakeImgContainer.classList.add("cake-info_image");

        const cakeImg = document.createElement("img");
        cakeImg.src = cake.image;
        cakeImg.width = 400;
        cakeImg.height = 350;
        cakeImgContainer.appendChild(cakeImg);

        const cakeInfoContainer = document.createElement("div");
        cakeInfoContainer.classList.add("cake-info_description");

        const cakeInfoTitle = document.createElement("span");
        cakeInfoTitle.classList.add("cake-info_description_name");
        const cakeInfoTitleText = document.createTextNode(cake.name);
        cakeInfoTitle.appendChild(cakeInfoTitleText);

        const cakeInfoDesc = document.createElement("span");
        cakeInfoDesc.classList.add("cake-info_description_text");
        const cakeInfoDescText = document.createTextNode(cake.description);
        cakeInfoDesc.appendChild(cakeInfoDescText);

        const cakeInfoPrice = document.createElement("span");
        cakeInfoPrice.classList.add("cake-info_description_sum");
        const cakeInfoPriceText = document.createTextNode("Цена: " + cake.price);
        cakeInfoPrice.appendChild(cakeInfoPriceText);

        cakeInfoContainer.appendChild(cakeInfoTitle);
        cakeInfoContainer.appendChild(cakeInfoDesc);
        cakeInfoContainer.appendChild(cakeInfoPrice);

        const cakeInfoBody = document.createElement("div");
        cakeInfoBody.classList.add("cake-info_body");

        cakeInfoBody.appendChild(cakeImgContainer);
        cakeInfoBody.appendChild(cakeInfoContainer);

        cakeInfo.appendChild(cakeInfoBody);
    }

    const sum = cakesToRender.reduce((acc, next) => acc + Number(next.price), 0);
    const cakesTotalSumm = document.createElement("span");
    cakesTotalSumm.classList.add("total-sum")
    const cakesTotalSummText = document.createTextNode("СУММА: " + sum);
    
    cakesTotalSumm.appendChild(cakesTotalSummText);
    cakeInfo.appendChild(cakesTotalSumm);
}

getCakes().then((data) => {
    renderCart(data);
});

const onChangeCheckbox = (event) => {
    const byCardOnlineCheckbox = document.getElementById("byCardOnline");
    const byCashCheckbox = document.getElementById("byCash");
    const byCardOfflineCheckbox = document.getElementById("byCardOffline");

    const checkboxes = [
      byCardOnlineCheckbox,
      byCashCheckbox,
      byCardOfflineCheckbox,
    ];

    for (let checkbox of checkboxes) {
        const isAlreadyActive = checkbox.className.includes("_active");

        if (checkbox.id === event.id && !isAlreadyActive) {
            checkbox.className = "pay-options_checkbox-input_active";
            checkbox.value = true;
            form.payment_method = event.name;
        } else if (checkbox.id === event.id && isAlreadyActive) {
            checkbox.className = "pay-options_checkbox-input";
            checkbox.value = false;
            form.payment_method = "";
        } else {
            checkbox.className = "pay-options_checkbox-input";
            checkbox.value = false;
        }
    }
};

const onChangeInput = () => {

};
