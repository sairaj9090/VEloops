
import {
  ArrowRight,
  Gift,
  Coins,
  CircleCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import styles from './BonusVEsBanner.module.css';

export default function BonusVEsBanner({ onNavigate }) {
  return (
    <section className={styles.banner} id="bonus-ves-banner" aria-labelledby="bonus-title">
      <div className={styles.content}>
        <span className={styles.eyebrow}><Sparkles size={15} /> SPECIAL OPPORTUNITIES</span>
        <h2 id="bonus-title">Boost Your<br /><span>VE Balance</span></h2>
        <p className={styles.description}>
          Complete eligible activities and unlock additional VEs
          through special bonus opportunities.
        </p>

        <div className={styles.tasks}>
          <div><CircleCheck /><span>Daily check-in<small>Stay active</small></span></div>
          <div><CircleCheck /><span>Invite friends<small>Grow together</small></span></div>
          <div><CircleCheck /><span>Complete tasks<small>Explore opportunities</small></span></div>
        </div>

       <button
  type="button"
  className={styles.cta}
  onClick={() => onNavigate?.('bonus-opportunities')}
>
  Explore Bonuses <ArrowRight size={17} />
</button>
      </div>

      <div className={styles.visual} aria-label="Bonus coin and reward vault illustration">
        <div className={styles.ring} />
        <div className={styles.vault}><Gift size={74} /><span>REWARD VAULT</span></div>
        <div className={styles.bonusCoin}><Coins size={43} /><strong>VE</strong></div>
        <div className={`${styles.floatingCoin} ${styles.coinA}`}><Coins size={25} /></div>
        <div className={`${styles.floatingCoin} ${styles.coinB}`}><Sparkles size={23} /></div>
        <div className={styles.multiplier}><TrendingUp size={18} /> Bonus opportunities</div>
      </div>
    </section>
  );
}
