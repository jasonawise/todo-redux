/* eslint-disable react/jsx-no-literals */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'


const Footer = props => {
   const [ isModalOpen, setIsModalOpen ] = useState( false )
   const handleClick = () => {
      //  @TODO show model with content
      setIsModalOpen( true )
   }

   return (
      <footer className="text-center p-6 mt-8 bg-orange-800 text-gray-100 absolute inset-x-0 bottom-0">
         <a
            className="border-b cursor-pointer"
            onClick={handleClick}
         >
            {`About`}
         </a>
         <ul className="flex justify-center mt-6">
            <li><a href="https://github.com/jasonawise" target="_blank"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
            <li className="mx-5"><a href="https://twitter.com/wiseprogrammer" target="_blank"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></li>
            <li><a href="https://www.facebook.com/wisedeveloper" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a></li>
         </ul>
         <p
            className="mt-6"
         >
            &copy; {new Date().getFullYear()}
         </p>
      </footer>
   )
}

Footer.propTypes = {}

export default Footer