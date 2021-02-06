import React from 'react'
import {Button} from "semantic-ui-react";
import s from './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div>
            <Button type='button' primary>Search</Button>
        <Button type='button' primary>Filter</Button>
        </div>
    )
}

export default PostStatusFilter;