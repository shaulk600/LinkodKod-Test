import  "./Logo.css";
export default function Logo() {
    const logoImageUrl = '/logo.jpg';
    return (
        <section id='logoImg'>
            <img id='IMG' src={logoImageUrl} alt="logo" />
        </section>
    )
}
