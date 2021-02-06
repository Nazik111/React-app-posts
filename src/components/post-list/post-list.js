import React from 'react';
import {List} from "semantic-ui-react";
import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts}) => {

    const elements = posts.map((item => {
        return (
            <PostListItem key={item.id} content={item.content} important={item.important}/>
        )
    }));

    return (
        <List divided verticalAlign='middle'>

{elements}
        </List>

        )
}

export default PostList;