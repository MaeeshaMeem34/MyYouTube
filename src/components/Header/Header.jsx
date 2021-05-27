import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'


const Header = () => {
    const [input,setInput] = useState('')
    return (
        <div className="header border border-dark">
          <FaBars className="header__menu" size={26} />
          <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
            className='header__logo'
         />

         <form >
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img  alt='avatar' />
         </div>
        </div>
    )
}

export default Header