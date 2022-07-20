import Link from "next/link";

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/user"}>User</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
