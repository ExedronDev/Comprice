import NavBar from '../components/Nav_bar';
import Footer from '../components/Footer';

const AuthorInfo = () => {
    return(
        <div class ="bg-[#22252c]">
            <NavBar></NavBar>
            <div class ="bg-[#22252c] lg:h-fit 2xl:h-screen lg:w-full justify-center">
                <div class="mt-20">
                    <div class="text-5xl font-bold text-center">
                        O autorze
                    </div>
                    <div class="text-center mt-20 text-lg">
                        Jestem studentem IV roku informatyki na Politechnice Częstochowskiej na specjalności PAI "Programowanie Aplikacji Internetowych".<br/>
                        Interesuje się głównie wszystkim związanym z komputerami, od programowania, przez eksploatacje, aż po twórczość jak np. montaż filmów,<br/>
                        jak i również grami komputerowymi :). W programowaniu preferuje Pythona, ze względu na ogrom możliwości twórczych, oraz na intuicyjność<br/>
                        tego języka. Moim ulubionym <a href="https://pl.wikipedia.org/wiki/Zintegrowane_%C5%9Brodowisko_programistyczne" class="text-[#d4af37]">IDE*</a> jest
                        Microsoft Visual Studio Code. Lubię tworzyć roboty, co pokazuje owa aplikacja. Moim drugorzędnym hobby po komputerach jest sport.
                    </div>
                    <div class="flex-column justify-center lg:flex sm:ml-40 md:ml-40 lg:ml-0">
                        <div class="flex-col justify-center">
                            <div class="mt-20 ml-6">
                                Tu studiuje:
                            </div>
                            <div>
                                <img class="max-w-xs ml-6 sm:max-w-sm mt-2 rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.7)]" 
                                    src="http://archiwalna.wimii.pcz.pl/download/dsc_7096.jpg" 
                                    alt="WIMiI Pcz"></img>
                            </div>
                        </div>
                        <div class="mb-20 flex-col justify-center lg:ml-20">
                            <div class="mt-20 ml-6">
                                Stąd pochodzę:
                            </div>   
                            <div class="mapouter mt-2 w-screen sm:w-auto">
                                <div class="gmap_canvas max-w-xs ml-6 sm:max-w-sm rounded-lg shadow-[0_0_16px_0_rgba(0,0,0,0.7)]">
                                    <iframe width="384" 
                                            height="255" 
                                            id="gmap_canvas" 
                                            src="https://maps.google.com/maps?q=Cz%C4%99stochowa&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                                            frameborder="0" 
                                            scrolling="no" 
                                            marginheight="0" 
                                            marginwidth="0"
                                            title="Czestochowa">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AuthorInfo