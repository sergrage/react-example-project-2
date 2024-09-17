import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('aboutPage');
    return (
        <h1>{t('aboutHeader')}</h1>
    )
}

export default AboutPage;