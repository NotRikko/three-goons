import { useState, useEffect } from 'react'
import './SubPages.css'

function Model() {

    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?api_key=bu47zYpnxd4vPiMZ7UH1sFNkzfuMvq67&limit=15&q=model', {mode: 'cors'})
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
             })
            .then((response) => {
                const images = response.data.map(data => {
                    return data.images.original.url
                })
                setImageURLs(images)
            })
            .catch((error => console.error(error)));
    }, []);


    return (
        <div className="subPageMain">
            <h1>Model</h1>
            <div className='subPage'>
            {imageURLs.map((image, index) => {
                return <img key={index} src={image}></img>
            })
        }
        </div>
        </div>
    )
}

export default Model