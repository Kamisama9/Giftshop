import React from 'react'
import './wave.css'
const Wave = () => {
  return (
    <div>
      <div className="Wave-container bgTop">
            <div className="wave waveTop " ></div>
          </div>
          <div className="Wave-container bgMiddle">
            <div className="wave waveMiddle"></div>
          </div>
          <div className="Wave-container bgBottom">
            <div className="wave waveBottom" >
                  </div>
          </div>
    </div>
  )
}

export default Wave
