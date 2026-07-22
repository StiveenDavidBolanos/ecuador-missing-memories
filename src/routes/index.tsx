import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRevealOnScroll, useScrollProgress, useActiveSection } from "@/hooks/useReveal";

import ecuadorHeatmap from "@/assets/ecuador-heatmap.jpg";
import heroVigil from "@/assets/hero-vigil.jpg";
import desaparecidosSillas from "@/assets/Fotografias de desaparecidos en sillas.jpg";
import balanza from "@/assets/Imagen con historia - balanza.jpg";
import relojesArena from "@/assets/Imagen con historia - relojes de arena.jpg";
import velas from "@/assets/Imagen con historia - velas.jpg";
import zapatos from "@/assets/Imagen con historia - zapatos.jpg";
import manifestacion from "@/assets/Manifestación.jpg";
import manifestacionAsfadec from "@/assets/Menifestación y carteles asfadec.jpg";
import plantonAsfadec from "@/assets/Plantón asfadec.jpg";
import {
  CaseCard,
  ClosingSection,
  DataCard,
  EvolutionChart,
  FindingSection,
  HeroSection,
  InterviewCard,
  LegalCard,
  MediaSlot,
  MethodologySection,
  ProvinceTimeChart,
  SectionWrapper,
  TimeBarsChart,
} from "@/components/reportaje/ReportajePage";

const TITLE = "Desaparecer en Ecuador — Un reportaje de datos";
const DESCRIPTION =
  "78.731 registros oficiales sobre desapariciones en Ecuador entre 2017 y mayo de 2026. Datos, historias y obligaciones legales del Estado.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

/* ---------- Datos ---------- */

const evolucion = [
  { anio: "2017", casos: 10457, cambio: "Inicio de serie" },
  { anio: "2018", casos: 10255, cambio: "−1,9 %" },
  { anio: "2019", casos: 9963, cambio: "−2,8 %" },
  { anio: "2020", casos: 6766, cambio: "−32,1 %", nota: "Restricciones por pandemia" },
  { anio: "2021", casos: 7963, cambio: "+17,7 %" },
  { anio: "2022", casos: 7737, cambio: "−2,8 %" },
  { anio: "2023", casos: 7838, cambio: "+1,3 %" },
  { anio: "2024", casos: 7072, cambio: "−9,8 %" },
  { anio: "2025", casos: 7485, cambio: "+5,8 %" },
  { anio: "2026*", casos: 3195, cambio: "Enero–mayo", parcial: true },
];
const maxCasos = Math.max(...evolucion.map((e) => e.casos));

const composicionSexo = [
  { anio: "2017", mujeres: 66.5, hombres: 33.5 },
  { anio: "2021", mujeres: 66.1, hombres: 33.9 },
  { anio: "2023", mujeres: 57.4, hombres: 42.6 },
  { anio: "2024", mujeres: 56.5, hombres: 43.5 },
  { anio: "2025", mujeres: 55.1, hombres: 44.9 },
];

const perfilDesenlace = [
  { perfil: "Mujeres adolescentes", encontrado: 98.8, desaparecido: 1.1, fallecido: 0.1 },
  { perfil: "Mujeres adultas", encontrado: 95.8, desaparecido: 2.2, fallecido: 2.0 },
  { perfil: "Hombres adultos", encontrado: 81.0, desaparecido: 8.5, fallecido: 10.5 },
  { perfil: "Mujeres adultas mayores", encontrado: 88.0, desaparecido: 3.9, fallecido: 8.1 },
  { perfil: "Hombres adultos mayores", encontrado: 79.1, desaparecido: 7.8, fallecido: 13.1 },
];

const provincias = [
  { nombre: "Orellana", registros: 826, denuncia: "2 días", localizacion: "12 días", diasLocalizacion: 12 },
  { nombre: "Los Ríos", registros: 3167, denuncia: "2 días", localizacion: "10 días", diasLocalizacion: 10 },
  { nombre: "Morona Santiago", registros: 1268, denuncia: "3 días", localizacion: "10 días", diasLocalizacion: 10 },
  { nombre: "Cañar", registros: 817, denuncia: "2 días", localizacion: "9 días", diasLocalizacion: 9 },
  { nombre: "Esmeraldas", registros: 1924, denuncia: "2 días", localizacion: "9 días", diasLocalizacion: 9 },
];

const tiempos = [
  { tramo: "Mismo día", localizados: 75.1, mediana: "2 días" },
  { tramo: "1 día", localizados: 75.8, mediana: "2 días" },
  { tramo: "2 días", localizados: 68.1, mediana: "3 días" },
  { tramo: "3 a 7 días", localizados: 57.7, mediana: "5,5 días" },
  { tramo: "8 a 30 días", localizados: 41.4, mediana: "11 días" },
  { tramo: "Más de 30 días", localizados: 30.7, mediana: "19 días" },
];

const composicionTerritorio = [
  { lugar: "Guayas", m17: 1830, h17: 905, m25: 843, h25: 927 },
  { lugar: "Guayaquil", m17: 1258, h17: 730, m25: 545, h25: 670 },
  { lugar: "Pichincha", m17: 1665, h17: 980, m25: 940, h25: 802 },
  { lugar: "Quito", m17: 1549, h17: 905, m25: 842, h25: 737 },
];

