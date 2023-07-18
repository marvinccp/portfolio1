'use client'
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/modal.module.css";


const Modal = ({ children }) => {


  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div 
    className={styles.overlay} 
    ref={overlay} 
    onClick={onClick}
    >
      <div className={styles.wrapper} ref={wrapper}>
        {children}
        </div>
    </div>
  );
};

export default Modal;
