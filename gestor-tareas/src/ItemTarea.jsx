import React from 'react';

const ItemTarea = ({ tarea, onToggleCompletada, onEliminarTarea }) => {
    return (
        <div>
            <h3 style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                {tarea.titulo}
            </h3>
            <p>{tarea.descripcion}</p>
            <button onClick={() => onToggleCompletada(tarea)}>
                {tarea.completada ? 'Marcar Incompleta' : 'Marcar Completa'}
            </button>
            <button onClick={() => onEliminarTarea(tarea)}>Eliminar</button>
        </div>
    );
};

export default ItemTarea;
