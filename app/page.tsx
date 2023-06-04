import { Causes } from "./Causes";
import { Jezsuita } from "./Jezsuita";
import { Kalvin } from "./Kalvin";
import { Luther } from "./Luther";
import { Trident } from "./Trident";

export default function Home() {
  return (
    <main className="flex gap-10 text-center flex-col">
      <div className=" h-12" />
      <Causes />
      <Luther />
      <Kalvin />
      <Jezsuita />
      <Trident />
    </main>
  );
}
