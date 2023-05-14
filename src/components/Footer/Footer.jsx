
import './Footer.css';
const Footer = () =>{
    return(
        <>
            <div className='footer'>
                <div className='footer-left'>
                    <span>Plantique</span>
                    <p className='title'>Fill your house and workplace with pleaseant and beautiful plants.</p>
                    <div className=''><p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>&copy; 2023 Plantique </p></div>
                </div>
                <div className='footer-middle'>
                    <p className='title'>Connect</p>
                    <div className='listItems'><p>GitHub</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p></div>
                </div>
                <div className='footer-right'>
                    <p className='title'>Resources</p>
                    <div className='listItems'><p>Sign Up</p>
                    <p>Sign In</p></div>
                </div>
            </div>
        </>
    )
}
export default Footer;