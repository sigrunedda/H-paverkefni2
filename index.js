import { empty } from "./lib/elements.js";
import { searchProducts } from "./lib/api.js";
import { renderFrontpage, categorySite } from "./lib/ui.js";

const params = new URLSearchParams(window.location.search);
const query = params.get('query');
searchProducts(query);
const b = document.body;
await renderFrontpage(b);

function route() {
    const { search } = window.location;
  
    const qs = new URLSearchParams(search);
  
    const query = qs.get('query') ?? undefined;
    const id = qs.get('id');
    const parentElement = document.body;
  
    if (id) {
        renderFrontpage(parentElement);
    } else {
        return;
    }
  }
// Bregst við því þegar við notum vafra til að fara til baka eða áfram.
window.onpopstate = () => {
    /* TODO bregðast við */
    empty(document.body);

    route();
};

// Athugum í byrjun hvað eigi að birta.
route();

