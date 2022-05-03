import React from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";


const Header = () => {
    const onChange = (event) => {
        i18n.changeLanguage(event.target.value);
        console.log(event.target.value);
      };
      const { t } = useTranslation();

  return (
    <div>
        <div className='header' style={{margin:"10px"}}>
            <h1>{t("Header")}</h1>
            <select name={t('language')} className="dropdown" onChange={onChange}>
            <option value="en">{t('English')}</option>
            <option value="fr">{t('Langue')}</option>
          </select>
        </div>
    </div>
  )
}

export default Header