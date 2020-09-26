/* eslint-disable react/jsx-no-literals */
import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
   const handleClick = () => {
      //  @TODO show model with content
      alert( `clicked` )
   }

   return (
      <footer className="text-center p-6 mt-8 bg-orange-800 text-gray-100 absolute inset-x-0 bottom-0">
         <a
            className="border-b cursor-pointer"
            onClick={handleClick}
         >
            {`About`}
         </a>
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