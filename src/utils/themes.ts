import { Theme } from "../interfaces/game-themes.interfarce";
import { shirtSharp, map, calendarSharp, tvSharp, football, colorFilterOutline, musicalNote, pizza } from 'ionicons/icons';

export const themes: Theme[] = [
  { id: 0, name: 'TODOS', icon: colorFilterOutline, color: '#777' },
  { id: 1, name: 'CULTURA COLOMBIANA', icon: shirtSharp, color: '#EE6757' },
  { id: 2, name: 'GEOGRAFÍA Y LUGARES DE INTERES', icon: map, color: '#FACB12' },
  { id: 3, name: 'HISTORIA COLOMBIANA', icon: calendarSharp, color: '#0C1421' },
  { id: 4, name: 'CINE Y TELEVISIÓN', icon: tvSharp, color: '#003AFF' },
  { id: 5, name: 'DEPORTES', icon: football, color: '#B81928' },
  { id: 6, name: 'MÚSICA', icon: musicalNote, color: '#888' },
  { id: 7, name: 'COMIDA Y BEBIDA', icon: pizza, color: '#a7b3cc' },
];

export interface Question {
	id: number;
	idTheme: number;
	question: string;
}

export const questions: Question[] = [
	{ id: 1, idTheme: 1, question: "Colores" },
	{ id: 3, idTheme: 1, question: "Ciudades de Colombia" },
	{ id: 4, idTheme: 2, question: "Montañas y Ríos" },
	{ id: 5, idTheme: 2, question: "Lugares Turísticos" },
	{ id: 6, idTheme: 2, question: "Ciudades del mundo" },
	{ id: 7, idTheme: 3, question: "Eventos Históricos" },
	{ id: 8, idTheme: 3, question: "Personajes Importantes" },
	{ id: 9, idTheme: 3, question: "Periodos Históricos" },
	{ id: 10, idTheme: 4, question: "Películas" },
	{ id: 11, idTheme: 4, question: "Directores de Cine" },
	{ id: 12, idTheme: 4, question: "Programas de Televisión" },
	{ id: 13, idTheme: 5, question: "Deportistas de futbol" },
	
	// Cultura Colombiana
	{ id: 14, idTheme: 1, question: "Bailes típicos de Colombia" },
	{ id: 15, idTheme: 1, question: "Festividades colombianas" },
	{ id: 16, idTheme: 1, question: "Comidas típicas colombianas" },
	{ id: 17, idTheme: 1, question: "Escritores colombianos" },
	{ id: 18, idTheme: 1, question: "Cantantes colombianos" },
	{ id: 19, idTheme: 1, question: "Deportes tradicionales colombianos" },
	{ id: 20, idTheme: 1, question: "Leyendas y mitos colombianos" },
	{ id: 21, idTheme: 1, question: "Celebraciones y ferias colombianas" },
	{ id: 22, idTheme: 1, question: "Arte y artesanía colombiana" },
	{ id: 23, idTheme: 1, question: "Palabras del dialecto colombiano" },
	
	// Geografía y Lugares de Interés
	{ id: 24, idTheme: 2, question: "Parques nacionales de Colombia" },
	{ id: 25, idTheme: 2, question: "Volcanes de Colombia" },
	{ id: 26, idTheme: 2, question: "Ríos más largos del mundo" },
	{ id: 27, idTheme: 2, question: "Montañas más altas de Colombia" },
	{ id: 28, idTheme: 2, question: "Lagos famosos del mundo" },
	{ id: 29, idTheme: 2, question: "Desiertos del mundo" },
	{ id: 30, idTheme: 2, question: "Islas famosas del mundo" },
	{ id: 31, idTheme: 2, question: "Fronteras de Colombia con otros países" },
	{ id: 32, idTheme: 2, question: "Ciudades importantes de Sudamérica" },
	{ id: 33, idTheme: 2, question: "Capitales de países asiáticos" },
	
	// Historia Colombiana
	{ id: 34, idTheme: 3, question: "Presidentes de Colombia" },
	{ id: 35, idTheme: 3, question: "Batallas importantes de Colombia" },
	{ id: 36, idTheme: 3, question: "Independencia de Colombia" },
	{ id: 37, idTheme: 3, question: "Conflictos armados en Colombia" },
	{ id: 38, idTheme: 3, question: "Revoluciones en Colombia" },
	{ id: 39, idTheme: 3, question: "Reformas sociales en Colombia" },
	{ id: 40, idTheme: 3, question: "Hechos históricos del siglo XIX en Colombia" },
	{ id: 41, idTheme: 3, question: "Movimientos indígenas en Colombia" },
	{ id: 42, idTheme: 3, question: "Pactos y tratados históricos en Colombia" },
	{ id: 43, idTheme: 3, question: "Monumentos históricos de Colombia" },
	
	// Cine y Televisión
	{ id: 44, idTheme: 4, question: "Actores colombianos famosos" },
	{ id: 45, idTheme: 4, question: "Telenovelas colombianas" },
	{ id: 46, idTheme: 4, question: "Series de televisión más vistas" },
	{ id: 47, idTheme: 4, question: "Premios Óscar ganados por colombianos" },
	{ id: 48, idTheme: 4, question: "Películas de terror icónicas" },
	{ id: 49, idTheme: 4, question: "Películas basadas en libros" },
	{ id: 50, idTheme: 4, question: "Series de comedia famosas" },
	{ id: 51, idTheme: 4, question: "Películas de animación populares" },
	{ id: 52, idTheme: 4, question: "Cine de ciencia ficción" },
	{ id: 53, idTheme: 4, question: "Directores de cine colombianos" },
	
	// Deportes
	{ id: 54, idTheme: 5, question: "Equipos de ciclismo famosos" },
	{ id: 55, idTheme: 5, question: "Jugadores de baloncesto destacados" },
	{ id: 56, idTheme: 5, question: "Ganadores del Tour de Francia" },
	{ id: 57, idTheme: 5, question: "Atletas olímpicos colombianos" },
	{ id: 58, idTheme: 5, question: "Selecciones de fútbol ganadoras de la Copa Mundial" },
	{ id: 59, idTheme: 5, question: "Records olímpicos" },
	{ id: 60, idTheme: 5, question: "Deportes extremos" },
	{ id: 61, idTheme: 5, question: "Entrenadores de fútbol famosos" },
	{ id: 62, idTheme: 5, question: "Clubes de rugby famosos" },
	{ id: 63, idTheme: 5, question: "Equipos de béisbol de las Grandes Ligas" },
	{ id: 2,  idTheme: 5,  question:  "Equipos de futbol" },
	
	// Música
	{ id: 64, idTheme: 6, question: "Géneros musicales colombianos" },
	{ id: 65, idTheme: 6, question: "Festivales de música en Colombia" },
	{ id: 66, idTheme: 6, question: "Instrumentos típicos colombianos" },
	{ id: 67, idTheme: 6, question: "Bandas de rock colombianas" },
	{ id: 68, idTheme: 6, question: "Canciones colombianas populares" },
	{ id: 69, idTheme: 6, question: "Compositores de música clásica colombianos" },
	{ id: 70, idTheme: 6, question: "Grupos de salsa famosos" },
	{ id: 71, idTheme: 6, question: "Artistas de reggaetón" },
	{ id: 72, idTheme: 6, question: "Cantantes de vallenato" },
	{ id: 73, idTheme: 6, question: "Conciertos memorables en Colombia" },
	{ id: 84, idTheme: 6, question: "Canciones de vallenato"},
	
	// Comida
	{ id: 74, idTheme: 7, question: "Platos típicos colombianos" },
	{ id: 75, idTheme: 7, question: "Postres colombianos" },
	{ id: 76, idTheme: 7, question: "Bebidas tradicionales de Colombia" },
	{ id: 77, idTheme: 7, question: "Ingredientes de la bandeja paisa" },
	{ id: 78, idTheme: 7, question: "Recetas de arepas" },
	{ id: 79, idTheme: 7, question: "Frutas exóticas de Colombia" },
	{ id: 80, idTheme: 7, question: "Platos famosos de la comida callejera" },
	{ id: 81, idTheme: 7, question: "Sopas tradicionales colombianas" },
	{ id: 82, idTheme: 7, question: "Tipos de café en Colombia" },
	{ id: 83, idTheme: 7, question: "Técnicas culinarias colombianas" },
	{ id: 85, idTheme: 7, question: "Bebidas alcohólicas" },
];