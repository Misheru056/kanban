export type Tarea = {
    id: number;
    titulo: string;
    descripcion?: string;
    estado: string;
    subtareas: Subtarea[]
    porcentajeSubtareas?: number
}

export type Subtarea = {
    id: number;
    texto: string;
    completada: boolean;
}

export type Usuario = {
    username: string;
    passwd: string;
}