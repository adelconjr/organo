import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='social-media'>
                    <a title='Facebook' href='/'>
                        <img alt='Facebook' src='/assets/fb.png' />
                    </a>

                    <a title='Twitter' href='/'>
                        <img alt='Twitter' src='/assets/tw.png' />
                    </a>

                    <a title='Instagram' href='/'>
                        <img alt='Instagram' src='/assets/ig.png' />
                    </a>
                </div>

                <div className='logo'>
                    <img alt='Logo Organo' src='/assets/logo.png' />
                </div>

                <div>
                    <h5>Desenvolvido por Adelçon Júnior</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;