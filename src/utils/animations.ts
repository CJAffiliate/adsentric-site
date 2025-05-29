// Intersection Observer for scroll animations
export const observeElements = (
  elements: Element[],
  callback: (entries: IntersectionObserverEntry[]) => void
): IntersectionObserver => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: [0, 0.1]
  });

  // Use requestAnimationFrame to batch DOM operations
  requestAnimationFrame(() => {
    elements.forEach(element => observer.observe(element));
  });

  return observer;
};

// Animation classes
export const animationClasses = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  scaleIn: 'animate-scale-in',
  stagger: 'animate-stagger'
} as const; 