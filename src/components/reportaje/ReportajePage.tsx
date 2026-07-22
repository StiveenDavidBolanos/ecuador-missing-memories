import type { ReactNode } from "react";

type TrendPoint = { anio: string; casos: number; parcial?: boolean };
type ProfilePoint = { perfil: string; encontrado: number; desaparecido: number; fallecido: number };
type TimePoint = { tramo: string; localizados: number; mediana: string };
type ProvincePoint = { nombre: string; registros: number; denuncia: string; localizacion: string; diasLocalizacion: number };

export function SectionWrapper({
    id,
    eyebrow,
    title,
    intro,
    children,
    className = "",
    dark = false,
}: {
    id?: string;
    eyebrow?: string;
    title: string;
    intro?: string;
    children: ReactNode;
    className?: string;
    dark?: boolean;
}) {
    return (
        <section id={id} className={`border-b border-ink/10 ${dark ? "bg-deep text-paper" : "bg-paper text-ink"} ${className}`}>
            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
                    <div>
                        {eyebrow ? (
                            <p className="text-xs font-bold uppercase tracking-[0.35em] text-alert">{eyebrow}</p>
                        ) : null}
                        <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
                    </div>
                    {intro ? <p className={`text-base leading-relaxed sm:text-lg ${dark ? "text-paper/80" : "text-ink/80"}`}>{intro}</p> : null}
                </div>
                <div className="mt-14">{children}</div>
            </div>
        </section>
    );
}

export function HeroSection({
    eyebrow,
    title,
    subtitle,
    primaryHref,
    secondaryHref,
    children,
}: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryHref: string;
    secondaryHref: string;
    children?: ReactNode;
}) {
    return (
        <section className="relative overflow-hidden border-b border-ink/10 bg-deep text-paper">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-alert">{eyebrow}</p>
                    <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/80 sm:text-lg">{subtitle}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <a href={primaryHref} className="inline-flex items-center rounded-sm bg-alert px-5 py-3 text-xs font-bold uppercase tracking-widest text-paper transition-transform hover:scale-[1.01]">
                            Ir a datos
                        </a>
                        <a href={secondaryHref} className="inline-flex items-center rounded-sm border border-paper/30 px-5 py-3 text-xs font-bold uppercase tracking-widest text-paper hover:bg-paper hover:text-ink">
                            Ver hallazgos
                        </a>
                    </div>
                </div>
                <div className="rounded-sm border border-paper/15 bg-paper/10 p-6 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-alert">Espacios para el reportaje largo</p>
                    <div className="mt-5 space-y-4 text-sm leading-relaxed text-paper/85">
                        {/* Aquí insertar imagen de apertura */}
                        <div className="rounded-sm border border-paper/15 bg-deep/50 p-4">
                            <p className="font-semibold text-paper">Imagen de apertura</p>
                            <p className="mt-2 text-paper/70">Se colocará la foto o recurso visual que abra el reportaje.</p>
                        </div>
                        {/* Aquí insertar audio/testimonio inicial */}
                        <div className="rounded-sm border border-paper/15 bg-deep/50 p-4">
                            <p className="font-semibold text-paper">Audio o testimonio inicial</p>
                            <p className="mt-2 text-paper/70">Placeholder para una voz, una cita o un audio de apertura.</p>
                        </div>
                        {/* Aquí insertar video corto de apertura */}
                        <div className="rounded-sm border border-paper/15 bg-deep/50 p-4">
                            <p className="font-semibold text-paper">Video corto de apertura</p>
                            <p className="mt-2 text-paper/70">Se insertará un recurso breve para introducir el tema.</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    );
}

export function DataCard({ value, label, note }: { value: string; label: string; note?: string }) {
    return (
        <div className="rounded-sm border border-ink/10 bg-secondary p-5">
            <p className="font-serif text-3xl text-ink">{value}</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-ink">{label}</p>
            {note ? <p className="mt-1 text-xs text-muted-ink">{note}</p> : null}
        </div>
    );
}

