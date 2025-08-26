
	export const exerciseOptions = {
		method: 'GET',
		params: {
			limit: '1327',
			offset: '0'
		  },
		headers: {
		  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
		  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
		}
	  };
	export  const youtubeOptions = {
		method: 'GET',
		
		headers: {
		  'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
		  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
		}
	  };
	  
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };