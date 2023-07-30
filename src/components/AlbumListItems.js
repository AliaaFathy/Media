import ExpandablePanel from "./ExpandablePanel";
import Button from "./button";
import { GoTrash } from 'react-icons/go';
import {useRemoveAlbumMutation} from "../store";
import PhotosList from "./PhotosList";

function AlbumListItems({album}){
    const [removeAlbum,result]=useRemoveAlbumMutation();
    const handleRemove=()=>{
        removeAlbum(album)
    }
    let header=<div className='flex justify-between'>
        <Button onClick={handleRemove}><GoTrash></GoTrash></Button>
        <div className='ml-2'>
            {album.title}
        </div>



    </div>
    return(
        <div>
            <ExpandablePanel key={album.id} header={header}><PhotosList album={album}></PhotosList> </ExpandablePanel>
        </div>
    )
}
export default AlbumListItems;