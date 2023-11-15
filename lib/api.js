const API_URL = 'https://vef1-2023-h2-api-791d754dda5b.herokuapp.com/';

export async function searchProducts(query) {
    const url = new URL('products', API_URL);
    url.searchParams.set('items', query);
  
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

    console.log(data);
  
    
    const results = data?.items ?? [];
    console.log(results);
  
    return results;
  }