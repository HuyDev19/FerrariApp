/**
 * PageTransition component for smooth page animations
 * Wraps page content to add fade-in effect on mount
 */
function PageTransition({ children, className = '' }) {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  )
}

export default PageTransition
