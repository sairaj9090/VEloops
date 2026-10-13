
import {
  ArrowRight,
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
          Redeem Your VEs
          <br />
          <span>for Rewards</span>
        </h2>
        <p className={styles.description}>
          Browse supported reward options, review the details,
          and choose how you would like to redeem eligible VEs.
        </p>

        <div className={styles.steps}>
          <span><Gift size={17} /> Choose a reward</span>
          <ArrowRight size={14} />
          <span><Wallet size={17} /> Review redemption</span>
        </div>

       <button
  type="button"
  className={styles.cta}
  onClick={() => onNavigate?.('exchange-center')}
>
  Open Exchange Center <ArrowRight size={17} />
</button>
      </div>

      <div className={styles.visual} aria-label="Illustration of browsing and redeeming rewards">
        <div className={styles.rewardCard}>
          <span>REWARD CATALOG</span>
          <div className={styles.gem}><Gift size={44} /></div>
          <strong>Choose</strong>
          <small>Browse options</small>
        </div>

        <div className={styles.conversion}>
          <ArrowRight size={29} />
          <span>REDEEM</span>
        </div>

        <div className={styles.rewardCard}>
          <span>REDEMPTION</span>
          <div className={styles.veCoin}><Wallet size={42} /></div>
          <strong>Review</strong>
          <small>Confirm details</small>
        </div>

        <div className={styles.rewardBadge}>
          <CheckCircle2 size={17} />
          <span><strong>Reward preview</strong><small>No real payout</small></span>
        </div>

        <div className={styles.giftBadge}><Gift size={22} /></div>
      </div>
    </section>
  );
}
