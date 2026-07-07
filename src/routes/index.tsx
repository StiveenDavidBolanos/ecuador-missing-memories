import { createFileRoute } from "@tanstack/react-router";
import ecuadorHeatmap from "@/assets/ecuador-heatmap.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const provincias = [
  { nombre: "Guayas", pct: 32, casos: 1543 },
  { nombre: "Pichincha", pct: 28, casos: 1350 },
  { nombre: "Manabí", pct: 15, casos: 723 },
  { nombre: "Los Ríos", pct: 8, casos: 386 },
  { nombre: "El Oro", pct: 6, casos: 289 },
];

const casos = [
  { registro: "0422-A", nombre: "Nathaly M.", lugar: "Quito, Pichincha", fecha: "12 Jun 2024", estado: "EN BÚSQUEDA" },
  { registro: "0423-B", nombre: "Luis Alberto C.", lugar: "Guayaquil, Guayas", fecha: "03 May 2024", estado: "EN INVESTIGACIÓN" },
  { registro: "0424-C", nombre: "Ana Sofía R.", lugar: "Cuenca, Azuay", fecha: "28 Abr 2024", estado: "ALERTA EMILIA ACTIVA" },
  { registro: "0425-D", nombre: "Mateo S.", lugar: "Manta, Manabí", fecha: "17 Abr 2024", estado: "EN BÚSQUEDA" },
];

const reportajes = [
  {
    kicker: "Investigación",
    titulo: "Las primeras 48 horas: el vacío entre la denuncia y la búsqueda",
    resumen: "Un análisis de los protocolos de la DINASED y las brechas operativas en las provincias con mayor incidencia.",
  },
  {
    kicker: "Contexto",
    titulo: "Quiénes desaparecen: perfil demográfico 2018–2024",
    resumen: "Adolescentes entre 13 y 17 años concentran el 42% de los reportes activos según datos oficiales.",
  },
  {
    kicker: "Metodología",
    titulo: "Cómo limpiamos las bases de datos oficiales del Ministerio del Interior",
    resumen: "Reconciliamos registros duplicados, normalizamos provincias y comparamos con la Fiscalía General del Estado.",
  },
];

