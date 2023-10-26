import { Carousel } from "flowbite-react";

function CarouselComp() {
  return (
    <Carousel slideInterval={2000} pauseOnHover>
      <img
        alt="...img1"
        src="./images/events/1.jpg"
      />
      <img
        alt="...img2"
        src="./images/events/2.JPG"
      />
      <img
        alt="...img3"
        src="./images/events/3.JPG"
      />
      <img
        alt="...img4"
        src="./images/events/4.jpg"
      />
      <img
        alt="...img5"
        src="./images/events/5.jpg"
      />
      <img
        alt="...img6"
        src="./images/events/6.jpg"
      />
      <img
        alt="...img7"
        src="./images/events/7.jpg"
      />
     
      
    </Carousel>
  );
}

export default CarouselComp;
