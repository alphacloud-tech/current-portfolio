import React from 'react'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>

        <div>
            <a href="https://github.com/alphacloud-tech?tab=repositories"><BsGithub /></a>
        </div>

        <div>
            <a href="https://www.linkedin.com/in/adams-salaudeen-b369a3b9/"><BsLinkedin /></a>
        </div>

        <div>
            <a href="https://web.facebook.com/AlphacloudTech2020"><FaFacebookF /></a>
        </div>

    </div>
  )
}

export default SocialMedia
