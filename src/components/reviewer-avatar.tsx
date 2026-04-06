import Image from "next/image";

interface ReviewerAvatarProps {
  /** Reviewer display name (used for alt text) */
  name: string;
  /** Points value — used to derive the rank badge */
  points?: number;
  /** Rank name — alternative to points for resolving the badge (e.g. "Rookie Bettor") */
  rankName?: string;
  /** Size variant: xs (18px), sm (17px), md (64px), lg (107px) */
  size?: "xs" | "sm" | "md" | "lg";
  /** Custom pixel size override */
  customPx?: number;
}

const SIZE_MAP = {
  xs: 18,
  sm: 17,
  md: 64,
  lg: 107,
} as const;

const RANK_THRESHOLDS = [
  { min: 0, name: "Rookie Bettor", badge: "/user-level/rookie-bettor.png" },
  { min: 5, name: "Novice Gambler", badge: "/user-level/novice-gambler.png" },
  { min: 10, name: "Sharp Shooter", badge: "/user-level/sharp-shooter.png" },
  { min: 15, name: "Casino Ace", badge: "/user-level/casino-ace.png" },
  { min: 25, name: "High Roller", badge: "/user-level/high-roller.png" },
  { min: 50, name: "Administrator", badge: "/user-level/administrator.png" },
];

/** Special rank names that map to a specific badge */
const RANK_NAME_OVERRIDES: Record<string, string> = {
  "Complaint Specialist": "/user-level/administrator.png",
};

function getRank(points: number) {
  let rank = RANK_THRESHOLDS[0];
  for (const tier of RANK_THRESHOLDS) {
    if (points >= tier.min) rank = tier;
  }
  return rank;
}

export function getRankName(points: number): string {
  return getRank(points).name;
}

function resolveBadge(points?: number, rankName?: string): string | null {
  if (rankName) {
    const override = RANK_NAME_OVERRIDES[rankName];
    if (override) return override;
    const match = RANK_THRESHOLDS.find((t) => t.name === rankName);
    if (match) return match.badge;
  }
  if (points != null) return getRank(points).badge;
  return null;
}

export function ReviewerAvatar({
  name,
  points,
  rankName,
  size = "md",
  customPx,
}: ReviewerAvatarProps) {
  const resolvedPx = customPx ?? SIZE_MAP[size];

  /* ---- Small variant: plain circle, no extras ---- */
  if (size === "xs" || size === "sm") {
    return (
      <div
        data-name="reviewer-avatar"
        className="relative shrink-0"
        style={{ width: resolvedPx, height: resolvedPx }}
      >
        <div
          data-name="avatar-image"
          className="size-full rounded-full overflow-hidden"
        >
          <Image
            src="/icons/default-avatar.svg"
            alt={name}
            width={resolvedPx}
            height={resolvedPx}
            className="size-full object-cover"
          />
        </div>
      </div>
    );
  }

  /* ---- Medium / Large variant ---- */
  const rankSize = size === "lg" ? 44 : 34;
  const rankBadge = resolveBadge(points, rankName);
  const hasPoints = points != null;
  /* Extra height: rank badge overflows ~half its size, points badge adds ~18px below that */
  const extraHeight = (rankBadge ? rankSize * 0.5 : 0) + (hasPoints ? 18 : 0);

  return (
    <div
      data-name="reviewer-avatar"
      className="relative shrink-0"
      style={{ width: resolvedPx, height: resolvedPx + extraHeight }}
    >
      <div
        data-name="avatar-image"
        className="rounded-full overflow-hidden"
        style={{ width: resolvedPx, height: resolvedPx }}
      >
        <Image
          src="/icons/default-avatar.svg"
          alt={name}
          width={resolvedPx}
          height={resolvedPx}
          className="size-full object-cover"
        />
      </div>

      {/* Rank badge — floats above points */}
      {rankBadge && (
        <div
          data-name="avatar-rank-badge"
          className="absolute left-1/2 -translate-x-1/2 z-1"
          style={{
            width: rankSize,
            height: rankSize,
            bottom: hasPoints ? 18 : -2,
          }}
        >
          <Image
            src={rankBadge}
            alt="rank badge"
            width={rankSize}
            height={rankSize}
            className="size-full object-contain"
          />
        </div>
      )}

      {/* Points badge */}
      {hasPoints && (
        <span
          data-name="reviewer-points"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#167715] px-2 py-0.5 text-[10px] font-bold text-white whitespace-nowrap"
        >
          {points} pts
        </span>
      )}
    </div>
  );
}
