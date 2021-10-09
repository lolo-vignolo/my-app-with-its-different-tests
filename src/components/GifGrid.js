
import React  from 'react'
import { useFetchGif } from '../Hooks/useFetchGif'
import PropTypes from 'prop-types';

import GifGridItem from './GifGridItem'




const GifGrid = ({Category})=> {

    // const [images , setImages] = useState([])

 

    const {data:images, loading} = useFetchGif(Category);


    
    return (
         <>
           <h3 calssName="animate__animated animate__fadeInLeft">{Category}</h3>

           {loading && <p className="animate__animated animate__flash">loading...</p>}

              <div className = "card-grid">
                {
                    images.map(image =>
                        (
                          <GifGridItem
                            key= {image.id}
                            {...image} 

                            />

                        )
                    )
                }
            
            </div>
        </>
    )
}

GifGrid.propType ={
    Category : PropTypes.string.isRequired,
}

export default GifGrid