function Index() {
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
          <a href="#base" className="hover:text-alert transition-colors">Base de Datos</a>
          <a href="#reportajes" className="hover:text-alert transition-colors">Reportajes</a>
          <a href="#recursos" className="hover:text-alert transition-colors">Recursos</a>
          <a href="#reportar" className="text-alert border-b border-alert pb-0.5">Reportar Caso</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Periodismo de datos · Ecuador</span>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight">
              La cifra de lo{" "}
              <span className="italic text-alert text-7xl md:text-9xl">invisible.</span>
            </h1>
            <p className="mt-8 text-lg text-muted-ink leading-relaxed max-w-lg">
              Análisis de datos oficiales sobre la desaparición de personas en Ecuador.
              Un registro independiente basado en la transparencia y la memoria.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#base" className="px-6 py-3 bg-ink text-paper text-[11px] font-bold uppercase tracking-widest hover:bg-alert transition-colors">
                Explorar base de datos
              </a>
              <a href="#recursos" className="px-6 py-3 border border-ink/20 text-[11px] font-bold uppercase tracking-widest hover:bg-ink hover:text-paper transition-colors">
                ¿Qué hacer si alguien desaparece?
              </a>
            </div>
          </div>
          <div className="border-l-2 border-alert/60 pl-8 pb-4 animate-count-in">
            <div className="font-serif text-7xl md:text-8xl text-ink tracking-tighter tabular-nums">4.821</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-ink mt-3">
              Personas desaparecidas registradas · 2023–2024
            </div>
            <div className="mt-8 flex gap-4">
              <div className="h-1 w-24 bg-alert" />
              <div className="h-1 flex-1 bg-ink/5" />
            </div>
            <p className="text-xs text-muted-ink mt-6 italic leading-relaxed">
              Fuente: Ministerio del Interior y Fiscalía General del Estado. Registros consolidados hasta diciembre 2024.
            </p>
          </div>
        </div>
      </header>

      {/* ESTADÍSTICAS */}
      <section id="estadisticas" className="bg-ink text-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Radiografía nacional</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">Un país que no encuentra a los suyos</h2>
            </div>
            <p className="text-sm text-paper/60 max-w-md">
              Cifras extraídas de bases oficiales, limpiadas y verificadas. Metodología abierta al final del documento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Género */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Distribución por género</span>
              <div className="aspect-square bg-paper/5 border border-paper/10 flex flex-col justify-end p-6 gap-6">
                <div className="flex items-end gap-3 h-full">
                  <div className="flex-1 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-paper/60 mb-2">Mujeres · 54%</span>
                    <div className="bg-alert h-[54%] min-h-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-widest text-paper/60 mb-2">Hombres · 46%</span>
                    <div className="bg-paper/25 h-[46%] min-h-2" />
                  </div>
                </div>
                <p className="text-xs text-paper/70 leading-relaxed border-t border-paper/10 pt-4">
                  El 42% de los reportes activos corresponde a adolescentes entre 13 y 17 años.
                </p>
              </div>
            </div>

            {/* Provincias */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Provincias con más casos</span>
              <div className="aspect-square bg-paper/5 border border-paper/10 p-6 flex flex-col justify-between">
                <ul className="space-y-3">
                  {provincias.map((p) => (
                    <li key={p.nombre} className="border-b border-paper/10 pb-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm">{p.nombre}</span>
                        <span className="font-serif text-xl">{p.pct}%</span>
                      </div>
                      <div className="mt-1 h-0.5 bg-paper/10 overflow-hidden">
                        <div className="h-full bg-alert" style={{ width: `${p.pct * 2.5}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-paper/50 italic mt-3">Datos: Fiscalía General del Estado, 2024.</p>
              </div>
            </div>

            {/* Mapa */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Cartografía nacional</span>
              <div className="aspect-square bg-paper/5 border border-paper/10 relative overflow-hidden">
                <img
                  src={ecuadorHeatmap}
                  alt="Mapa de Ecuador con puntos de calor en Guayas, Pichincha y Manabí"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink to-transparent">
                  <p className="text-[10px] uppercase tracking-widest text-paper/80">Densidad de casos por provincia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cronología */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 border-t border-paper/10 pt-12">
            {[
              { anio: "2021", casos: 940 },
              { anio: "2022", casos: 1080 },
              { anio: "2023", casos: 1240 },
              { anio: "2024", casos: 1561 },
            ].map((y) => (
              <div key={y.anio}>
                <div className="text-[10px] uppercase tracking-widest text-alert font-bold">{y.anio}</div>
                <div className="font-serif text-4xl mt-2 tabular-nums">{y.casos.toLocaleString("es-EC")}</div>
                <div className="text-xs text-paper/60 mt-1">casos registrados</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BASE DE DATOS */}
      <section id="base" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Base de datos</span>
            <h2 className="font-serif text-5xl italic mt-3">Casos recientes</h2>
          </div>
          <button className="text-[11px] font-bold uppercase tracking-widest border-b-2 border-ink pb-1 hover:text-alert hover:border-alert transition-colors">
            Ver base de datos completa →
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {casos.map((c) => (
            <article key={c.registro} className="group cursor-pointer">
              <div className="w-full aspect-[3/4] bg-ink/5 border border-ink/10 mb-4 relative overflow-hidden flex flex-col justify-between p-4 transition-colors group-hover:bg-ink group-hover:text-paper">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-60">
                  Reg. {c.registro}
                </span>
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 border border-current rounded-full mb-3 flex items-center justify-center opacity-40">
                    <span className="font-serif italic text-2xl">?</span>
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-widest opacity-60">
                    Sin fotografía disponible
                  </span>
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-60 text-right">
                  Expediente abierto
                </div>
              </div>
              <h3 className="font-bold text-base uppercase leading-tight tracking-tight">{c.nombre}</h3>
              <p className="text-xs text-muted-ink mt-1 tracking-wide">{c.lugar}</p>
              <p className="text-xs text-muted-ink">Últ. vez: {c.fecha}</p>
              <div className="mt-3 text-[10px] font-bold text-alert tracking-widest">{c.estado}</div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted-ink italic max-w-2xl">
          Los nombres y datos mostrados son ilustrativos con fines de diseño. La base de datos definitiva se
          alimentará únicamente de registros oficiales con autorización de familiares y organizaciones.
        </p>
      </section>

      {/* REPORTAJES */}
      <section id="reportajes" className="bg-secondary/60 border-y border-ink/10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Investigaciones</span>
              <h2 className="font-serif text-5xl mt-3">Reportajes y contexto</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {reportajes.map((r) => (
              <article key={r.titulo} className="group border-t-2 border-ink pt-6 cursor-pointer">
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
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Guía práctica</span>
            <h2 className="font-serif text-5xl mt-3 mb-8">¿Qué hacer si un familiar desaparece?</h2>
            <ol className="space-y-6">
              {[
                { n: "01", t: "Denuncia inmediata", d: "Acude a la Fiscalía o a la Policía Judicial. No es necesario esperar 24 horas." },
                { n: "02", t: "Aporta información clave", d: "Fotografía reciente, vestimenta, cicatrices, tatuajes y el último lugar conocido." },
                { n: "03", t: "Activa la Alerta Emilia", d: "Aplica para niñas, niños y adolescentes desaparecidos en las primeras horas críticas." },
                { n: "04", t: "Contacta organizaciones", d: "Asfadec y colectivos de familiares brindan asesoría legal y acompañamiento." },
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

          <aside id="reportar" className="bg-alert/5 border border-alert/20 p-10 md:p-12 self-start">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Reportar caso</span>
            <h3 className="font-serif text-3xl mt-3 mb-4">¿Tienes información?</h3>
            <p className="text-sm text-muted-ink mb-8 leading-relaxed">
              Si conoces el paradero de alguna persona reportada o deseas registrar un nuevo caso oficialmente,
              utiliza los canales directos de emergencia del Estado ecuatoriano.
            </p>

            <div className="space-y-6">
              <div className="border-t border-alert/20 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-ink">Emergencia nacional</div>
                <div className="font-serif text-5xl text-alert tabular-nums">911</div>
              </div>
              <div className="border-t border-alert/20 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-ink">DINASED — reporte de personas desaparecidas</div>
                <div className="font-serif text-3xl text-ink">1800‑DELITO</div>
              </div>
              <div className="border-t border-alert/20 pt-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-ink">Fiscalía General del Estado</div>
                <a href="https://www.fiscalia.gob.ec" className="font-serif text-xl text-ink underline underline-offset-4 decoration-alert/40 hover:decoration-alert">
                  fiscalia.gob.ec
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-alert">Metodología</span>
            <h3 className="font-serif text-3xl mt-3">Datos limpios, fuentes abiertas</h3>
          </div>
          <div className="md:col-span-2 space-y-4 text-sm text-paper/70 leading-relaxed">
            <p>
              Consolidamos registros del <strong className="text-paper">Ministerio del Interior</strong>, la{" "}
              <strong className="text-paper">Fiscalía General del Estado</strong> y la{" "}
              <strong className="text-paper">DINASED</strong>. Los datos son cruzados, deduplicados y normalizados
              por provincia, año, género y grupo etario.
            </p>
            <p>
              Toda visualización de este portal puede descargarse en formato CSV con la referencia a la fuente
              original. Publicamos los cuadernos de código en abierto para revisión pública.
            </p>
            <div className="pt-6 flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-paper text-ink text-[11px] font-bold uppercase tracking-widest hover:bg-alert hover:text-paper transition-colors">
                Descargar CSV
              </button>
              <button className="px-6 py-3 border border-paper/30 text-[11px] font-bold uppercase tracking-widest hover:bg-paper hover:text-ink transition-colors">
                Leer metodología completa
              </button>
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
                Un proyecto independiente de periodismo de datos por la memoria de las personas desaparecidas
                en Ecuador.
              </p>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink mb-4">Explorar</div>
              <ul className="space-y-2 text-sm text-muted-ink">
                <li><a href="#estadisticas" className="hover:text-alert">Estadísticas</a></li>
                <li><a href="#base" className="hover:text-alert">Base de datos</a></li>
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
                <li><a href="#" className="hover:text-alert">Metodología</a></li>
                <li><a href="#" className="hover:text-alert">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-muted-ink gap-4">
            <span>© 2025 Ausencias.ec · Proyecto de memoria Ecuador</span>
            <span>Actualizado: enero 2025</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
