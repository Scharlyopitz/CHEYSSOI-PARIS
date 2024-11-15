import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

export default function DescriptionContainer({
  carrouselTransi,
  currentMember,
  persons,
}) {
  return (
    <div className="descriptionsContainer">
      <AnimatePresence initial={false}>
        <m.p
          key={currentMember}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={carrouselTransi}
        >
          {persons[currentMember]?.description}
        </m.p>
      </AnimatePresence>
    </div>
  );
}
