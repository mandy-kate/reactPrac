import React from 'react'
import ReactDOM from 'react-dom'
import ComplimentMachine from './components/app'


ReactDOM.render(
    <ComplimentMachine compliment="Your smile is awesome"/>,
    document.getElementById('root')
)

console.log('welcome to compliment thing')