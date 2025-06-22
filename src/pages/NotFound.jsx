import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/portfolio-home-page');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-fluid-2xl font-heading font-bold text-text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-text-secondary text-fluid-base mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={handleGoHome}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-body font-semibold text-fluid-base transition-all duration-200 hover-scale shadow-elevation-1 hover:shadow-elevation-2 inline-flex items-center space-x-2"
          >
            <Icon name="Home" size={20} />
            <span>Go to Portfolio</span>
          </button>
          
          <div className="flex justify-center">
            <button
              onClick={() => window.history.back()}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-fluid-sm inline-flex items-center space-x-1"
            >
              <Icon name="ArrowLeft" size={16} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;