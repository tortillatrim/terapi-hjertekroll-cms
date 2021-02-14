import React from 'react';
import PropTypes from 'prop-types';
import {motion } from 'framer-motion';


const TherapyStep2Icon = (props) => {

  const variants = {
    hidden: { 
      opacity: 1,
      scale: 1
    },
    visible: { 
      opacity: [1, 0, 1],
      scale: [1, 0.8, 1],
      transition: {
        duration: 2,
        delay: 0,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut"
      }
     },
    
  };

  return (
      <motion.svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48" viewBox="0 0 24 24" width="48" id="aniIcon"
        initial="hidden"
        animate="visible">
        <g><rect fill="none" height="24" width="24" /></g>
        <g><g>
          <path 
          // strokeWidth=".7" 
          // stroke="#394029" 
          fill="#e4eb9e" d="M 13,3 C 9.25,3 6.2,5.94 6.02,9.64 L 4.1,12.2 C 3.85,12.53 4.09,13 4.5,13 H 6 v 3 c 0,1.1 0.9,2 2,2 h 1 v 3 h 7 V 16.32 C 18.36,15.2 20,12.79 20,10 20,6.13 16.87,3 13,3 Z" />
          <motion.path
             d="m 12.920931,9.1801272 c 0.507208,0 0.922198,0.4149889 0.922198,0.9221988 0,0.507209 -0.41499,0.922198 -0.922198,0.922198 -0.50721,0 -0.9222,-0.414989 -0.9222,-0.922198 0,-0.5072099 0.41499,-0.9221988 0.9222,-0.9221988 m 0,-0.614799 c -0.848423,0 -1.536999,0.6885743 -1.536999,1.5369978 0,0.848422 0.688576,1.536997 1.536999,1.536997 0.848422,0 1.536997,-0.688575 1.536997,-1.536997 0,-0.8484235 -0.688575,-1.5369978 -1.536997,-1.5369978 z M 9.8469349,10.409725 h 0.6147991 c 0.16907,0 0.307399,-0.13833 0.307399,-0.307399 0,-0.1690702 -0.138329,-0.3073999 -0.307399,-0.3073999 H 9.8469349 c -0.1690698,0 -0.3073995,0.1383297 -0.3073995,0.3073999 0,0.169069 0.1383297,0.307399 0.3073995,0.307399 z m 5.5331911,0 h 0.614799 c 0.16907,0 0.307401,-0.13833 0.307401,-0.307399 0,-0.1690702 -0.138331,-0.3073999 -0.307401,-0.3073999 h -0.614799 c -0.169069,0 -0.307399,0.1383297 -0.307399,0.3073999 0,0.169069 0.13833,0.307399 0.307399,0.307399 z M 12.61353,7.0283298 v 0.6147989 c 0,0.1690698 0.138331,0.3073995 0.307401,0.3073995 0.169068,0 0.307399,-0.1383297 0.307399,-0.3073995 V 7.0283298 c 0,-0.1690698 -0.138331,-0.3073995 -0.307399,-0.3073995 -0.16907,0 -0.307401,0.1383297 -0.307401,0.3073995 z m 0,5.5331922 v 0.614799 c 0,0.16907 0.138331,0.3074 0.307401,0.3074 0.169068,0 0.307399,-0.13833 0.307399,-0.3074 v -0.614799 c 0,-0.16907 -0.138331,-0.307399 -0.307399,-0.307399 -0.16907,0 -0.307401,0.138329 -0.307401,0.307399 z M 11.073459,7.8214206 c -0.119886,-0.1198856 -0.316622,-0.1198856 -0.433433,0 -0.119887,0.1198855 -0.119887,0.3166215 0,0.4334331 l 0.325843,0.3258435 c 0.119886,0.1198867 0.316622,0.1198867 0.433433,0 0.116812,-0.1198855 0.119886,-0.3166215 0,-0.433433 z m 3.802532,3.8025334 c -0.119886,-0.119887 -0.316621,-0.119887 -0.433433,0 -0.119886,0.119885 -0.119886,0.316621 0,0.433433 l 0.325844,0.325843 c 0.119885,0.119886 0.316621,0.119886 0.433433,0 0.119886,-0.119885 0.119886,-0.316621 0,-0.433433 z m 0.325844,-3.3691003 c 0.119886,-0.1198856 0.119886,-0.3166216 0,-0.4334331 -0.119886,-0.1198856 -0.316622,-0.1198856 -0.433433,0 l -0.325844,0.3258436 c -0.119886,0.1198855 -0.119886,0.3166215 0,0.433433 0.119886,0.1168126 0.316622,0.1198867 0.433433,0 z m -3.802533,3.8025333 c 0.119886,-0.119886 0.119886,-0.316622 0,-0.433433 -0.119885,-0.119887 -0.316621,-0.119887 -0.433433,0 l -0.325843,0.325843 c -0.119887,0.119886 -0.119887,0.316622 0,0.433433 0.119885,0.116812 0.316621,0.119886 0.433433,0 z"
             fill="#394029" 
             variants={variants}
             />
        </g></g>
      </motion.svg>
  )
};

export default TherapyStep2Icon;