import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";

export default function ImageContainer({
  currentMember,
  carrouselTransi,
  persons,
}) {
  return (
    <div className="Container">
      <div className="imagesContainer">
        <AnimatePresence initial={false}>
          <m.div
            key={currentMember}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <m.img
              variants={carrouselTransi}
              src={persons[currentMember]?.image}
              alt={`photo ${persons[currentMember]?.name}`}
            />
            <m.div variants={carrouselTransi} className="nameContainer">
              <span>{persons[currentMember].name}</span>
            </m.div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
