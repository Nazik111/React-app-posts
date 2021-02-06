import React from 'react'
import {Input} from "semantic-ui-react";
import s from './search-panel.module.css'

const SearchPanel = () => {
    return (
        <div className={s.input_wrapper}>
            <Input
            placeholder='Search...'
            type='text'/>
        </div>
    )
}

export default SearchPanel;