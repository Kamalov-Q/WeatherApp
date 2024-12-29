import { Link } from "react-router-dom"
import logo from "/logo.png";
import logo2 from "/logo2.png";
import { useTheme } from "./context/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {

    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur py-2 w-full supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto h-16 px-4 flex justify-between items-center">
                <Link to={""}>
                    <img src={theme === "dark" ? logo : logo2} className="h-14" alt="Header Logo Image" />
                </Link>
                <div>
                    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`cursor-pointer flex items-center justify-center transition-transform duration-500 ${theme === "dark" ? "rotate-180" : "rotate-0"}`}>
                        {theme === "dark" ? <Sun className="w-6 h-6 text-yellow-400 rotate-0 transition-all" /> : <Moon className="w-6 h-6 text-blue-400 rotate-0 transition-all" />}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
