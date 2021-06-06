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
import { useDispatch } from 'react-redux'
import { log_out } from '../../Redux/actions/auth.action'


const Sidebar = ({sidebar, handleToggleSidebar}) => {

    const dispatch = useDispatch()
    const logoutHandle=()=>{
        dispatch(log_out())

    }
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
            <li onClick={logoutHandle}>
                <MdExitToApp size={23} />
                <span> Log Out </span>
            </li>
            <hr/>
            
        </nav>
    )
}

export default Sidebar
