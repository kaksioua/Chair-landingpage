import React, { useState } from 'react'
import './Rightmain.css'

const Rightmain = () => {
  const images = ['themain.png', '1.png', '2.jpg', '3.jpg', '4.jpg']
  const [selectedImg, setSelectedImg] = useState(images[0])

  const handleLeftArrow = () => {
    // Get the next image index (considering wrapping around)
    const nextIndex = (selectedImgIndex - 1 + images.length) % images.length
    setSelectedImg(images[nextIndex])
  }

  const handleRightArrow = () => {
    // Get the next image index (considering wrapping around)
    const nextIndex = (selectedImgIndex + 1) % images.length
    setSelectedImg(images[nextIndex])
  }
  const selectedImgIndex = images.indexOf(selectedImg)

  return (
    <div className="rightmain">
      <div className="preview">
        <h5>
          <span>{selectedImgIndex + 1}</span> / {images.length}
        </h5>
      </div>

      <div className="product-image">
        <div className="arrows">
          <span onClick={handleLeftArrow}>
            <i class="fa-solid fa-angle-left"></i>
          </span>
          <span onClick={handleRightArrow}>
            <i class="fa-solid fa-angle-right"></i>
          </span>
        </div>
        <div className="rectangle"></div>
        <div className="main-img">
          <img src={selectedImg} alt="" />
        </div>
      </div>
      <div className="product-thumb">
        <img
          src={images[0]}
          alt=""
          onClick={(e) => setSelectedImg(images[0])}
        />
        <img
          src={images[1]}
          alt=""
          onClick={(e) => setSelectedImg(images[1])}
        />
        <img
          src={images[2]}
          alt=""
          onClick={(e) => setSelectedImg(images[2])}
        />
        <img
          src={images[3]}
          alt=""
          onClick={(e) => setSelectedImg(images[3])}
        />
        <img
          src={images[4]}
          alt=""
          onClick={(e) => setSelectedImg(images[4])}
        />
      </div>
    </div>
  )
}

export default Rightmain
