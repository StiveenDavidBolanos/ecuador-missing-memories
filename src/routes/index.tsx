import { createFileRoute } from "@tanstack/react-router";
import { useRevealOnScroll } from "@/hooks/useReveal";
import natalyAsset from "@/assets/nataly_mafla.jpg.asset.json";
import hectorAsset from "@/assets/hector.jpg.asset.json";
import malvinasAsset from "@/assets/las_malvinas.jpg.asset.json";
import restrepoAsset from "@/assets/hermanos_restrepo.jpg.asset.json";
import ecuadorHeatmap from "@/assets/ecuador-heatmap.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// Evolución anual (fuente: bases oficiales limpias, 2017-2025 completo; 2026 enero-mayo)
const evolucion = [
  { anio: "2017", casos: 10457 },
  { anio: "2018", casos: 10255 },
  { anio: "2019", casos: 9963 },
  { anio: "2020", casos: 6766 },
  { anio: "2021", casos: 7963 },
  { anio: "2022", casos: 7737 },
  { anio: "2023", casos: 7838 },
  { anio: "2024", casos: 7072 },
  { anio: "2025", casos: 7485 },
  { anio: "2026*", casos: 3195, parcial: true },
];
const maxCasos = Math.max(...evolucion.map((e) => e.casos));

// Composición por sexo (2017 vs 2025)
const composicionSexo = [
  { anio: "2017", mujeres: 66.5, hombres: 33.5 },
  { anio: "2021", mujeres: 66.1, hombres: 33.9 },
  { anio: "2023", mujeres: 57.4, hombres: 42.6 },
  { anio: "2024", mujeres: 56.5, hombres: 43.5 },
  { anio: "2025", mujeres: 55.1, hombres: 44.9 },
];

// Casos emblemáticos reales
const casos = [
  {
    registro: "Caso 2026-06",
    nombre: "Nathaly Juliette Mafla Castillo",
    lugar: "Quito · Escuela Politécnica Nacional",
    fecha: "Jueves 4 de junio de 2026",
    estado: "EN BÚSQUEDA",
    imagen: natalyAsset.url,
    resumen:
      "Estudiante universitaria desaparecida en las inmediaciones de la Escuela Politécnica Nacional. Su caso reactivó el debate sobre la seguridad en el entorno universitario de Quito.",
  },
  {
    registro: "Caso 2026-02",
    nombre: "Héctor Fernando Enríquez Ruiz",
    lugar: "Quito · Sector Logroño",
    fecha: "Miércoles 18 de febrero de 2026",
    estado: "EN BÚSQUEDA",
    imagen: hectorAsset.url,
    resumen:
      "Joven otavaleño reportado como desaparecido en Quito. Su familia ha sostenido una campaña pública de búsqueda con apoyo de organizaciones indígenas y colectivos de derechos humanos.",
  },
  {
    registro: "Caso 2024-12",
    nombre: "Los 4 de Las Malvinas",
    lugar: "Guayaquil · Barrio Las Malvinas",
    fecha: "Noche del domingo 8 de diciembre de 2024",
    estado: "DESAPARICIÓN FORZADA",
    imagen: malvinasAsset.url,
    resumen:
      "Cuatro menores de edad fueron detenidos por personal militar en Guayaquil y desaparecidos esa misma noche. El caso derivó en un proceso judicial por desaparición forzada.",
  },
  {
    registro: "Caso 1988-01",
    nombre: "Hermanos Restrepo Arismendy",
    lugar: "Quito",
    fecha: "Jueves 8 de enero de 1988",
    estado: "DESAPARICIÓN FORZADA · MEMORIA",
    imagen: restrepoAsset.url,
    resumen:
      "Carlos Santiago y Pedro Andrés Restrepo, de 17 y 14 años, fueron detenidos y desaparecidos por agentes de la Policía Nacional. Emblema histórico de la lucha por verdad y justicia en Ecuador.",
  },
];

