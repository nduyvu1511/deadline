import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

const useLocale = () => {
    const language = useSelector(
        (state: RootState) => state.language.currentLanguage
    );
    return language;
};

export default useLocale;
