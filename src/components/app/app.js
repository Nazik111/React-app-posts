import React from 'react';
import AppHeader from "../app-header/app-header";
import s from './app.module.css'
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
const App = () => {

    const data = [
        {content: 'AAAAAA', important: true, like: true, id: 'dss'},
        {content: 'BBBBBB', important: false, like: true, id: 'gfd'},
        {content: 'CCCCCC', important: false, like: true, id: 'fas'},
    ];

    return (
        <div className={s.app__wrapper}>
<AppHeader/>
<div className={s.searchPanel__wrapper}>
    <SearchPanel/>
    <PostStatusFilter/>
</div>
            <div className={s.list_wrapper}>
            <PostList posts = {data}/>
            </div>
            <div className={s.form_wrapper}>
            <PostAddForm/>
            </div>
        </div>
    )
}

export default App;