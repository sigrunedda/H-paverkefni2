import { searchProducts } from './api.js';
import { el } from './elements.js';

export async function renderFrontpage(
  parentElement,
  query = undefined,
  ) {
    const header = el(
      'div',
      {class: 'header'},
      el('h1', {class: 'bla'}, 'VefforritunarBúðin'),
      el('p', {class: 'blabla'},'Nýjar vörur'),
      el('p', {class: 'blabla'},'Flokkar'),
      el('p', {class: 'blabla'}, 'Karfa')
    );

    let list = el('section', { class: 'listi'});
    const vorur = await searchProducts(query, 6);

    for(const vara of vorur){ 
      console.log(vara.title);
      const cards = el( 
        'div', 
        { class: 'spil' }, 
        el('img', {class: 'mynd', src: `${vara.image}`, alt: `${vara.title}`}), 
        el('p', {class: 'title'}, `${vara.title}`),  
        el('p', {class: 'verd'}, `${vara.price}`, ' kr.-'), 
        el('p', {class: 'category'}, `${vara.category_title}`)
      );
      list.appendChild(cards);
      console.log(cards);
      parentElement.appendChild(list);
    }

    const nyjar_vorur = el('h1', {class: 'nyjar_vorur'}, 'Nýjar vörur');
    const takki = el('button', {class: 'takki'}, 'Skoða alla flokka');
    const categ = el('h2', {class: 'voruflokkar'}, 'Skoða vöruflokkana okkar');

    const category = el(
      'section',
      { class: 'boxes' },
      el('div',{ class: 'box' }, el('a', { href: '#'}, 'Clothing')),
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
      el('div', { class: 'box' }, el('a', { href: '#'}, 'Tools'))
    );

    const container = el('main', {}, header, nyjar_vorur, list, takki, categ, category);
    parentElement.appendChild(container);

    if (!query) {
      return;
    }
  }