const casos = [
  {
    id: "nataly",
    nombre: "Nathaly Juliette Mafla Castillo",
    subtitulo: "Una desaparición cerca de la universidad",
    lugar: "Quito · sector Escuela Politécnica Nacional",
    fecha: "Jueves 4 de junio de 2026",
    estado: "En búsqueda",
    imagen: "https://www.image2url.com/r2/default/files/1784759031583-8b184f84-27ae-4b8b-81c5-92153f3f46b6.jpg",
    resumen:
      "Estudiante universitaria reportada como desaparecida en las inmediaciones de la Escuela Politécnica Nacional. Su caso reactivó el debate sobre seguridad en el entorno universitario de Quito y sobre los tiempos institucionales de activación de la búsqueda.",
    detalle:
      "La familia denunció la desaparición de manera inmediata. La Ley Orgánica de Actuación en Casos de Personas Desaparecidas y Extraviadas obliga a activar el procedimiento emergente desde el primer reporte, sin esperar el mito de las 24 horas.",
  },
  {
    id: "hector",
    nombre: "Héctor Fernando Enríquez Ruiz",
    subtitulo: "La ausencia en la vida cotidiana",
    lugar: "Quito",
    fecha: "Miércoles 18 de febrero de 2026",
    estado: "En búsqueda",
    imagen: "https://www.image2url.com/r2/default/files/1784759133738-9f75dd38-6aee-4796-838c-39fd01cafcbb.jpg",
    resumen:
      "Héctor forma parte de los reportes de 2026 que aún constan como abiertos. Su ficha de búsqueda continúa circulando en redes sociales y en la Fiscalía General del Estado.",
    detalle:
      "Los casos que permanecen abiertos comparten un patrón administrativo: aparecen con motivo “sin dato”. La base describe mejor los casos ya clasificados que los que siguen sin resolverse.",
  },
  {
    id: "malvinas",
    nombre: "Josué, Ismael, Steven y Nehemías",
    subtitulo: "Los cuatro niños de Las Malvinas",
    lugar: "Sur de Guayaquil · Taura",
    fecha: "Domingo 8 de diciembre de 2024",
    estado: "Sentencia por desaparición forzada",
    imagen: "https://www.image2url.com/r2/default/files/1784759105368-8b6f1aeb-3d30-4dd1-85a2-c822a3890a24.jpg",
    resumen:
      "Cuatro niños afrodescendientes fueron detenidos por personal militar en el sur de Guayaquil. Sus cuerpos fueron hallados posteriormente en Taura.",
    detalle:
      "En diciembre de 2025, dieciséis militares fueron sentenciados por desaparición forzada. En 2026, la Corte Constitucional concedió el hábeas corpus instructivo y determinó que los niños fueron privados de libertad de forma ilegal, arbitraria e ilegítima, y que el Estado no entregó información inmediata, satisfactoria ni convincente sobre su paradero. El caso concentra el núcleo moral y legal del reportaje.",
  },
  {
    id: "restrepo",
    nombre: "Carlos Santiago y Pedro Andrés Restrepo",
    subtitulo: "Hermanos Restrepo · el caso que marcó al país",
    lugar: "Quito",
    fecha: "Jueves 8 de enero de 1988",
    estado: "Desaparición forzada",
    imagen: "https://www.image2url.com/r2/default/files/1784759175174-d72699c5-6485-4b94-b9c8-28ee0d525e7a.jpg",
    resumen:
      "Los hermanos Restrepo, de 14 y 17 años, fueron detenidos por agentes del Servicio de Investigación Criminal en Quito. Nunca aparecieron. Su caso originó la Comisión Verdad y una jurisprudencia clave sobre desaparición forzada en Ecuador.",
    detalle:
      "Décadas después, la búsqueda continúa. Su historia recuerda que la Ley Orgánica establece que la investigación no termina con una sentencia ni con la declaración de muerte presunta: la búsqueda se mantiene hasta encontrar a la persona o identificar plenamente sus restos.",
  },
  {
    id: "romo",
    nombre: "David Romo",
    subtitulo: "Una investigación abierta de forma indefinida",
    lugar: "Quito · Mitad del Mundo",
    fecha: "Jueves 16 de mayo de 2013",
    estado: "Investigación abierta",
    imagen: "https://www.image2url.com/r2/default/files/1784759078841-64cd65f1-dec5-4672-bb2d-79a1ca17292c.jpg", resumen:
      "David desapareció cuando se movilizaba desde la universidad hacia su domicilio en la Mitad del Mundo, al norte de Quito. En mayo de 2025, la Fiscalía aclaró oficialmente que la investigación continúa abierta de forma indefinida.",
    detalle:
      "Su caso encarna una regla legal que suele perderse entre trámites: una investigación sobre una persona desaparecida no puede cerrarse mientras no exista certeza sobre su paradero.",
  },
  {
    id: "carolina",
    nombre: "Carolina Stephany Garzón Ardila",
    subtitulo: "Una búsqueda que cruzó fronteras",
    lugar: "Quito · sector Paluco",
    fecha: "Abril de 2012",
    estado: "En búsqueda",
    imagen: "https://www.image2url.com/r2/default/files/1784758876316-2d1783c4-0ea5-4c0c-a6c0-8869793755d1.jpg", resumen: "Ciudadana colombiana de 22 años, artesana, vista por última vez en el suroriente de Quito. La Fiscalía informó en 2015 más de 650 diligencias, incluidas reconstrucciones y asistencias penales internacionales.",
    detalle:
      "Su caso muestra que las historias migrantes requieren coordinación internacional sostenida. Entre los registros extranjeros, la nacionalidad venezolana desplazó a la colombiana como la más frecuente desde 2019.",
  },
  {
    id: "juliana",
    nombre: "Juliana Campoverde",
    subtitulo: "Una sentencia, pero la ausencia de sus restos",
    lugar: "Sur de Quito",
    fecha: "Sábado 7 de julio de 2012",
    estado: "Sentencia por secuestro extorsivo con resultado de muerte",
    imagen: "https://www.image2url.com/r2/default/files/1784759228269-2c536a26-650d-4cc9-b6ae-9ae6208a583e.jpg", resumen: "Juliana tenía 18 años cuando desapareció. La Fiscalía obtuvo una sentencia de 25 años, ratificada posteriormente, y se ordenó continuar las acciones para localizar sus restos.",
    detalle:
      "Encontrar la verdad judicial no sustituye el derecho de una familia a recuperar a la persona o sus restos. La búsqueda no termina con una sentencia ni con una declaración de muerte presunta.",
  },
];

