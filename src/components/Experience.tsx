

type ExperienceProps = {
	company: string;
	position: string;
	startDate: string;
	endDate?: string;
	description: string;
	link?: string;
	index: number;
};

const formatDate = (value?: string) => {
	if (!value) return "Present";

	const parsed = new Date(value + "-02"); // Add mid-month to avoid timezone issues
	if (Number.isNaN(parsed.getTime())) return value;

	return parsed.toLocaleString("en-US", { month: "short", year: "numeric" });
};

const Experience = ({
	company,
	position,
	startDate,
	endDate,
	description,
	link,
	index,
}: ExperienceProps) => {
	const dateRange = `${formatDate(startDate)} — ${formatDate(endDate)}`;

	return (
		<div
			className="animate-fade-in flex gap-4 rounded-lg border-gray-300 bg-[var(--color-content)] px-6 py-4 opacity-0 transition-shadow hover:shadow-md"
			style={{ animationDelay: `${index * 100}ms` }}
		>

			<div className="flex-1">
				<div className="flex flex-wrap items-baseline justify-between gap-2">
					{link ? (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="font-pixel text-lg font-bold underline decoration-gray-400 underline-offset-4 transition-colors hover:text-gray-700"
						>
							{company}
						</a>
					) : (
						<h3 className="font-pixel text-lg font-bold">{company}</h3>
					)}
					<p className="text-sm text-gray-600">{dateRange}</p>
				</div>

				<p className="font-pixel text-xl font-semibold">{position}</p>
				<p className="mt-2 font-pixel leading-relaxed text-gray-700">{description}</p>
			</div>
		</div>
	);
};

export default Experience;
		
