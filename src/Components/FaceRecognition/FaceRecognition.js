import React from 'react';

const FaceRecognition = ({imageUrl}) => {
    return (
        <div className = 'center ma'>
            <img alt = '' src = {imageUrl} width = '500px' height = 'auto'/>
        </div>
    );
}
//https://samples.clarifai.com/metro-north.jpg
export default FaceRecognition;