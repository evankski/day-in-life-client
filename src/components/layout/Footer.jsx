export default function Footer() {
    return (
        <footer>
            <p>© Saucy Syntax Inc. {new Date().getFullYear()}</p>
            <div>
            <a target="_blank" rel="noreferrer" href="https://github.com/evankski/day-in-life-client"><i class="fab fa-github"></i></a>
            </div>
        </footer>
    );
}
