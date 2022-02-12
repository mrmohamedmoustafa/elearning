import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { t } from 'i18next';



export const Beverage = (props) => (

  <div>
    <a href='https://twitter.com/Kau_elearning' target='_blank' title={t('twitter')}>
        <FontAwesomeIcon icon= {['fab', 'twitter-square']} className="p-1 text-white fs-5 text-white fs-5" />
    </a>
    <a href='https://www.facebook.com/kau.elearning' target='_blank' title={t('facebook')}>
     <FontAwesomeIcon icon= {['fab', 'facebook-square']} className="p-1 text-white fs-5" />
    </a>
    <a href='https://www.youtube.com/user/DeanshipOfElearning' target='_blank' title={t('youtube')}>
        <FontAwesomeIcon icon= {['fab', 'youtube-square']} className="p-1 text-white fs-5" />
    </a>
    <a href='#' target='_blank' title={t('snapchat')}>
     <FontAwesomeIcon icon= {['fab', 'snapchat-square']} className="p-1 text-white fs-5" />
    </a>
  </div>    
)
