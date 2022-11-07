import React from 'react'
import {Section, MapWrapper} from './styled-index'
import { useTranslation } from "react-i18next";
const HomeMap = () => {
    const [t, i18n] = useTranslation()
  return (
    <>
     <Section>
            <h2>{t("HomeMap.0")}</h2>
            <div></div>
            <MapWrapper>
                    <iframe class="gmap_iframe" width="100%" height={450} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=993&amp;height=400&amp;hl=en&amp;q=stroy center uzbekistan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </MapWrapper>
     </Section>
    </>
  )
}

export default HomeMap