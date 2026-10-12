
import { useCallback, useState } from 'react';
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  Clipboard,
  Coins,
  Gift,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Wallet,
} from 'lucide-react';

import Toast from './Toast/Toast.jsx';

const demoOptions = [
  {
    name: 'Gift card',
    detail: 'Preview available gift-card options',
    icon: Gift,
  },
  {
    name: 'Wallet reward',
    detail: 'Preview wallet redemption options',
    icon: Wallet,
  },
  {
    name: 'Bonus activity',
    detail: 'Explore eligible bonus activities',
    icon: Sparkles,
  },
];

const styles = {
  page: {
    minHeight: 390,
    padding: 'clamp(20px, 4vw, 38px)',
    border: '1px solid rgba(255,255,255,.09)',
    borderRadius: 24,
    background: 'linear-gradient(135deg,#20243a,#191c2d)',
    color: '#f5f6fc',
  },

  button: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    minHeight: 44,
    padding: '11px 16px',
    border: '1px solid rgba(231,193,123,.35)',
    borderRadius: 12,
    background: '#e7c17b',
    color: '#171827',
    fontWeight: 700,
    cursor: 'pointer',
  },

  secondary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: 44,
    padding: '10px 14px',
    border: '1px solid rgba(255,255,255,.15)',
    borderRadius: 12,
    background: 'rgba(255,255,255,.04)',
    color: '#f5f6fc',
    cursor: 'pointer',
  },

  panel: {
    padding: 18,
    border: '1px solid rgba(255,255,255,.09)',
    borderRadius: 16,
    background: 'rgba(255,255,255,.035)',
  },

  muted: {
    color: '#a8aec5',
    lineHeight: 1.7,
  },

  input: {
    width: '100%',
    minHeight: 46,
    padding: '10px 12px',
    border: '1px solid rgba(255,255,255,.15)',
    borderRadius: 10,
    background: '#161827',
    color: '#f5f6fc',
  },
};

function ReferDemo({ setMessage }) {
  const referralCode = 'VELOOP123';

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(referralCode);
      setMessage('Demo referral code copied.');
    } catch {
      setMessage(`Your demo referral code is ${referralCode}.`);
    }
  }

  return (
    <div style={styles.panel}>
      <Gift size={32} color="#e7c17b" aria-hidden="true" />

      <h3>Invite friends to explore VELOOP</h3>

      <p style={styles.muted}>
        Share this sample referral code. Real referral eligibility and rewards
        would need to be connected to approved platform rules.
      </p>

      <p
        style={{
          color: '#e7c17b',
          fontSize: 22,
          fontWeight: 800,
        }}
      >
        {referralCode}
      </p>

      <button type="button" style={styles.button} onClick={copyCode}>
        <Clipboard size={17} aria-hidden="true" />
        Copy demo code
      </button>
    </div>
  );
}

function SwapDemo({ setMessage }) {
  const [reverse, setReverse] = useState(false);

  const from = reverse ? 'SVE' : 'VE';
  const to = reverse ? 'VE' : 'SVE';

  function reverseDirection() {
    setReverse((current) => !current);
    setMessage('Conversion direction changed in the preview.');
  }

  return (
    <div style={styles.panel}>
      <ArrowLeftRight size={32} color="#8fbaff" aria-hidden="true" />

      <h3>Balance conversion preview</h3>

      <p style={styles.muted}>
        This illustrates the swap experience only. No live exchange rate or
        actual conversion is available in this demo.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr)',
          alignItems: 'center',
          gap: 10,
          margin: '20px 0',
        }}
      >
        <div
          style={{
            ...styles.panel,
            padding: '20px 8px',
            textAlign: 'center',
          }}
        >
          <Coins color="#e7c17b" size={26} aria-hidden="true" />
          <h3 style={{ margin: '8px 0 0' }}>{from}</h3>
          <small style={styles.muted}>Demo balance</small>
        </div>

        <ArrowRight color="#e7c17b" aria-hidden="true" />

        <div
          style={{
            ...styles.panel,
            padding: '20px 8px',
            textAlign: 'center',
          }}
        >
          <Coins color="#e7c17b" size={26} aria-hidden="true" />
          <h3 style={{ margin: '8px 0 0' }}>{to}</h3>
          <small style={styles.muted}>Demo balance</small>
        </div>
      </div>

      <button
        type="button"
        style={styles.button}
        onClick={reverseDirection}
      >
        <RefreshCw size={17} aria-hidden="true" />
        Reverse direction
      </button>
    </div>
  );
}

