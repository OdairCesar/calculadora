import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button'
    classes += props.operation ? ' operation' : ''
    classes += props.doubleColumn ? ' doubleColumn' : ''
    classes += props.operationB ? ' operationB' : ''
    classes += props.doubleRow ? ' doubleRow' : ''

    return(
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
                {props.label}
        </button>
    )
}