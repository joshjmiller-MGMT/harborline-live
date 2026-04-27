import { useParams } from "react-router-dom";

export default function LocationPage() {
  const { slug } = useParams();
  return <h2>Location: {slug} (stub)</h2>;
}
