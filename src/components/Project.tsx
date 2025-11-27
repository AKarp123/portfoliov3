
type ProjectProps = {
	title: string;
	description: string;
	url?: string;
	github?: string;
	image: string;
	tags?: string[];
	featured?: boolean;
	index: number;
};

export default function Project({ title, description, url, github, image, tags, index }: ProjectProps) {
	return (
		<div className="rounded-lg border-gray-300 px-6 py-4 bg-[var(--color-content)] transition-shadow hover:shadow-md opacity-0 animate-fade-in"
			style={{ animationDelay: `${index * 100}ms` }}
		>
			
			<h3 className="mb-2 text-xl font-bold font-pixel">{title}</h3>
			<p className="mb-4 text-gray-700 font-pixel">{description}</p>
			
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
						className="rounded bg-[var(--color-content-alt)] px-4 py-2  transition-colors duration-300 hover:bg-[#b0c4de] text-black"
					>
						View Project
					</a>
				)}
				{github && (
					<a 
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100"
					>
						GitHub
					</a>
				)}
			</div>
		</div>
	);
}