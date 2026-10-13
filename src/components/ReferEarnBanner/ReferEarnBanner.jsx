
import { useState } from 'react';
import {
  ArrowRight,
  Users,
  Copy,
  ShieldCheck,
  Zap,
  Gift,
} from 'lucide-react';

import styles from './ReferEarnBanner.module.css';
import referEarnImage from '../../assets/refer-earn.png';

export default function ReferEarnBanner({ onNavigate }) {
  const referralCode = 'VELOOP123';
  const [copyMessage, setCopyMessage] = useState('');

  async function copyReferralCode() {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopyMessage('Referral code copied');
    } catch {
      setCopyMessage(`Your code: ${referralCode}`);
    }
  }

  return (
    <section
      className={styles.banner}
      id="refer-earn-banner"
      aria-labelledby="refer-title"
    >
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <Users size={15} /> REFER &amp; EARN
        </span>

        <h2 id="refer-title">
          Refer Friends,
          <br />
          <span>Earn Rewards</span>
        </h2>

        <p className={styles.description}>
          Invite your friends to VELOOP Rewards and earn
          rewards together when eligible activities are completed.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            onClick={() => onNavigate?.('refer-earn')}
          >
            Invite Friends <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className={styles.secondary}
            onClick={copyReferralCode}
          >
            <Copy size={15} /> Copy Code
          </button>
        </div>

        <div className={styles.code}>
          <span>Your referral code</span>
          <strong>{referralCode}</strong>
          <button
            type="button"
            onClick={copyReferralCode}
            aria-label="Copy referral code"
          >
            <Copy size={16} />
          </button>
          <span className={styles.copyMessage} aria-live="polite">
            {copyMessage}
          </span>
        </div>
      </div>

      <div className={styles.visual}>
        <img
          className={styles.referralIllustration}
          src={referEarnImage}
          alt="Two friends sharing referral rewards, with gold coins and a gift"
        />
        <div className={styles.rewardChip}>
          <ShieldCheck size={16} />
          <span>Share rewards</span>
        </div>
      </div>

      <div className={styles.benefits}>
        <div>
          <Zap />
          <span>
            <strong>Easy to Share</strong>
            <small>Invite in a few clicks</small>
          </span>
        </div>

        <div>
          <Gift />
          <span>
            <strong>Earn Rewards</strong>
            <small>Eligible referral bonuses</small>
          </span>
        </div>

        <div>
          <ShieldCheck />
          <span>
            <strong>Secure Referrals</strong>
            <small>Trusted reward tracking</small>
          </span>
        </div>
      </div>
    </section>
  );
}
