
import {
  ArrowLeftRight,
  ArrowRight,
  Wallet,
  CheckCircle2,
  Coins,
} from 'lucide-react';
import styles from './SwapCenterBanner.module.css';

export default function SwapCenterBanner({ onNavigate }) {
  return (
    <section className={styles.banner} id="swap-center-banner" aria-labelledby="swap-title">
      <div className={styles.content}>
        <span className={styles.eyebrow}>REWARD UTILITY</span>
        <h2 id="swap-title"><span>Swap</span> Center</h2>
        <p className={styles.description}>
          Convert eligible reward balances between supported currencies
          and manage your rewards more efficiently.
        </p>

        <div className={styles.points}>
          <span><CheckCircle2 size={16} /> Supported balances</span>
          <span><CheckCircle2 size={16} /> Clear conversion flow</span>
        </div>

       <button
  type="button"
  className={styles.cta}
  onClick={() => onNavigate?.('swap-center')}
>
  Open Swap Center <ArrowRight size={17} />
</button>
      </div>

      <div className={styles.visual} aria-label="Two reward currencies with exchange arrows">
        <div className={`${styles.currency} ${styles.ve}`}>
          <Coins size={28} />
          <small>REWARD CURRENCY</small>
          <strong>VE</strong>
          <span>Eligible balance</span>
        </div>

        <div className={styles.exchange}>
          <ArrowLeftRight size={34} />
        </div>

        <div className={`${styles.currency} ${styles.sve}`}>
          <Wallet size={28} />
          <small>REWARD CURRENCY</small>
          <strong>SVE</strong>
          <span>Eligible balance</span>
        </div>

        <div className={styles.flowLine} />
        <div className={styles.note}>SWAP · CONVERT · MANAGE</div>
      </div>
    </section>
  );
}