const timeline = [
  { fecha: "1988", titulo: "Caso Restrepo", texto: "Detención y desaparición de Carlos Santiago y Pedro Andrés Restrepo. El caso marca la agenda pública sobre desaparición forzada en Ecuador." },
  { fecha: "2008", titulo: "Constitución de la República", texto: "Reconoce el derecho a la integridad personal, prohíbe la desaparición forzada y garantiza a las víctimas verdad, reparación y no revictimización." },
  { fecha: "2014", titulo: "COIP · artículos 84 y 163.1", texto: "Se tipifican la desaparición forzada y la desaparición involuntaria como delitos autónomos." },
  { fecha: "2020", titulo: "Ley Orgánica de Actuación en Casos de Personas Desaparecidas y Extraviadas", texto: "Debida diligencia, inmediatez, no discriminación, verdad y presunción de vida. La denuncia se recibe 24/7 y la búsqueda no puede cerrarse hasta encontrar a la persona o identificar sus restos." },
  { fecha: "2024", titulo: "Cambio en la clasificación de motivos", texto: "Los registros bajo “causas personales” pasan de 178 a 3.291 en un año. Un posible cambio metodológico exige una explicación oficial del Ministerio del Interior." },
  { fecha: "2025", titulo: "Sentencia caso Las Malvinas", texto: "Dieciséis militares son sentenciados por desaparición forzada de cuatro niños afrodescendientes en Guayaquil." },
  { fecha: "2026", titulo: "Hábeas corpus de la Corte Constitucional", texto: "La Corte determina que los niños de Las Malvinas fueron privados de libertad de forma ilegal, arbitraria e ilegítima, y que el Estado no entregó información inmediata ni convincente sobre su paradero." },
];

const recomendaciones = [
  { titulo: "1. Garantizar la activación inmediata, 24/7", texto: "Aplicar de forma uniforme los artículos 21 y 23 de la Ley: el reporte debe bastar para iniciar la búsqueda y debe recibirse todos los días, a cualquier hora. Las campañas públicas deben repetir con claridad que no se esperan 24 horas." },
  { titulo: "2. Medir y publicar los tiempos de respuesta", texto: "El Registro Nacional debe ofrecer indicadores anonimizados sobre horas hasta la activación, días hasta la localización, antigüedad de casos abiertos y resultados por provincia." },
  { titulo: "3. Auditar el cambio de clasificación de 2024", texto: "El Ministerio del Interior debe explicar si hubo una reforma del diccionario, del software o del procedimiento. Toda ruptura metodológica debe documentarse para no comparar categorías incompatibles." },
  { titulo: "4. Fortalecer equipos territoriales especializados", texto: "Las provincias con mayores tiempos de localización requieren diagnósticos de personal, transporte, conectividad, medicina legal y capacidad de búsqueda rural. La igualdad legal no debe depender del código postal." },
  { titulo: "5. Diseñar rutas diferenciadas por edad y vulnerabilidad", texto: "La Constitución ordena atención prioritaria para niñas, niños, adolescentes, personas adultas mayores y personas con discapacidad. Los patrones no son iguales y no deben activar una respuesta idéntica." },
  { titulo: "6. Garantizar un enlace permanente con las familias", texto: "Cada caso debe tener un canal institucional identificable que entregue información periódica, evite la repetición innecesaria de testimonios y articule atención psicológica, jurídica y social." },
  { titulo: "7. No cerrar la búsqueda por el paso del tiempo", texto: "El artículo 22 dispone que la búsqueda continúa hasta encontrar a la persona o identificar sus restos, incluso si existe muerte presunta. Los casos antiguos no son archivos muertos." },
  { titulo: "8. Incorporar control independiente y rendición de cuentas", texto: "Las instituciones deben publicar resultados, explicar demoras y habilitar veeduría ciudadana. Cuando existan agentes estatales involucrados, la investigación requiere independencia y control judicial reforzado." },
];

const fuentes = [
  "Ministerio del Interior. Conjunto de datos “Personas Desaparecidas”.",
  "Ley Orgánica de Actuación en Casos de Personas Desaparecidas y Extraviadas. Registro Oficial, 28 de enero de 2020.",
  "Constitución de la República del Ecuador. Asamblea Nacional.",
  "Fiscalía General del Estado. Información para personas desaparecidas.",
  "Fiscalía General del Estado. “El caso David Romo no se ha cerrado”.",
  "Fiscalía General del Estado. Caso Juliana Campoverde.",
  "Fiscalía General del Estado. Caso Carolina Garzón.",
  "Fiscalía General del Estado. Caso Malvinas.",
  "Corte Constitucional del Ecuador. Sentencia y hábeas corpus del caso Las Malvinas.",
  "Cálculos propios sobre bases depuradas 2017-2025 y enero-mayo de 2026.",
];

const secciones = [
  { id: "hero", label: "Inicio" },
  { id: "contexto", label: "Contexto" },
  { id: "datos", label: "Datos" },
  { id: "hallazgos", label: "Hallazgos" },
  { id: "historias", label: "Historias" },
  { id: "voces", label: "Voces" },
  { id: "ley", label: "Ley" },
  { id: "metodologia", label: "Metodología" },
  { id: "cierre", label: "Cierre" },
];

