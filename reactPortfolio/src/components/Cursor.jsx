import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Cursor.css';

const Cursor = () => {
  // Handling state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsExpanded(true);
    };

    const handleMouseLeave = () => {
      setIsExpanded(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleTextHover = () => {
    setIsExpanded(true);
  };

  const handleTextLeave = () => {
    setIsExpanded(false);
  };
  return (
    <motion.div
      className={`custom-cursor ${isExpanded ? 'expanded' : ''}`}
      style={{ left: mousePosition.x, top: mousePosition.y }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span className='text-hover-area' onMouseEnter={handleTextHover} onMouseLeave={handleTextLeave} />
    </motion.div>
  );
};

export default Cursor;
