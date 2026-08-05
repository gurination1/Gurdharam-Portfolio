import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class LazyErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('Lazy component loading error caught:', error);
    if (typeof window !== 'undefined' && !sessionStorage.getItem('lazy-reload-attempted')) {
      sessionStorage.setItem('lazy-reload-attempted', 'true');
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ width: '100%', height: '100%', background: '#020c18', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5b8fd4', fontSize: '0.8rem', fontFamily: 'monospace' }}>
          Reloading interactive module...
        </div>
      );
    }
    return this.props.children;
  }
}

export function safeLazy<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(() =>
    factory().catch((err) => {
      console.warn('Dynamic import failed, retrying module fetch:', err);
      if (typeof window !== 'undefined' && !sessionStorage.getItem('lazy-reload-attempted')) {
        sessionStorage.setItem('lazy-reload-attempted', 'true');
        window.location.reload();
      }
      return factory();
    })
  );
}
