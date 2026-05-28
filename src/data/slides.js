// ─── Slide data - all content lives here, components are purely presentational ───

export const slides = [
  // ── 1. PORTADA ──────────────────────────────────────────────────────────────
  {
    id: 'portada',
    type: 'title',
    cover: true,
    steps: 0,
    logo: '/image2.png',
    title: 'THENA: Sistema de Mentoría Académica Asistido por Inteligencia Artificial para apoyar el proceso de retroalimentación de Proyecto de Grado',
  },

  // ── 2. PRESENTACIÓN PERSONAL ────────────────────────────────────────────────
  {
    id: 'personal',
    type: 'personal',
    steps: 0,
    name: 'Dorian Ivan Ticona Vega',
    requirement: 'COMO REQUISITO PARCIAL PARA OPTAR AL TÍTULO DE LICENCIATURA EN:',
    career: 'INGENIERÍA DE SISTEMAS COMPUTACIONALES',
    photo: '/image3.png',
  },

  // ── 3. AGENDA ───────────────────────────────────────────────────────────────
  {
    id: 'agenda',
    type: 'agenda',
    steps: 9,
    section: 'CONTENIDO',
    items: [
      { num: '01', label: 'Introducción' },
      { num: '02', label: 'Antecedentes' },
      { num: '03', label: 'Problemática' },
      { num: '04', label: 'Objetivos' },
      { num: '05', label: 'Justificación & Alcances' },
      { num: '06', label: 'Metodología' },
      { num: '07', label: 'Propuesta Tecnológica' },
      { num: '08', label: 'Análisis de Requerimientos' },
      { num: '09', label: 'Diagrama de Despliegue' },
    ],
  },

  // ── 3. INTRODUCCIÓN ─────────────────────────────────────────────────────────
  {
    id: 'intro',
    type: 'text-figure',
    steps: 0,
    section: 'INTRODUCCIÓN',
    text: 'La creciente demanda de tutorías académicas plantea desafíos en la fluidez de la retroalimentación de los proyectos de grado.',
    image: '/image4.png',
    source: 'GPT Image 2',
  },

  // ── 4-9. ANTECEDENTES ───────────────────────────────────────────────────────
  {
    id: 'antecedentes',
    type: 'image-grid',
    steps: 3,
    section: 'ANTECEDENTES',
    exitType: 'zoom-in',
    exitDirection: 'left',
    images: [
      { src: '/image5.png', label: 'Global',        source: 'Google Imágenes' },
      { src: '/image6.png', label: 'Latinoamérica', source: 'Google Imágenes' },
      { src: '/image7.png', label: 'Bolivia',       source: 'Google Imágenes' },
    ],
  },
  {
    id: 'ant-global',
    type: 'image-detail',
    steps: 0,
    section: 'ANTECEDENTES',
    enterType: 'fade',
    exitType: 'zoom-out',
    exitDirection: 'left',
    label: 'Global',
    images: [
      { src: '/thesify.png',  label: 'Thesify',  source: 'thesify.ai' },
      { src: '/thesisai.png', label: 'ThesisAI', source: 'thesisai.io' },
      { src: '/proquest.png', label: 'ProQuest ETD', source: 'etdadmin.com' },
    ],
    bullets: [
      'SAHPAD (Shiraz, 2017) & Dissertation Milestones FIU (2018) - gestión de hitos, sin revisión de contenido',
      'ProQuest ETD (+3.600 instituciones) - repositorio global, sin acompañamiento en redacción',
      'ThesisAI & Thesify (2024) - IA genérica sin normativa institucional ni rol del tutor',
    ],
  },
  {
    id: 'antecedentes-2',
    type: 'image-grid',
    steps: 0,
    allVisible: true,
    section: 'ANTECEDENTES',
    enterType: 'fade',
    exitType: 'zoom-in',
    exitDirection: 'center',
    images: [
      { src: '/image5.png', label: 'Global',        source: 'Google Imágenes' },
      { src: '/image6.png', label: 'Latinoamérica', source: 'Google Imágenes' },
      { src: '/image7.png', label: 'Bolivia',       source: 'Google Imágenes' },
    ],
  },
  {
    id: 'ant-latam',
    type: 'image-detail',
    steps: 0,
    section: 'ANTECEDENTES',
    enterType: 'fade',
    exitType: 'zoom-out',
    exitDirection: 'center',
    label: 'Latinoamérica',
    images: [
      { src: '/tecnm.png',        label: 'TecNM',           source: 'tecnm.mx' },
      { src: '/cuelloalvarez.png', label: 'Cuello & Álvarez', source: 'Publicación 2024' },
    ],
    bullets: [
      'Plataforma TecNM (México) - seguimiento tutorial para reducir deserción, sin componentes de IA',
      'Cuello & Álvarez (2024) - recursos digitales dispersos sin orientación ni integración institucional',
      'IES latinoamericanas - IA limitada a sistemas genéricos de aprendizaje, no supervisión de grado',
    ],
  },
  {
    id: 'antecedentes-3',
    type: 'image-grid',
    steps: 0,
    allVisible: true,
    section: 'ANTECEDENTES',
    enterType: 'fade',
    exitType: 'zoom-in',
    exitDirection: 'right',
    images: [
      { src: '/image5.png', label: 'Global',        source: 'Google Imágenes' },
      { src: '/image6.png', label: 'Latinoamérica', source: 'Google Imágenes' },
      { src: '/image7.png', label: 'Bolivia',       source: 'Google Imágenes' },
    ],
  },
  {
    id: 'ant-bolivia',
    type: 'image-detail',
    steps: 0,
    section: 'ANTECEDENTES',
    enterType: 'fade',
    label: 'Bolivia',
    images: [
      { src: '/repoumsa.png', label: 'Repositorio UMSA', source: 'repositorio.umsa.bo' },
      { src: '/repocato.png', label: 'Repositorio UCB', source: 'repositorio.ucb.edu.bo' },
    ],
    bullets: [
      'UMSA, UCB, UASB y UPB - supervisión íntegramente manual y presencial por el docente-tutor',
      'Repositorios UMSA y UPEA - archivos de trabajos concluidos, sin acompañamiento en redacción',
      'Sin plataforma que integre tutoría + IA + normativa universitaria boliviana',
    ],
  },

  // ── 5. PROBLEMÁTICA - Ishikawa ───────────────────────────────────────────────
  {
    id: 'problematica-ishikawa',
    type: 'ishikawa',
    steps: 7,
    section: 'LA PROBLEMÁTICA',
    image: '/image8.png',
    zones: [
      { label: '',                          scale: 1,   x: 0,    y: 0    }, // vista completa
      { label: 'Estudiantes',               scale: 3.3, x: 1300, y: 305  }, // top-izq (1)
      { label: 'Docentes / Tutores',        scale: 3.3, x: 610,  y: 305  }, // top-centro (2)
      { label: 'Procesos / Métodos',        scale: 3.3, x: -110, y: 305  }, // top-der (3)
      { label: 'Entorno',                   scale: 3.3, x: 1200, y: -380 }, // bot-izq (4)
      { label: 'Herramientas / Tecnología', scale: 3.3, x: 530,  y: -380 }, // bot-centro (5)
      { label: 'Materiales / Insumos',      scale: 3.3, x: -110, y: -380 }, // bot-der (6)
      { label: 'Efecto',                    scale: 3.3, x: -1160, y: 0    }, // cabeza
    ],
  },

  // ── 7. PROBLEMÁTICA - Pregunta ───────────────────────────────────────────────
  {
    id: 'problematica-pregunta',
    type: 'statement',
    steps: 0,
    section: 'LA PROBLEMÁTICA',
    images: [
      { src: '/image9.png',  source: 'GPT Image 2' },
      { src: '/image10.png', source: 'GPT Image 2' },
      { src: '/image11.png', source: 'GPT Image 2' },
    ],
    statement: '¿De qué manera el desarrollo de un sistema de asistencia basado en inteligencia artificial puede optimizar el proceso de revisión preliminar de los Proyectos de Grado en la UPB?',
  },

  // ── 8. OBJETIVO GENERAL ──────────────────────────────────────────────────────
  {
    id: 'obj-general',
    type: 'objective',
    steps: 0,
    section: 'OBJETIVOS',
    label: 'GENERAL',
    text: 'Desarrollar un sistema de mentoría académica asistido por inteligencia artificial, denominado Thena, para apoyar el proceso de retroalimentación de Proyectos de Grado de manera asíncrona en la carrera de Ingeniería de Sistemas Computacionales de la UPB.',
  },

  // ── 9. OBJETIVOS ESPECÍFICOS (1/3) ──────────────────────────────────────────
  {
    id: 'obj-especificos',
    type: 'bullets',
    steps: 3,
    continuesSection: true,
    section: 'OBJETIVOS',
    label: 'ESPECÍFICOS',
    bullets: [
      'Analizar los requerimientos funcionales y técnicos del proceso de tutoría académica institucional para establecer la base de diseño del sistema.',
      'Definir los criterios de validación basados en las normativas universitarias y los parámetros específicos de evaluación del tutor para garantizar la pertinencia institucional del sistema.',
      'Diseñar la arquitectura lógica del sistema y las interfaces de usuario para la interacción entre el estudiante y la asistencia virtual.',
    ],
  },

  // ── 9b. OBJETIVOS ESPECÍFICOS (2/3) ─────────────────────────────────────────
  {
    id: 'obj-especificos-2',
    type: 'bullets',
    steps: 2,
    continuedSection: true,
    continuesSection: true,
    section: 'OBJETIVOS',
    label: 'ESPECÍFICOS',
    bullets: [
      'Desarrollar el sistema de asistencia empleando modelos de generación aumentada por recuperación para la preevaluación documental.',
      'Evaluar la precisión, funcionalidad y usabilidad del sistema con la participación de expertos y estudiantes de la carrera para validar su efectividad en el contexto académico.',
    ],
  },

  // ── 9c. OBJETIVOS ESPECÍFICOS (3/3) ─────────────────────────────────────────
  {
    id: 'obj-especificos-3',
    type: 'bullets',
    steps: 2,
    continuedSection: true,
    section: 'OBJETIVOS',
    label: 'ESPECÍFICOS',
    bullets: [
      'Desplegar la plataforma en un entorno operativo accesible para la comunidad académica de la UPB.',
      'Documentar los procesos de ingeniería y los resultados obtenidos durante la implementación del sistema para garantizar la reproducibilidad y trazabilidad del proyecto.',
    ],
  },

  // ── 10. JUSTIFICACIÓN ────────────────────────────────────────────────────────
  {
    id: 'justificacion',
    type: 'card-grid',
    steps: 3,
    section: 'JUSTIFICACIÓN',
    cards: [
      {
        label: 'Tecnológica',
        color: '#6D9EEB',
        image: '/image13.png',
        source: 'GPT Image 2',
        text: 'Implementación de tecnologías para apoyar validaciones precisas y ancladas a la normativa institucional.',
      },
      {
        label: 'Social',
        color: '#D90368',
        image: '/image15.png',
        source: 'GPT Image 2',
        text: 'Optimización de la carga docente, permitiendo un enfoque en la mentoría estratégica de alto nivel.',
      },
      {
        label: 'Académica',
        color: '#00b4d8',
        image: '/image14.jpeg',
        source: 'Google Imágenes',
        text: 'Mejora de la calidad documental mediante retroalimentación técnica inmediata y asíncrona.',
      },
    ],
  },

  // ── 11. ALCANCES (1/2) ──────────────────────────────────────────────────────
  {
    id: 'alcances',
    type: 'image-detail',
    steps: 3,
    continuesSection: true,
    section: 'ALCANCES',
    src: '/image16.png',
    source: 'GPT Image 2',
    label: '',
    bullets: [
      'Análisis Normativo - digitalización de lineamientos UPB y criterios del tutor, estructurados en capas jerárquicas con referencia explícita a la fuente.',
      'Funcionalidad de Preevaluación - revisión preliminar de borradores DOCX mediante agentes especializados en paralelo, con progresión lineal por capítulos.',
      'Actores del Sistema - tutorado que gestiona entregas y recibe feedback; tutor que configura criterios y ejerce aprobación o rechazo de capítulos.',
    ],
  },

  // ── 11b. ALCANCES (2/3) ─────────────────────────────────────────────────────
  {
    id: 'alcances-2',
    type: 'image-detail',
    steps: 3,
    continuedSection: true,
    continuesSection: true,
    section: 'ALCANCES',
    src: '/image16.png',
    source: 'GPT Image 2',
    label: '',
    bullets: [
      'Retroalimentación Asíncrona - feedback inmediato anclado a fragmentos del texto, formulado como orientación pedagógica sin generar contenido por el estudiante.',
      'Implementación Tecnológica - plataforma web con arquitectura RAG y agentes especializados que evalúan estructura, metodología y consistencia argumentativa.',
      'Validación de Ingeniería - evaluación de precisión y usabilidad con estudiantes y expertos en el entorno académico de la UPB.',
    ],
  },

  // ── 11c. ALCANCES (3/3) ─────────────────────────────────────────────────────
  {
    id: 'alcances-3',
    type: 'image-detail',
    steps: 3,
    continuedSection: true,
    section: 'ALCANCES',
    src: '/image16.png',
    source: 'GPT Image 2',
    label: '',
    bullets: [
      'Despliegue Operativo - la plataforma se despliega en un entorno productivo accesible para la comunidad académica de la UPB durante el periodo de validación.',
      'Documentación de Ingeniería - incluye análisis de requerimientos, diseño arquitectónico, decisiones técnicas adoptadas y resultados de implementación.',
      'Extensibilidad del Sistema - arquitectura modular que separa la lógica de revisión del contenido normativo, habilitando la incorporación futura de otras carreras o facultades.',
    ],
  },

  // ── 11d. LÍMITES (1/2) ───────────────────────────────────────────────────────
  {
    id: 'limites',
    type: 'image-detail',
    steps: 3,
    continuesSection: true,
    section: 'LÍMITES',
    src: '/image17.png',
    source: 'GPT Image 2',
    label: '',
    bullets: [
      'Evaluación Técnica de Fondo - no juzga la validez científica ni la innovación de las soluciones de ingeniería propuestas.',
      'Contexto Institucional - restringido a la carrera de Ing. Sistemas Computacionales de la UPB sede La Paz.',
      'Periodo de Implementación - la normativa precargada corresponde al momento de implementación; cambios futuros requieren actualización manual.',
    ],
  },

  // ── 11e. LÍMITES (2/2) ───────────────────────────────────────────────────────
  {
    id: 'limites-2',
    type: 'image-detail',
    steps: 3,
    continuedSection: true,
    section: 'LÍMITES',
    src: '/image17.png',
    source: 'GPT Image 2',
    label: '',
    bullets: [
      'Usuarios del Sistema - solo contempla estudiantes de PG y docentes tutores; excluye tribunales, revisores externos y administrativos.',
      'Dependencia de Datos - efectividad supeditada a la calidad de documentos normativos y al rendimiento de los LLMs y la arquitectura RAG.',
      'Decisión Final - no sustituye la autoridad académica del tutor; aprobación y calificación del PG permanece facultad exclusiva de tutores y tribunales.',
    ],
  },

  // ── 12. METODOLOGÍA ──────────────────────────────────────────────────────────
  {
    id: 'metodologia',
    type: 'flow',
    steps: 5,
    section: 'METODOLOGÍA',
    cardWidth: 230,
    imageHeight: 110,
    items: [
      { label: 'Ingeniería de Requerimientos',    image: '/step1.jpg', source: 'Nano Banana 2' },
      { label: 'Planeación Ágil (Scrum)',          image: '/step2.jpg', source: 'Nano Banana 2' },
      { label: 'Diseño y Desarrollo CRISP-ML(Q)', image: '/step3.jpg', source: 'Nano Banana 2' },
      { label: 'Implementación de Modelos (LLMOps)', image: '/step4.jpg', source: 'Nano Banana 2' },
      { label: 'Entrega y Mejora Continua',       image: '/step5.jpg', source: 'Nano Banana 2' },
    ],
  },

  // ── 13. PROPUESTA - Diagrama Tecnológico ────────────────────────────────────
  {
    id: 'tech-stack',
    type: 'ishikawa',
    steps: 6,
    section: 'PROPUESTA TECNOLÓGICA',
    image: '/image18.png',
    zones: [
      { label: 'Stack Tecnológico',       scale: 1,   x: 0,    y: 0   },
      { label: 'Client',                  scale: 2,   x: 1200, y: 100 },
      { label: 'API Gateway',             scale: 2,   x: 600,  y: 50  },
      { label: 'Multi-Agent Engine',      scale: 2,   x: 0,    y: 0   },
      { label: 'RAG Engine',              scale: 1.7, x: -700, y: 100 },
      { label: 'Knowledge Base',          scale: 1.7, x: -900, y: 100 },
      { label: 'Infrastructure/Data Layer', scale: 2.2, x: -320, y: -500 },
    ],
  },

  // ── 13. ANÁLISIS DE REQUERIMIENTOS - Flujo ──────────────────────────────────
  {
    id: 'requerimientos',
    type: 'flow',
    steps: 3,
    section: 'ANÁLISIS DE REQUERIMIENTOS',
    items: [
      { label: 'Elaboración de encuestas',        image: '/encuestas.jpg',      source: 'Nano Banana 2' },
      { label: 'Análisis de respuestas',           image: '/analisis.jpg',       source: 'Nano Banana 2' },
      { label: 'Identificación de requerimientos', image: '/identificacion.jpg', source: 'Nano Banana 2' },
    ],
  },

  // ── 13b. INVESTIGACIÓN - Encuesta Estudiantes ────────────────────────────────
  {
    id: 'encuesta-estudiantes',
    type: 'survey',
    steps: 3,
    section: 'ANÁLISIS DE REQUERIMIENTOS',
    label: 'Perspectiva Estudiantil',
    population: 'N = 39',
    stats: [
      {
        value: 71,
        color: '#1C4DC1',
        label: 'esperó más de 2 semanas o no siempre recibió retroalimentación',
      },
      {
        value: 89,
        color: '#D90368',
        label: 'usaría una herramienta de IA de orientación académica',
      },
      {
        value: 75,
        color: '#00b4d8',
        label: 'prefiere retroalimentación asíncrona sin esperar al tutor',
      },
    ],
  },

  // ── 13c. INVESTIGACIÓN - Encuesta Docentes ───────────────────────────────────
  {
    id: 'encuesta-docentes',
    type: 'survey',
    steps: 3,
    section: 'ANÁLISIS DE REQUERIMIENTOS',
    label: 'Perspectiva Docente',
    population: 'N = 4',
    stats: [
      {
        value: 100,
        color: '#1C4DC1',
        label: 'tarda más de 2 semanas en devolver retroalimentación de un avance',
      },
      {
        value: 75,
        color: '#D90368',
        label: 'dice que el estudiante reenvía el mismo error sin corregirlo',
      },
      {
        value: 100,
        color: '#00b4d8',
        label: 'apoyaría la adopción institucional de Thena',
      },
    ],
  },

  // ── 14. REQUERIMIENTOS FUNCIONALES ───────────────────────────────────────────
  {
    id: 'req-funcionales',
    type: 'bullets',
    steps: 5,
    twoColumn: true,
    section: 'REQUERIMIENTOS FUNCIONALES',
    label: 'Módulos del Sistema',
    bullets: [
      'Gestión Documental - carga DOCX, progresión lineal por capítulos y versionado de entregas',
      'Base de Conocimiento - criterios del tutor, normativa UPB y bibliografía en capas jerárquicas de prioridad',
      'Motor de Revisión IA - 6 agentes especializados ejecutados en paralelo sobre cada capítulo',
      'Síntesis y Retroalimentación - reporte pedagógico combinado con observaciones inline y atribución de fuente',
      'Aprobación y Seguimiento - panel del tutor, alertas de inactividad, auditoría e historial completo',
    ],
  },

  // ── 15. REQUERIMIENTOS NO FUNCIONALES ────────────────────────────────────────
  {
    id: 'req-no-funcionales',
    type: 'bullets',
    steps: 5,
    twoColumn: true,
    section: 'REQUERIMIENTOS NO FUNCIONALES',
    label: 'Categorías de Calidad',
    bullets: [
      'Usabilidad - onboarding del tutor en menos de 60 minutos, DOCX como formato principal de entrada',
      'Eficiencia - retroalimentación completa entregada en menos de 5 minutos por capítulo',
      'Fiabilidad IA - anclaje exclusivo a la base de conocimiento RAG, disponibilidad 24/7',
      'Arquitectura - hexagonal con Docker, abstracción del proveedor LLM y colas asíncronas con BullMQ',
      'Seguridad - confidencialidad de documentos por rol y autenticación con JWT',
    ],
  },

  // ── 16. DIAGRAMA DE DEPLOY ───────────────────────────────────────────────────
  {
    id: 'deploy-diagram',
    type: 'full-image',
    steps: 0,
    section: 'DIAGRAMA DE DESPLIEGUE',
    image: '/deploydiagram.png',
  },

  // ── 17. CIERRE ───────────────────────────────────────────────────────────────
  {
    id: 'cierre',
    type: 'title',
    steps: 0,
    title: '¡Gracias!',
    author: 'Dorian Ivan Ticona Vega',
    degree: 'Ingeniería de Sistemas Computacionales',
  },
]
