import React from 'react'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t}=useTranslation()
  return (
    <div className='footer' style={{margin:"10px"}}>
        <p>{t("footer")}</p>
    </div>
  )
}

export default Footer
