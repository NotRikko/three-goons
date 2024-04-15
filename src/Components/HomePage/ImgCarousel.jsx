import {useState, useEffect} from 'react'
import carouselImg1 from '../../assets/threegoonbg.jpg'

function ImgCarousel() {
    const [currentImgIndex, setImgIndex] = useState(0);

    const images = [carouselImg1];

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((index) => (index+1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
    }, []); 


    return (
        <div id="#imgCarousel"
        style={{
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh', 
        }}
        >
        </div>
    )
}

export default ImgCarousel