import { searchProducts } from "./lib/api.js";
import { renderFrontpage } from "./lib/ui.js";

async function initialize() {
    const body = document.body;

    const products = await searchProducts();

    await renderFrontpage(body, products);
}




/*const params = new URLSearchParams(window.location.search);
const query = params.get('query');
searchProducts(query);
const b = document.body;
await renderFrontpage(b);*/