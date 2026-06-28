import {
  siPython,
  siGo,
  siTypescript,
  siPytorch,
  siKubernetes,
  siDocker,
  siApachekafka,
  siGooglecloud,
  siAngular,
  siDotnet,
  siReact,
  siClaude,
  siPostgresql,
  siElasticsearch,
  siRedis,
  siClickhouse,
  siOpentelemetry,
} from "simple-icons";
import { AWS_ICON } from "@/lib/icons";
import { asset } from "@/lib/base-path";

type IconItem =
  | { label: string; path: string; viewBox?: string; src?: never }
  | { label: string; src: string; path?: never; viewBox?: never };

const items: IconItem[] = [
  { label: "Go", path: siGo.path },
  { label: "Python", path: siPython.path },
  { label: "TypeScript", path: siTypescript.path },
  { label: ".NET", path: siDotnet.path },
  { label: "Angular", path: siAngular.path },
  { label: "React", path: siReact.path },
  { label: "PyTorch", path: siPytorch.path },
  { label: "Kubernetes", path: siKubernetes.path },
  { label: "Docker", path: siDocker.path },
  { label: "Apache Kafka", path: siApachekafka.path },
  { label: "PostgreSQL", path: siPostgresql.path },
  { label: "Elasticsearch", path: siElasticsearch.path },
  { label: "Redis", path: siRedis.path },
  { label: "ClickHouse", path: siClickhouse.path },
  { label: "OpenTelemetry", path: siOpentelemetry.path },
  { label: "AWS", path: AWS_ICON.path, viewBox: AWS_ICON.viewBox },
  { label: "Google Cloud", path: siGooglecloud.path },
  { label: "Claude Code", path: siClaude.path },
  { label: "Goose", src: "/agents/goose.svg" },
  { label: "pi-mono", src: "/agents/pi-mono.png" },
];

function Icon({ item }: { item: IconItem }) {
  if ("src" in item && item.src) {
    return (
      <span
        title={item.label}
        aria-label={item.label}
        className="text-foreground shrink-0 inline-flex items-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(item.src)}
          alt={item.label}
          width={32}
          height={32}
          className="h-8 w-auto object-contain"
        />
      </span>
    );
  }
  const isWide = !!item.viewBox && item.viewBox !== "0 0 24 24";
  return (
    <span
      title={item.label}
      aria-label={item.label}
      className="text-foreground shrink-0"
    >
      <svg
        role="img"
        viewBox={item.viewBox ?? "0 0 24 24"}
        width={isWide ? 56 : 32}
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden
      >
        <path d={item.path} />
      </svg>
    </span>
  );
}

export function TechIcons() {
  return (
    <div className="relative w-full overflow-hidden mask-fade-x">
      <div className="flex w-max gap-12 animate-marquee hover:[animation-play-state:paused]">
        {items.map((item) => (
          <Icon key={`a-${item.label}`} item={item} />
        ))}
        {items.map((item) => (
          <Icon key={`b-${item.label}`} item={item} />
        ))}
      </div>
    </div>
  );
}
