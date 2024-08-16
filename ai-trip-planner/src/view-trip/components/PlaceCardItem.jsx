import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlaceCardItem = ({location,activity}) => {

  const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        GetPlacePhoto();
    }, [location])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: location
        }

        const result = await GetPlaceDetails(data).then(resp => {
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
            setPhotoUrl(PhotoUrl);
        })
    }

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + location }>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photoUrl? photoUrl : '/placeholder.jpeg'} className='w-[130px] h-[130px] rounded-xl object-cover'/>
        <div>
            <h2 className='font-bold text-lg'>{location}</h2>
            <p className='text-sm text-gray-400'>{activity}</p>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem