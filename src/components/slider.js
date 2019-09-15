import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [{ src: 'images/twilightscapes-button.jpg', src: 'path/urban-fetish-button.jpg', src: 'path/yearofnight-button.jpg' }];

class Component extends React.Component {
  state = { modalIsOpen: false }
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}