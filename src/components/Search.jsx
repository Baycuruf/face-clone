import Icon from './Icon'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import classNames from 'classnames';

function Search() {
  const [open,setOpen] = useState(false);

  return (
    <div className='w-[478px] rounded-3xl relative group'>
      <span className={classNames({
        "absolute pointer-events-none top-0 left-0 h-9 w-9 text-[#8e8e8e] flex items-center justify-center rounde":true,
        "hidden" : open
      })}>
        <Icon name="search"/>
      </span>  
      <input onClick={()=>setOpen(true)} onBlur={()=> setOpen(false)} type="text" placeholder='Facebookta Ara' className='h-9 outline-none pl-9 focus:pl-3 rounded-3xl w-full bg-[#efefef]'/>
      <button onClick={()=>setOpen(false)} className={classNames({
        "absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9  items-center justify-center":true,
        "!flex" : open
      })} >
        <AiFillCloseCircle/>
      </button>
    </div>
  )
}

export default Search
