const STAR_BG =
  "M15.9988 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z";
const STAR_SHAPE =
  "M10.38 4.035a.75.75 0 0 0-.753 0c-.206.098-.32.269-.377.362a4.7 4.7 0 0 0-.18.34L7.814 7.285l-2.813.411a4.7 4.7 0 0 0-.378.065c-.107.026-.304.081-.46.247a.75.75 0 0 0-.233.716c.03.226.157.387.228.47.074.087.172.182.268.276l2.034 1.981-.48 2.8a4.7 4.7 0 0 0-.055.38c-.009.11-.017.314.092.515a.75.75 0 0 0 .61.443c.224.041.416-.03.517-.072a4.7 4.7 0 0 0 .345-.17l2.514-1.322 2.515 1.322c.118.063.24.127.344.17.102.042.294.113.518.072a.75.75 0 0 0 .61-.443c.108-.2.1-.405.091-.515a4.7 4.7 0 0 0-.055-.38l-.48-2.799 2.035-1.982a4.7 4.7 0 0 0 .268-.275c.071-.083.198-.244.228-.47a.75.75 0 0 0-.232-.717c-.157-.165-.354-.221-.461-.247a4.7 4.7 0 0 0-.378-.065l-2.813-.411-1.257-2.548a4.7 4.7 0 0 0-.18-.34.75.75 0 0 0-.377-.362Z";

export const RATING_COLORS: Record<number, string> = {
  1: "#FF6847",
  2: "#FFB257",
  3: "#D8DC00",
  4: "#9FF11A",
  5: "#23BA21",
};

export function getRatingColor(rating: number): string {
  const bucket = Math.min(5, Math.max(1, Math.round(rating)));
  return RATING_COLORS[bucket] ?? RATING_COLORS[3];
}

export function StarIcon({
  color,
  size = 20,
  inactive,
}: {
  color: string;
  size?: number;
  inactive?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
    >
      <path d={STAR_BG} fill={color} />
      <path d={STAR_SHAPE} fill="white" opacity={inactive ? 0.5 : 1} />
    </svg>
  );
}

export function StarRating({
  rating,
  size = 20,
  showLabel,
  label,
}: {
  rating: number;
  size?: number;
  showLabel?: boolean;
  label?: string;
}) {
  const filled = Math.min(5, Math.max(1, Math.round(rating)));
  const activeColor = RATING_COLORS[filled] ?? RATING_COLORS[3];

  return (
    <div data-name="star-rating" className="flex flex-col gap-1">
      <div data-name="star-icons" className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon
            key={i}
            color={i < filled ? activeColor : "#DDDDDD"}
            size={size}
          />
        ))}
      </div>
      {showLabel && (
        <div
          data-name="score-label"
          className="flex items-center gap-1 text-sm"
        >
          <span className="font-medium text-[#060D17]">{rating}</span>
          <span className="text-neutral-600">{label ?? "User Rating"}</span>
        </div>
      )}
    </div>
  );
}
