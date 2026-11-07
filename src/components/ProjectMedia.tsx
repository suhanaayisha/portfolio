import Image from "next/image";
import type { Project } from "@/data/site";
import { FolderIcon } from "./Icons";

/** The project's screenshot, or a styled name card when there isn't one. */
export function ProjectMedia({
  project,
  className,
  sizes,
  priority = false,
}: {
  project: Project;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className={className} style={{ position: "relative" }}>
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: project.imageFit ?? "cover", objectPosition: "top center" }}
        />
      ) : (
        <span
          aria-hidden="true"
          className="mono"
          style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "var(--muted)" }}
        >
          <FolderIcon size={26} style={{ color: "var(--accent)" }} />
          ~/{project.slug}
        </span>
      )}
    </div>
  );
}
