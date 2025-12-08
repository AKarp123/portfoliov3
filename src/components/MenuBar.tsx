import { useRef, useState } from "react";
import { pages } from "./Sidebar"
import { useClickAway } from "@uidotdev/usehooks";


const MenuBar = () => {

	const [isOpen, setIsOpen] = useState(false);


	const menuRef = useClickAway<HTMLDivElement>( () => {
		if (isOpen) {
			setIsAnimatingOut(true);
			setIsOpen(false);
		}
	});

	const [isAnimatingOut, setIsAnimatingOut] = useState(false);

	const toggleMenu = () => {
		if (isOpen) {
			setIsAnimatingOut(true);
			setIsOpen(false);
		} else {
			setIsOpen(true);
			setIsAnimatingOut(false);
		}
	};

	return (
		<div className="relative md:hidden" id="menu-bar" ref={menuRef}>
			<button
				type="button"
				className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-content)] px-3 py-2 text-sm font-semibold text-[var(--color-text-primary)] shadow-sm transition cursor-pointer hover:shadow-md focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] w-[58px] h-[50px] justify-center"
				aria-pressed={isOpen}
				onClick={toggleMenu}
			>
				<span className="sr-only">Menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-menu-icon lucide-menu"
				>
					<path d="M4 5h16" />
					<path d="M4 12h16" />
					<path d="M4 19h16" />
				</svg>
			</button>
			{(isOpen || isAnimatingOut) && (
				<div
					onAnimationEnd={() => {
						if (!isOpen) setIsAnimatingOut(false);
					}}
					className={`absolute right-0 top-full mt-2 w-max min-w-[150px] rounded-xl border border-[var(--color-border)] backdrop-blur-xs bg-[var(--color-content)]/60 p-4 shadow-xl origin-top [&>div]:flex [&>div]:flex-col [&>div]:gap-4 ${
						isOpen ? "menu-dropdown-enter pointer-events-auto" : "menu-dropdown-exit pointer-events-none"
					}`}
					aria-hidden={!isOpen}
				>
					<MenuBarDropdown/>
				</div>
			)}
		</div>
	)
}

const MenuBarDropdown = () => {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);


	return (
		<div>
		{pages.map((page) => (
			<a
				key={page.name}
				href={page.href}
				className={`font-pixel text-[24px] transition-[font-weight,color] duration-300 ${
					currentPath === page.href
						? "font-bold text-[var(--color-text-primary)]"
						: "font-normal text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
				}`}
				onClick={() => setCurrentPath(page.href)}
			>
				{page.name}
			</a>
		))	
		}
		</div>
	)
}

export default MenuBar;
