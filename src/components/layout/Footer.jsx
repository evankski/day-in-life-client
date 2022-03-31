export default function Footer() {
    return (
        <footer>
            <p>© Saucy Syntax Inc. {new Date().getFullYear()}</p>
            <div>
            <a target="_blank" rel="noreferrer" href="https://github.com/evankski/day-in-life-client"><i className="fab fa-github"></i></a>
            </div>
            <div>
                <a target="_blank" href="https://icons8.com/icon/X1EUs9sWuKq1/empty">Empty</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        </footer>
    );
}
