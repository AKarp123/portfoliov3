import Image from "astro/components/Image.astro";

type ProjectProps = {
	title: string;
	description: string;
	url?: string;
	github?: string;
	image?: any;
	tags?: string[];
	featured?: boolean;
	index: number;
};

export default function Project({
	title,
	description,
	url,
	github,
	image,
	tags,
	index,
}: ProjectProps) {
	return (
		<div
			className="animate-fade-in flex flex-row rounded-lg border-gray-300 bg-[var(--color-content)] px-6 py-4 opacity-0 transition-shadow hover:shadow-md"
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className="">
				<h3 className="font-pixel mb-2 text-xl font-bold">{title}</h3>
				<p className="font-pixel mb-4 text-gray-700">{description}</p>

				{tags && tags.length > 0 && (
					<div className="mb-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-[var(--color-content-alt)] px-3 py-1 text-sm text-black"
							>
								{tag}
							</span>
						))}
					</div>
				)}

				<div className="flex gap-3">
					{url && (
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded px-2 py-1 text-black transition-colors duration-400 hover:bg-gray-300"
						>
							View Project
						</a>
					)}
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded px-2 py-1 transition-colors duration-400 hover:bg-gray-300"
						>
							GitHub
						</a>
					)}
				</div>
			</div>
			{image && <img className="w-32 h-32 self-center rounded-xl object-cover " src={image.src} alt={title}/>}
		</div>
	);
}
