import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  private handleRefresh = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-primary-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-8">
              We're working on fixing this issue. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleRefresh}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-8 text-left">
                <p className="text-red-600 font-mono text-sm">
                  {this.state.error.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;