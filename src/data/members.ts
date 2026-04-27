import m1 from "../assets/images/member-1.jpg";
import m2 from "../assets/images/member-2.jpg";
import m3 from "../assets/images/member-3.jpg";
import m4 from "../assets/images/member-4.jpg";
import m5 from "../assets/images/member-5.jpg";
import m6 from "../assets/images/member-6.jpg";

export type Member = {
  role: string;
  image: string;
};

// Member portrait order matches the recovered asset numbering. Real names
// are not in the recovered bundle — Phase 3 leaves these as role-only
// tiles until Josh confirms the lineup.
export const MEMBERS: Member[] = [
  { role: "Lead Vocals", image: m1 },
  { role: "Lead Vocals & Guitar", image: m2 },
  { role: "Keys & Music Director", image: m3 },
  { role: "Bass", image: m4 },
  { role: "Drums", image: m5 },
  { role: "Saxophone & Horns", image: m6 },
];
