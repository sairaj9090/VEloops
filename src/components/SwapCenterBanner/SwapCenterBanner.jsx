
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './SwapCenterBanner.module.css';
import swapCenterImage from '../../assets/swap-center.png';

export default function SwapCenterBanner({ onNavigate }) {
  return (
    <section
      className={styles.banner}
      id="swap-center-banner"
      aria-labelledby="swap-title"
    >
      <div className={styles.content}>
        <span className={styles.eyebrow}>REWARD UTILITY</span>

        <h2 id="swap-title">
          <span>Swap</span> Center
        </h2>

        <p className={styles.description}>
          Convert eligible reward balances between supported currencies
          and manage your rewards more efficiently.
        </p>

        <div className={styles.points}>
          <span>
            <CheckCircle2 size={16} /> Supported balances
          </span>
          <span>
            <CheckCircle2 size={16} /> Clear conversion flow
          </span>
        </div>

        <button
          type="button"
          className={styles.cta}
          onClick={() => onNavigate?.('swap-center')}
        >
          Open Swap Center <ArrowRight size={17} />
        </button>
      </div>

      <div className={styles.visual}>
        <img
          className={styles.swapIllustration}
          src={swapCenterImage}
          alt="Gold VE coins, purple exchange arrows, and a gift box representing reward conversion"
        />
      </div>
    </section>
  );
}
