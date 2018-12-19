import React from 'react'
import ReactSVG from 'react-svg'

import addicon from '../static/add_icon.svg'
import deleteicon from '../static/remove_icon.svg'
import doneicon from '../static/done_icon.svg'

export function AddIcon() {
    return (
            <ReactSVG src={addicon} />
           )
}

export function DelIcon() {
    return (
            <ReactSVG src={deleteicon} />
           )
}

export function CompletedIcon() {
    return (
            <ReactSVG src={doneicon} />
           )
}
