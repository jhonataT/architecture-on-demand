import { Player } from '@lottiefiles/react-lottie-player';
import emptyLottie from '../../assets/lotties/data-empty.json';
import './styles.scss';

export const EmptyData = () => {
    return <div className="lottie__container">
        <Player
            autoplay
            loop
            src={emptyLottie}
            style={{ height: '300px', width: '300px' }}
        />
    </div>
}