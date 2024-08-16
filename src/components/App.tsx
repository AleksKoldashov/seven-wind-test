import { Button, ConfigProvider, Tree  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { TreeDataNode, TreeProps } from 'antd';
import './styles/app.css';
import './styles/app.scss';
import React, {useReducer, useState} from 'react';
import iconH1 from './img/iconH1.svg';
import iconH2 from './img/iconH2.svg';
import iconsidebar from './img/iconsidbar.svg';
import ComponTabel from './ComponTabel';
import { useQuery } from 'react-query';
import { InitialState, MyAppContext, reducer } from './Reducer/Reducer';
import { getList } from './API/QueryesList';
import { arraySidebar } from './Constants/ConstArr';



export default function App (){

const [state, dispatch]=useReducer<any>(reducer, InitialState)
   
return(
<MyAppContext.Provider value={{state, dispatch}}>
<ConfigProvider
  theme={{
    components: {
        Button: {
            defaultHoverBg: 'rgba(39, 39, 42, 1)',
            defaultHoverBorderColor: 'white',
            defaultHoverColor: 'white'
        },
        Table: {
            borderRadius: 0
          },
    },
    token: {
        colorPrimary: 'rgba(39, 39, 42, 1)',
        colorText: 'white',
        colorBgContainer:'rgba(39, 39, 42, 1)',
    },
    
  }}
>
<div className='app'>
    <div
    className='header'
    >
       <img src={iconH1} alt='icon'/> 
       <img src={iconH2} alt='icon'/>
       <div className='header-btn'>Просмотр</div>
       <div className='header-btn'>Управление</div>
    </div>
    <div className='content'>
        <div
        className='sidebar'
        >
            <div
            className='sidebar-titel'
            >
            <span className='name'>Название проекта</span>
            <span className='lastname'>Аббревиатура</span>   
            </div>
            {
                arraySidebar.map((item, index)=><div className='item-sidebar' key={index}>
                <img src={iconsidebar} alt='icon'/>
                <span className='name'>{item}</span>
            </div>)
            }    
        </div> 
            <div className='content-body'>
                <div className='content-body-titel'>Строительно-монтажные работы</div>
                <div>
                    <ComponTabel/>
                </div>
            </div>
    </div>
   
</div>
</ConfigProvider>
</MyAppContext.Provider>

)
}