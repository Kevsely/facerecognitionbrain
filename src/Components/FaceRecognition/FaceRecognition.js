import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id = 'image' alt = '' src = {imageUrl} width = '500px' height = 'auto'/>
                <div className='bounding-box' style={{top: box.top, bottom: box.bottom, left: box.left, right: box.right}}></div>
            </div>
        </div>
            
    );
}
//Sample images for test
//https://samples.clarifai.com/metro-north.jpg
//https://www.thelist.com/img/gallery/why-we-find-smiles-so-attractive/are-smiles-truly-attractive-1546622861.jpg
//https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_07/2233721/171120-smile-stock-njs-333p.jpg
export default FaceRecognition;