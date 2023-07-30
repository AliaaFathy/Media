import { GoTrash } from 'react-icons/go';
import {useRemovePhotoMutation} from "../store";

function PhotoListItem({photo}){
    const [removePhoto]=useRemovePhotoMutation();
    const handleClick=()=>{
        removePhoto(photo)
    }
    return (
        <div onClick={handleClick} className='relative m-2 cursor-pointer'>

            <img src={photo.url} alt='faker photos' className="h-20 w-20"/>
            <div className='absolute inset-0 hover:bg-gray-200 opacity-0 flex  items-center justify-center hover:opacity-80'>
                <GoTrash className='text-3xl'/></div>
        </div>
    )

}
export default  PhotoListItem;