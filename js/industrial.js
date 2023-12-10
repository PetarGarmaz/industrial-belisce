//Image banner
const allFooterBanners = Array.from(document.querySelectorAll(".footer_img"));

//Prices
const currentDeluxePriceTag_1 = Array.from(document.querySelectorAll(".deluxePriceTag_1"));
const currentDeluxePriceTag_2 = Array.from(document.querySelectorAll(".deluxePriceTag_2"));

const currentPriceTag_1 = Array.from(document.querySelectorAll(".priceTag_1"));
const currentPriceTag_2 = Array.from(document.querySelectorAll(".priceTag_2"));
const currentPriceTag_3 = Array.from(document.querySelectorAll(".priceTag_3"));

const currentPriceTag_2_1 = Array.from(document.querySelectorAll(".priceTag_2_1"));
const currentPriceTag_3_1 = Array.from(document.querySelectorAll(".priceTag_3_1"));

const deluxePrice_1 = "69,00";
const deluxePrice_2 = "89,00";

const price_1 = "49,00";
const price_2 = "69,00";
const price_3 = "89,00";
const price_2_1 = "84,00";
const price_3_1 = "104,00";

const usedCurrency = "€";

//Banner footer
function resizeFooterImg(width) {
	if(allFooterBanners.length > 0) {
		if(width < 768) {
			allFooterBanners.forEach((img, index) => {
				img.src = "img/eu_esif_hamag_mobile.jpg";
			})
		} else {
			allFooterBanners.forEach((img, index) => {
				img.src = "img/eu_esif_hamag.jpg";
			})
		};
	}
}

var width = $(window).width();
resizeFooterImg(width);

$(window).resize(function() {
	width = $(window).width();
	resizeFooterImg(width);
});

//Prices
if(currentDeluxePriceTag_1.length > 0) {
	currentDeluxePriceTag_1.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + deluxePrice_1 + " " + currency + "</i>";
	})
}

if(currentDeluxePriceTag_2.length > 0) {
	currentDeluxePriceTag_2.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + deluxePrice_2 + " " + currency + "</i>";
	})
}

if(currentPriceTag_1.length > 0) {
	currentPriceTag_1.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + price_1 + " " + currency + "</i>";
	})
}

if(currentPriceTag_2.length > 0) {
	currentPriceTag_2.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + price_2 + " " + currency + "</i>";
	})
}

if(currentPriceTag_3.length > 0) {
	currentPriceTag_3.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + price_3 + " " + currency + "</i>";
	})
}

if(currentPriceTag_2_1.length > 0) {
	currentPriceTag_2_1.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + price_2_1 + " " + currency + "</i>";
	})
}

if(currentPriceTag_3_1.length > 0) {
	currentPriceTag_3_1.forEach((priceTag, index) => {
		const priceTagArray = priceTag.innerHTML.split(" ");
		const currencyArray = priceTagArray[3].split("/");
		const currency = usedCurrency + "/" + currencyArray[1]; 
		priceTag.innerHTML = "<i>" + priceTagArray[0] + " " + priceTagArray[1] + " " + price_3_1 + " " + currency + "</i>";
	})
}