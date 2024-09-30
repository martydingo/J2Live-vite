import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "./ui/navigation-menu";

export default function AppHeader() {
    return (
        <div className="w-full font-serif text-4xl font-semibold p-4">
            <h1>J2 Live</h1>
        </div>
    )
}