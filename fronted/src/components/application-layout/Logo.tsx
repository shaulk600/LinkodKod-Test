import  "./Logo.css";
export default function Logo() {
    const logoImageUrl = '/IMG-20250907-WA0006.jpg';
    return (
        <section id='logoImg'>
            <img id='IMG' src={logoImageUrl} alt="logo" />
        </section>
    )
}
