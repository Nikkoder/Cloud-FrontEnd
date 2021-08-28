import React from 'react'
import {Category} from '../Category'
import { List, Item } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

let categories = [
    {
        id: 1,
        name: "cats",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    },
    {
        id: 2,
        name: "dogs",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    },
    {
        id: 3,
        name: "birds",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    },
    {
        id: 4,
        name: "nombre1",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    },
    {
        id: 5,
        name: "nombre2",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    },
    {
        id: 6,
        name: "nombre3",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    },
    {
        id: 7,
        name: "nombre4",
        emoji: "😡",
        cover: DEFAULT_IMAGE
    }
]

export const ListOfCategories = () => {
    return (
        <List>
            {
                categories.map(category => <Item key ={category.id}><Category {...category}/></Item>)
            }
        </List>
    )
}