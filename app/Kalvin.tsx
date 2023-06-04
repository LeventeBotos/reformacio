export const Kalvin = () => {
  return (
    <section id="kalvin" className="flex flex-col">
      <p className="text-2xl font-semibold pb-5">Kálvin János</p>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/John_Calvin_Museum_Catharijneconvent_RMCC_s84_cropped.png/1200px-John_Calvin_Museum_Catharijneconvent_RMCC_s84_cropped.png"
          alt="festmeny"
          className=" object-cover lg:w-1/4 md:w-1/2 w-full"
        />
        <p className="text-lg p-3 md:px-12 lg:px-64 md:p-5">
          Hasonló elvei vannak, mint Luthernek. Eltér viszont abban, hogy a
          Predesztináció elvében hisz, ami azt jelenti, hogy már születésünk
          pillanatában eldönti Isten az egész életünk sorsát, és az is eldől,
          hogy üdvözlünk-e, vagy sem. A vezetői réteget alulról építik fel, azaz
          a hívek választanak vezetőket, akiket joguk van leváltani. Az
          egyházfőkből álló tanácsot hívták Prebisériumnak. Az egyén volt fontos
          számukra, az önálló gondolkodás.
        </p>
      </div>
    </section>
  );
};
