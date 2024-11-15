import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

export default function NameContainer({
  carrouselTransi,
  currentMember,
  persons,
}) {
  return (
    <div className="namesContainer">
      <AnimatePresence initial={false}>
        <m.p
          initial="initial"
          animate="animate"
          exit="exit"
          variants={carrouselTransi}
          key={currentMember}
        >
          {persons[currentMember]?.name} | {persons[currentMember]?.job}
        </m.p>
      </AnimatePresence>
    </div>
  );
}
