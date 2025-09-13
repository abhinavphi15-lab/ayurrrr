/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        ayur: {
          primary: '#2d5016',
          secondary: '#4a7c59',
          accent: '#6b8e23',
          light: '#8fbc8f',
          sage: '#9caf88',
          forest: '#355e3b',
          mint: '#98fb98',
          earth: '#8b4513',
          beige: '#f5f5dc',
          cream: '#faf0e6',
          gold: '#daa520',
          terracotta: '#e2725b',
          deep: '#1b4332',
        }
      },
      backgroundImage: {
        'nature-gradient': 'linear-gradient(135deg, #2d5016 0%, #4a7c59 50%, #6b8e23 100%)',
        'earth-gradient': 'linear-gradient(135deg, #8b4513 0%, #daa520 50%, #e2725b 100%)',
        'sage-gradient': 'linear-gradient(135deg, #9caf88 0%, #8fbc8f 50%, #98fb98 100%)',
        'ayur-pattern': 'radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(107, 142, 35, 0.05) 0%, transparent 50%)',
      },
      boxShadow: {
        'nature': '0 4px 6px -1px rgba(45, 80, 22, 0.1), 0 2px 4px -1px rgba(45, 80, 22, 0.06)',
        'nature-lg': '0 10px 15px -3px rgba(45, 80, 22, 0.1), 0 4px 6px -2px rgba(45, 80, 22, 0.05)',
        'nature-xl': '0 20px 25px -5px rgba(45, 80, 22, 0.1), 0 10px 10px -5px rgba(45, 80, 22, 0.04)',
      },
      borderRadius: {
        'organic': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'organic-alt': '30% 70% 70% 30% / 30% 30% 70% 70%',
      },
      animation: {
        'leaf-float': 'leafFloat 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        leafFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};