
import { useState } from 'react';

import {
    ArrowRight,
    Gift,
    Users,
    Coins,
    Copy,
    ShieldCheck,
    Zap,
} from 'lucide-react';

import styles from './ReferEarnBanner.module.css';

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
                    <span className={styles.copyMessage} aria-live="polite">{copyMessage}</span>
                </div>
            </div>

            <div className={styles.visual} aria-label="Referral reward illustration">
                <div className={styles.orbit} />

                <div className={styles.coinOne}>
                    <Coins size={26} />
                </div>

                <div className={styles.coinTwo}>
                    <Gift size={25} />
                </div>

                <div className={`${styles.person} ${styles.personOne}`}>
                    <Users size={40} />
                </div>

                <div className={styles.gift}>
                    <Gift size={94} strokeWidth={1.4} />
                    <span>REWARDS</span>
                </div>

                <div className={`${styles.person} ${styles.personTwo}`}>
                    <Users size={34} />
                </div>

                <div className={styles.rewardChip}>
                    <ShieldCheck size={16} />
                    <span>Share rewards</span>
                </div>

                <div className={styles.sparkle}>
                    <Zap size={18} />
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
