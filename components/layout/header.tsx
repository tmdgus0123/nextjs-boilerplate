import Link from "next/link";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href={"/board"}>board</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
