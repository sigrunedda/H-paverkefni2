import { searchProducts } from './api.js';
import { el } from './elements.js';

export async function searchAndRender(parentElement, searchForm, query) {
    const mainElement = parentElement.querySelector('main');
}  
/**
 * Býr til leitarform.
 * @param {(e: SubmitEvent) => void} searchHandler Fall sem keyrt er þegar leitað er.
 * @param {string | undefined} query Leitarstrengur.
 * @returns {HTMLElement} Leitarform.
 */
export function renderSearchForm(searchHandler, query = undefined) {
    const form = el(
      'form',
      {},
      el('input', { value: query ?? '', name: 'query' }),
      el('button', {}, 'Leita')
    );
  
    form.addEventListener('submit', searchHandler);
  
    return form;
  }

export async function renderFrontpage(
    parentElement,
    query = undefined,
  ) {
    let list = [];
    const vorur = await searchProducts(query);
    console.log(vorur);
    for(const vara of vorur){
        const cards = el(
        'card',
        { class: 'spil' }, 
        el('p', { class: 'titill'}, `${vara.title}`),
        el('img', {src: vara.image}),
        el('p', { class: 'verd'}, `${vara.price}`),
        el('p', {class: 'flokkur'}, `${vara.category}`)
        );
        console.log(cards);
        list.push(cards);
        console.log('forsiða');
    }
    
    
    const header = el(
        'div',
        {class: 'header'}, 'Vefforritunarbúðin'
    );
    const container = el('main', {}, header);
    parentElement.appendChild(container);
    if (!query) {
      return;
    }
  
    searchAndRender(parentElement, query);
  }
  
  

