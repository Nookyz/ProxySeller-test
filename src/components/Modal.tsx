import {
  useState, forwardRef, useImperativeHandle, useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

interface Props {
  children: JSX.Element;
}

const Modal = forwardRef<ModalHandle, Props>(({
  children,
}, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  useImperativeHandle(ref, () => ({
    open: handleOpenModal,
    close: handleCloseModal,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className='backdrop'
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
            }}
            onClick={handleCloseModal}
          />
          {children}
        </>
      )}
    </AnimatePresence>
  );
});

export default Modal;
