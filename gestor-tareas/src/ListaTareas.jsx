import React from 'react';
import ItemTarea from './ItemTarea';

const ListaTareas = ({ tareas, onToggleCompletada, onEliminarTarea }) => {
    return (
        <div>
            {tareas.map((tarea) => (
                <ItemTarea
                    key={tarea.titulo}
                    tarea={tarea}
                    onToggleCompletada={onToggleCompletada}
                    onEliminarTarea={onEliminarTarea}
                />
            ))}
        </div>
    );
};

export default ListaTareas;
