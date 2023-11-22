import { searchProducts, catagories, catagorySite, productSearch } from './api.js';
import { el } from './elements.js';

export async function renderFrontpage(
  parentElement,
  query = undefined,
  ) {
    const nyjar_vorur = el('h1', {class: 'nyjar_vorur'}, 'Nýjar vörur');
    const takki = el('button', {class: 'takki'}, el('a', {href: '/categories'}, 'Skoða alla flokka'));
    const categ = el('h2', {class: 'voruflokkar'}, 'Skoðaðu vöruflokkana okkar');

    const header = el(
      'header',
      {class: 'header'},
      el('nav', { class: 'navi'}, 
        el('ul', {class: 'title'},
          el('li', {},
            el('a', { href: '/', class: 'heim_linkur'}),
              el('strong', {class : 'title'}, 'Vefforritunarbúðin'))),
      el('div', {class: 'nav_haegri'},
        el('ul', {class: 'nav_uppi'},
            el('li', {}, el('a', {href: '/'}, 'Nýskrá')),
            el('li', {}, el('a', {href: '/'}, 'Innskrá')),
            el('li', {}, el('a', {href: '/'}, 'Karfa'))),
        el('ul', {class: 'nav_nidri'},
            el('li', {}, el('a', {href: '/'}, 'Nýjar vörur')),
            el('li', {}, el('a', {href: '#'}, 'Flokkar')))
      )));

    let list = el('section', { class: 'listi'});
    const vorur = await searchProducts(query, 6);

    for(const vara of vorur){ 
      //console.log(vara.title);
      const cards = el( 
        'div', 
        { class: 'spil' }, 
        el('a', {href: `?id=${vara.id}`},
        el('img', {class: 'mynd', src: `${vara.image}`, alt: `${vara.title}`}),
        el('div', {class: 'texti'},
          el('div', {class: 'titll_cate'},
            el('p', {class: 'titill'}, `${vara.title}`)),
            el('p', {class: 'category'}, `${vara.category_title}`)),
          el('div', {class: 'verdd'},   
            el('p', {class: 'verd'}, `${vara.price}`, ' kr.-')))
      );

      list.appendChild(cards);
      //console.log(cards);
      parentElement.appendChild(list);
    }

    let listi = el('section', {class: 'listi2'});
    const boxes = await catagories(query);

    for(const box of boxes){
      //console.log(box.title);
      const category = el(
        'div',
        { class: 'boxess'},
        el('p', {class : 'box'}, el('a',{href: `?category=${box.id}`}, `${box.title}`))        
      );
      listi.appendChild(category);
      //console.log(category);
      parentElement.appendChild(listi);
    }

    const container = el('main', {}, header, nyjar_vorur, list, takki, categ, listi);
    parentElement.appendChild(container);

    if (!query) {
      return;
    }
}

export async function renderCategory(parentElement, id){
  const header = el(
    'header',
    {class: 'header'},
    el('nav', { class: 'navi'}, 
      el('ul', {class: 'title'},
        el('li', {},
          el('a', { href: '/', class: 'heim_linkur'}),
            el('strong', {class : 'title'}, 'Vefforritunarbúðin'))),
    el('div', {class: 'nav_haegri'},
      el('ul', {class: 'nav_uppi'},
          el('li', {}, el('a', {href: '/'}, 'Nýskrá')),
          el('li', {}, el('a', {href: '/'}, 'Innskrá')),
          el('li', {}, el('a', {href: '/'}, 'Karfa'))),
      el('ul', {class: 'nav_nidri'},
          el('li', {}, el('a', {href: '/'}, 'Nýjar vörur')),
          el('li', {}, el('a', {href: '#'}, 'Flokkar')))
    )));
  
  var selectedCategory = [];
  const categ = await catagories(id);
  for(const box of categ){
    if(box.id == id){
      selectedCategory = box;
    }
  }

  const eitt = await catagorySite(id);
  
  let listis = el('section', {class: 'listi'});

  for( const hlutur of eitt){
    const eihv = el(
      'div',
      { class: 'spil'},
      el('a', {href: `?id=${hlutur.id}`},
      el('img', {class: 'mynd', src: `${hlutur.image}`, alt: `${hlutur.title}`}),
      el('div', {class: 'texti'},
        el('div', {class: 'titll_cate'},
          el('p', {class: 'titill'}, `${hlutur.title}`), 
          el('p', {class: 'category'}, `${hlutur.category_title}`)),  
        el('div', {class: 'verdd'},
          el('p', {class: 'verd'}, `${hlutur.price}`, ' kr.-'))))
    );
    listis.appendChild(eihv);  
  }
  
  const container = el('main', {}, header, listis);
  container.appendChild(listis);
  parentElement.appendChild(container);
  console.log(container);
}

export async function renderProducts(parentElement, id){
  const header = el(
    'header',
    {class: 'header'},
    el('nav', { class: 'navi'}, 
      el('ul', {class: 'title'},
        el('li', {},
          el('a', { href: '/', class: 'heim_linkur'}),
            el('strong', {class : 'title'}, 'Vefforritunarbúðin'))),
    el('div', {class: 'nav_haegri'},
      el('ul', {class: 'nav_uppi'},
          el('li', {}, el('a', {href: '/'}, 'Nýskrá')),
          el('li', {}, el('a', {href: '/'}, 'Innskrá')),
          el('li', {}, el('a', {href: '/'}, 'Karfa'))),
      el('ul', {class: 'nav_nidri'},
          el('li', {}, el('a', {href: '/'}, 'Nýjar vörur')),
          el('li', {}, el('a', {href: '#'}, 'Flokkar')))
    )));
  
  parentElement.appendChild(header);

  const hlutur = await productSearch(id);

  const showProduct = el(
    'div',
    { class: 'product'},
    el(
      'section',
      { class: 'info'},
      el('h2', {}, `${hlutur.title}`),
      el('p', {}, `${hlutur.price} kr.-`),
      el('p', {}, `${hlutur.category_title}`),
      el('p', {}, `${hlutur.description}`)
    ),
    el('div', {}, el('img', { scr: hlutur.image, alt: hlutur.title}))
  );
  parentElement.appendChild(showProduct);
}

    