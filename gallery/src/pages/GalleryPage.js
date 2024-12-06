import '../static/css/gallery.css';
import { useEffect, useState } from "react"
import { getRandomImages } from "../utils/randomImages"


export default function GalleryPage() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const randomImages = getRandomImages();
        setImages(randomImages);
    }, []);


    return (
        <div className="gallery-content-container">
            {images.map((imageURL, index) => (
                <div className="image-container" key={index}>
                    <img src={imageURL}/>
                </div>
            ))}
        </div>
    )
}