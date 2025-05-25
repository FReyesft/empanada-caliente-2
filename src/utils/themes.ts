import { Theme } from "../interfaces/game-themes.interfarce";
import { shirtSharp, map, calendarSharp, tvSharp, football, colorFilterOutline, musicalNote, pizza } from 'ionicons/icons';

export const themes: Theme[] = [
	{ id: 0, name: 'TODOS', icon: colorFilterOutline, color: '#777' },
	{ id: 1, name: 'CULTURA', icon: shirtSharp, color: '#EE6757' },
	{ id: 2, name: 'GEOGRAFÍA Y LUGARES DE INTERES', icon: map, color: '#FACB12' },
	{ id: 3, name: 'HISTORIA', icon: calendarSharp, color: '#0C1421' },
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
	{ id: 3, idTheme: 1, question: "Ciudades" },
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

	// Cultura
	{ id: 14, idTheme: 1, question: "Bailes" },
	{ id: 15, idTheme: 1, question: "Festividades" },
	{ id: 16, idTheme: 1, question: "Comidas" },
	{ id: 17, idTheme: 1, question: "Escritores" },
	{ id: 18, idTheme: 1, question: "Cantantes" },
	{ id: 19, idTheme: 1, question: "Deportes" },
	{ id: 20, idTheme: 1, question: "Leyendas y mitos" },
	{ id: 21, idTheme: 1, question: "Celebraciones y ferias" },
	{ id: 22, idTheme: 1, question: "Discotecas reconocidas" },
	{ id: 23, idTheme: 1, question: "Groserias" },

	// Geografía y Lugares de Interés
	{ id: 24, idTheme: 2, question: "Parques" },
	{ id: 25, idTheme: 2, question: "Discotecas reconocidas" },
	{ id: 26, idTheme: 2, question: "Moteles" },
	{ id: 27, idTheme: 2, question: "Hoteles" },
	{ id: 28, idTheme: 2, question: "Municipios" },
	{ id: 29, idTheme: 2, question: "Desiertos del mundo" },
	{ id: 30, idTheme: 2, question: "Islas famosas del mundo" },
	{ id: 31, idTheme: 2, question: "Fronteras de Colombia con otros países" },
	{ id: 32, idTheme: 2, question: "Ciudades" },
	{ id: 33, idTheme: 2, question: "Capitales" },

	// Historia
	{ id: 34, idTheme: 3, question: "Presidentes" },
	{ id: 37, idTheme: 3, question: "Conflictos armados" },
	{ id: 38, idTheme: 3, question: "Revoluciones" },
	{ id: 42, idTheme: 3, question: "Pactos y tratados históricos" },
	{ id: 43, idTheme: 3, question: "Monumentos" },

	// Cine y Televisión
	{ id: 44, idTheme: 4, question: "Actores" },
	{ id: 45, idTheme: 4, question: "Telenovelas" },
	{ id: 46, idTheme: 4, question: "Series de televisión" },
	{ id: 47, idTheme: 4, question: "Ganadores de premios óscar" },
	{ id: 48, idTheme: 4, question: "Películas de terror" },
	{ id: 50, idTheme: 4, question: "Series de comedia" },
	{ id: 51, idTheme: 4, question: "Películas" },

	// Deportes
	{ id: 54, idTheme: 5, question: "Equipos de ciclismo famosos" },
	{ id: 55, idTheme: 5, question: "Jugadores de futbol profesionales" },
	{ id: 56, idTheme: 5, question: "Ciclistas profesionales" },
	{ id: 57, idTheme: 5, question: "Atletas olímpicos" },
	{ id: 58, idTheme: 5, question: "Selecciones de fútbol ganadoras de la Copa Mundial" },
	{ id: 59, idTheme: 5, question: "Records olímpicos" },
	{ id: 60, idTheme: 5, question: "Deportes extremos" },
	{ id: 61, idTheme: 5, question: "Entrenadores de fútbol" },
	{ id: 63, idTheme: 5, question: "Equipos de béisbol" },
	{ id: 2, idTheme: 5, question: "Equipos de futbol" },

	// Música
	{ id: 64, idTheme: 6, question: "Géneros musicales" },
	{ id: 65, idTheme: 6, question: "Festivales" },
	{ id: 66, idTheme: 6, question: "Instrumentos" },
	{ id: 67, idTheme: 6, question: "Bandas de rock" },
	{ id: 68, idTheme: 6, question: "Canciones" },
	{ id: 69, idTheme: 6, question: "Compositores" },
	{ id: 70, idTheme: 6, question: "Grupos de salsa" },
	{ id: 71, idTheme: 6, question: "Artistas de reggaetón" },
	{ id: 72, idTheme: 6, question: "Cantantes" },

	// Comida
	{ id: 74, idTheme: 7, question: "Platos típicos" },
	{ id: 75, idTheme: 7, question: "Postres" },
	{ id: 76, idTheme: 7, question: "Bebidas no alcohólicas" },
	{ id: 77, idTheme: 7, question: "Ingredientes" },
	{ id: 78, idTheme: 7, question: "Recetas" },
	{ id: 79, idTheme: 7, question: "Frutas" },
	{ id: 80, idTheme: 7, question: "Platos famosos" },
	{ id: 81, idTheme: 7, question: "Sopas" },
	{ id: 82, idTheme: 7, question: "Tipos de café" },
	{ id: 85, idTheme: 7, question: "Bebidas alcohólicas" },
];