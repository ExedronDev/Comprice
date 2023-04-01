import Media from 'react-media';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div class="navbar sticky top-0 bg-[#2a303c] border-b z-10">
        <div class="navbar-start">
          <Link to="../">
            <p class="btn btn-ghost normal-case text-2xl decoration-white gap-2 text-white">
            <MonetizationOnIcon></MonetizationOnIcon><p>ComPrice</p>
            </p>
          </Link>

          {/* PC Version of navbar*/}
          <Media query="(min-width:768px)">
          <div class="navbar-center">
            <ul class="menu menu-horizontal text-white text-lg p-0 ml-10">
              <li tabindex="0">
                <p class="btn btn-ghost">
                  Informacje
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </p>
                <ul class="p-2 bg-[#22252c] border-2">
                  <Link to="../aboutapp">
                  <li>
                    <p class="btn btn-ghost">O aplikacji</p>
                  </li>
                  </Link>
                  <Link to="../aboutauthor">
                  <li>
                  <p class="btn btn-ghost">O autorze</p>
                  </li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
          </Media>
        </div>
        <Media query="(min-width: 768px)">
          {matches => {
            return matches ? 
            <div class="navbar-end gap-2">
            </div> : 
            
            // Mobile Version of navbar
            <div class="navbar-end gap-2">
              <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost">
                  <svg
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h20M4 12h20m-20 6h20"
                    />
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  class="menu dropdown-content -translate-x-40 mt-3 p-2 shadow bg-base-100 rounded-box w-54 border-2"
                >
                  <ul class="menu menu-horizontal p-0">
                    <li tabindex="0">
                      <p class="btn btn-ghost">
                        <InfoIcon class="fill-[#d4af37] w-8"></InfoIcon>Informacje
                          <svg
                            class="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </p>
                      <ul class="p-2 bg-[#22252c] border-2">
                        <Link to="../aboutapp">
                        <li>
                          <p class="btn btn-ghost">O aplikacji</p>
                        </li>
                        </Link>
                        <Link to="../aboutauthor">
                        <li>
                          <p class="btn btn-ghost">O autorze</p>
                        </li>
                        </Link>
                      </ul>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          }}
        </Media>
      </div>
    );
};

export default NavBar;