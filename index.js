import { searchProducts } from "./lib/api.js";
import { renderFrontpage } from "./lib/ui.js";

const params = new URLSearchParams(window.location.search);
const query = params.get('query');
searchProducts(query);
const b = document.body;
await renderFrontpage(b);