import { useTranslation } from "react-i18next";

function Text () {
  const { t } = useTranslation();

  return (
    <div>
      {t('text')}
    </div>

  )
}

export default Text;