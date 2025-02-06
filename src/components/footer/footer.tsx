const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();


    return (
        <footer>
            <p>© {year} Alta Stucco</p>
        </footer>
    );
}

export default Footer;