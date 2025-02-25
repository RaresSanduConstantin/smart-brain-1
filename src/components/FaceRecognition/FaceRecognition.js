import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        {box.map(i => {
        return <div className='bounding-box' style={{top: i.topRow, right: i.rightCol, bottom: i.bottomRow, left: i.leftCol}}></div>
        })}
      </div>
    </div>
  );
}

export default FaceRecognition;