
import {
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Check,
  Keyboard,
  Gem,
  MousePointerClick,
} from 'lucide-react';
import styles from './CaptchaTasksBanner.module.css';

export default function CaptchaTasksBanner({ onNavigate }) {
  function startTask() {
    window.location.hash = 'captcha-tasks';
  }

  return (
    <section className={styles.banner} id="captcha-tasks-banner" aria-labelledby="captcha-title">
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <ShieldCheck size={15} /> TASK-BASED EARNING
        </span>

        <h2 id="captcha-title">
          Solve Captchas.
          <br />
          <span>Earn Gems.</span>
        </h2>

        <p className={styles.description}>
          Complete available captcha tasks accurately and
          earn rewards for eligible submissions.
        </p>

       <button
  type="button"
  className={styles.cta}
  onClick={() => onNavigate?.('captcha-tasks')}
>
  <MousePointerClick size={17} />
  Start Task
  <ArrowRight size={17} />
</button>

        <div className={styles.process}>
          <span><Keyboard size={17} /> Complete</span>
          <span className={styles.dots}>···</span>
          <span><ShieldCheck size={17} /> Verify</span>
          <span className={styles.dots}>···</span>
          <span><Gem size={17} /> Reward</span>
        </div>
      </div>

      <div className={styles.visual} aria-label="Illustration of captcha verification">
        <div className={styles.platform} />
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <span>SECURE VERIFICATION</span>
            <ShieldCheck size={17} />
          </div>

          <div className={styles.captchaCode}>K7M4</div>

          <div className={styles.answer}>
            <span>K7M4</span>
            <span className={styles.verified}><Check size={20} /></span>
          </div>

          <div className={styles.terminalFooter}>
            <span><ShieldCheck size={14} /> Sample interface</span>
            <RefreshCw size={15} />
          </div>
        </div>

        <div className={styles.keyboard}>
          {['Q','W','E','R','T','Y','U','I','O','P',
            'A','S','D','F','G','H','J','K','L',
            'Z','X','C','V','B','N','M'].map((key) => (
            <span key={key}>{key}</span>
          ))}
        </div>

        <div className={styles.gemOne}><Gem size={35} /></div>
        <div className={styles.gemTwo}><Gem size={25} /></div>
        <div className={styles.gemThree}><Gem size={19} /></div>
      </div>
    </section>
  );
}
