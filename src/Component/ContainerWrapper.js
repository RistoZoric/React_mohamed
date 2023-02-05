import React from 'react'
import './ContainerWrapper.scss'

export default function ContainerWrapper(props) {
  return (
    <div className={`${props.className} container-wrapper`}>
        {props.children}
    </div>
  )
}
