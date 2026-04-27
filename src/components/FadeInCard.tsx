import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  index: number;
  children: ReactNode;
  className?: string;
};

export default function FadeInCard({ to, index, children, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.4), ease: "easeOut" }}
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
}
