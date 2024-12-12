import { Modal, ModalHeader, ModalFooter, Button, CardImg, Input } from 'reactstrap';
import React, { useState } from 'react';
import ContentEditable from '../ContentEditable'
function Postmodel({ modal, toggle, myphoto }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size='lg'>
        <ModalHeader toggle={toggle} className='border-0'>
          <div className='hover rounded-3 p-2'>
            <Button className="btn btn-secondary bg-transparent border-0 text-dark">
              <div className='d-flex gap-2'>
                <div className='profilePhoto'>
                  <CardImg alt="Card image cap" src={myphoto} top />

                </div>
                <div className='fw-bold'>
                  <h4 className='m-0'>Habibulla shaik<span className='dropdown-toggle p-2'></span></h4>
                  <div className='position font'>
                    <span>Post to everyone</span>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </ModalHeader>
        {/* <div className='border-0 outline editable-div"'
          id="editableDiv" contentEditable="true"
          onInput={handleInputChange}>
        </div> */}
        <ContentEditable />


        <ModalFooter>
          <Button color="primary"  className='rounded-pill'>
            Post
          </Button>{' '}

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Postmodel;