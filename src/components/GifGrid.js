
import React  from 'react'
import { useFetchGif } from '../Hooks/useFetchGif'


import GifGridItem from './GifGridItem'




const GifGrid = ({Category})=> {

    // const [images , setImages] = useState([])

 

    const {data:images, loading} = useFetchGif(Category);


    
    return (
         <>
           <h3 calssName="animate__animated animate__fadeInLeft">{Category}</h3>

           {loading&&<p className="animate__animated animate__flash">loading...</p>}

              <div className = "card-grid">
                {
                    images.map(image =>
                        (
                          <GifGridItem
                            url= {image.url}
                            title ={image.title} 

                            />

                        )
                    )
                }
            
            </div>
        </>
    )
}


export default GifGrid
