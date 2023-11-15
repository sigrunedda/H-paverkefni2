import { searchProducts } from "./lib/api.js";

const params = new URLSearchParams(window.location.search);
const query = params.get('query');
searchProducts(query);