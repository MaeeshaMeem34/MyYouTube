import React from 'react'
import './_sidebar.scss'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 } from 'react-icons/md'


const Sidebar = ({sidebar, handleToggleSidebar}) => {
    return (
        <nav onClick={()=> handleToggleSidebar(false)} className={ sidebar ? 'sidebar open' : 'sidebar'}>
            <li>
                <MdHome size={23} />
                <span> Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span> Subscription </span>
            </li>
            <li>
                <MdThumbUp size={23} />
                <span> Liked Videos</span>
            </li>
            <hr/>
            <li>
                <MdHistory size={23} />
                <span> History </span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span> Library </span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span> DOnt know</span>
            </li>
            <li>
                <MdExitToApp size={23} />
                <span> Log Out </span>
            </li>
            <hr/>
            
        </nav>
    )
}

export default Sidebar
