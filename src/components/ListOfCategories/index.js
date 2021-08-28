import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

let mockCategories = [
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
    const [categories, setCategories] = useState([]) // Devuelve la variable y la funcion setter
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => { // Bajar datos del BackEnd
        (async () => { // Probar la autoinvocada
        //   const response = await window.fetch(
        //     'https://petgram-server-edsf8xpy2.now.sh/categories'
        //   )
        //   const data = await response.json()
        //   setCategories(data)
        })()
        setCategories(mockCategories)
        //fetchCategories()
    }, []) // [] es la ejecucion solo al incializarse

    useEffect( () => { // Efecto para renderizar el componente con la clase fixed
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        // Devolvemos una función para anular la suscripción al evento y evitar memory leak
        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => ( // El parametro fixed le añade la clase para que sea un sticky
        <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => <Item key ={category.id}><Category {...category}/></Item>)
            }
        </List>
    )
    return (
        [ // Otra forma de usar el Fragment
            renderList(),
            showFixed && renderList(true) 
        ]
    )
}