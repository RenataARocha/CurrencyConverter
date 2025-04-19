const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const resetButton = document.querySelector(".reset-button");

const apiKey = '5f0547d9f260303633894450';
const baseUrl = 'https://v6.exchangerate-api.com/v6/5f0547d9f260303633894450/latest/BRL';

let cotacoes = {};

fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
        cotacoes = data.conversion_rates;
        console.log("Cotações carregadas:", cotacoes);
    })
    .catch(err => console.error("Erro ao carregar cotações:", err));


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    console.log(currencySelect.value)



    const dolarToday = cotacoes.USD;
    const euroToday = cotacoes.EUR;
    const libraToday = cotacoes.GBP;
    const ieneToday = cotacoes.JPY;
    const pesoargentinoToday = cotacoes.ARS;
    const francosuicoToday = cotacoes.CHF;
    const dolarcanadenseToday = cotacoes.CAD;
    const dolaraustralianoToday = cotacoes.AUD;
    const yuanToday = cotacoes.CNY;
    const coroasuecaToday = cotacoes.SEK;
    const coroanorueguesaToday = cotacoes.NOK;
    const coroadinamarquesaToday = cotacoes.DKK;
    const rublorussoToday = cotacoes.RUB;
    const pesomexicanoToday = cotacoes.MXN;
    const rupiaindianaToday = cotacoes.INR;
    const wonsulcoreanoToday = cotacoes.KRW;
    const randToday = cotacoes.ZAR;





    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }


    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }


    if (currencySelect.value == "pesoargentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoargentinoToday)
    }


    if (currencySelect.value == "francosuico") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francosuicoToday)
    }


    if (currencySelect.value == "dolarcanadense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue / dolarcanadenseToday)
    }


    if (currencySelect.value == "dolar-australiano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue / dolaraustralianoToday)
    }


    if (currencySelect.value == "yuan") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / yuanToday)
    }


    if (currencySelect.value == "coroasueca") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "SEK"
        }).format(inputCurrencyValue / coroasuecaToday)
    }


    if (currencySelect.value == "coroanorueguesa") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("no-NO", {
            style: "currency",
            currency: "NOK"
        }).format(inputCurrencyValue / coroanorueguesaToday)
    }


    if (currencySelect.value == "coroadinamarquesa") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("da-DK", {
            style: "currency",
            currency: "DKK"
        }).format(inputCurrencyValue / coroadinamarquesaToday)
    }


    if (currencySelect.value == "rublorusso") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrencyValue / rublorussoToday)
    }



    if (currencySelect.value == "pesomexicano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-MX", {
            style: "currency",
            currency: "MXN"
        }).format(inputCurrencyValue / pesomexicanoToday)
    }


    if (currencySelect.value == "rupiaindiana") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("hi-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaindianaToday)
    }


    if (currencySelect.value == "wonsulcoreano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue / wonsulcoreanoToday)
    }


    if (currencySelect.value == "rand") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-ZA", {
            style: "currency",
            currency: "ZAR"
        }).format(inputCurrencyValue / randToday)
    }









    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



}




function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }


    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assets/iene.png"
    }


    if (currencySelect.value == "pesoargentino") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/peso.png"
    }

    if (currencySelect.value == "francosuico") {
        currencyName.innerHTML = "Franco Suíço"
        currencyImage.src = "./assets/franco.png"
    }

    if (currencySelect.value == "dolarcanadense") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/dolarcanadense.png"
    }


    if (currencySelect.value == "dolar-australiano") {
        currencyName.innerHTML = "Dólar Australiano"
        currencyImage.src = "./assets/dolaraustraliano.png"
    }


    if (currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan Chinês"
        currencyImage.src = "./assets/yuan.png"
    }


    if (currencySelect.value == "coroasueca") {
        currencyName.innerHTML = "Coroa Sueca"
        currencyImage.src = "./assets/coroasueca.png"
    }

    if (currencySelect.value == "coroanorueguesa") {
        currencyName.innerHTML = "Coroa Norueguesa"
        currencyImage.src = "./assets/coroanorueguesa.png"
    }

    if (currencySelect.value == "coroadinamarquesa") {
        currencyName.innerHTML = "Coroa Dinamarquesa"
        currencyImage.src = "./assets/coroadinamarquesa.png"
    }

    if (currencySelect.value == "rublorusso") {
        currencyName.innerHTML = "Rublo Russo"
        currencyImage.src = "./assets/rublorusso.png"
    }

    if (currencySelect.value == "pesomexicano") {
        currencyName.innerHTML = "Peso Mexicano"
        currencyImage.src = "./assets/pesomexicano.png"
    }

    if (currencySelect.value == "rupiaindiana") {
        currencyName.innerHTML = "Rúpia Indiana"
        currencyImage.src = "./assets/rupiaindiana.png"
    }

    if (currencySelect.value == "wonsulcoreano") {
        currencyName.innerHTML = "Won Sul-Coreano"
        currencyImage.src = "./assets/wonsulcoreano.png"
    }

    if (currencySelect.value == "rand") {
        currencyName.innerHTML = "Rand Sul-Africano"
        currencyImage.src = "./assets/rand.png"
    }


    convertValues()
}


function resetFields() {
    document.querySelector(".input-currency").value = "";
    document.querySelector(".currency-value-to-convert").innerHTML = "R$ 0,00";
    document.querySelector(".currency-value").innerHTML = "US$ 0.0";
    currencySelect.value = "real"; // Reseta para o valor padrão
    changeCurrency(); // Atualiza o nome e a imagem da moeda
}

resetButton.addEventListener("click", resetFields);

function resetFields() {
    document.querySelector(".input-currency").value = "";
    document.querySelector(".currency-value-to-convert").innerHTML = "R$ 0,00";
    currencySelect.value = "dolar"; // Define a moeda como dólar
    changeCurrency(); // Atualiza nome + imagem
    convertValues(); // Converte com valor vazio, mas garante que o campo "Converter para" aparece como US$ 0.00
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)