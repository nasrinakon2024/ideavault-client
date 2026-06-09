const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-purple-900 text-white mt-auto">
            <div>
                <h2 className="text-3xl font-extrabold italic tracking-tighter">IdeaVault</h2>
                <p className="font-bold">
                    Empowering creativity since 2026. <br/>Sharing ideas, building the future together.
                </p> 
                <p>Copyright © 2026 - All right reserved by IdeaVault Industries</p>
            </div> 
            <div>
                <div className="grid grid-flow-col gap-4">
                    
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;