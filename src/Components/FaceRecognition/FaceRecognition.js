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
//https://samples.clarifai.com/metro-north.jpg
export default FaceRecognition;