
import { useCallback, useEffect, useState } from 'react';

import ReferEarnBanner from './components/ReferEarnBanner/ReferEarnBanner.jsx';
import SwapCenterBanner from './components/SwapCenterBanner/SwapCenterBanner.jsx';
import BonusVEsBanner from './components/BonusVEsBanner/BonusVEsBanner.jsx';
import CaptchaTasksBanner from './components/CaptchaTasksBanner/CaptchaTasksBanner.jsx';
import ExchangeCenterBanner from './components/ExchangeCenterBanner/ExchangeCenterBanner.jsx';
import FeatureDestination from './components/FeatureDestination.jsx';

const features = {
  'refer-earn': {
    title: 'Refer & Earn',
    description:
      'Invite friends to explore VELOOP Rewards and learn about eligible referral activities.',
  },
  'swap-center': {
    title: 'Swap Center',
    description:
      'Preview the conversion of supported reward balances. No real conversion is performed.',
  },
  'bonus-opportunities': {
    title: 'Bonus VEs',
    description:
      'Explore sample campaigns and activities without claiming unverified reward amounts.',
  },
  'captcha-tasks': {
    title: 'Captcha Tasks',
    description:
      'Try a sample verification task. This preview does not submit real tasks or issue rewards.',
  },
  'exchange-center': {
    title: 'Exchange Center',
    description:
      'Explore sample reward redemption options. No payout or redemption is processed.',
  },
};

function getFeatureFromHash() {
  const key = window.location.hash.replace(/^#/, '');
  return Object.prototype.hasOwnProperty.call(features, key) ? key : null;
}

function App() {
  const [activeFeature, setActiveFeature] = useState(getFeatureFromHash);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Normalize the initial browser-history entry for this application.
    window.history.replaceState(
      {
        ...window.history.state,
        veloopRewards: true,
        featureKey: getFeatureFromHash(),
      },
      '',
      window.location.href,
    );

    function handlePopState() {
      setActiveFeature(getFeatureFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openFeature = useCallback(
    (featureKey) => {
      if (!Object.prototype.hasOwnProperty.call(features, featureKey)) {
        return;
      }

      if (featureKey !== activeFeature) {
        window.history.pushState(
          { veloopRewards: true, featureKey },
          '',
          `#${featureKey}`,
        );
      }

      setActiveFeature(featureKey);
      scrollToTop();
    },
    [activeFeature, scrollToTop],
  );

  const backToRewards = useCallback(() => {
    // Replace the current feature entry with the dashboard URL.
    // This avoids adding another history entry for the home screen.
    window.history.replaceState(
      { veloopRewards: true, featureKey: null },
      '',
      `${window.location.pathname}${window.location.search}`,
    );

    setActiveFeature(null);
    scrollToTop();
  }, [scrollToTop]);

  return (
    <main className="app-shell">
      <header className="app-header">
        <button
          type="button"
          className="brand"
          onClick={backToRewards}
          aria-label="Return to VELOOP Rewards dashboard"
          style={{
            padding: 0,
            border: 0,
            color: 'inherit',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <div className="brand-mark" aria-hidden="true">
            V
          </div>

          <div>
            <h1 className="brand-name">VELOOP Rewards</h1>
            <p className="brand-caption">
              Your rewards, your possibilities
            </p>
          </div>
        </button>

        <div className="status-pill">
          <span className="status-dot" aria-hidden="true" />
          Rewards Hub
        </div>
      </header>

      {activeFeature ? (
        <FeatureDestination
          key={activeFeature}
          featureKey={activeFeature}
          title={features[activeFeature].title}
          description={features[activeFeature].description}
          onBack={backToRewards}
        />
      ) : (
        <>
          <section className="page-intro">
            <div className="eyebrow">YOUR REWARDS DASHBOARD</div>

            <h2 className="page-title">
              More ways to earn.
              <br />
              <span style={{ color: 'var(--gold)' }}>
                More reasons to explore.
              </span>
            </h2>

            <p className="page-description">
              Discover referral opportunities, bonus activities, task-based
              earning previews, and ways to explore supported reward options.
            </p>
          </section>

          <div className="banner-list">
            <div className="banner-section">
              <ReferEarnBanner onNavigate={openFeature} />
            </div>

            <div className="banner-section">
              <SwapCenterBanner onNavigate={openFeature} />
            </div>

            <div className="banner-section">
              <BonusVEsBanner onNavigate={openFeature} />
            </div>

            <div className="banner-section">
              <CaptchaTasksBanner onNavigate={openFeature} />
            </div>

            <div className="banner-section">
              <ExchangeCenterBanner onNavigate={openFeature} />
            </div>
          </div>
        </>
      )}

      <footer className="app-footer">
        <span>VELOOP Rewards</span>
        <span>Explore. Earn. Redeem.</span>
      </footer>
    </main>
  );
}

export default App;
