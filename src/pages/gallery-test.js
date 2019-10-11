import React, { useState, useCallback } from "react";
import LayoutFull from '../components/LayoutFull';
import { Helmet } from "react-helmet";
// import { photos } from "../../components/photos";


import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"

const SingleCategory = props => {



const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);


  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
	{src: 'https://launchlamp.com/urbanfetish/wp-content/uploads/sites/26/2019/05/843-1024x683.jpg', width:3, height:2},
    {src: 'https://launchlamp.com/urbanfetish/wp-content/uploads/sites/26/2019/05/15572-1024x682.jpg', width:3, height:2},
    {src: 'https://launchlamp.com/urbanfetish/wp-content/uploads/sites/26/2019/05/18273-791x1024.jpg', width:2, height:3},
    {src: 'https://launchlamp.com/urbanfetish/wp-content/uploads/sites/26/2019/05/10605-1024x683.jpg', width:3, height:2}
  ];
  
  
  

  return (
	  
    <LayoutFull>
    
      <Helmet>
          <meta charSet="utf-8" />
          <title>Gallery 1 | Urban Fetish - Abandoned Urbex Urban Exploration Photos and Locations</title>
	  </Helmet>
        
      <h1>Gallery 1</h1>
  
    <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    
 
      

      
    </LayoutFull>
  );
};

export default SingleCategory;
