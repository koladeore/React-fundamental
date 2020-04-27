import React, { useState,useRef } from 'react';
import IdleTimer from 'react-idle-timer';
import Modal from 'react-modal';
Modal.setAppElement('#root')

function IdleTimerContainer() {
    const [isLoginIn, setIsLoginIn] = useState(true)
    const [modalIdleIsOpen, setModalIdleIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    const sessionTimeoutRef = useRef(null)
    const onIdle = () => {
        console.log('user is idle')
        setModalIdleIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }
    const stayActive = () => {
        setModalIdleIsOpen(false);
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is Active')
    }
    const logOut = () => {
        setModalIdleIsOpen(false)
        setIsLoginIn(false)
        console.log('User has logged out')
    }
    return (
        <div>
            {
                isLoginIn ? <h2>Hello Welcome</h2> : <h2>Hello Guest</h2>
            }
            <Modal isOpen={modalIdleIsOpen}>
                <h2>You have been idle for a while!</h2>
                <p>You will be logged out soon</p>
                <div>
                    <button onClick={logOut}>Log me Out</button>
                    <button onClick={stayActive}>Keep me signed In</button>
                </div>
            </Modal>
            <IdleTimer 
                ref={idleTimerRef} 
                timeout={5 * 1000} 
                onIdle={onIdle}>
            </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer;

