import { searchProducts, catagories, catagorySite } from './api.js';
import { el } from './elements.js';

export async function renderFrontpage(
  parentElement,
  query = undefined,
  ) {
    const nyjar_vorur = el('h1', {class: 'nyjar_vorur'}, 'Nýjar vörur');
    const takki = el('button', {class: 'takki'}, el('a', {href: '#'}, 'Skoða alla flokka'));
    const categ = el('h2', {class: 'voruflokkar'}, 'Skoðaðu vöruflokkana okkar');

    const header = el(
      'div',
      {class: 'header'},
      el('h1', {class: 'bla'}, 'VefforritunarBúðin'),
      el('p', {class: 'blabla'}, el('a',{href: '#'}, 'Nýjar vörur')),
      el('p', {class: 'blabla'}, el('a',{href: '#'}, 'Flokkar')),
      el('p', {class: 'blabla'}, el('a',{href: '#'}, 'Karfa'))
    );

    let list = el('section', { class: 'listi'});
    const vorur = await searchProducts(query, 6);

    for(const vara of vorur){ 
      console.log(vara.title);
      const cards = el( 
        'div', 
        { class: 'spil' }, 
        el('img', {class: 'mynd', src: `${vara.image}`, alt: `${vara.title}`}),
        el('a', {href: `products/${vara.id}`}, `${vara.title}`),   
        el('p', {class: 'verd'}, `${vara.price}`, ' kr.-'),
        el('p', {class: 'category'}, `${vara.category_title}`)
      );

      list.appendChild(cards);
      console.log(cards);
      parentElement.appendChild(list);
    }

    let listi = el('section', {class: 'listi2'});
    const boxes = await catagories(query);

    for(const box of boxes){
      console.log(box.title);
      const category = el(
        'div',
        { class: 'boxess'},
        el('p', {class : 'box'}, el('a',{href: `?category=${box.id}`}, `${box.title}`))        
      );
      listi.appendChild(category);
      console.log(category);
      parentElement.appendChild(listi);
    }

    const container = el('main', {}, header, nyjar_vorur, list, takki, categ, listi);
    parentElement.appendChild(container);

    if (!query) {
      return;
    }
}

export async function renderCategory(parentElement, id){
  const container = el('main', {});
  const categ = await catagories(id);
  var selectedCategory = [];

  for(const box of categ){
    if(box.id == id){
      selectedCategory = box;
    }
  }

  console.log(id);
  const eitt = await catagorySite(id);
  console.log(eitt[0].category_title)

  const nafn = el('h2', {}, eitt[id].title);
  container.appendChild(nafn);
  
  parentElement.appendChild(container);
}