import React, { useReducer, useRef } from 'react'
import { useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)

    const totalVideos = 4
    const nextVdRef = useRef(null)

    const handleMiniVdClick = () => {
        setHasClicked(true)
        setCurrentIndex((prevIndex) => prevIndex + 1)
    }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
        <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
            <div>
                <div className="mask-clip-path absolute-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div onClick={handleMiniVdClick} className=''>
                        MiniVideoPlayer
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero