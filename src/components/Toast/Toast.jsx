
import { useEffect } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import styles from './Toast.module.css';

export default function Toast({
  message,
  onDismiss,
  type = 'success',
}) {
  useEffect(() => {
    if (!message) return undefined;

    const timeoutId = window.setTimeout(() => {
      onDismiss?.();
    }, 3500);

    return () => window.clearTimeout(timeoutId);
  }, [message, onDismiss]);

  if (!message) return null;

  const Icon = type === 'info' ? Info : CheckCircle2;

  return (
    <div
      className={`${styles.toast} ${styles[type] || styles.success}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <Icon className={styles.icon} size={21} aria-hidden="true" />

      <p className={styles.message}>{message}</p>

      <button
        className={styles.dismiss}
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss notification"
      >
        <X size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
