import { useRef, useEffect, useState } from "react";

export function useVirtualKeyboard() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      if (e.target instanceof HTMLInputElement) {
        inputRef.current = e.target;
        setActive(true);
      }
    };

    const handleBlur = () => {
      // Delay para evitar esconder o teclado antes de capturar o clique no teclado virtual
      setTimeout(() => {
        if (!document.activeElement?.closest(".virtual-keyboard")) {
          setActive(false);
        }
      }, 100);
    };

    document.addEventListener("focusin", handleFocus);
    document.addEventListener("focusout", handleBlur);

    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("focusout", handleBlur);
    };
  }, []);

  return { inputRef, active, setActive };
}
