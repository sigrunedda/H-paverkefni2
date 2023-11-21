
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

export async function catagories(query, limit = 12){
  const url = new URL('categories', API_URL);
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

/**
 * 
 * @param {string} id
 */
export async function catagorySite( id){
  console.log(id);
  const url = new URL(`products?catagory${id}`, API_URL);
 

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
  console.log(results)
 
  return results;
}