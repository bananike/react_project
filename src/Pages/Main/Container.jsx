import { memo } from 'react';
import { useHistory } from 'react-router';
import Presenter from './Presenter';

const Container = memo(() => {
    const history = useHistory();

    const onClickMore = (path) => {
        history.push(`/${path}`);
    };

    const onClickYoutube = () => {
        window.open('https://www.youtube.com/watch?v=Ji31ibYy0OM', '_blank');
    };
    return <Presenter onClickMore={onClickMore} onClickYoutube={onClickYoutube} />;
});

export default Container;