export function CaseCard({
    name,
    year,
    place,
    description,
    status,
    imageUrl,
    sourceHref,
}: {
    name: string;
    year?: string;
    place?: string;
    description: string;
    status?: string;
    imageUrl?: string | null;
    sourceHref?: string;
}) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-sm border border-ink/10 bg-paper">
            {imageUrl ? (
                <div className="aspect-[4/3] w-full bg-secondary">
                    <img src={imageUrl} alt={name} className="h-full w-full object-cover" loading="lazy" />
                </div>
            ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-secondary text-ink/30">
                    <span className="font-serif text-4xl">{name.slice(0, 2).toUpperCase()}</span>
                </div>
            )}
            <div className="flex flex-1 flex-col p-5">
                {status ? <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-alert">{status}</p> : null}
                <h3 className="mt-2 font-serif text-xl leading-tight">{name}</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-muted-ink">
                    {year ? <span>{year}</span> : null}
                    {place ? <span>· {place}</span> : null}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">{description}</p>
                {sourceHref ? (
                    <a href={sourceHref} className="mt-4 text-xs font-bold uppercase tracking-widest text-alert hover:underline">
                        Fuente
                    </a>
                ) : null}
            </div>
        </article>
    );
}

export function EvolutionChart({ data }: { data: TrendPoint[] }) {
    const max = Math.max(...data.map((item) => item.casos));
    const points = data.map((item, index) => {
        const x = 40 + index * 42;
        const y = 186 - (item.casos / max) * 126;
        return { ...item, x, y };
    });

    return (
        <div className="rounded-sm border border-ink/10 bg-paper p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                    <h3 className="font-serif text-xl">Evolución anual de registros</h3>
                </div>
                <span className="rounded-full border border-ink/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-ink">
                    2017-2026*
                </span>
            </div>
            <svg viewBox="0 0 480 220" className="w-full">
                <line x1="24" y1="186" x2="456" y2="186" stroke="#d8d0c1" strokeWidth="1" />
                <line x1="24" y1="24" x2="24" y2="186" stroke="#d8d0c1" strokeWidth="1" />
                {points.map((point, index) => (
                    <g key={point.anio}>
                        <circle cx={point.x + 10} cy={point.y} r="5" fill={point.parcial ? "#c85f2f" : "#202020"} />
                        {index < points.length - 1 ? (
                            <line
                                x1={point.x + 10}
                                y1={point.y}
                                x2={points[index + 1].x + 10}
                                y2={points[index + 1].y}
                                stroke="#202020"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                            />
                        ) : null}
                        <text x={point.x + 10} y="205" textAnchor="middle" fontSize="10" fill="#5f564f">
                            {point.anio}
                        </text>
                    </g>
                ))}
            </svg>
            <div className="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-ink">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
                <span>Serie completa</span>
                <span className="ml-3 inline-flex h-2.5 w-2.5 rounded-full bg-alert" />
                <span>2026 parcial</span>
            </div>
        </div>
    );
}

