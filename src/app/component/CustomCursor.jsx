'use client'
import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Create a div for the custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    // Style the cursor with CSS
    const cursorStyle = cursor.style;
    cursorStyle.position = 'fixed';
    cursorStyle.top = '0';
    cursorStyle.left = '0';
    cursorStyle.width = '10px'; // Initial size
    cursorStyle.height = '10px'; // Initial size
    cursorStyle.backgroundColor = '#01236b';
    cursorStyle.borderRadius = '50%';
    cursorStyle.pointerEvents = 'none';
    cursorStyle.mixBlendMode = 'difference';
    cursorStyle.transition = 'transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, background-color 0.3s ease-out';

    // Function to update cursor position and style on mouse move
    const updateCursorPosition = (event) => {
      const { clientX, clientY } = event;
      cursorStyle.transform = `translate(${clientX}px, ${clientY}px)`;
      
      // Adjust cursor size and color based on element hovered
      const element = document.elementFromPoint(clientX, clientY);
      if (element) {
        const tagName = element.tagName.toLowerCase();
        switch (tagName) {
          case 'h1':
            cursorStyle.width = '90px';
            cursorStyle.height = '90px';
            cursorStyle.backgroundColor = '#ffffff';
            break;
          case 'img':
            cursorStyle.width = '100px';
            cursorStyle.height = '100px';
            cursorStyle.backgroundColor = '#ffffff1d';
            break;
          case 'a':
            cursorStyle.width = '70px';
            cursorStyle.height = '70px';
            cursorStyle.backgroundColor = '#01236b92';
            break;
          case 'p':
            cursorStyle.width = '40px';
            cursorStyle.height = '40px';
            cursorStyle.backgroundColor = '#01236b92';
            break;
          case 'button':
            cursorStyle.width = '80px';
            cursorStyle.height = '80px';
            cursorStyle.backgroundColor = '#ffffff1d';
            break;
          default:
            cursorStyle.width = '10px';
            cursorStyle.height = '10px';
            cursorStyle.backgroundColor = '#01236b';
        }
      }
    };

    // Add event listener for mouse move to update cursor position
    document.addEventListener('mousemove', updateCursorPosition);

    // Clean up function
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.removeChild(cursor);
    };
  }, []);

  return null; // Return null as we don't need to render anything for the cursor
};

export default CustomCursor;
