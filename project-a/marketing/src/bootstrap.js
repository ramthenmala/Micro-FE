import React from 'react'
import ReactDOM from 'react-dom'

const mount = (el) => {
    ReactDOM.render(<h1>Hi There</h1>, el)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot)
        console.log('dev root mounted')
    }
}