function BonusDemo({ setMessage }) {
  const activities = [
    'Explore available campaigns',
    'Review eligible activities',
    'Check bonus conditions',
  ];

  return (
    <div style={styles.panel}>
      <Sparkles size={32} color="#e7c17b" aria-hidden="true" />

      <h3>Explore bonus opportunities</h3>

      <p style={styles.muted}>
        Sample activities are shown for interface demonstration. Availability
        and reward amounts have not been confirmed.
      </p>

      <div style={{ display: 'grid', gap: 12 }}>
        {activities.map((activity) => (
          <button
            key={activity}
            type="button"
            style={{
              ...styles.secondary,
              justifyContent: 'space-between',
              textAlign: 'left',
            }}
            onClick={() => setMessage(`${activity}: demo preview only.`)}
          >
            {activity}
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  );
}

function CaptchaDemo({ setMessage }) {
  const [answer, setAnswer] = useState('');
  const challenge = 'K7M4';

  function verifyDemo() {
    if (!answer.trim()) {
      setMessage('Enter the sample code before verifying.');
      return;
    }

    if (answer.trim().toUpperCase() === challenge) {
      setMessage(
        'Demo CAPTCHA completed successfully. No reward was issued.',
      );
    } else {
      setMessage('That does not match the sample code. Try K7M4.');
    }
  }

  return (
    <div style={styles.panel}>
      <ShieldCheck size={32} color="#8fbaff" aria-hidden="true" />

      <h3>Complete a sample verification</h3>

      <p style={styles.muted}>
        This is a local interface demonstration, not a real earning task.
      </p>

      <div
        aria-label="Sample verification code K 7 M 4"
        style={{
          margin: '16px 0',
          padding: 20,
          border: '1px dashed rgba(231,193,123,.5)',
          borderRadius: 12,
          background: '#161827',
          color: '#e7c17b',
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: 8,
          textAlign: 'center',
        }}
      >
        {challenge}
      </div>

      <label
        htmlFor="captcha-answer"
        style={{ display: 'block', marginBottom: 8 }}
      >
        Enter the sample code
      </label>

      <input
        id="captcha-answer"
        name="captcha-answer"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            verifyDemo();
          }
        }}
        autoComplete="off"
        style={styles.input}
        placeholder="Enter K7M4"
      />

      <button
        type="button"
        style={{ ...styles.button, marginTop: 12 }}
        onClick={verifyDemo}
      >
        <CheckCircle2 size={17} aria-hidden="true" />
        Verify demo
      </button>
    </div>
  );
}

function ExchangeDemo({ setMessage }) {
  const [selected, setSelected] = useState('');

  function previewSelection() {
    if (!selected) return;

    setMessage(
      `${selected} selected. This is a demo; nothing was redeemed.`,
    );
  }

  return (
    <div style={styles.panel}>
      <Wallet size={32} color="#e7c17b" aria-hidden="true" />

      <h3>Explore redemption options</h3>

      <p style={styles.muted}>
        Choose an option to preview the flow. No redemption, payout or
        transaction will be performed.
      </p>

      <div style={{ display: 'grid', gap: 12 }}>
        {demoOptions.slice(0, 2).map((option) => {
          const Icon = option.icon;
          const isSelected = selected === option.name;

          return (
            <button
              key={option.name}
              type="button"
              onClick={() => setSelected(option.name)}
              aria-pressed={isSelected}
              style={{
                ...styles.secondary,
                justifyContent: 'flex-start',
                textAlign: 'left',
                borderColor: isSelected
                  ? '#e7c17b'
                  : 'rgba(255,255,255,.15)',
              }}
            >
              <Icon size={21} color="#e7c17b" aria-hidden="true" />

              <span>
                <strong style={{ display: 'block' }}>
                  {option.name}
                </strong>
                <small style={styles.muted}>{option.detail}</small>
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        style={{
          ...styles.button,
          marginTop: 16,
          opacity: selected ? 1 : 0.5,
          cursor: selected ? 'pointer' : 'not-allowed',
        }}
        disabled={!selected}
        onClick={previewSelection}
      >
        Preview selected option
        <ArrowRight size={17} aria-hidden="true" />
      </button>
    </div>
  );
}

export default function FeatureDestination({
  featureKey,
  title,
  description,
  onBack,
}) {
  const [message, setMessage] = useState('');
const [toastKey, setToastKey] = useState(0);

const showMessage = useCallback((nextMessage) => {
  setMessage(nextMessage);
  setToastKey((current) => current + 1);
}, []);

const dismissToast = useCallback(() => {
  setMessage('');
}, []);

  const content = {
    'refer-earn': ReferDemo,
    'swap-center': SwapDemo,
    'bonus-opportunities': BonusDemo,
    'captcha-tasks': CaptchaDemo,
    'exchange-center': ExchangeDemo,
  };

  const FeatureContent = content[featureKey] || BonusDemo;

  return (
    <section style={styles.page} aria-labelledby="feature-title">
      <button
        type="button"
        style={styles.secondary}
        onClick={onBack}
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Back to rewards
      </button>

      <div style={{ maxWidth: 760, margin: '28px auto 0' }}>
        <p
          style={{
            color: '#e7c17b',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 2,
          }}
        >
          VELOOP REWARDS · FEATURE PREVIEW
        </p>

        <h2
          id="feature-title"
          style={{ fontSize: 'clamp(28px,4vw,40px)' }}
        >
          {title}
        </h2>

        <p style={{ ...styles.muted, marginBottom: 24 }}>
          {description}
        </p>

        <FeatureContent setMessage={showMessage} />

        <p style={{ ...styles.muted, fontSize: 12, marginTop: 18 }}>
          Demonstration only — no real rewards, balances, transactions, or
          payouts are connected.
        </p>
      </div>

    <Toast
  key={toastKey}
  message={message}
  onDismiss={dismissToast}
  type={
    message.includes('does not match') ||
    message.includes('Enter the sample code')
      ? 'info'
      : 'success'
  }
/>
    </section>
  );
}
