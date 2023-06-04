import { Causes } from "./Causes";
import { Jezsuita } from "./Jezsuita";
import { Kalvin } from "./Kalvin";
import { Luther } from "./Luther";
import { Trident } from "./Trident";

export default function Home() {
  return (
    <main className="flex flex-col">
      <p>Reformácio</p>
      <Causes />
      <Luther />
      <Kalvin />
      <Jezsuita />
      <Trident />
    </main>
  );
}
