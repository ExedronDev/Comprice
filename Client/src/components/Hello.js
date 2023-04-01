
const Hello = () => {
    return(
    <div class="hero min-h-screen mr-6 bg-[#22252c]">
    <div class="grid rounded-md bg-[#2a303c] flex justify-center m-8 w-auto shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
      <div class="hero-content flex-col lg:flex-row-reverse mx-6 my-20">
        <img
          src="https://i.kym-cdn.com/entries/icons/original/000/025/916/cheapest.jpg"
          class="sm:max-w-lg rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.7)]" alt="Meme with cheapest thing"
        />
        <div className=":m-2 text-white md:text-center ">
          <h1 class="text-5xl font-bold  ">Zaoszczędź!</h1>
          <p class="py-6">
            Wyszukaj wymarzony produkt w najniższej cenie!
          </p>
          <a class="btn btn-wide rounded-full bg-[#d4af37] hover:bg-[#FFFFFF] text-black" href="#search">
            Zaoszczędź
          </a>
        </div>
      </div>
      </div>
    </div>
    );
};

export default Hello;