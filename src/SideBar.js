import React from 'react'
import SideBarChat from './SideBarChat'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import {Avatar, IconButton} from '@material-ui/core'


function SideBar(){
    return <div className='sidebar'>
          <div className='sidebar__header'>
              <Avatar src='https://media-exp1.licdn.com/dms/image/C4D03AQFH-dUTdrMC_w/profile-displayphoto-shrink_200_200/0/1598809671425?e=1620864000&v=beta&t=OumQhYqKevdLkSgj30GNlMlPIp8lYfLQQ-1xhxhecmU'/>
            <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='Search or start new chat' type='text'/>
            </div>

        </div>

        <div className='sidebar__chats'>
            <SideBarChat/>
            <SideBarChat/>
            <SideBarChat/>
       


        </div>
    </div>
}

export default SideBar