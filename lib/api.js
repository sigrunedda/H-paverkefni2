
const API_URL = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';

export async function searchProducts(query, limit = 10){
    const url = new URL('products', API_URL);
    url.searchParams.set('items', query);
    // @ts-ignore
    url.searchParams.set('limit', limit);

    let response;
    try {
      response = await fetch(url);
    } catch (e) {
      console.error('Villa við að sækja gögn', e);
      return null;
    }
  
    if (!response.ok) {
      console.error('Fékk ekki 200 status frá API', response);
      return null;
    }
  
    let data;
  
    try {
      data = await response.json();
    } catch (e) {
      console.error('Villa við að lesa gögn', e);
      return null;
    }

    const results = data?.items ?? [];
    return results;
}

export async function allCatagories(query, limit = 13){
  const url = new URL('categories', API_URL);
  url.searchParams.set('items', query);
  // @ts-ignore
  url.searchParams.set('limit', limit);

  console.log(url);

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API', response);
    return null;
  }

  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn', e);
    return null;
  }

  const results = data?.items ?? [];
  return results;
}

/**
 * 
 * @param {string} id
 */
export async function catagorySite( id) {
  const url = new URL(`products?category=${id}`, API_URL);
 

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API', response);
    return null;
  }

  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn', e);
    return null;
  }

  const results = data?.items ?? [];
  
 
  return results;
}

export async function productSearch(id){
  const url = new URL(`products/${id}`, API_URL);
 

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API', response);
    return null;
  }

  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn', e);
    return null;
  }
  
  return data;
}

export async function alikeProducts(category_id){
  const url = new URL(`products?limit=3&category=${category_id}`, API_URL);
 
 
  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API', response);
    return null;
  }

  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn', e);
    return null;
  }
  return data;
}

export async function allarVorur(limit){
  const url = new URL(`products`, API_URL);
  // @ts-ignore
  url.searchParams.set('limit', limit);
 
  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API', response);
    return null;
  }

  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn', e);
    return null;
  }
  
  return data;
}