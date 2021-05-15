import React from 'react';
import { sectionsData } from '../../data/directory.data'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';


const Directory = () => {

    const [sections , setSections ] = React.useState(sectionsData)

    return (
        <div className='directory-menu'>
            { sections.map(({title, imageUrl , id , size }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))}    
        </div>
    )
}

export default Directory

 