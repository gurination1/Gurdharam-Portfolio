import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isDay, setIsDay] = useState<boolean>(false);

  useEffect(() => {
    // Check initial state from localStorage or document
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const currentIsDay = saved === 'day' || document.documentElement.classList.contains('day');
    setIsDay(currentIsDay);

    if (currentIsDay) {
      document.documentElement.classList.add('day');
      document.documentElement.classList.remove('night');
      document.body?.classList.add('day');
      document.body?.classList.remove('night');
    } else {
      document.documentElement.classList.add('night');
      document.documentElement.classList.remove('day');
      document.body?.classList.add('night');
      document.body?.classList.remove('day');
    }
  }, []);

  const toggleTheme = () => {
    const isCurrentlyDay = typeof document !== 'undefined' && document.documentElement.classList.contains('day');
    const nextDay = !isCurrentlyDay;
    setIsDay(nextDay);

    const applyTheme = () => {
      if (nextDay) {
        document.documentElement.classList.add('day');
        document.documentElement.classList.remove('night');
        document.body?.classList.add('day');
        document.body?.classList.remove('night');
        try { localStorage.setItem('theme', 'day'); } catch (e) {}
      } else {
        document.documentElement.classList.add('night');
        document.documentElement.classList.remove('day');
        document.body?.classList.add('night');
        document.body?.classList.remove('day');
        try { localStorage.setItem('theme', 'night'); } catch (e) {}
      }

      window.dispatchEvent(
        new CustomEvent('themechange', {
          detail: { theme: nextDay ? 'day' : 'night' },
        })
      );
    };

    // Apply classes and state synchronously
    applyTheme();
  };

  return (
    <button
      className="day-toggle"
      id="theme-toggle"
      onClick={toggleTheme}
      type="button"
      aria-label={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
      aria-pressed={!isDay}
      title={isDay ? 'Switch to Night mode' : 'Switch to Day mode'}
    >
      <svg className="toggle-ico ico-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g fill="currentColor">
          <circle cx="12" cy="3.6" r="1.15" />
          <circle cx="12" cy="20.4" r="1.15" />
          <circle cx="3.6" cy="12" r="1.15" />
          <circle cx="20.4" cy="12" r="1.15" />
          <circle cx="6.1" cy="6.1" r="1.15" />
          <circle cx="17.9" cy="6.1" r="1.15" />
          <circle cx="6.1" cy="17.9" r="1.15" />
          <circle cx="17.9" cy="17.9" r="1.15" />
        </g>
      </svg>
      <svg className="toggle-ico ico-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.2A8 8 0 1 1 10.3 4.2a6.4 6.4 0 0 0 9.7 10z" fill="currentColor" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
