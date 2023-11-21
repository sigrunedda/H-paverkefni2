import { empty } from "./lib/elements.js";
import { renderFrontpage, renderCategory } from "./lib/ui.js";



function route() {
    const { search } = window.location;
  
    const qs = new URLSearchParams(window.location.search);
  
    const id = qs.get('id');
    const catagory = qs.get('category');
    const parentElement = document.body;
  
    if (catagory) {
        renderCategory(parentElement, catagory);       
    } else {
        renderFrontpage(parentElement);
    }
  }
// Bregst við því þegar við notum vafra til að fara til baka eða áfram.
window.onpopstate = () => {
    empty(document.body);

    route();
};

// Athugum í byrjun hvað eigi að birta.
route();

