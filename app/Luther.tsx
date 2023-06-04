export const Luther = () => {
  return (
    <section id="luther" className="flex flex-col">
      <p className="text-2xl font-semibold pb-5">Luther Márton</p>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <p className="text-lg p-3 md:px-12 lg:px-64 md:p-5">
          Egy német szerzetes, aki 1517. október 31-én Wittenberg várára kitűzi
          a 95 tézist. Ez tartalmazza a református tanokat: Sola Fide - Hitünk
          által üdvözülünk, és nem azzal amit teszünk Sola Gratia - Csak isten
          kegyelméből üdvözlünk Sola Scriptura - Csak a Szentírást fogadják el a
          hit forrásaként, a Szenthagyományt nem Sola Christus - Csak Krisztust
          tisztelik, a Szenteket vagy Máriát nem Nincsenek papok, csak
          lelkészek, mindenki egyenlő A 7 szentségből, csak az Úrvacsora
          (áldozás), es a Keresztséget tartja meg Az evangélium tisztaságához
          akar visszatérni Luther ellen fellép a Német Római császár, de Bölcs
          frigyes kiáll mellette, és elrejti Waltburgba, ahol lefordítja a
          Bibliát németre. Ez a fordítás a német irodalmi nyelv alapja.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Lucas_Cranach_d.%C3%84._-_Martin_Luther%2C_1528_%28Veste_Coburg%29.jpg"
          alt="festmeny"
          className="lg:w-1/4 object-cover md:w-1/2 w-full"
        />
      </div>
    </section>
  );
};