export function TimeBarsChart({ data }: { data: TimePoint[] }) {
    const max = Math.max(...data.map((item) => item.localizados));

    return (
        <div className="rounded-sm border border-ink/10 bg-paper p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-alert">Tiempo de respuesta</p>
                    <h3 className="mt-2 font-serif text-xl">Denuncia frente a localización</h3>
                </div>
                <span className="rounded-full border border-ink/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-ink">
                    % de localización rápida
                </span>
            </div>
            <div className="space-y-4">
                {data.map((item) => (
                    <div key={item.tramo}>
                        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-ink">
                            <span>{item.tramo}</span>
                            <span>{item.localizados}% · {item.mediana}</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-ink/10">
                            <div className="h-full bg-alert" style={{ width: `${(item.localizados / max) * 100}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ProvinceTimeChart({ data }: { data: ProvincePoint[] }) {
    const max = Math.max(...data.map((item) => item.diasLocalizacion));

    return (
        <div className="rounded-sm border border-paper/15 bg-deep/60 p-4 backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                    <h3 className="font-serif text-xl">Mediana de días hasta localización</h3>
                </div>
                <span className="rounded-full border border-paper/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-paper/70">
                    por provincia
                </span>
            </div>
            <div className="space-y-4">
                {data.map((item) => (
                    <div key={item.nombre}>
                        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-paper/70">
                            <span>{item.nombre}</span>
                            <span>{item.diasLocalizacion} días</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-paper/20">
                            <div className="h-full rounded-full bg-alert" style={{ width: `${(item.diasLocalizacion / max) * 100}%` }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function FindingSection({
    id,
    title,
    variables,
    description,
    analysis,
    chartType,
    mediaNote,
    sourceNote,
}: {
    id: number;
    title: string;
    variables: string;
    description: string;
    analysis: string;
    chartType: string;
    mediaNote?: string;
    sourceNote?: string;
}) {
    return (
        <article className="rounded-sm border border-ink/10 bg-paper p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-ink/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-ink">
                    {chartType}
                </span>
            </div>
            <h3 className="mt-4 font-serif text-2xl leading-tight">{title}</h3>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink/60">Variables</p>
            <p className="mt-1 text-sm text-ink/80">{variables}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-3 text-sm leading-relaxed text-ink/80">
                    <p>{description}</p>
                    <p>{analysis}</p>
                </div>
                <div className="space-y-3">
                    <div className="rounded-sm border border-ink/10 bg-secondary p-4 text-sm text-muted-ink">
                        {mediaNote ? mediaNote : "Espacio para gráfico, imagen, audio o video."}
                    </div>
                    {sourceNote ? (
                        <div className="rounded-sm border border-ink/10 bg-paper p-4 text-sm text-ink/70">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-alert">Nota metodológica</p>
                            <p className="mt-2">{sourceNote}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export function MediaSlot({ title, text, videoUrl }: { title?: string; text: string; videoUrl?: string }) {
    return (
        <div className="rounded-sm border border-ink/10 bg-secondary p-4">
            {title ? <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-alert">{title}</p> : null}
            {videoUrl ? (
                <div className="mt-3 overflow-hidden rounded-sm border border-ink/10 bg-paper">
                    <div className="aspect-video w-full">
                        <iframe
                            className="h-full w-full"
                            src={videoUrl}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            ) : (
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{text}</p>
            )}
            {videoUrl ? <p className="mt-3 text-sm leading-relaxed text-ink/75">{text}</p> : null}
        </div>
    );
}

export function InterviewCard({
    name,
    role,
    theme,
    quote,
    children,
}: {
    name: string;
    role: string;
    theme: string;
    quote: string;
    children?: ReactNode;
}) {
    return (
        <article className="flex h-full flex-col rounded-sm border border-ink/10 bg-paper p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-alert">{role}</p>
            <h3 className="mt-3 font-serif text-2xl">{name}</h3>
            <p className="mt-2 text-sm font-semibold text-ink/70">{theme}</p>
            <blockquote className="mt-5 border-l-2 border-alert pl-4 text-sm leading-relaxed text-ink/80">
                “{quote}”
            </blockquote>
            {children ? <div className="mt-6 space-y-3">{children}</div> : null}
        </article>
    );
}

export function LegalCard({ title, description, citation }: { title: string; description: string; citation: string }) {
    return (
        <article className="rounded-sm border border-ink/10 bg-paper p-6">
            <h3 className="font-serif text-xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{description}</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-alert">{citation}</p>
        </article>
    );
}

export function MethodologySection({ points }: { points: string[] }) {
    return (
        <div className="rounded-sm border border-ink/10 bg-secondary p-6 sm:p-8">
            <div className="grid gap-4 lg:grid-cols-2">
                {points.map((point) => (
                    <div key={point} className="rounded-sm border border-ink/10 bg-paper p-4 text-sm leading-relaxed text-ink/80">
                        {point}
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ClosingSection({
    title,
    text,
    buttonHref,
    buttonLabel,
}: {
    title: string;
    text: string;
    buttonHref: string;
    buttonLabel: string;
}) {
    return (
        <div className="rounded-sm border border-alert/30 bg-alert/10 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-alert">Cierre</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/80">{text}</p>
            <a href={buttonHref} className="mt-8 inline-flex rounded-sm bg-alert px-5 py-3 text-xs font-bold uppercase tracking-widest text-paper">
                {buttonLabel}
            </a>
        </div>
    );
}
