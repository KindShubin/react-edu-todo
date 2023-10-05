import signal from './icons/mobile-signal.svg';
import wifi from './icons/wifi.svg';
import battery from './icons/battery.svg';
import './styles/statusbar.scss';

function Statusbar() {
  return (
    <div className="statusbar">
      <div className="statusbar__time time">9:41
      </div>
      <div className="statusbar__indicators indicators">
        <img src={signal} className="indicators__signal" alt="signal" />
        <img src={wifi} className="indicators__wifi" alt="wifi" />
        <img src={battery} className="indicators__battery" alt="battery" />
      </div>
    </div>
  );
}

export default Statusbar;