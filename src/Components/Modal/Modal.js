import React, { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root')
function Modals(){
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
        <button onClick={()=> setModalIsOpen(true)}>Open modal</button>
          <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={()=>setModalIsOpen(false)}
            // shouldCloseOnOverlayClick={false} 
            style={
                {
                    // overlay:{
                    //     backgroundColor: 'grey'
                    // },
                    content:{
                        color: 'blue'
                    }
                }
            }>
            <h2>Modal title</h2>
            <p>Modal Body</p>
            <div>
                <button onClick={()=> setModalIsOpen(false)}>Close</button>
            </div>
          </Modal>
        </div>
    );
}
export default Modals;