const reportajes = [
  {
    kicker: "Tendencia",
    titulo: "La caída del 28,4% y el rebote silencioso de 2025",
    resumen:
      "Entre 2017 y 2025 los registros bajaron de 10.457 a 7.485. Pero 2025 rompió la tendencia con un aumento del 5,8%, y enero–mayo de 2026 ya supera al mismo periodo del año anterior.",
  },
  {
    kicker: "Género",
    titulo: "De la desaparición femenina al desplazamiento del perfil",
    resumen:
      "Los hombres pasaron del 33,5% del total en 2017 al 44,9% en 2025. En Guayas y Guayaquil, la mayoría de reportes ya no es femenina. Quito sigue siendo la excepción.",
  },
  {
    kicker: "Metodología",
    titulo: "El salto de 178 a 3.291 casos por “causas personales”",
    resumen:
      "Un cambio de codificación en 2024 hizo estallar la categoría “causas personales” mientras “causas familiares” y “sociales” caían en paralelo. Alerta metodológica sobre cómo se cuentan las ausencias.",
  },
];

function Index() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      {/* NAV */}
      <nav className="border-b border-ink/10 px-6 py-4 flex justify-between items-center sticky top-0 bg-paper/95 backdrop-blur z-40">
        <div className="flex items-center gap-3">
          <div className="size-3 bg-alert" />
          <span className="font-bold tracking-tight uppercase text-lg">Ausencias.ec</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
          <a href="#estadisticas" className="hover:text-alert transition-colors">Estadísticas</a>
          <a href="#casos" className="hover:text-alert transition-colors">Casos</a>
          <a href="#reportajes" className="hover:text-alert transition-colors">Reportajes</a>
          <a href="#recursos" className="hover:text-alert transition-colors">Recursos</a>
          <a href="#reportar" className="text-alert border-b border-alert pb-0.5">Reportar Caso</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Periodismo de datos · Ecuador 2017–2026</span>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight">
              La cifra de lo{" "}
              <span className="italic text-alert text-7xl md:text-9xl">invisible.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-ink leading-relaxed max-w-lg">
              78.731 registros oficiales de personas desaparecidas en Ecuador entre 2017 y mayo de 2026,
              limpiados, cruzados y contados uno por uno. Este es el mapa de una ausencia que no deja de cambiar de forma.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#casos" className="px-6 py-3 bg-ink text-paper text-[11px] font-bold uppercase tracking-widest hover:bg-alert transition-colors">
                Ver casos emblemáticos
              </a>
              <a href="#recursos" className="px-6 py-3 border border-ink/20 text-[11px] font-bold uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors">
                ¿Qué hacer si alguien desaparece?
              </a>
            </div>
          </div>
          <div className="border-l-2 border-alert/60 pl-8 pb-4 animate-count-in">
            <div className="font-serif text-7xl md:text-8xl text-ink tracking-tighter tabular-nums">78.731</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-ink mt-3">
              Registros analizados · 2017–2025 completos, 2026 enero–mayo
            </div>
            <div className="mt-8 flex gap-4">
              <div className="h-1 w-24 bg-alert" />
              <div className="h-1 flex-1 bg-ink/5" />
            </div>
            <p className="text-xs text-muted-ink mt-6 italic leading-relaxed">
              Cálculos propios a partir de bases oficiales depuradas del Ministerio del Interior. Última actualización: julio de 2026.
            </p>
          </div>
        </div>
      </header>

      {/* ESTADÍSTICAS */}
      <section id="estadisticas" className="bg-ink text-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Radiografía nacional</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">Un país que no encuentra a los suyos</h2>
            </div>
            <p className="text-sm text-paper/60 max-w-md">
              Registros administrativos oficiales, no una encuesta. No hay margen de error muestral,
              pero sí subregistro, actualización tardía y cambios de clasificación institucional.
            </p>
          </div>

          {/* Evolución anual */}
          <div className="reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Evolución anual · 2017–2026</span>
            <h3 className="font-serif text-2xl md:text-3xl mt-3 mb-8">La caída del 28,4% y el rebote de 2025</h3>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-4 items-end h-64 border-b border-paper/20 pb-2">
              {evolucion.map((e) => {
                const h = (e.casos / maxCasos) * 100;
                return (
                  <div key={e.anio} className="flex flex-col items-center gap-2 group">
                    <div className="text-[10px] tabular-nums text-paper/60 group-hover:text-alert transition">
                      {e.casos.toLocaleString("es-EC")}
                    </div>
                    <div
                      className={`w-full ${e.parcial ? "bg-alert/50" : "bg-alert"} group-hover:opacity-80 transition`}
                      style={{ height: `${h}%` }}
                    />
                    <div className="text-[10px] uppercase tracking-widest text-paper/60">{e.anio}</div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-paper/50 italic mt-4">
              *2026 contiene únicamente enero–mayo (3.195 registros) y no es comparable con años completos.
              En el mismo periodo de 2025 se registraron 3.160 casos: +1,1% interanual.
            </p>
          </div>

          {/* Tres bloques */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {/* Sexo */}
            <div className="reveal space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Composición por sexo</span>
              <div className="bg-paper/5 border border-paper/10 p-6 space-y-5">
                {composicionSexo.map((c) => (
                  <div key={c.anio}>
                    <div className="flex justify-between text-[11px] uppercase tracking-widest text-paper/70 mb-1">
                      <span>{c.anio}</span>
                      <span className="tabular-nums">M {c.mujeres}% · H {c.hombres}%</span>
                    </div>
                    <div className="flex h-2 overflow-hidden">
                      <div className="bg-alert" style={{ width: `${c.mujeres}%` }} />
                      <div className="bg-paper/25" style={{ width: `${c.hombres}%` }} />
                    </div>
                  </div>
                ))}
                <p className="text-xs text-paper/70 leading-relaxed border-t border-paper/10 pt-4">
                  Los hombres pasaron del 33,5% del total en 2017 al 44,9% en 2025. La caída
                  histórica se concentró en mujeres.
                </p>
              </div>
            </div>

            {/* Categorías críticas */}
            <div className="reveal space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Motivos críticos · 2017–2025</span>
              <div className="bg-paper/5 border border-paper/10 p-6 space-y-6">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper/70 mb-2">Motivo “Fallecido”</div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-4xl tabular-nums">85,2%</span>
                    <span className="text-xs text-paper/60">hombres · 2.263 casos</span>
                  </div>
                  <div className="h-1 mt-2 bg-paper/10">
                    <div className="h-full bg-alert" style={{ width: "85.2%" }} />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper/70 mb-2">Motivo “Violencia”</div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-4xl tabular-nums">76,8%</span>
                    <span className="text-xs text-paper/60">mujeres · 2.360 casos</span>
                  </div>
                  <div className="h-1 mt-2 bg-paper/10">
                    <div className="h-full bg-alert" style={{ width: "76.8%" }} />
                  </div>
                </div>
                <p className="text-xs text-paper/70 leading-relaxed border-t border-paper/10 pt-4">
                  Perfiles opuestos: los hombres concentran la categoría “Fallecido”; las mujeres, la de “Violencia”.
                </p>
              </div>
            </div>

            {/* Tiempos */}
            <div className="reveal space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Tiempos institucionales</span>
              <div className="bg-paper/5 border border-paper/10 p-6 flex flex-col justify-between h-full min-h-[280px]">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-paper/70">Mediana desaparición → denuncia</div>
                  <div className="font-serif text-6xl tabular-nums mt-2">2 <span className="text-2xl text-paper/60">días</span></div>
                  <div className="text-xs text-paper/60 mt-1">Estable 2017–2025</div>
                </div>
                <div className="border-t border-paper/10 pt-4">
                  <div className="text-[11px] uppercase tracking-widest text-paper/70">Mediana denuncia → localización</div>
                  <div className="font-serif text-6xl tabular-nums mt-2 text-alert">5 <span className="text-2xl text-paper/60">días</span></div>
                  <div className="text-xs text-paper/60 mt-1">Aumentó de 2 días (2020) a 5 días (2023–2025)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Territorio */}
          <div className="mt-20 grid md:grid-cols-2 gap-12 items-center reveal">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Territorio</span>
              <h3 className="font-serif text-3xl md:text-4xl mt-3 mb-4">Guayas cambió de rostro. Quito no.</h3>
              <p className="text-sm text-paper/70 leading-relaxed">
                Guayas y Guayaquil pasaron de mayoría femenina a mayoría masculina en los reportes
                de desaparición. Quito mantiene su predominio femenino. El desplazamiento territorial
                del perfil de las ausencias es una de las novedades más marcadas del periodo.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="border border-paper/15 p-4">
                  <div className="font-serif text-3xl">Guayas</div>
                  <div className="text-[10px] uppercase tracking-widest text-alert mt-1">M → H</div>
                </div>
                <div className="border border-paper/15 p-4">
                  <div className="font-serif text-3xl">Guayaquil</div>
                  <div className="text-[10px] uppercase tracking-widest text-alert mt-1">M → H</div>
                </div>
                <div className="border border-paper/15 p-4">
                  <div className="font-serif text-3xl">Quito</div>
                  <div className="text-[10px] uppercase tracking-widest text-paper/60 mt-1">Sigue M</div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-paper/5 border border-paper/10 relative overflow-hidden">
              <img
                src={ecuadorHeatmap}
                alt="Mapa de Ecuador con densidad de casos de desaparición por provincia"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink to-transparent">
                <p className="text-[10px] uppercase tracking-widest text-paper/80">Densidad de casos por provincia · 2017–2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section id="casos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6 reveal">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Casos emblemáticos</span>
            <h2 className="font-serif text-5xl italic mt-3">Nombres detrás de los datos</h2>
          </div>
          <p className="text-sm text-muted-ink max-w-md">
            Cuatro historias que atraviesan cuatro décadas de desapariciones en Ecuador.
            Publicadas con imágenes y datos difundidos por las familias y las instituciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {casos.map((c) => (
            <article key={c.registro} className="group cursor-pointer reveal">
              <div className="w-full aspect-[3/4] bg-ink/5 border border-ink/10 mb-4 relative overflow-hidden">
                <img
                  src={c.imagen}
                  alt={`Fotografía o cartel de búsqueda: ${c.nombre}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper bg-ink/60 px-2 py-1 backdrop-blur">
                  {c.registro}
                </span>
                <div className="absolute bottom-3 left-3 right-3 text-[10px] font-bold text-alert tracking-widest">
                  {c.estado}
                </div>
              </div>
              <h3 className="font-bold text-base uppercase leading-tight tracking-tight group-hover:text-alert transition-colors">
                {c.nombre}
              </h3>
              <p className="text-xs text-muted-ink mt-1 tracking-wide">{c.lugar}</p>
              <p className="text-xs text-muted-ink">{c.fecha}</p>
              <p className="text-xs text-ink/80 mt-3 leading-relaxed">{c.resumen}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-ink italic max-w-2xl reveal">
          Las fotografías corresponden a materiales de búsqueda difundidos públicamente por
          familiares, colectivos y autoridades. Se utilizan aquí con fines documentales y de memoria.
        </p>
      </section>

      {/* REPORTAJES */}
      <section id="reportajes" className="bg-secondary/60 border-y border-ink/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6 reveal">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Investigaciones</span>
              <h2 className="font-serif text-5xl mt-3">Reportajes y contexto</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {reportajes.map((r) => (
              <article key={r.titulo} className="group border-t-2 border-ink pt-6 cursor-pointer reveal">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">{r.kicker}</span>
                <h3 className="font-serif text-2xl mt-4 leading-tight group-hover:text-alert transition-colors">
                  {r.titulo}
                </h3>
                <p className="text-sm text-muted-ink mt-4 leading-relaxed">{r.resumen}</p>
                <span className="mt-6 inline-block text-[11px] font-bold uppercase tracking-widest border-b border-ink pb-0.5 group-hover:border-alert group-hover:text-alert transition-colors">
                  Leer investigación →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Guía práctica</span>
            <h2 className="font-serif text-5xl mt-3 mb-8">¿Qué hacer si un familiar desaparece?</h2>
            <ol className="space-y-6">
              {[
                { n: "01", t: "Denuncia inmediata", d: "Acude a la Fiscalía o a la DINASED. No es necesario esperar 24 horas." },
                { n: "02", t: "Aporta información clave", d: "Fotografía reciente, vestimenta del día, cicatrices, tatuajes y el último lugar conocido." },
                { n: "03", t: "Activa la Alerta Emilia", d: "Aplica para niñas, niños y adolescentes desaparecidos en las primeras horas críticas." },
                { n: "04", t: "Contacta organizaciones", d: "Asfadec y colectivos de familiares brindan asesoría legal y acompañamiento emocional." },
              ].map((s) => (
                <li key={s.n} className="flex gap-6 border-b border-ink/10 pb-6">
                  <span className="font-serif italic text-2xl text-alert">{s.n}.</span>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{s.t}</h4>
                    <p className="text-sm text-muted-ink mt-1 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside id="reportar" className="bg-alert/5 border border-alert/20 p-10 md:p-12 self-start reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Reportar caso</span>
            <h3 className="font-serif text-3xl mt-3 mb-4">¿Tienes información?</h3>
            <p className="text-sm text-muted-ink mb-8 leading-relaxed">
              Si conoces el paradero de una persona reportada o deseas registrar un nuevo caso,
              utiliza los canales directos del Estado ecuatoriano.
            </p>

            <div className="space-y-6">
              <div className="border-t border-alert/20 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-ink">Emergencia nacional</div>
                <div className="font-serif text-5xl text-alert tabular-nums">911</div>
              </div>
              <div className="border-t border-alert/20 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-ink">DINASED · Personas desaparecidas</div>
                <div className="font-serif text-3xl text-ink tabular-nums">1800‑335486</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-ink mt-1">(1800‑DELITO · absoluta confidencialidad)</div>
              </div>
              <div className="border-t border-alert/20 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-ink">Fiscalía General del Estado</div>
                <a href="https://www.fiscalia.gob.ec" target="_blank" rel="noreferrer" className="font-serif text-xl text-ink underline underline-offset-4 decoration-alert/40 hover:decoration-alert">
                  fiscalia.gob.ec
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 reveal">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Metodología</span>
            <h3 className="font-serif text-3xl mt-3">Datos limpios, fuentes abiertas</h3>
          </div>
          <div className="md:col-span-2 space-y-4 text-sm text-paper/70 leading-relaxed">
            <p>
              Trabajamos con <strong className="text-paper">78.731 registros administrativos</strong>{" "}
              de personas desaparecidas: 75.536 correspondientes a 2017–2025 completos y 3.195
              a enero–mayo de 2026, provenientes de bases oficiales del{" "}
              <strong className="text-paper">Ministerio del Interior</strong>.
            </p>
            <p>
              Los registros son cruzados, deduplicados y normalizados por año, sexo, provincia,
              cantón, nacionalidad, edad, motivo institucional y desenlace. Las cifras de 2026 se
              publican como parciales y sólo se comparan con los mismos meses de 2025.
            </p>
            <p className="italic text-paper/60">
              Al tratarse de registros administrativos, no hay margen de error muestral, pero sí
              subregistro, actualización tardía y cambios de clasificación institucional. Los
              resultados se muestran agregados, sin nombres, documentos personales ni coordenadas exactas.
            </p>
            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="px-6 py-3 bg-paper text-ink text-[11px] font-bold uppercase tracking-widest hover:bg-alert hover:text-paper transition-colors"
              >
                [ Falta enlace ] Descargar CSV
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-paper/30 text-[11px] font-bold uppercase tracking-widest hover:bg-paper hover:text-ink transition-colors"
              >
                [ Falta enlace ] Metodología completa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-paper py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-ink/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="size-3 bg-alert" />
                <span className="font-bold tracking-tight uppercase text-lg">Ausencias.ec</span>
              </div>
              <p className="text-xs text-muted-ink leading-relaxed">
                Proyecto independiente de periodismo de datos por la memoria de las personas
                desaparecidas en Ecuador. 2017–2026.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink mb-4">Explorar</div>
              <ul className="space-y-2 text-sm text-muted-ink">
                <li><a href="#estadisticas" className="hover:text-alert">Estadísticas</a></li>
                <li><a href="#casos" className="hover:text-alert">Casos</a></li>
                <li><a href="#reportajes" className="hover:text-alert">Reportajes</a></li>
                <li><a href="#recursos" className="hover:text-alert">Recursos</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink mb-4">Fuentes</div>
              <ul className="space-y-2 text-sm text-muted-ink">
                <li>Ministerio del Interior</li>
                <li>Fiscalía General del Estado</li>
                <li>DINASED</li>
                <li>Asfadec</li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink mb-4">Contacto</div>
              <ul className="space-y-2 text-sm text-muted-ink">
                <li><a href="mailto:contacto@ausencias.ec" className="hover:text-alert">contacto@ausencias.ec</a></li>
                <li>[ Falta enlace ] Metodología</li>
                <li>[ Falta enlace ] Privacidad</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-muted-ink gap-4">
            <span>© 2026 Ausencias.ec · Proyecto de memoria Ecuador</span>
            <span>Actualizado: julio de 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
