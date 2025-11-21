type ProjectProps = {
	title: string;
	description: string;
	url?: string;
	github?: string;
	image: string;
	tags?: string[];
	featured?: boolean;
};

export default function Project({ title, description, url, github, image, tags }: ProjectProps) {
	return (
		<div className="rounded-lg border border-gray-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
			<img 
				src={image} 
				alt={title}
				className="mb-4 h-48 w-full rounded object-cover"
			/>
			<h3 className="mb-2 text-xl font-bold">{title}</h3>
			<p className="mb-4 text-gray-700">{description}</p>
			
			{tags && tags.length > 0 && (
				<div className="mb-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span 
							key={tag}
							className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
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
						className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
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