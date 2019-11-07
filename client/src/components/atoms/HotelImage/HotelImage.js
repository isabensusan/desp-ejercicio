import React from 'react';
import imgHotelFasano from '../../../resources/images/hotels/hotel-fasano.jpg';
import imgHotelFaena from '../../../resources/images/hotels/hotel-faena.jpg';

const HotelImage = ({hotelName}) => {
    const imgPaths = [{name: 'hotel-fasano' ,src: '/static/media/hotel-fasano.663fc018.jpg'},
                      {name: 'hotel-faena' ,src: '/static/media/hotel-faena.4ef45c4a.jpg'}] 
    const hotelNameEdit = hotelName.replace(/\s+/g, '-').toLowerCase();
    const imgTag = imgPaths.filter(img => img.name == hotelNameEdit)
                            .map((i) => {
                                return (    
                                    i.src
                                )
                            })

    return (  
        <div style={{'background-image': `url(${imgTag})`}} className='hotel-image'></div>
    )
};

export default HotelImage;