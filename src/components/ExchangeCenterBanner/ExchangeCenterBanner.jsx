
import {
  ArrowRight,
  Gem,
  ArrowLeftRight,
  Coins,
  Wallet,
  CheckCircle2,
  Gift,
} from 'lucide-react';
import styles from './ExchangeCenterBanner.module.css';

export default function ExchangeCenterBanner({ onNavigate }) {
  return (
    <section className={styles.banner} id="exchange-center-banner" aria-labelledby="exchange-title">
      <div className={styles.content}>
        <span className={styles.eyebrow}>REWARDS REDEMPTION</span>
        <h2 id="exchange-title">
          Convert Gems
          <br />
          <span>to VEs</span>
        </h2>
        <p className={styles.description}>
          Explore available redemption options and exchange
          eligible VEs for supported rewards.
        </p>

        <div className={styles.steps}>
          <span><Gem size={17} /> Choose rewards</span>
          <ArrowRight size={14} />
          <span><Wallet size={17} /> Review options</span>
        </div>

       <button
  type="button"
  className={styles.cta}
  onClick={() => onNavigate?.('exchange-center')}
>
  Open Exchange Center <ArrowRight size={17} />
</button>
      </div>

      <div className={styles.visual} aria-label="Illustration showing a gem converting into a reward coin">
        <div className={styles.rewardCard}>
          <span>AVAILABLE REWARDS</span>
          <div className={styles.gem}><Gem size={48} /></div>
          <strong>GEM</strong>
          <small>Eligible balance</small>
        </div>

        <div className={styles.conversion}>
          <ArrowLeftRight size={29} />
          <span>EXCHANGE</span>
        </div>

        <div className={styles.rewardCard}>
          <span>REWARD VALUE</span>
          <div className={styles.veCoin}><Coins size={46} /></div>
          <strong>VE</strong>
          <small>Supported rewards</small>
        </div>

        <div className={styles.rewardBadge}>
          <CheckCircle2 size={17} />
          <span><strong>Redeem</strong><small>Eligible options</small></span>
        </div>

        <div className={styles.giftBadge}><Gift size={22} /></div>
      </div>
    </section>
  );
}
