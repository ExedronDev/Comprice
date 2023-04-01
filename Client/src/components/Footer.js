import {Link} from 'react-router-dom'

const Footer = () => {
    return(
        <div class="footer place-content-center bg-[#2a303c]">
            <div class="footer-start">
                <p class="normal-case text-2xl decoration-white gap-2 hover:text-[#FFFFFF] m-4 font-bold text-center">
                    <Link to="../aboutauthor">Copyright &copy; Bartosz Hasik</Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;