import { searchProducts, catagories } from './api.js';
import { el } from './elements.js';

    export async function 
    renderProductPage
    (parentElement, productId) {
      const productResponse = await fetch(`/products/${productId}`);
      if (!productResponse.ok) {
        console.error('Failed to fetch product data:', productResponse.status);
        return;
      }
    
      const productData = await productResponse.json();
    
      const productContainer = document.createElement('div');
      productContainer.classList.add('product-container');
    
      const titleElement = document.createElement('h2');
      titleElement.classList.add('product-title');
      titleElement.textContent = productData.title;
    
      const imageElement = document.createElement('img');
      imageElement.src = productData.image;
      imageElement.alt = productData.title;
      imageElement.classList.add('product-image');
    
      const priceElement = document.createElement('p');
      priceElement.classList.add('product-price');
      priceElement.textContent = `Price: ${productData.price}`;
    
      const categoryElement = document.createElement('p');
      categoryElement.classList.add('product-category');
      categoryElement.textContent = `Category: ${productData.category}`;
    
      const descriptionElement = document.createElement('p');
      descriptionElement.classList.add('product-description');
      descriptionElement.textContent = productData.description;
    
      productContainer.appendChild(imageElement);
      productContainer.appendChild(titleElement);
      productContainer.appendChild(priceElement);
      productContainer.appendChild(categoryElement);
      productContainer.appendChild(descriptionElement);
    
      parentElement.appendChild(productContainer);
      console.log(Element)
    }
    
    
export async function categorySite(parentElement, query = undefined){
  const header = el(
    'div',
    {class: 'header'},
    el('h1', {class: 'bla'}, 'VefforritunarBúðin'),
    el('p', {class: 'blabla'}, el('a',{href: '#'}, 'Nýjar vörur')),
    el('p', {class: 'blabla'}, el('a',{href: '#'}, 'Flokkar')),
    el('p', {class: 'blabla'}, el('a',{href: '#'}, 'Karfa'))
  );

  const nope = el('main', {}, header, );
  parentElement.appendChild(nope);
}

/*const nyjar_vorur = el('h1', {class: 'nyjar_vorur'}, 'Nýjar vörur');
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
        el('p', {class : 'box'}, el('a',{href: '#'}, `${box.title}`))        
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
    */