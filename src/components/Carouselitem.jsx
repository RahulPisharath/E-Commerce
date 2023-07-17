import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';



const Carouselitem = () => {
  return (
  // className "owl-theme" is optional
<OwlCarousel className="owl-theme" items={6} loop margin={8} nav>
    <div className="item item_list text-center">
      <div className="item_box py-2 One card_animation">
        <span className="icon icon_01"></span>
        <h6 className="h6 black">Home Builders</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Two card_animation">
        <span className="icon icon_02"></span>
        <h6 className="h6 black">Interior Work</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Four card_animation">
        <span className="icon icon_03"></span>
        <h6 className="h6 black">Electrician</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Three card_animation">
        <span className="icon icon_04"></span>
        <h6 className="h6 black">Gardening</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Five card_animation">
        <span className="icon icon_05"></span>
        <h6 className="h6 black">Furnitures</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 One card_animation">
        <span className="icon icon_01"></span>
        <h6 className="h6 black">Home Builders</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Two card_animation">
        <span className="icon icon_02"></span>
        <h6 className="h6 black">Interior Work</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Three card_animation">
        <span className="icon icon_03"></span>
        <h6 className="h6 black">Electrician</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Four card_animation">
        <span className="icon icon_04"></span>
        <h6 className="h6 black">Gardening</h6>
      </div>
    </div>
    <div className="item item_list text-center">
      <div className="item_box py-2 Five card_animation">
        <span className="icon icon_05"></span>
        <h6 className="h6 black">Plumber</h6>
      </div>
    </div>
    <div className="item item_list text-center One">
      <div className="item_box py-2 Six card_animation">
        <span className="icon icon_01"></span>
        <h6 className="h6 black">Home Builders</h6>
      </div>
    </div>
   
  </OwlCarousel>
  )
}

export default Carouselitem