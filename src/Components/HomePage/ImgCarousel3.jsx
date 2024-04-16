import Carousel from 'react-material-ui-carousel'
import carouselImg1 from '../../assets/threegoonbg.jpg'
import carouselImg2 from '../../assets/threegoonbg2.jpg'

function Example()
{
    const images = [carouselImg1, carouselImg2];

    return (
        <Carousel id='carousel'
            stopAutoPlayOnHover={false}
            swipe={false}
            interval={6000}
            duration={1000}
            indicatorIconButtonProps={{
                style: {}

            }}
            activeIndicatorIconButtonProps={{
                style: {
                }
            }}
            indicatorContainerProps={{
                style: {
                    position: 'absolute',
                    bottom: '3vw',
                    textAlign: 'center',
                    zIndex: '55',
                }
        
            }}>
        {images.map((image, index) => (
            <div style={{
                width: '100vw',
                height: '100vh',
              }} 
              key={index}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  }}
                />
                <img style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    }} 
                    src={image} 
                />
              </div>
        ))}
        </Carousel>
    )
}

export default Example
