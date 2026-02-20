
type ProjectProps = {
	title: string;
	description: string;
	url?: string;
	github?: string;
	image?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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
			className="animate-fade-in flex lg:flex-row gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-content)] px-6 py-6 opacity-0 transition-shadow hover:shadow-md flex-col-reverse justify-between"
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<div className="flex flex-col justify-between">
				<h3 className="font-pixel mb-2 text-xl font-bold">{title}</h3>
				<p className="font-pixel mb-4 text-[var(--color-text-secondary)]">{description}</p>

				{tags && tags.length > 0 && (
					<div className="mb-4 flex flex-wrap gap-2">
						{tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full bg-[var(--color-content-alt)] px-3 py-1 text-sm text-[var(--color-text-primary)]"
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
							className="rounded px-2 py-1 text-[var(--color-text-primary)] transition-colors duration-400 hover:bg-[var(--color-content-alt)]"
						>
							View Project
						</a>
					)}
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded px-2 py-1 text-[var(--color-text-primary)] transition-colors duration-400 hover:bg-[var(--color-content-alt)]"
						>
							GitHub
						</a>
					)}
				</div>
			</div>
			{image && <img className="lg:h-[20vh] lg:w-[20vh] self-center rounded-xl object-cover justify-end" src={image.src} alt={title}/>}
		</div>
	);
}
