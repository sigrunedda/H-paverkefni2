import { el } from './elements.js';

export function renderFrontpage(
    parentElement,
    searchHandler,
    query = undefined,
  ) {
    const heading = el('h1', {}, 'Geimskotaleitin 🚀');
    const searchForm = renderSearchForm(searchHandler, query);
    const container = el('main', {}, heading, searchForm);
    parentElement.appendChild(container);
  
    if (!query) {
      return;
    }
  
    searchAndRender(parentElement, searchForm, query);
  }
const boxes = el(
    'section',
  { class: 'boxes' },

el('div', { class: 'box' }, el('a', { href: '#'}, 'clothing')),
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
el('div', { class: 'box' }, el('a', { href: '#'}, 'Tools')),
  )