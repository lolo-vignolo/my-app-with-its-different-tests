

const getGifs = async(Category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(Category) }&api_key=u2rt7gbqyRUcgdyfNl8jOiEiiJWuLat1`
    const resp = await fetch(url);

    const {data} =await resp.json();

    const gifs = data.map(anyGifs =>{
         return({
             id: anyGifs.id,
             title: anyGifs.title,
             url : anyGifs.images.downsized_medium.url,


         })
    })

    return(gifs);
    
   
 }

 export default getGifs;
