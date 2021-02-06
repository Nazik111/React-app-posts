import React, {Component} from 'react'
import {List, Icon, Button} from "semantic-ui-react";
const bootstrap = require('bootstrap');


export default class PostListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }



        this.onImportant = () => {
            this.setState(({important}) => ({
                important: !important
            }))
        };

       this.onLike = () => {
            this.setState(({like}) => ({
                like: !like
            }) );
        }
    }


    render() {

        const {content} = this.props;
const {important, like} = this.state;

let className = 'bi bi-star';
        let className10 = 'bi bi-heart';

        if (important) {
            className+='-fill';
        }
        if (like) {
            className10+='-fill';
        }


        return (
            <List.Item>

                <List.Content floated='right'>

                        <button type='button' onClick={this.onImportant} className='btn btn-sm'><i className={className}/></button>
                        <button type='button' className='btn'><i className='bi bi-trash-fill'/></button>
                    <button type='button' onDoubleClick={this.onLike} className='btn'><i className={className10}/></button>

                </List.Content>

                <List.Content>{content}</List.Content>
            </List.Item>
        )
    }
}



