
export const SolvixLogo = ({ 
  variant = 'full', 
  theme = 'light',
  size = 'md' 
}) => {
  const colors = {
    light: {
      primary: '#3B82F6',
      secondary: '#1E40AF',
      text: '#1F2937',
      accent: '#60A5FA'
    },
    dark: {
      primary: '#60A5FA',
      secondary: '#93C5FD',
      text: '#F9FAFB',
      accent: '#3B82F6'
    }
  };

  const currentColors = colors[theme];

  const sizes = {
    sm: { height: 32, iconSize: 32, fontSize: 18 },
    md: { height: 48, iconSize: 48, fontSize: 28 },
    lg: { height: 64, iconSize: 64, fontSize: 36 },
    xl: { height: 96, iconSize: 96, fontSize: 52 }
  };

  const currentSize = sizes[size];

  const LogoIcon = () => (
    <svg 
      width={currentSize.iconSize} 
      height={currentSize.iconSize} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle - represents support ecosystem */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke={currentColors.primary} 
        strokeWidth="4" 
        fill="none"
        opacity="0.2"
      />
      
      {/* Ticket shape - main element */}
      <path 
        d="M30 35 C30 32 32 30 35 30 L65 30 C68 30 70 32 70 35 L70 42 C67 42 65 44 65 47 C65 50 67 52 70 52 L70 65 C70 68 68 70 65 70 L35 70 C32 70 30 68 30 65 L30 52 C33 52 35 50 35 47 C35 44 33 42 30 42 Z" 
        fill={currentColors.primary}
      />
      
      {/* Check mark - solution/resolution */}
      <path 
        d="M42 47 L47 52 L58 41" 
        stroke={theme === 'light' ? '#FFFFFF' : '#1E293B'} 
        strokeWidth="4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Small circles - workflow dots */}
      <circle cx="25" cy="50" r="4" fill={currentColors.accent} />
      <circle cx="75" cy="50" r="4" fill={currentColors.accent} />
      <circle cx="50" cy="20" r="3" fill={currentColors.secondary} opacity="0.6" />
    </svg>
  );

  if (variant === 'icon-only') {
    return <LogoIcon />;
  }

  return (
    <div className="flex items-center gap-3">
      <LogoIcon />
      <span 
        style={{ 
          fontSize: `${currentSize.fontSize}px`,
          color: currentColors.text,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          letterSpacing: '-0.02em'
        }}
      >
        Solvix
      </span>
    </div>
  );
};
