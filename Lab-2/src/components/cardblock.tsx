import ResortCard from "./ResortCard";
import type { ResortListing } from "../Data/data";

interface ResortContainerProps {
  data: ResortListing[];
}

export default function ResortContainer({ data }: ResortContainerProps) {
  return (
    <div className="ResortContainer">
      {data.map((item) => (
        <ResortCard key={item.id} {...item} />
      ))}
    </div>
  );
}

