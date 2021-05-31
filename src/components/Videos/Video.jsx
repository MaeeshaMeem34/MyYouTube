import React, { useEffect, useState } from 'react'
import './_video.scss'

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className='video' >
         <div className='video__top'>
             <img src="https://i.ytimg.com/vi/EKdAr3x7cBA/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBR4KKKlC2pCJPhyhJ2LdizsMmcRw" alt="" />
          
            <span className='video__top__duration'>5.04</span>
         </div>
         <div className='video__title'>Make an app in 5 minutes </div>
         <div className='video__details'>
            <span>
               <AiFillEye /> 3m Views •{' '}
            </span>{' '}
            <span> 5 days ago </span>
         </div>
        
            <div className='video__channel'>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnh8ycya-h_WkmP-BRoLIlY2oRF58swnKIcuH64O=s88-c-k-c0x00ffffff-no-rj" alt="" />
              

               <p>Rainbow</p>
            </div>
      
      </div>
    )
}

export default Video
