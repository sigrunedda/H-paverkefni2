import { catagories, searchProducts } from './api.js';
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
    const vorur = await searchProducts(query, 6);
   
    for(const vara of vorur){
        const cards = el(
        'div',
        { class: 'spil' }, 
        el('p', { class: 'titill'}, `${vara.title}`),
        el('img', {src: vara.image}),
        el('p', { class: 'verd'}, `${vara.price}`),
        el('p', {class: 'flokkur'}, `${vara.category_title}`)
        ); 
        list.push(cards);
    }

    const header = el(
      'div',
      {class: 'header'}, 
      'Vefforritunarbúðin'
    ); 
    
    const container = el('body', {}, header, ...list);

    parentElement.appendChild(container);

    if (!query) {
      return list;
    }
  
    searchAndRender(parentElement, query);

    return list;
  }
  
  

/*el('div', { class: 'box' }, el('a', { href: '#'}, 'clothing')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Shoes')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Garden')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Computers')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Movies')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Books')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Jewelry')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Electronics')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Grocery')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Outdoors')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Sports')),
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Tools'))*/

      /*const boxes = catagories();
    for(const box of boxes){
    const catag = el(
      'section',
      { class: 'catag' },
      parentElement.appendChild(box);
      );
    }*/
    //console.log(box);