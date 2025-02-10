'use client';

import { RefObject, useEffect, useRef } from 'react';

export const useModalAccessibility = (
  modalRef: RefObject<HTMLDivElement | null>,
  onClose: () => void
) => {
  const prevFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Store the currently focused element
    prevFocusedElement.current = document.activeElement as HTMLElement;

    document.body.classList.add('overflow-hidden');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab') {
        trapFocus(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 1) {
        focusableElements[1].focus();
      }
    }, 0);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');

      // Restore focus to the previously focused element
      if (prevFocusedElement.current) {
        prevFocusedElement.current.focus();
      }
    };
  }, []);

  // Fn to get all focusable elements inside the modal
  const getFocusableElements = () => {
    if (!modalRef.current) return [];
    return Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      )
    );
  };

  // Fn to trap focus inside the modal
  const trapFocus = (event: KeyboardEvent) => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };
};
