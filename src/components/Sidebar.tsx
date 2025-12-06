
export const pages = [
		{ name: "Home", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "Experience", href: "/experience" },
		{ name: "Other", href: "/other" },
	]
const Sidebar = ({ currentPath } : { currentPath: string}) => {



	return (
		<div className="max-h-screen min-h-screen max-w-[20%] min-w-[20%] md:flex-col items-end justify-center hidden md:flex resize-transition">
			{pages.map((page) => (
				<a
					key={page.name}
					href={page.href}
					className={`font-pixel text-[24px] transition-[font-weight,color] duration-300 ${
						currentPath === page.href
							? "font-bold text-[var(--color-text-primary)]"
							: "font-normal text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
					}`}
				>
					{page.name}
				</a>
			))}
		</div>
	);
};

export default Sidebar;
