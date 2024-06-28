
import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

function Modal(props) {
  return (
    <Fragment>
        <div>
            {
                createPortal(
                    <FonStyle>
                    <ModalStyle>
                        <h1>Хотите удалить ?</h1>
                        <button onClick={props.onDelete}>yes</button>
                        <button onClick={props.onCloseModal}>no</button>
                    </ModalStyle>
                    </FonStyle>,
                    document.body
                )
            }
        </div>
    </Fragment>
  )
}

export default Modal

const ModalStyle = styled.div`
width: 300px;
text-align: center;
border-radius: 10px;
border: none;
background-color: white;
margin: auto;
padding: 10px;
box-shadow: 
rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

button{
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background-color: #3333f4;
    color:white;
    margin:  0px 15px 15px;
}
`

const FonStyle = styled.div`
    background-color: #00000086;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`