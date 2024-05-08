import Porcelain from "./Porcelain";
import { clearanceList } from "./clearanceList";

type Props = {
  filter: {
    porcelain: boolean;
    onyx: boolean;
    marble: boolean;
    quartz: boolean;
  };
};

export default function Clearance({ filter }:Props) {
  return <div>{filter.porcelain && <Porcelain clearanceList={clearanceList} />}</div>;
}
