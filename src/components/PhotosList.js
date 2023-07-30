import {useAddPhotoMutation, useFetchPhotosQuery} from "../store";
import Skeleton from "./skeleton";
import {el} from "@faker-js/faker";
import PhotoListItem from "./PhotoListItem";
import Button from "./button";

function PhotosList({album}){
    const {data,error,isFetching}=useFetchPhotosQuery(album);
    const[addPhoto,results]=useAddPhotoMutation();
    const handleClick=()=>{
        addPhoto(album)
    }
    let photos;
    if(isFetching){
        photos=<Skeleton times={4} className='h-10 w-10'></Skeleton>
    }
    else if(error){
        photos=<div>Error Loading Photos...</div>
    }
    else {
        photos = data.map((photo) => {
         return(
             <PhotoListItem key={photo.id} photo={photo}></PhotoListItem>
         )
        })
    }
    return(
        <div>
            <div className='flex justify-between'>
                <h3 className='font-bold text-lg'>Photos for album {album.title}</h3>
                <Button loading={results.isLoading} onClick={handleClick}>+ Add Photo</Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center">
                {photos}</div>
        </div>
    )

 }
 export default PhotosList;