const cases = [
  {
    name: "David Romo",
    year: "2013",
    place: "Quito",
    description: "David Romo desapareció en Quito en mayo de 2013. Su caso sigue abierto para búsqueda y localización, según informó la Fiscalía en 2025, y su madre, Alexandra Córdova, convirtió la ausencia en una lucha por verdad y memoria.",
    status: "Caso abierto",
    imagen: null, sourceHref: "#",
  },
  {
    name: "Juliana Campoverde",
    year: "2012",
    place: "Quito",
    description: "Juliana Campoverde desapareció en 2012, cuando tenía 18 años. La Fiscalía obtuvo una sentencia de 25 años por secuestro extorsivo con resultado de muerte, pero su familia aún espera recuperar sus restos.",
    status: "Caso judicial",
    imagen: null, sourceHref: "#",
  },
  {
    name: "María Belén Bernal",
    year: "2022",
    place: "Quito",
    description: "María Belén Bernal desapareció en septiembre de 2022 después de ingresar a la Escuela Superior de Policía. Su cuerpo fue localizado días después en el cerro Casitagua y el caso estremeció al país por la violencia en un espacio que debía representar protección.",
    status: "Caso emblemático",
    imagen: null, sourceHref: "#",
  },
  {
    name: "Las Malvinas",
    year: "2024",
    place: "Guayaquil",
    description: "Josué, Ismael, Steven y Nehemías, tres adolescentes y un niño, fueron detenidos por militares en Guayaquil en diciembre de 2024. Sus cuerpos fueron hallados después cerca de Taura y el proceso judicial terminó con sentencias por desaparición forzada.",
    status: "Caso emblemático",
    //imageUrl: new URL(malvinasAsset.url, import.meta.url).href,
    sourceHref: "#",
  },
  {
    name: "Carolina Garzón",
    year: "2012",
    place: "Quito",
    description: "Caso pendiente de insertar con contexto, fuente y enlace oficial.",
    status: "Caso migrante",
    imagen: null, sourceHref: "#",
  },
  {
    name: "Giovanna Pérez",
    year: "2023",
    place: "Manta",
    description: "Caso pendiente de insertar con contexto, fuente y enlace oficial.",
    status: "Caso abierto",
    imageUrl: null,
    sourceHref: "#",
  },
  {
    name: "José Reinoso",
    year: "2017",
    place: "Cuenca",
    description: "Caso pendiente de insertar con contexto, fuente y enlace oficial.",
    status: "Caso abierto",
    imageUrl: null,
    sourceHref: "#",
  },
];

const legalItems = [
  {
    title: "Constitución del Ecuador",
    description: "La Constitución declara imprescriptible el delito de desaparición forzada y reconoce la obligación de proteger la vida, la integridad y la verdad frente al daño estatal.",
    citation: "Art. 66 y 83",
  },
  {
    title: "Ley Orgánica de Actuación en Casos de Personas Desaparecidas y Extraviadas",
    description: "Esta ley establece que la búsqueda debe activarse de manera inmediata, que la presunción de vida debe sostenerse y que la investigación no puede cerrarse sin conocer el paradero de la persona o identificar sus restos.",
    citation: "Ley 2020",
  },
  {
    title: "COIP",
    description: "El Código Orgánico Integral Penal tipifica la desaparición forzada y la desaparición involuntaria como delitos autónomos y permite sancionar a agentes estatales que oculten o nieguen información sobre el paradero.",
    citation: "Arts. 84 y 163.1",
  },
  {
    title: "Fiscalía y denuncia inmediata",
    description: "La Fiscalía indica que no se debe esperar 24 horas para reportar una desaparición. La denuncia debe activarse desde el primer momento y debe acompañarse de datos, fotografías y una descripción precisa del último contacto.",
    citation: "Procedimiento de emergencia",
  },
];

const interviews = [
  {
    name: "ASFADEC",
    role: "Organización de familiares",
    theme: "Testimonio institucional",
    quote: "La búsqueda debe sostenerse con voluntad institucional y memoria familiar.",
  },
  {
    name: "Fundación Desendor",
    role: "Organización de acompañamiento",
    theme: "Acompañamiento y acompañamiento jurídico",
    quote: "La ausencia también exige cuidado, no solo procedimientos.",
  },
  {
    name: "Abogado de derechos humanos",
    role: "Especialista legal",
    theme: "Marco legal y tiempos",
    quote: "No basta con la denuncia: debe existir respuesta efectiva y pronta.",
  },
];

/* ---------- Componente ---------- */

