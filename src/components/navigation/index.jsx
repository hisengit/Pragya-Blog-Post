import { Link } from "react-router-dom";
import "./navigation-styled.scss";
import { useEffect, useState } from "react";
// import night_mode from "../../../public/night_mode.png"

const Navigation = () => {
    const [darkTheme, setDarkTheme] = useState(false);
 
    // React useEffect hook that will fire up
    // when "darkTheme" changes
    useEffect(() => {
        // Accessing scss variable "--background-color"
        // and "--text-color" using plain JavaScript
        // and changing the same according to the state of "darkTheme"
        const root = document.documentElement;
        root?.style.setProperty(
            "--primary-color",
            darkTheme ? "#000814" : "#fff"
        );
        root?.style.setProperty(
            "--white-color",
            darkTheme ? "#fff" : "#000814"
        );
        root?.style.setProperty(
            "--black-color",
            darkTheme ? "#000" : "#fff"
        );
    }, [darkTheme]);
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    {/* <Link className="navigation__link">Anasayfa</Link> */}
                    <button
                    className="navigation__link"
                        onClick={() =>
                            setDarkTheme(!darkTheme)
                        }
                    >
                        {darkTheme
                            ? <img
                            className="mode_icon"
                            src="/light_mode.png"
                            alt="Light Mode"
                          />
                            : <img
                            className="mode_icon"
                            src="/night_mode.png"
                            alt="Dark Mode"
                          />}
                    </button>
                </li>
            </ul>
        </nav>
    )

}

export {Navigation};