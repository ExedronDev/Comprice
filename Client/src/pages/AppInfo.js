import NavBar from '../components/Nav_bar';
import Footer from '../components/Footer';

const AppInfo = () => {
    return(
        <div class ="bg-[#22252c]">
            <NavBar></NavBar>
            <div class ="bg-[#22252c] lg:h-fit 2xl:h-screen lg:w-full justify-center">
                <div class="mt-20">
                    <div class="text-5xl font-bold text-center">
                        O aplikacji
                    </div>
                    <div class="text-center mt-20 text-lg">
                        ComPrice to aplikacja, która pobiera nam ceny danego urządzenia z najpopularniejszych sklepów internetowych z elektroniką <br/>
                        i wyznacza najtańszą oferte. Aplikacja ma za zadanie pomóc użytkownikowi zaoszczędzić pieniądze wskazując mu <br/>
                        gdzie najtaniej może kupić dany produkt elektroniczny. <br/><br/>Aplikacja szuka cen ze sklepów:
                        <ul class="list-disc mt-10">
                            <li><a href="https://www.x-kom.pl/" class="text-[#d4af37]">&#x2022; x-kom.pl &#x2022;</a></li>
                            <li><a href="https://www.morele.net/" class="text-[#d4af37]">&#x2022; morele.net &#x2022;</a></li>
                            <li><a href="https://www.komputronik.pl/?&saids=58700003385805956_p27053423158&gclid=CjwKCAjw8JKbBhBYEiwAs3sxNyO3ITSYlb8pc77vT2GuxXOqVpjcPuLMzlRo-DdJCLyBtuuG7nFteRoCULEQAvD_BwE&gclsrc=aw.ds" class="text-[#d4af37]">&#x2022; komputronik.pl &#x2022;</a></li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <p class="text-center">Aplikacja wykorzystuje technologie:</p>
                    </div>
                    <div class="justify-center ml-10 sm:ml-40 md:ml-40 lg:ml-0">
                        <div class="lg:flex justify-center">
                            <div class="m-8">
                                <img class="max-w-xs sm:max-w-xs w-60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="React logo"></img>
                            </div>
                            <div class="m-8">
                                <img class="max-w-xs sm:max-w-xs w-52" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python logo"></img>
                            </div>
                            <div class="m-8">
                                <img class="max-w-xs sm:max-w-xs w-60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="Tailwindcss logo"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AppInfo