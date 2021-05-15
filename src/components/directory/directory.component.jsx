import React from 'react';
import { sectionsData } from '../../data/directory.data'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';


const Directory = () => {

    const [sections , setSections ] = React.useState(sectionsData)

    return (
        <div className='directory-menu'>
            { sections.map(({id, ...otherSectionProps  }) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}    
        </div>
    )
}

export default Directory

 