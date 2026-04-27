import { useParams } from "react-router-dom";

export default function ServicePage() {
  const { slug } = useParams();
  return <h2>Service: {slug} (stub)</h2>;
}
