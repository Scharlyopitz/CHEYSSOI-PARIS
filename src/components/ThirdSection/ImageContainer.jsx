import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

export default function ImageContainer({
  currentMember,
  carrouselTransi,
  persons,
}) {
  return (
    <div className="imagesContainer">
      <AnimatePresence initial={false}>
        <m.img
          key={currentMember}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={carrouselTransi}
          src={persons[currentMember]?.image}
          alt={`photo ${persons[currentMember]?.name}`}
        />
      </AnimatePresence>
    </div>
  );
}
