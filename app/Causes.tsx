export const Causes = () => {
  return (
    <section id="causes" className="flex flex-col ">
      <p className="text-2xl font-semibold pb-5">Reformáció okai</p>
      <div className="flex flex-col justify-evenly md:flex-row text-center">
        <img
          src="https://www.meisterdrucke.hu/kunstwerke/500px/Hieronymus_Bosch_-_Christ_In_Limbo_(oil_on_wood)_-_(MeisterDrucke-1453077).jpg"
          alt="festmeny"
          className=" object-cover md:w-1/2 lg:w-1/4 w-full"
        />
        <p className="self-center text-lg p-3 md:px-12 lg:px-64 md:p-5 align-middle text-center py-auto">
          A középkor végén rossz körülmények között éltek az emberek. Pestis
          járvány pusztított, kisjégkorszak kezdődött, a Törökök szinte egész
          Európát meghódították, így az emberek állandó félelemben voltak. Azt
          hitték, hogy a bűnük miatt történik ez a sok rossz. Emellett az
          egyházfők is korruptak voltak. Búcsú cédulákat árultak drágán, amikről
          azt mondták, hogy enyhítik majd a túlvilági szenvedést. Minden
          szempontból kellett már a megújulás. Husz János az első, aki ezt
          probálja megvasósítani, de sikertelenül.
        </p>
      </div>
    </section>
  );
};
