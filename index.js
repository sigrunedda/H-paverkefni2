import { empty } from './lib/elements.js';
import { renderFrontpage, 
    renderCategory,
    renderProducts, 
    renderCategories, 
    renderVorulisti } from './lib/ui.js';



function route() {
  
    const qs = new URLSearchParams(window.location.search);
  
    const id = qs.get('id');
    const catagory = qs.get('category');
    const categories = qs.get('categories');
    const products = qs.get('products');
    const parentElement = document.body;
  
    if(id){
        renderProducts(parentElement, id);
    }else if (catagory) {
        renderCategory(parentElement, catagory);  
    } else if (categories){
        renderCategories(parentElement);
    }else if (products){
        renderVorulisti(parentElement);
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