function Index() {
  useRevealOnScroll();
  const progress = useScrollProgress();
  const active = useActiveSection(secciones.map((s) => s.id));
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCase, setOpenCase] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [openRec, setOpenRec] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="progress-bar" style={{ width: `${progress}%` }} aria-hidden />

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#hero" className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-alert" />
            <span className="font-serif text-lg font-bold tracking-tight">Ausencias.ec</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {secciones.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors ${active === s.id ? "text-alert" : "text-muted-ink hover:text-ink"
                  }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden inline-flex items-center gap-2 rounded-sm border border-ink/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Cerrar" : "Menú"}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-ink/10 bg-paper">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4">
              {secciones.slice(1).map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm border border-ink/10 px-3 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-ink hover:text-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep text-paper">
        <img
          src={heroVigil}
          alt="Familiares sostienen carteles de personas desaparecidas durante una vigilia"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep/60 to-deep" />
        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="hero-sub text-xs font-bold uppercase tracking-[0.4em] text-alert">
            Reportaje de datos · Ecuador · 2017–2026
          </p>
          <h1 className="hero-question mt-8 font-serif text-4xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            ¿Cuánto dolor puede esconderse detrás de la palabra <span className="italic text-alert">“desaparición”</span>?
          </h1>
          <p className="hero-sub mx-auto mt-8 max-w-2xl text-base text-paper/80 sm:text-lg">
            78.731 registros oficiales. Nueve años de datos. Historias familiares y obligaciones legales del Estado ecuatoriano que la cifra general no alcanza a nombrar.
          </p>
          <div className="hero-cta mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="#datos"
              className="inline-flex items-center gap-2 rounded-sm bg-alert px-6 py-3 text-xs font-bold uppercase tracking-widest text-paper transition-transform hover:scale-[1.02]"
            >
              Descubrir la historia
              <span aria-hidden>→</span>
            </a>
            <a
              href="#historias"
              className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-6 py-3 text-xs font-bold uppercase tracking-widest text-paper hover:bg-paper hover:text-ink"
            >
              Ver casos emblemáticos
            </a>
          </div>
        </div>
        <a href="#contexto" className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-down text-paper/70" aria-label="Bajar">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v16M6 14l6 6 6-6" />
          </svg>
        </a>
      </section>

      <section className="border-b border-ink/10 bg-secondary">
        <div className="w-full">
          <div className="overflow-hidden bg-paper">
            <img
              src={desaparecidosSillas}
              alt="Fotografía de personas desaparecidas en sillas"
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* CONTEXTO */}
      <section id="contexto" className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="reveal grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-alert">Contexto</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight">
                El día en que una persona deja de volver
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-ink/85">
              <p>
                En esa palabra cabe una casa en silencio. Cabe una madre que no apaga el celular, un padre que repite la misma ruta, una hermana que mira la puerta como si el regreso pudiera aparecer en cualquier segundo. También caben carteles pegados en postes, fotos compartidas en redes, denuncias, búsquedas, preguntas y noches sin descanso.
              </p>
              <p>
                Una desaparición no empieza en una tabla. Empieza cuando alguien no vuelve. Cuando una familia deja de contar horas normales y empieza a contar horas de angustia. En Ecuador, esa ausencia no solo golpea a quienes esperan en casa. También revela una responsabilidad pública: buscar, investigar, responder y no dejar que una persona se vuelva invisible.
              </p>
              <p>
                David Romo desapareció en Quito en mayo de 2013. Su caso sigue abierto para búsqueda y localización, según informó la Fiscalía en 2025. Su madre, Alexandra Córdova, convirtió esa ausencia en una lucha constante por verdad y memoria.
              </p>
              <p>
                Juliana Campoverde desapareció en 2012, cuando tenía 18 años. La Fiscalía obtuvo una sentencia de 25 años por secuestro extorsivo con resultado de muerte, pero su familia todavía espera recuperar sus restos. Su caso recuerda que una sentencia no siempre cierra una búsqueda.
              </p>
              <p>
                María Belén Bernal desapareció en septiembre de 2022 después de ingresar a la Escuela Superior de Policía. Su cuerpo fue localizado días después en el cerro Casitagua. Germán C. recibió una sentencia de treinta y cuatro años y ocho meses por femicidio. Ese caso estremeció al país porque ocurrió en un espacio que debía representar protección.
              </p>
              <p>
                También está Las Malvinas: Josué, Ismael, Steven y Nehemías, tres adolescentes y un niño, fueron detenidos por militares en Guayaquil en diciembre de 2024. Sus cuerpos fueron encontrados después cerca de Taura. En diciembre de 2025, dieciséis militares recibieron sentencia por desaparición forzada. Allí la ausencia tomó una dimensión más grave: cuando el Estado aparece dentro del daño, la exigencia de verdad se vuelve inaplazable.
              </p>
              <p>
                Este reportaje mira los datos para entender lo que una noticia aislada no alcanza a mostrar: quiénes desaparecen, dónde se concentran los registros, cuánto tarda una denuncia, cuánto demora una localización, qué grupos enfrentan desenlaces más graves y qué territorios necesitan mayor atención.
              </p>
            </div>
          </div>

          <div className="reveal mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-3">
            <StatBlock big="78.731" label="Registros analizados" note="2017 – mayo 2026" />
            <StatBlock big="2017–2025" label="Años completos" note="Datos consolidados" />
            <StatBlock big="Enero–mayo" label="Corte 2026" note="Periodo parcial" alert />
          </div>

        </div>
      </section>

      {/* DATOS */}
      <section id="datos" className="border-b border-ink/10 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="Datos"
            titulo="Una caída que comenzó a frenarse"
            texto="En 2017 se registraron 10.457 casos. En 2025 fueron 7.485: una reducción del 28,4 %. Sin embargo, la trayectoria no fue una línea descendente perfecta. En 2020 el total cayó a 6.766 por la pandemia; en 2024 se tocó el menor valor reciente (7.072) y en 2025 volvió a subir 5,8 %."
          />
          <div className="reveal mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <EvolutionChart data={evolucion.slice(0, -1)} />
            <div className="grid gap-4">
              <DataCard value="78.731" label="Registros analizados" note="2017–mayo 2026" />
              <DataCard value="10.457" label="Registros en 2017" note="Punto de partida de la serie" />
              <DataCard value="7.485" label="Registros en 2025" note="Año reciente con repunte" />
              <DataCard value="3.195" label="Registros en 2026" note="Enero–mayo, periodo parcial" />
            </div>
          </div>

          <div className="reveal mt-10 rounded-sm border border-ink/10 bg-paper p-6 text-sm leading-relaxed text-ink/80">
            La lectura central es sencilla: el número total bajó desde 2017, pero la disminución no sigue una línea recta. El aumento de 2025 abre una pregunta necesaria: ¿qué cambió para que la caída se frenara?
          </div>

          <div className="reveal mt-8 grid gap-4 sm:grid-cols-3">
            {evolucion.slice(-3).map((e) => (
              <div key={e.anio} className="rounded-sm border border-ink/10 bg-paper p-5">
                <p className="font-serif text-3xl">{e.casos.toLocaleString("es-EC")}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-ink">{e.anio} · {e.cambio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFIL / HALLAZGOS */}
      <section id="hallazgos" className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            titulo="Lo que revelan los datos"
            texto="El análisis de los 78.731 registros revela patrones sobre género, tiempo y desenlace. Las mujeres siguen siendo mayoría, pero la brecha se acorta. La localización se demora más y los perfiles de mayor riesgo no son siempre los más numerosos."
          />

          <div className="reveal mt-14 rounded-sm border border-ink/10 bg-secondary p-6 sm:p-10">
            <div className="space-y-4">
              {composicionSexo.map((c) => (
                <div key={c.anio} className="grid grid-cols-[3rem_1fr_3rem] items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink">{c.anio}</span>
                  <div className="relative h-6 overflow-hidden rounded-sm bg-ink/10">
                    <div className="animate-bar h-full bg-alert" style={{ width: `${c.mujeres}%` }} />
                    <div
                      className="animate-bar absolute inset-y-0 right-0 bg-ink"
                      style={{ width: `${c.hombres}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-3 text-[10px] font-bold uppercase tracking-wider text-paper">
                      <span>M {c.mujeres}%</span>
                      <span>H {c.hombres}%</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-ink">100%</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-ink">
              La brecha de género en los registros de desapariciones se ha ido cerrando con el tiempo.
            </p>
          </div>

          <div className="reveal mt-8 overflow-hidden rounded-sm border border-ink/10">
            <img src={balanza} alt="Una balanza antigua con dos platos, simbolizando el equilibrio entre sexos en los registros." className="h-auto w-full object-cover" />
          </div>

          <div className="reveal mt-8">
            <TimeBarsChart data={tiempos} />
          </div>

          <div className="reveal mt-16">
            <h3 className="font-serif text-2xl sm:text-3xl">
              Las adolescentes concentran los casos. Los hombres adultos y adultos mayores, los peores desenlaces.
            </h3>
            <div className="mt-8 overflow-x-auto rounded-sm border border-ink/10">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="bg-ink text-paper">
                  <tr>
                    <th className="p-3 text-left text-xs font-bold uppercase tracking-widest">Perfil</th>
                    <th className="p-3 text-right text-xs font-bold uppercase tracking-widest">Encontrado</th>
                    <th className="p-3 text-right text-xs font-bold uppercase tracking-widest">Desaparecido</th>
                    <th className="p-3 text-right text-xs font-bold uppercase tracking-widest">Fallecido</th>
                    <th className="p-3 w-1/3"></th>
                  </tr>
                </thead>
                <tbody>
                  {perfilDesenlace.map((p) => (
                    <tr key={p.perfil} className="border-t border-ink/10">
                      <td className="p-3 font-semibold">{p.perfil}</td>
                      <td className="p-3 text-right font-mono">{p.encontrado}%</td>
                      <td className="p-3 text-right font-mono">{p.desaparecido}%</td>
                      <td className="p-3 text-right font-mono text-alert">{p.fallecido}%</td>
                      <td className="p-2">
                        <div className="flex h-4 overflow-hidden rounded-sm bg-ink/5">
                          <div className="animate-bar bg-ink/70" style={{ width: `${p.encontrado}%` }} />
                          <div className="animate-bar bg-muted-ink" style={{ width: `${p.desaparecido}%` }} />
                          <div className="animate-bar bg-alert" style={{ width: `${p.fallecido}%` }} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-ink">
              El grupo más numeroso no es el grupo con el desenlace más grave.
            </p>
          </div>
        </div>
      </section>

      <div className="reveal grid grid-cols-1 gap-px border-y border-ink/10 bg-ink/10 md:grid-cols-2">
        <div className="flex items-center justify-center bg-secondary p-6 sm:p-8">
          <img src={velas} alt="Velas encendidas en una vigilia, simbolizando la memoria y la esperanza." className="max-h-[50vh] w-auto rounded-sm object-contain" />
        </div>
        <div className="flex items-center justify-center bg-secondary p-6 sm:p-8">
          <img src={zapatos} alt="Zapatos vacíos en una protesta, simbolizando a los ausentes." className="max-h-[50vh] w-auto rounded-sm object-contain" />
        </div>
      </div>

      {/* TERRITORIO */}
      <section id="territorio" className="border-b border-ink/10 bg-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            titulo="El mapa también pesa"
            texto="La mediana de días hasta la localización no es igual en todas las provincias. Entre 2017 y 2025 fue de 12 días en Orellana, 10 en Los Ríos y Morona Santiago, y 9 en Esmeraldas y Cañar. La igualdad ante la ley no puede depender del código postal."
            dark
          />

          <div className="reveal mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="space-y-4">
              <div className="rounded-sm border border-paper/15 bg-deep/60 p-4 backdrop-blur">
                <img
                  src={ecuadorHeatmap}
                  alt="Mapa de Ecuador con intensidad de reportes por provincia"
                  className="w-full rounded-sm opacity-90"
                  loading="lazy"
                />
                <p className="mt-3 text-xs text-paper/60">
                  Intensidad relativa por provincia · 2017-2025. Elaboración propia.
                </p>
              </div>
              <ProvinceTimeChart data={provincias} />
            </div>
            <div className="space-y-4">
              {provincias.map((p) => (
                <div key={p.nombre} className="rounded-sm border border-paper/15 p-4 transition-colors hover:border-alert">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-serif text-xl">{p.nombre}</h4>
                    <span className="font-mono text-sm text-paper/70">{p.registros.toLocaleString("es-EC")} reg.</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs uppercase tracking-widest">
                    <div>
                      <p className="text-paper/50">Denuncia</p>
                      <p className="mt-1 font-serif text-lg text-paper">{p.denuncia}</p>
                    </div>
                    <div>
                      <p className="text-paper/50">Localización</p>
                      <p className="mt-1 font-serif text-lg text-alert">{p.localizacion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal mt-16">
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {composicionTerritorio.map((t) => (
                <div key={t.lugar} className="rounded-sm border border-paper/15 p-5">
                  <p className="font-serif text-xl">{t.lugar}</p>
                  <div className="mt-4 space-y-2 text-xs">
                    <Row label="2017 · Mujeres" value={t.m17} accent />
                    <Row label="2017 · Hombres" value={t.h17} />
                    <Row label="2025 · Mujeres" value={t.m25} accent />
                    <Row label="2025 · Hombres" value={t.h25} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-paper/60">
              Guayaquil pasó a una mayoría masculina. Quito mantuvo mayoría femenina. Dos ciudades, dos perfiles distintos.
            </p>
          </div>
        </div>
      </section>

      {/* TIEMPOS */}
      <section id="tiempos" className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="Las primeras horas"
            titulo="Dos días para denunciar; cada vez más tiempo para localizar"
            texto="Durante toda la serie, la mediana entre la desaparición y la denuncia fue de dos días. En 2020, la mediana hasta la localización era de dos días. Entre 2023 y 2025 llegó a cinco. La proporción localizada durante la primera semana cayó de alrededor del 74 % en 2020 al 61 % en 2025."
          />

          <div className="reveal mt-14 space-y-3">
            {tiempos.map((t) => (
              <div key={t.tramo} className="grid grid-cols-[10rem_1fr_5rem] items-center gap-4">
                <span className="text-sm font-semibold text-ink">{t.tramo}</span>
                <div className="relative h-8 overflow-hidden rounded-sm bg-secondary">
                  <div
                    className="animate-bar h-full bg-alert"
                    style={{ width: `${t.localizados}%` }}
                  />
                  <span className="absolute inset-y-0 left-3 flex items-center text-xs font-bold text-paper mix-blend-difference">
                    {t.localizados}% localizados ≤7 días
                  </span>
                </div>
                <span className="text-right font-mono text-xs text-muted-ink">{t.mediana}</span>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 grid gap-4 sm:grid-cols-4">
            {["Último contacto", "Reporte", "Activación", "Localización"].map((step, i) => (
              <div key={step} className="relative rounded-sm border border-ink/10 bg-secondary p-5">
                <span className="font-serif text-3xl text-alert">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm font-semibold">{step}</p>
                {i < 3 && (
                  <span className="absolute right-2 top-1/2 hidden -translate-y-1/2 text-alert sm:block" aria-hidden>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="reveal flex items-center justify-center overflow-hidden border-y border-ink/10 bg-secondary py-12">
        <img src={relojesArena} alt="Varios relojes de arena con el tiempo corriendo, simbolizando la urgencia en la búsqueda." className="max-h-[60vh] w-auto rounded-sm object-contain" />
      </div>

      {/* CLÍMAX */}
      <section id="climax" className="relative border-b border-ink/10 bg-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <h2 className="reveal font-serif text-4xl leading-tight sm:text-6xl">
            La ley dice <span className="italic">“sin dilación”</span>.<br />
            Los datos dicen <span className="text-alert">cinco días</span>.
          </h2>
          <blockquote className="reveal mt-10 max-w-3xl border-l-2 border-alert pl-6 font-serif text-xl italic text-paper/85 sm:text-2xl">
            “La búsqueda debe ser inmediata, ágil, prioritaria y oportuna; debe presumirse que la persona está con vida y no puede cerrarse hasta conocer su paradero.”
            <footer className="mt-4 not-italic text-sm font-sans text-paper/60">
              — Síntesis de la Ley Orgánica de Actuación en Casos de Personas Desaparecidas y Extraviadas
            </footer>
          </blockquote>

          <div className="reveal mt-14 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 sm:grid-cols-3">
            <StatBlock big="2 días" label="Mediana denuncia–localización" note="2020" dark />
            <StatBlock big="5 días" label="Mediana denuncia–localización" note="2023–2025" dark alert />
            <StatBlock big="+154,3 %" label="Registros “fallecido”" note="2017 vs. 2025" dark alert />
          </div>

          <div className="reveal mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-paper/20 bg-paper/5 p-6">
              <ul className="space-y-2 text-sm text-paper/90">
                <li>· Inmediatez y debida diligencia</li>
                <li>· Presunción de vida</li>
                <li>· Denuncia 24/7 sin espera de 24 horas</li>
                <li>· Búsqueda permanente hasta hallar a la persona o identificar restos</li>
              </ul>
            </div>
            <div className="rounded-sm border border-paper/20 p-6">
              <ul className="space-y-2 text-sm text-paper/90">
                <li>· La mediana de localización pasó de 2 a 5 días</li>
                <li>· Los registros “fallecido” crecieron de 173 a 440 por año</li>
                <li>· Existen provincias con tiempos sistemáticamente más largos</li>
                <li>· Casos abiertos concentran motivo “sin dato”</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIAS */}
      <section id="historias" className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            titulo="Casos que sostienen la estadística"
            texto="Siete historias que atraviesan el reportaje. Cada expediente devuelve rostro y memoria a un registro administrativo."
          />

          <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {casos.map((c) => {
              const abierto = openCase === c.id;
              return (
                <article
                  key={c.id}
                  className="case-card flex flex-col overflow-hidden rounded-sm border border-ink/10 bg-paper"
                >
                  {c.imagen ? (
                    <button
                      onClick={() => setLightbox({ src: c.imagen!, alt: c.nombre })}
                      className="relative block aspect-[4/3] w-full overflow-hidden bg-ink/5"
                      aria-label={`Ampliar foto de ${c.nombre}`}
                    >
                      <img
                        src={c.imagen}
                        alt={c.nombre}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </button>
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center bg-secondary">
                      <span className="font-serif text-5xl text-ink/20">
                        {c.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-alert">{c.estado}</span>
                    <h3 className="mt-2 font-serif text-xl leading-tight">{c.nombre}</h3>
                    <p className="mt-1 text-xs italic text-muted-ink">{c.subtitulo}</p>
                    <dl className="mt-3 grid grid-cols-2 gap-2 text-[11px] uppercase tracking-wider text-muted-ink">
                      <div>
                        <dt className="opacity-60">Lugar</dt>
                        <dd className="mt-1 font-semibold text-ink normal-case tracking-normal">{c.lugar}</dd>
                      </div>
                      <div>
                        <dt className="opacity-60">Fecha</dt>
                        <dd className="mt-1 font-semibold text-ink normal-case tracking-normal">{c.fecha}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 text-sm leading-relaxed text-ink/85">{c.resumen}</p>
                    {abierto && (
                      <p className="mt-3 border-t border-ink/10 pt-3 text-sm leading-relaxed text-ink/80 animate-count-in">
                        {c.detalle}
                      </p>
                    )}
                    <button
                      onClick={() => setOpenCase(abierto ? null : c.id)}
                      className="mt-4 self-start text-xs font-bold uppercase tracking-widest text-alert hover:underline"
                    >
                      {abierto ? "Ver menos ←" : "Leer más →"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* VOCES */}
      <section id="voces" className="border-b border-ink/10 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            eyebrow="Voces"
            titulo="Voces que buscan"
            texto="La búsqueda no es solo un procedimiento, es una lucha diaria. Escuchamos a quienes acompañan a las familias y a quienes interpretan la ley desde la experiencia."
          />
          <div className="reveal mt-10 rounded-sm border border-ink/10 bg-paper p-6 text-sm leading-relaxed text-ink/80">
            <p>
              El reportaje también necesita una voz humana. La pregunta sugerida para el audio o testimonio inicial es simple: “¿Qué significa seguir buscando?”
            </p>
          </div>
          <div className="reveal mt-14 grid gap-6 lg:grid-cols-3">
            {interviews.map((interview) => (
              <InterviewCard key={interview.name} {...interview}>
                {interview.name === "ASFADEC" ? (
                  <MediaSlot text="Testimonio institucional de ASFADEC sobre la búsqueda y la urgencia de respuesta." videoUrl="https://www.youtube.com/embed/J1uYwSsiybI" />
                ) : interview.name === "Fundación Desendor" ? (
                  <MediaSlot text="Recurso de acompañamiento de Fundación Desendor sobre la experiencia de búsqueda y acompañamiento." videoUrl="https://www.youtube.com/embed/7nhyJCw_nNc" />
                ) : (
                  <MediaSlot text="Análisis del marco legal y sus implicaciones en los tiempos de respuesta institucional." videoUrl="https://www.youtube.com/embed/_f5EMcAkPQQ" />
                )}
              </InterviewCard>
            ))}
          </div>
        </div>
      </section>

      {/* LÍNEA DEL TIEMPO / MARCO LEGAL */}
      <section id="ley" className="border-b border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            titulo="Lo que exige la ley"
            texto="Un recorrido por los hitos legales y sociales que definen hoy la respuesta institucional frente a las desapariciones en Ecuador."
          />
          <div className="reveal mt-14 grid gap-6 md:grid-cols-2">
            {legalItems.map((item) => (
              <LegalCard key={item.title} {...item} />
            ))}
          </div>
          <div className="reveal mt-8 rounded-sm border border-alert/25 bg-alert/10 p-6 sm:p-8">
            <p className="text-base leading-relaxed text-ink/80">
              No se debe esperar 24 horas para denunciar. Antes se hablaba de esperar hasta 72 horas; hoy, con el marco legal y la presión de organizaciones como ASFADEC, la desaparición puede reportarse desde el primer momento. Es crucial saber dónde denunciar, qué datos llevar, qué fotografía entregar y cómo describir el último contacto.
            </p>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section id="metodologia" className="border-b border-ink/10 bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <SectionHeader
            titulo="Cómo se construyó esta pieza"
            texto="Este reportaje se basa en el análisis de datos oficiales, el marco legal vigente y el testimonio de actores clave. La transparencia es fundamental para el periodismo de datos."
          />
          <div className="reveal mt-14">
            <MethodologySection points={[
              "Fuente de datos: bases oficiales del Ministerio del Interior, depuradas y estandarizadas.",
              "Periodo analizado: 2017-2025 y enero-mayo de 2026.",
              "Sección de trabajo: registros administrativos, tiempos de respuesta, perfiles por sexo y territorio.",
              "Limitaciones: el 2026 es parcial y los cambios de clasificación pueden afectar comparaciones.",
              "Se recomienda actualizar con nuevas versiones de la base y con notas metodológicas oficiales.",
              "Hay un posible subregistro en algunos casos abiertos y un cambio de categoría en 2024 que debe revisarse con mayor profundidad.",
            ]} />
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section id="cierre" className="bg-deep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-alert">Cierre</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Una desaparición no termina cuando deja de ser noticia</h2>
              <p className="mt-6 text-base leading-relaxed text-paper/85">
                Detrás de cada número hay una historia que no se cierra, una búsqueda que no cesa y una familia que espera. Los datos son una herramienta para exigir respuestas, pero la memoria es el motor para no olvidar.
              </p>
              <ol className="mt-8 space-y-3 text-sm text-paper/85">
                {fuentes.map((f, i) => (
                  <li key={f} className="flex gap-3">
                    <span className="font-mono text-alert">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <ClosingSection
                title="Una desaparición no termina cuando deja de ser noticia."
                text="La pregunta inicial regresa con más peso. No basta con contar casos; hace falta convertir los datos en una respuesta real, a tiempo y con memoria. Este reportaje es un paso en esa dirección."
                buttonHref="#hero"
                buttonLabel="Volver al inicio"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-paper/10">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-paper/60 sm:flex-row sm:items-center">
            <span>© 2026 Ausencias.ec · Todos los derechos reservados.</span>
            <a href="#hero" className="font-bold uppercase tracking-widest text-paper hover:text-alert">Volver al inicio ↑</a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-sm border border-paper/30 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-paper hover:bg-paper hover:text-ink"
            aria-label="Cerrar"
          >
            Cerrar ✕
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[80vh] w-full rounded-sm object-contain" />
            <figcaption className="mt-3 text-center text-sm text-paper/80">{lightbox.alt}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}

/* ---------- Sub-componentes ---------- */

function SectionHeader({ eyebrow, titulo, texto, dark }: { eyebrow?: string; titulo: string; texto: string; dark?: boolean }) {
  return (
    <div className="reveal grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
      <div>
        {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.35em] text-alert">{eyebrow}</p> : null}
        <h2 className={`font-serif text-4xl leading-tight sm:text-5xl ${eyebrow ? "mt-4" : "mt-0"}`}>{titulo}</h2>
      </div>
      <p className={`text-base leading-relaxed sm:text-lg ${dark ? "text-paper/80" : "text-ink/80"}`}>{texto}</p>
    </div>
  );
}

function StatBlock({ big, label, note, dark, alert }: { big: string; label: string; note?: string; dark?: boolean; alert?: boolean }) {
  return (
    <div className={`p-6 sm:p-8 ${dark ? "bg-deep" : "bg-paper"}`}>
      <p className={`animate-count-in font-serif text-4xl sm:text-5xl leading-none ${alert ? "text-alert" : dark ? "text-paper" : "text-ink"}`}>
        {big}
      </p>
      <p className={`mt-3 text-xs font-bold uppercase tracking-[0.25em] ${dark ? "text-paper/70" : "text-ink"}`}>{label}</p>
      {note && <p className={`mt-1 text-xs ${dark ? "text-paper/50" : "text-muted-ink"}`}>{note}</p>}
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-paper/10 pb-1.5">
      <span className="uppercase tracking-widest text-paper/60">{label}</span>
      <span className={`font-mono ${accent ? "text-alert" : "text-paper"}`}>{value.toLocaleString("es-EC")}</span>
    </div>
  );
}
