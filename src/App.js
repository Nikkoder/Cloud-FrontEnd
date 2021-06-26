import React, { Fragment } from 'react'
import { Category } from './components/Category'
import { GlobalStyle } from './globalStyles'

export const App = () => (
    <Fragment>
        <GlobalStyle />
        <Category />
    </Fragment>
)