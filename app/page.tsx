"use client"

import { useState } from "react"
import { Search, ShoppingCart } from "lucide-react"

export default function FerreteriaPage() {
  const [currentPage, setCurrentPage] = useState("inicio")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("todos")

  const brands = [
    { key: "todos", name: "Todos los Productos" },
    { key: "incco", name: "INCCO" },
    { key: "bremen", name: "BREMEN" },
    { key: "tensil", name: "TENSIL" },
    { key: "suprabond", name: "SUPRABOND" },
    { key: "tekbond", name: "TEK BOND" },
    { key: "myx-seals", name: "MYX SEALS" },
    { key: "ede", name: "EDE" },
    { key: "coltec", name: "COL TEC" },
    { key: "pegalo", name: "PEGALO" },
    { key: "membrana-facil", name: "Membrana Fácil" },
    { key: "emacril", name: "EMACRIL" },
    { key: "koverpaint", name: "Koverpaint" },
    { key: "kovertech", name: "KoverTech" },
    { key: "stanley", name: "Stanley" },
    { key: "dewalt", name: "DeWalt" },
    { key: "bosch", name: "Bosch" },
  ]

  const allProducts = [
    // Productos INCCO
    {
      name: "Llaves Inglesas Ajustables INCCO",
      description: "Set de llaves inglesas profesionales, diferentes tamaños",
      price: "$35.99",
      brand: "incco",
      image: "/images/incco-llaves-inglesas.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Cutters Profesionales INCCO",
      description: "Cutters con hojas de repuesto, 18x100mm y 61x19mm",
      price: "$12.50",
      brand: "incco",
      image: "/images/incco-cutters.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Prensas de Carpintería INCCO",
      description: "Set completo de prensas de diferentes tamaños",
      price: "$89.99",
      brand: "incco",
      image: "/images/incco-prensas.jpg",
      category: "Herramientas de Sujeción",
    },
    // Agregar después de los productos INCCO existentes
    {
      name: "Alicates Profesionales INCCO",
      description: "Set de alicates de precisión con mangos ergonómicos",
      price: "$24.99",
      brand: "incco",
      image: "/images/incco-alicates.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Juego de Llaves Combinadas INCCO 6-13mm",
      description: "Set completo de llaves combinadas con portallaves",
      price: "$42.75",
      brand: "incco",
      image: "/images/incco-llaves-combinadas.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Hacha de Carpintería INCCO",
      description: "Hacha profesional con mango ergonómico antideslizante",
      price: "$38.50",
      brand: "incco",
      image: "/images/incco-hacha.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Cortapernos INCCO",
      description: "Alicates cortapernos de alta resistencia, diferentes tamaños",
      price: "$29.99",
      brand: "incco",
      image: "/images/incco-cortapernos.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Alicates de Presión INCCO",
      description: "Pinzas de bloqueo con mecanismo de sujeción ajustable",
      price: "$32.99",
      brand: "incco",
      image: "/images/incco-alicates-presion.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Alicates de Corte Diagonal INCCO 180mm",
      description: "Alicates cortantes profesionales para cables y alambres",
      price: "$27.50",
      brand: "incco",
      image: "/images/incco-alicates-corte.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Cortador de Tubos PVC INCCO Ø30mm",
      description: "Herramienta especializada para corte limpio de tuberías PVC",
      price: "$19.99",
      brand: "incco",
      image: "/images/incco-cortador-pvc.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Set de Destornilladores Aislados INCCO",
      description: "Juego de 5 destornilladores con aislamiento eléctrico",
      price: "$34.75",
      brand: "incco",
      image: "/images/incco-destornilladores.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Alicates Pelacables INCCO 180mm",
      description: "Herramientas profesionales para pelar y cortar cables",
      price: "$31.25",
      brand: "incco",
      image: "/images/incco-pelacables.jpg",
      category: "Herramientas Eléctricas",
    },
    {
      name: "Kit Completo de Llaves de Tubo INCCO",
      description: "Set profesional con trinquete, dados y extensiones en caja organizadora",
      price: "$125.99",
      brand: "incco",
      image: "/images/incco-kit-llaves-tubo.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Fumigadores de Presión INCCO 2L",
      description: "Pulverizadores profesionales para jardinería y aplicaciones químicas",
      price: "$45.75",
      brand: "incco",
      image: "/images/incco-fumigadores.jpg",
      category: "Herramientas de Jardín",
    },
    {
      name: "Alicates de Agua INCCO",
      description: "Llaves de tubo ajustables para plomería, diferentes tamaños",
      price: "$52.50",
      brand: "incco",
      image: "/images/incco-alicates-agua.jpg",
      category: "Herramientas de Plomería",
    },
    {
      name: "Sets de Alicates Variados INCCO",
      description: "Conjuntos de alicates especializados de 3 y 6 piezas",
      price: "$67.99",
      brand: "incco",
      image: "/images/incco-sets-alicates.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Engrapadora 3 en 1 INCCO",
      description: "Herramienta multifuncional para grapar, clavar y fijar",
      price: "$28.25",
      brand: "incco",
      image: "/images/incco-engrapadora.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Pistolas para Cartuchos de Silicona INCCO",
      description: "Set de pistolas aplicadoras para selladores y adhesivos de silicona",
      price: "$48.99",
      brand: "incco",
      image: "/images/incco-martillos.jpg",
      category: "Herramientas de Construcción",
    },
    {
      name: "Tijeras Multifuncionales INCCO 210mm",
      description: "Tijeras profesionales para papel, tela y materiales diversos",
      price: "$22.75",
      brand: "incco",
      image: "/images/incco-tijeras.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Set Completo de Limas INCCO",
      description: "Kit de limas profesionales con soporte organizador, diferentes tipos y tamaños",
      price: "$56.50",
      brand: "incco",
      image: "/images/incco-set-limas.jpg",
      category: "Herramientas de Acabado",
    },
    // Productos BREMEN
    {
      name: 'Tenaza de Carpintero BREMEN 7"',
      description: "Tenaza profesional con mangos ergonómicos, ideal para sujeción y extracción",
      price: "$28.99",
      brand: "bremen",
      image: "/images/bremen-tenaza-carpintero.jpg",
      category: "Herramientas de Carpintería",
    },
    {
      name: "Juego de Destornilladores Electrónicos BREMEN",
      description: "Set de 5 destornilladores de precisión para trabajos electrónicos",
      price: "$16.75",
      brand: "bremen",
      image: "/images/bremen-destornilladores-electronicos.jpg",
      category: "Herramientas Eléctricas",
    },
    {
      name: "Tijeras de Podar BREMEN Profesionales",
      description: "Par de tijeras robustas para poda y jardinería con hojas afiladas",
      price: "$45.50",
      brand: "bremen",
      image: "/images/bremen-tijeras-podar.jpg",
      category: "Herramientas de Jardín",
    },
    {
      name: "Kit de Herramientas para Jardín BREMEN",
      description: "Set completo de 3 herramientas especializadas para jardinería",
      price: "$32.25",
      brand: "bremen",
      image: "/images/bremen-kit-jardin.jpg",
      category: "Herramientas de Jardín",
    },
    {
      name: "Set de Llaves Ajustables BREMEN Cr-V",
      description: 'Juego de llaves inglesas 6", 8" y 10" en acero cromo-vanadio',
      price: "$54.99",
      brand: "bremen",
      image: "/images/bremen-llaves-ajustables.jpg",
      category: "Herramientas Manuales",
    },
    // Agregar después de los productos BREMEN existentes
    {
      name: "Engrapadora Liviana BREMEN con Grapas",
      description: "Kit completo con engrapadora manual y grapas de 6mm y 8mm (1000 unidades total)",
      price: "$24.50",
      brand: "bremen",
      image: "/images/bremen-engrapadora-liviana.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: 'Sierra Circular con Dientes de Widia BREMEN 7 1/4"',
      description: "Disco de corte profesional de 60 dientes con carburo de tungsteno para madera",
      price: "$89.75",
      brand: "bremen",
      image: "/images/bremen-sierra-circular-widia.jpg",
      category: "Herramientas de Corte",
    },
    {
      name: "Tijera Multiuso con Rompenueces BREMEN",
      description: "Tijera ergonómica con función adicional de cascanueces, diseño profesional",
      price: "$18.99",
      brand: "bremen",
      image: "/images/bremen-tijera-multiuso.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Juego de Llaves Allen BREMEN Cr-V 10 Piezas",
      description: "Set completo de llaves hexagonales 1.5-10mm en acero cromo-vanadio",
      price: "$26.25",
      brand: "bremen",
      image: "/images/bremen-llaves-allen.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Set de Soportes SDS para Sierra Copa BREMEN",
      description: "4 adaptadores profesionales para brocas y sierras copa bimetálicas",
      price: "$42.99",
      brand: "bremen",
      image: "/images/bremen-soportes-sierra-copa.jpg",
      category: "Accesorios para Taladro",
    },
    {
      name: "Tijeras de Poda Profesionales BREMEN SK-5",
      description: "Tijeras de poda con hojas curvas en acero SK-5, mangos ergonómicos rojos",
      price: "$35.75",
      brand: "bremen",
      image: "/images/bremen-tijeras-podar-rojas.jpg",
      category: "Herramientas de Jardín",
    },
    {
      name: "Pistola de Riego Ajustable BREMEN TPR",
      description: "Pistola de riego con múltiples configuraciones, mango ergonómico TPR y cuerpo ABS",
      price: "$22.50",
      brand: "bremen",
      image: "/images/bremen-pistola-riego-ajustable.jpg",
      category: "Herramientas de Jardín",
    },
    {
      name: "Nivel de Burbuja Profesional BREMEN",
      description: "Nivel de precisión con múltiples burbujas para medición horizontal, vertical y angular",
      price: "$38.75",
      brand: "bremen",
      image: "/images/bremen-nivel-burbuja.jpg",
      category: "Herramientas de Medición",
    },
    {
      name: "Discos de Lija Anti-Empaste BREMEN",
      description: "Set de discos perforados en granulaciones 60, 100, 150 y 240 para lijadoras orbitales",
      price: "$45.99",
      brand: "bremen",
      image: "/images/bremen-discos-lija.jpg",
      category: "Accesorios de Lijado",
    },
    {
      name: "Set de Destornilladores Planos BREMEN Cr-V",
      description: "Juego completo de destornilladores planos en diferentes tamaños con hojas de acero cromo-vanadio",
      price: "$67.25",
      brand: "bremen",
      image: "/images/bremen-formones-profesionales.jpg",
      category: "Herramientas Manuales",
    },
    {
      name: "Set de Pistolas de Riego BREMEN Azules",
      description: "Par de pistolas de riego ajustables con diseño ergonómico y múltiples patrones de rociado",
      price: "$41.50",
      brand: "bremen",
      image: "/images/bremen-pistolas-riego-azules.jpg",
      category: "Herramientas de Jardín",
    },
    // Productos de Impermeabilización - Membrana Fácil
    {
      name: "Membrana Fácil Sellador Base Caucho 500ml",
      description: "Sellador transparente que protege contra goteras, humedad y corrosión",
      price: "$28.75",
      brand: "membrana-facil",
      image: "/images/membranas-facil-latas.jpg",
      category: "Impermeabilización",
    },
    {
      name: "Membrana Fácil Sellador Base Caucho 750ml",
      description: "Sellador de mayor capacidad para proyectos extensos, base caucho transparente",
      price: "$42.50",
      brand: "membrana-facil",
      image: "/images/membranas-facil-latas.jpg",
      category: "Impermeabilización",
    },
    {
      name: "Membrana Fácil Sellador Base Caucho 250ml",
      description: "Formato compacto ideal para reparaciones menores y retoques",
      price: "$18.99",
      brand: "membrana-facil",
      image: "/images/membranas-facil-latas.jpg",
      category: "Impermeabilización",
    },
    {
      name: "Membrana Aero Fácil Caucho Líquido en Aerosol",
      description:
        "Aerosol para sellar juntas, grietas y fisuras. Adhiere sobre metal, concreto, aluminio, vidrio y PVC",
      price: "$35.25",
      brand: "membrana-facil",
      image: "/images/membranas-aero-facil.jpg",
      category: "Impermeabilización",
    },
    // Productos EMACRIL
    {
      name: "EMACRIL Membrana Líquida Impermeabilizante Blanca",
      description: "Membrana acrílica para techos con Crosslinker E-800, máxima elasticidad y durabilidad",
      price: "$89.99",
      brand: "emacril",
      image: "/images/membranas-liquidas-emacril-koverpaint.jpg",
      category: "Impermeabilización",
    },
    // Productos Koverpaint
    {
      name: "Koverpaint Membrana en Pasta Verde 1kg",
      description: "Membrana impermeabilizante en pasta, 100% transitable, para techos",
      price: "$67.50",
      brand: "koverpaint",
      image: "/images/membranas-liquidas-emacril-koverpaint.jpg",
      category: "Impermeabilización",
    },
    {
      name: "Koverpaint Membrana en Pasta Roja 1kg",
      description: "Membrana impermeabilizante en pasta color rojo, alta resistencia al tránsito",
      price: "$67.50",
      brand: "koverpaint",
      image: "/images/membranas-liquidas-emacril-koverpaint.jpg",
      category: "Impermeabilización",
    },
    // Productos KoverTech
    {
      name: "KoverTech Cinta Autoadhesiva Impermeabilizante",
      description: "Cinta autoadhesiva profesional para sellado e impermeabilización de juntas",
      price: "$45.75",
      brand: "kovertech",
      image: "/images/kovertech-cinta-autoadhesiva.jpg",
      category: "Impermeabilización",
    },
    {
      name: "KoverTech Membrana Asfáltica 10m²",
      description: "Rollo de membrana asfáltica profesional para impermeabilización de techos y terrazas",
      price: "$156.99",
      brand: "kovertech",
      image: "/images/membranas-asfalticas-kovertech.jpg",
      category: "Impermeabilización",
    },
    // Productos de Tejidos, Sogas y Aislantes
    {
      name: "Cinta Textil Industrial Blanca - Rollo 50m",
      description: "Cinta de algodón resistente para uso industrial, embalaje y construcción",
      price: "$34.50",
      brand: "todos",
      image: "/images/cinta-textil-blanca.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Sogas Trenzadas Náuticas Multicolor",
      description: "Set de sogas trenzadas con patrones decorativos, ideales para uso náutico y decorativo",
      price: "$52.75",
      brand: "todos",
      image: "/images/sogas-trenzadas-nauticas.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Cinta Industrial con Bordes Reforzados",
      description: "Cinta especializada con bordes verdes y detalles amarillos para uso industrial pesado",
      price: "$28.99",
      brand: "todos",
      image: "/images/cinta-industrial-bordes-verdes.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Sogas de Yute Natural - Set de 3 Carretes",
      description: "Sogas gruesas de fibra natural de yute, ideales para uso rústico, decorativo e industrial",
      price: "$67.25",
      brand: "todos",
      image: "/images/sogas-yute-natural.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Aislantes Térmicos Azul y Reflectivo",
      description: "Rollos de aislante térmico de espuma azul y reflectivo plateado para construcción",
      price: "$89.50",
      brand: "todos",
      image: "/images/aislantes-termicos-azul-plateado.jpg",
      category: "Aislantes Térmicos",
    },
    {
      name: "Mallas y Tejidos de Protección Multicolor",
      description: "Rollos de mallas en negro, gris, blanco y verde para sombreo, protección y construcción",
      price: "$45.75",
      brand: "todos",
      image: "/images/mallas-tejidos-colores.jpg",
      category: "Tejidos y Sogas",
    },
    // Productos adicionales de Tejidos, Sogas y Aislantes
    {
      name: "TENSIL Sogas Forradas con PVC Transparente",
      description: "Sogas profesionales con recubrimiento de PVC cristalino, resistentes a la intemperie y químicos",
      price: "$78.50",
      brand: "tensil",
      image: "/images/tensil-sogas-forradas-pvc.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Tejidos de Lienzo Gris Natural",
      description: "Rollos de tela de algodón/lino de trama abierta, ideales para filtrado, embalaje y uso industrial",
      price: "$42.25",
      brand: "todos",
      image: "/images/tejidos-lienzo-gris.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Mallas Plásticas Verde y Negro",
      description: "Rollos de malla plástica: verde para sombreo/mosquitero y negro para uso agrícola resistente",
      price: "$56.75",
      brand: "todos",
      image: "/images/mallas-plasticas-verde-negro.jpg",
      category: "Tejidos y Sogas",
    },
    {
      name: "Cintas Textiles Multicolor - Set Completo",
      description: "Torre de cintas en 8 colores: multicolor, amarillo, violeta, azul, rosa, verde, blanco y naranja",
      price: "$89.99",
      brand: "todos",
      image: "/images/cintas-textiles-multicolor.jpg",
      category: "Tejidos y Sogas",
    },
    // Productos de Siliconas y Pegamentos
    {
      name: "SUPRABOND Sellador Acrílico Concreto y Cemento 280ml",
      description: "Sellador acrílico gris para reparación de grietas y fisuras en materiales cementosos, pintable",
      price: "$24.75",
      brand: "suprabond",
      image: "/images/suprabond-concreto-cemento.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "SUPRABOND Silicona Acética S-500 Transparente 280ml",
      description: "Silicona acética multiuso para ventanas, marcos, sanitarios, molduras, bañeras y filtraciones",
      price: "$18.50",
      brand: "suprabond",
      image: "/images/suprabond-silicona-acetica.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "SUPRABOND Sellador Acrílico Juntas y Fisuras Premium 280ml",
      description:
        "Sellador acrílico premium transparente para todo tipo de grietas, uso interior y exterior, pintable",
      price: "$26.99",
      brand: "suprabond",
      image: "/images/suprabond-juntas-fisuras.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "TEK BOND Silicona Acética Transparente Saint-Gobain 270ml",
      description: "Silicona acética para baños, tanques y frigoríficos. Antifungo, repele humedad y sella grietas",
      price: "$32.25",
      brand: "tekbond",
      image: "/images/tekbond-silicona-acetica.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "MYX SEALS Silicona Neutra Profesional Set 3 Colores 310ml",
      description: "Set de silicona neutra 100% en negro, blanco y transparente. Curado rápido y alta elasticidad",
      price: "$89.75",
      brand: "myx-seals",
      image: "/images/myx-seals-silicona-neutra.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "EDE Sellador de Poliuretano para Construcción",
      description: "Sellador de poliuretano con máxima adherencia y elasticidad permanente para hormigón y mortero",
      price: "$45.50",
      brand: "ede",
      image: "/images/ede-sellador-poliuretano.jpg",
      category: "Siliconas y Pegamentos",
    },
    // Productos adicionales de Siliconas y Pegamentos
    {
      name: "SUPRABOND Sellador de Maderas Set 3 Colores 280ml",
      description:
        "Set de selladores específicos para madera en Pino, Nogal. Barnizable y pintable para marcos, puertas y muebles",
      price: "$67.50",
      brand: "suprabond",
      image: "/images/suprabond-sellador-maderas.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "SUPRABOND Sellador de Caucho para Piscinas Azul 310ml",
      description: "Sellador especializado para piscinas, adhiere sobre superficies húmedas, impermeable y pintable",
      price: "$34.75",
      brand: "suprabond",
      image: "/images/suprabond-sellador-caucho-piscinas.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "MYX SEALS Silicona Acética Profesional Set 3 Colores 310ml",
      description:
        "Set de siliconas acéticas en negro, blanco y transparente. Secado rápido, anti hongos, tecnología turca",
      price: "$95.25",
      brand: "myx-seals",
      image: "/images/myx-seals-silicona-acetica-profesional.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "COL TEC Adhesivo Vinílico Set Completo by Taper",
      description:
        "Set de adhesivos vinílicos de uso general en diferentes tamaños, ideal para maderas, muebles y trabajos escolares",
      price: "$78.99",
      brand: "coltec",
      image: "/images/coltec-adhesivo-vinilico.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "MYX SEALS Sellador de Poliuretano PU40 Gris 310ml",
      description:
        "Sellador de poliuretano profesional para construcción con máxima adherencia y elasticidad permanente",
      price: "$52.75",
      brand: "myx-seals",
      image: "/images/myx-seals-sellador-poliuretano-pu40.jpg",
      category: "Siliconas y Pegamentos",
    },
    {
      name: "PEGALO Silicona Acética Set 3 Colores 280cc",
      description: "Set de siliconas acéticas profesionales en blanco, negro y transparente de calidad china",
      price: "$45.50",
      brand: "pegalo",
      image: "/images/pegalo-silicona-acetica.jpg",
      category: "Siliconas y Pegamentos",
    },
    // Otros productos existentes
    {
      name: "Taladros y Brocas Stanley",
      description: "Herramientas de perforación profesionales",
      price: "$45.99",
      brand: "stanley",
      image: "/placeholder.svg?height=200&width=300",
      category: "Herramientas Eléctricas",
    },
    {
      name: "Tornillos y Pernos",
      description: "Variedad completa de fijaciones",
      price: "$12.99",
      brand: "todos",
      image: "/placeholder.svg?height=200&width=300",
      category: "Ferretería",
    },
    {
      name: "Sierra Circular DeWalt",
      description: 'Sierra circular profesional 7-1/4"',
      price: "$189.99",
      brand: "dewalt",
      image: "/placeholder.svg?height=200&width=300",
      category: "Herramientas Eléctricas",
    },
    {
      name: "Taladro Percutor Bosch",
      description: "Taladro percutor inalámbrico 18V",
      price: "$156.75",
      brand: "bosch",
      image: "/placeholder.svg?height=200&width=300",
      category: "Herramientas Eléctricas",
    },
    {
      name: "Equipo de Seguridad",
      description: "Cascos, guantes, gafas protectoras",
      price: "$35.00",
      brand: "todos",
      image: "/placeholder.svg?height=200&width=300",
      category: "Seguridad",
    },
    {
      name: "Material Eléctrico",
      description: "Cables, enchufes, interruptores",
      price: "$18.99",
      brand: "todos",
      image: "/placeholder.svg?height=200&width=300",
      category: "Electricidad",
    },
  ]

  const filteredProducts =
    selectedBrand === "todos" ? allProducts : allProducts.filter((product) => product.brand === selectedBrand)

  const renderContent = () => {
    switch (currentPage) {
      case "inicio":
        return (
          <>
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjiFQ9fOod0xkUbgNQi3ob58KXCRHmbLlqDtpf1i6kp_Bs4fMuIg_eUgmNXau4xeFeAQ5s-Dcm5Ct04-koBhzVY0GW3HllEGpuDoO7DKV-WhKYqWt6a6SVIF2_7NzUFkiftCzaItAJ7R6Su5IlD9weU1I_DhpiOnXas42THMWZDRMkayB_mNwercBiXjw7nmCAN5CphDRHNP2_br5mogezekippR2BoU_Tn_X2vJchZk-qxgTogLcVtTVwr6DdLkozJnMwuKDFQlk")`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Su Tienda Integral para Todas Sus Necesidades
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Encuentre todo lo que necesita para sus proyectos de mejora del hogar, desde herramientas hasta
                      ferretería y más.
                    </h2>
                  </div>
                  <button
                    onClick={() => setCurrentPage("productos")}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#3f8cbf] text-gray-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#2d6a94] transition-colors"
                  >
                    <span className="truncate">Comprar Ahora</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Productos Destacados */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Productos Destacados
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {[
                  {
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkFUMoPdeU0eXvsq_N2fT9RYsllNRxjKOSYWpnWtHRd-rgD6GPWm2enX74f8pDQMjgxOgelw_rVSrwmRj2_GnbD61nQzrTmXQg-TaWGhDLqXD2y5z11dM4xvEdtASatoazMF_RAZEkodRLcE508KRaX3rgN33OfVujDbSFDBNiDt6F5HjC8HnuZua0L_oeGiP2jrjOgiow6rTER7IQBUV1mnbhWXubXCpCNOpO_waE92mhKGJkYlZDN992Olp0sSNuQjhvwgxBuoU",
                    title: "Juego de Taladros Eléctricos",
                    description: "Juego completo para todas sus necesidades de perforación",
                  },
                  {
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAllJ5Vof5BcaLvsao8ymMgILs2pu56R5yPu_DtzdLud39L4XGA_suhc8ZVujH252mB5q1rAjAVuBRKnVfsa8UsrMdfE6sDkF2hGJhkgAFZ1AohQVQY3iSLNfSEp00dr0f1WTc6C5qUTlTxbrgGV4kEYxb9O5qXNpkLE-3Mp3k1yK_9BMkIPgKQfM1IDA9el343kxbKw7YP6WwhGJhkgAFZ1AohQVQY3iSLNfSEp00dr0f1WTc6C5qUTlTxbrgGV4kEYxb9O5qXNpkLE-3Mp3k1yK_9BMkIPgKQfM1IDA9el343kxbKw7YP6Ww70GcQQPR6wk0tUSFHuzyBatTTgXRhSVWg_SXBIMCJO5FmCgByHDv0Qm-kgR3htLY",
                    title: "Kit de Herramientas Manuales",
                    description: "Herramientas esenciales para cualquier manitas",
                  },
                  {
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsfcpRwT-kgpC43D7nRD_zgQvk8pT1uUpoZLmcIec1ysCSV1KSKVnfp7PS0la-4dF8QCj4kNvcZVuMQPLkjn17f0uc5jmszwujXa6Bp9YUnANlFrx5Q1qvB4qZhGaZT4HzC0bslh3BdytdRaKP38IygbCReU-G_PVovwalgADvrNUMc61eSFdLXmSV30RKqjeAMiwYUrNcRM4s7UK1WEjxBaHTdDKc4SIweGENEDJzJnasMuzR99CipTeS1aKN5crcMbtqxYq1DZk",
                    title: "Equipo de Seguridad",
                    description: "Manténgase seguro con nuestro equipo de alta calidad",
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer hover:transform hover:scale-105 transition-transform"
                    onClick={() => setCurrentPage("productos")}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: `url("${product.image}")` }}
                    ></div>
                    <div>
                      <p className="text-[#101518] text-base font-medium leading-normal">{product.title}</p>
                      <p className="text-[#5c778a] text-sm font-normal leading-normal">{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promociones */}
            <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Promociones
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                {
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCnEY820qn567O9VxK-0UK0xwLK3LYbYEWSBrJKQs9leIC3i-feVO1TkFQmTxJPnYwrsj0eGfzkautP71h62KGR1BQ1W6_qK1KNXsZObJX2FvHNQqWKx3QNsGlqrZV0oLYbYEWSBrJKQs9leIC3i-feVO1TkFQmTxJPnYwrsj0eGfzkautP71h62KGR1BQ1W6_qK1KNXsZObJX2FvHNQqWKx3QNsGlqrZV0o7ZreXfw9xxNgxcUrilcqL44GTBy6rzJLT7SCthNVOQdhvgbXiqT2EA5O3PJ8trmGKMl57d5einlwIn5RiBScVIQcScelFg3IrJ5yi0eqT5-1jb6Me5eFpkOczNk5DaR1LC8Jmq0uAwZbgc",
                  title: "Venta de Primavera",
                  description: "Ahorre hasta un 30% en artículos seleccionados",
                },
                {
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3QQobh_kOBGrPn788gXzieDrVPM43-Yq2rTGIylSVqn85Hcbovmd8JTp8fhF4xuNV9YnbkIUt1feu_yu_FZbR_EkjBF_Z4qG3kEfoL_AIRWpLdmfnNpNDWbibmOMJQAoYf8e0BBu0jZMhhw2hzRrGTlL6mEC-Uf000MYUl1idmDRU9eI4kpEXm4QYPza9AYyppQfM_mNlJ60u5w8e-gj-6PTZiuvICa88S3VTocNiZ43FEF5L_O0-5ymK131S0fBcYd8vkzs3V7Y",
                  title: "Evento de Liquidación",
                  description: "Última oportunidad para aprovechar estas ofertas",
                },
                {
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCkccLc_NbKc2mtdD2gCnhgEMFCeWrtIiC68u1kFqAl2aXFQBZoDvcZEYLwPsn8KBTa70zWZW5fHtPJmqcyaIvi5HZUW5orHNGT81ZLrPlRpHO9wJDmgGFVXrHWWYMk1loTIWdCPRV-ZW1mqYd3-LrKZOYC-c38biyNcGa5S3Em_Q7wVXKh2ZW0z-Lt_nsSjmx2cTPKZgK0r0JXP5QBVWuBdoucNS_D1ixVd38bRSsyHtBSWEZWwzCgnV7Q7Pd0JEfJB0NPYhj204k",
                  title: "Nuevas Llegadas",
                  description: "Consulte nuestros últimos productos",
                },
              ].map((promo, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 pb-3 cursor-pointer hover:transform hover:scale-105 transition-transform"
                  onClick={() => setCurrentPage("productos")}
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${promo.image}")` }}
                  ></div>
                  <div>
                    <p className="text-[#101518] text-base font-medium leading-normal">{promo.title}</p>
                    <p className="text-[#5c778a] text-sm font-normal leading-normal">{promo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )

      case "productos":
        return (
          <div className="p-4">
            <h1 className="text-[#101518] text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">
              Nuestros Productos
            </h1>

            {/* Navegación por Marcas */}
            <div className="mb-8">
              <h2 className="text-[#101518] text-xl font-semibold mb-4">Filtrar por Marca</h2>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand.key}
                    onClick={() => setSelectedBrand(brand.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedBrand === brand.key
                        ? "bg-[#3f8cbf] text-white"
                        : "bg-gray-200 text-[#101518] hover:bg-gray-300"
                    }`}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Destacado de INCCO si está seleccionado */}
            {selectedBrand === "incco" && (
              <div className="mb-8 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-orange-600">INCCO</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Herramientas Industriales de Calidad</h3>
                    <p className="text-[#5c778a] text-sm">
                      INCCO ofrece herramientas profesionales diseñadas para resistir el uso intensivo en trabajos
                      industriales y de construcción.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de BREMEN si está seleccionado */}
            {selectedBrand === "bremen" && (
              <div className="mb-8 bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-blue-700">BREMEN</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Qualität und Design - Calidad Alemana</h3>
                    <p className="text-[#5c778a] text-sm">
                      BREMEN combina la precisión alemana con diseño funcional, ofreciendo herramientas profesionales
                      para carpintería, jardinería y trabajos especializados.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de Membrana Fácil si está seleccionado */}
            {selectedBrand === "membrana-facil" && (
              <div className="mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-6 border-l-4 border-yellow-500">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-yellow-600">MEMBRANA FÁCIL</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Soluciones Rápidas de Impermeabilización</h3>
                    <p className="text-[#5c778a] text-sm">
                      Membrana Fácil ofrece selladores y membranas de aplicación sencilla para proteger techos contra
                      goteras, humedad y corrosión.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de EMACRIL si está seleccionado */}
            {selectedBrand === "emacril" && (
              <div className="mb-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 border-l-4 border-orange-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-orange-700">EMACRIL</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Membranas Acrílicas de Alta Performance</h3>
                    <p className="text-[#5c778a] text-sm">
                      EMACRIL desarrolla membranas líquidas con tecnología Crosslinker para máxima elasticidad y
                      resistencia en impermeabilización de techos.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de Koverpaint si está seleccionado */}
            {selectedBrand === "koverpaint" && (
              <div className="mb-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-6 border-l-4 border-green-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-green-700">KOVERPAINT</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Membranas Transitables de Calidad</h3>
                    <p className="text-[#5c778a] text-sm">
                      Koverpaint especializa en membranas en pasta 100% transitables, ideales para techos con tráfico
                      peatonal frecuente.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de KoverTech si está seleccionado */}
            {selectedBrand === "kovertech" && (
              <div className="mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 border-l-4 border-blue-700">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-blue-800">KOVERTECH</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Tecnología Avanzada en Impermeabilización</h3>
                    <p className="text-[#5c778a] text-sm">
                      KoverTech ofrece soluciones técnicas profesionales con membranas asfálticas y cintas autoadhesivas
                      de última generación.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de TENSIL si está seleccionado */}
            {selectedBrand === "tensil" && (
              <div className="mb-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6 border-l-4 border-purple-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-purple-700">TENSIL</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Sogas y Cuerdas de Alta Resistencia</h3>
                    <p className="text-[#5c778a] text-sm">
                      TENSIL especializa en sogas forradas con PVC y cuerdas técnicas diseñadas para resistir
                      condiciones extremas y uso industrial intensivo.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de SUPRABOND si está seleccionado */}
            {selectedBrand === "suprabond" && (
              <div className="mb-8 bg-gradient-to-r from-gray-100 to-blue-100 rounded-lg p-6 border-l-4 border-gray-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-gray-700">SUPRABOND</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Selladores y Siliconas de Calidad Superior</h3>
                    <p className="text-[#5c778a] text-sm">
                      SUPRABOND ofrece una línea completa de selladores acrílicos y siliconas para construcción,
                      reparación y mantenimiento profesional.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de TEK BOND si está seleccionado */}
            {selectedBrand === "tekbond" && (
              <div className="mb-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-6 border-l-4 border-green-700">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-green-800">TEK BOND</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Saint-Gobain - Tecnología Francesa</h3>
                    <p className="text-[#5c778a] text-sm">
                      TEK BOND de Saint-Gobain combina tecnología francesa con calidad mundial en siliconas acéticas
                      para aplicaciones sanitarias y construcción.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de MYX SEALS si está seleccionado */}
            {selectedBrand === "myx-seals" && (
              <div className="mb-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-blue-700">MYX SEALS</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Siliconas Neutras Profesionales</h3>
                    <p className="text-[#5c778a] text-sm">
                      MYX SEALS especializa en siliconas neutras de alta performance con tecnología turca, ideales para
                      aplicaciones que requieren máxima durabilidad.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de EDE si está seleccionado */}
            {selectedBrand === "ede" && (
              <div className="mb-8 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-6 border-l-4 border-red-600">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-red-700">EDE</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Selladores de Poliuretano de Alta Calidad</h3>
                    <p className="text-[#5c778a] text-sm">
                      EDE desarrolla selladores de poliuretano con máxima adherencia y elasticidad permanente para
                      aplicaciones estructurales en construcción.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de COL TEC si está seleccionado */}
            {selectedBrand === "coltec" && (
              <div className="mb-8 bg-gradient-to-r from-blue-100 to-white rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-blue-600">COL TEC</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Adhesivos Vinílicos by Taper</h3>
                    <p className="text-[#5c778a] text-sm">
                      COL TEC by Taper ofrece adhesivos vinílicos de uso general con pegado rápido, ideales para
                      trabajos de carpintería, manualidades y uso escolar.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destacado de PEGALO si está seleccionado */}
            {selectedBrand === "pegalo" && (
              <div className="mb-8 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-6 border-l-4 border-red-500">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-red-600">PEGALO</div>
                  <div>
                    <h3 className="text-[#101518] text-xl font-semibold">Siliconas Acéticas Económicas</h3>
                    <p className="text-[#5c778a] text-sm">
                      PEGALO ofrece siliconas acéticas de calidad a precios competitivos, ideales para aplicaciones
                      generales de sellado y reparación.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Grid de Productos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-[#3f8cbf] text-white text-xs px-2 py-1 rounded-full">{product.category}</span>
                    </div>
                    {product.brand !== "todos" && (
                      <div className="absolute top-2 left-2">
                        {product.brand === "bremen" && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              {product.brand.toUpperCase()}
                            </span>
                          </div>
                        )}
                        {product.brand === "incco" && (
                          <div className="absolute top-2 left-2">
                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                              {product.brand.toUpperCase()}
                            </span>
                          </div>
                        )}
                        {product.brand === "membrana-facil" && (
                          <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            MEMBRANA FÁCIL
                          </span>
                        )}
                        {product.brand === "emacril" && (
                          <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            EMACRIL
                          </span>
                        )}
                        {product.brand === "koverpaint" && (
                          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            KOVERPAINT
                          </span>
                        )}
                        {product.brand === "kovertech" && (
                          <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            KOVERTECH
                          </span>
                        )}
                        {product.brand === "tensil" && (
                          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            TENSIL
                          </span>
                        )}
                        {product.brand === "suprabond" && (
                          <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            SUPRABOND
                          </span>
                        )}
                        {product.brand === "tekbond" && (
                          <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            TEK BOND
                          </span>
                        )}
                        {product.brand === "myx-seals" && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            MYX SEALS
                          </span>
                        )}
                        {product.brand === "ede" && (
                          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            EDE
                          </span>
                        )}
                        {product.brand === "coltec" && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            COL TEC
                          </span>
                        )}
                        {product.brand === "pegalo" && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            PEGALO
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-[#101518] text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-[#5c778a] text-sm mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#3f8cbf] text-xl font-bold">{product.price}</span>
                      <button className="bg-[#3f8cbf] text-white px-4 py-2 rounded-lg hover:bg-[#2d6a94] transition-colors">
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#5c778a] text-lg">No se encontraron productos para esta marca.</p>
              </div>
            )}
          </div>
        )

      case "servicios":
        return (
          <div className="p-4">
            <h1 className="text-[#101518] text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">
              Nuestros Servicios
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Asesoramiento Técnico",
                  description:
                    "Nuestros expertos le ayudan a elegir las herramientas y materiales correctos para su proyecto.",
                  icon: "🔧",
                },
                {
                  title: "Entrega a Domicilio",
                  description: "Servicio de entrega rápida y segura directamente a su hogar u obra.",
                  icon: "🚚",
                },
                {
                  title: "Corte de Materiales",
                  description:
                    "Servicio de corte preciso de madera, metal y otros materiales según sus especificaciones.",
                  icon: "✂️",
                },
                {
                  title: "Alquiler de Herramientas",
                  description: "Alquile herramientas especializadas por días o semanas a precios competitivos.",
                  icon: "🏗️",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-[#101518] text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-[#5c778a] text-base leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case "acerca":
        return (
          <div className="p-4">
            <h1 className="text-[#101518] text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">
              Acerca de Ferretería Due
            </h1>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h2 className="text-[#101518] text-2xl font-semibold mb-4">Nuestra Historia</h2>
                <p className="text-[#5c778a] text-base leading-relaxed mb-4">
                  Ferretería Due ha sido su socio confiable en proyectos de construcción y mejoras del hogar durante más
                  de 25 años. Comenzamos como un pequeño negocio familiar y hemos crecido hasta convertirnos en una de
                  las ferreterías más respetadas de la región.
                </p>
                <p className="text-[#5c778a] text-base leading-relaxed">
                  Nos especializamos en tornillos, herramientas, materiales de construcción y todo lo que necesita para
                  completar sus proyectos con éxito.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-[#101518] text-2xl font-semibold mb-4">Nuestra Misión</h2>
                <p className="text-[#5c778a] text-base leading-relaxed">
                  Proporcionar productos de alta calidad, asesoramiento experto y un servicio excepcional para ayudar a
                  nuestros clientes a realizar sus proyectos de manera eficiente y exitosa.
                </p>
              </div>

              <div>
                <h2 className="text-[#101518] text-2xl font-semibold mb-4">¿Por qué elegirnos?</h2>
                <ul className="text-[#5c778a] text-base leading-relaxed space-y-2">
                  <li>• Más de 25 años de experiencia en el sector</li>
                  <li>• Amplio inventario de productos de calidad</li>
                  <li>• Personal experto y asesoramiento personalizado</li>
                  <li>• Precios competitivos y ofertas especiales</li>
                  <li>• Servicio de entrega rápida</li>
                </ul>
              </div>
            </div>
          </div>
        )

      case "contacto":
        return (
          <div className="p-4">
            <h1 className="text-[#101518] text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">Contacto</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-[#101518] text-xl font-semibold mb-4">Información de Contacto</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#101518] font-medium mb-1">Dirección</h3>
                    <p className="text-[#5c778a]">
                      Calle Principal 123
                      <br />
                      Ciudad, Provincia 12345
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#101518] font-medium mb-1">Teléfono</h3>
                    <p className="text-[#5c778a]">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-[#101518] font-medium mb-1">Email</h3>
                    <p className="text-[#5c778a]">info@ferreteriadue.com</p>
                  </div>
                  <div>
                    <h3 className="text-[#101518] font-medium mb-1">Horarios</h3>
                    <p className="text-[#5c778a]">
                      Lunes - Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 8:00 AM - 4:00 PM
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-[#101518] text-xl font-semibold mb-4">Envíanos un Mensaje</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-[#101518] font-medium mb-1">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8cbf]"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-[#101518] font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8cbf]"
                      placeholder="su.email@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[#101518] font-medium mb-1">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3f8cbf]"
                      placeholder="Escriba su mensaje aquí..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3f8cbf] text-white py-2 px-4 rounded-lg hover:bg-[#2d6a94] transition-colors"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eaeef1] px-10 py-3">
          <div className="flex items-center gap-8">
            <div
              className="flex items-center gap-4 text-[#101518] cursor-pointer"
              onClick={() => setCurrentPage("inicio")}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/images/logo-ferreteria-due.png"
                  alt="Logo Ferretería Due"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">
                Ferretería Due - Su tienda de tornillos y ferretería
              </h2>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-9">
              {[
                { name: "Inicio", key: "inicio" },
                { name: "Productos", key: "productos" },
                { name: "Servicios", key: "servicios" },
                { name: "Acerca de Nosotros", key: "acerca" },
                { name: "Contacto", key: "contacto" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`text-sm font-medium leading-normal transition-colors hover:text-[#3f8cbf] ${
                    currentPage === item.key ? "text-[#3f8cbf]" : "text-[#101518]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Cart */}
          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#5c778a] flex border-none bg-[#eaeef1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <Search size={24} />
                </div>
                <input
                  placeholder="Buscar productos..."
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaeef1] focus:border-none h-full placeholder:text-[#5c778a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>

            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#eaeef1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#d1d5db] transition-colors">
              <ShoppingCart size={20} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">{renderContent()}</div>
        </div>
      </div>
    </div>
  )
}
