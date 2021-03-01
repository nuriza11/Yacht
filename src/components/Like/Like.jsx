import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './Like.css'

const Like = () =>{
    const [open, setOpen] = useState(false)



    useEffect(()=>{
    },[open])
    function setLike() {
        localStorage.getItem('like-data')
        setOpen(!open)
        if(!localStorage.getItem('like-data')){
            localStorage.setItem('like-data', '[]')
        }
        let data =JSON.parse(localStorage.getItem('like-data'))
        console.log(open)
        data.push(open)
        localStorage.setItem('like-data', JSON.stringify(data))
    }
    

    return(
        <div>
            <FavoriteIcon onClick={()=>setLike()} className={open? 'heart': 'heart-dis'}/>
        </div>
    )
}
 export default Like;