const Sidebar = ({ currentPath } : { currentPath: string}) => {

	const pages = [
		{ name: "Home", href: "/" },
		{ name: "Projects", href: "/projects" },
		{ name: "Experience", href: "/experience" },
	]



	return (
		<div className="max-h-screen min-h-screen max-w-[20%] min-w-[20%] md:flex-col items-end justify-center hidden md:flex resize-transition">
			{pages.map((page) => (
				<a
					key={page.name}
					href={page.href}
					className={`${currentPath === page.href ? "font-bold" : "text-gray-700"} font-pixel text-[24px]`}
				>
					{page.name}
				</a>
			))}
		</div>
	);
};

export default Sidebar;
