import React from "react";
import Portal from "../ReusablePortal";
import { AnimatePresence, motion } from "framer-motion";

function ContactSuccessModal({ show, onClose }) {
  return (
    <Portal rootId={"contact-success-modal"}>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed z-[60] inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* backdrop */}
            <div
              onClick={onClose}
              role="button"
              className="absolute bg-[#2837416E] cursor-pointer inset-0"
            />

            {/* drawer content */}
            <div className="bg-white z-[80] px-[34px] py-12 flex gap-8 items-center">
              <div className="h-[81px] w-[81px] rounded-full bg-[#F1F3F7] flex justify-center items-center flex-shrink-0">
                <span className="text-[3rem]">&#129309;</span>
              </div>
              <div>
                <h2 className="text-[28px] font-serif leading-[normal]">
                  Got your message!
                </h2>
                <p className="max-w-[37ch] mt-5 leading-[normal]">
                  Thanks a lot for reaching out! I will respond as soon as I
                  read. Have a great day!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}

export default ContactSuccessModal;
