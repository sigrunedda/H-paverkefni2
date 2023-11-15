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

export function renderFrontpage(
    parentElement,
    //searchHandler,
    query = undefined,
  ) {
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
  
  

