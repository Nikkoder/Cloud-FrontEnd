import React, { Fragment } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
    <Fragment>
        <GlobalStyle />
        <Logo/>
        <ListOfCategories />
        <ListOfPhotoCards />
    </Fragment>
)