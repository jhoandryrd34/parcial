import React, { useState } from 'react';
import './App.css';
import FormularioNuevaTarea from './FormularioNuevaTarea';
import ListaTareas from './ListaTareas';

const App = () => {
    const [tareas, setTareas] = useState([]);
    const [filtro, setFiltro] = useState('todas');

    const agregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    };

    const toggleCompletada = (tarea) => {
        const nuevasTareas = tareas.map((t) =>
            t.titulo === tarea.titulo ? { ...t, completada: !t.completada } : t
        );
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (tarea) => {
        const nuevasTareas = tareas.filter((t) => t.titulo !== tarea.titulo);
        setTareas(nuevasTareas);
    };

    const tareasFiltradas = tareas.filter((tarea) => {
        if (filtro === 'completadas') return tarea.completada;
        if (filtro === 'noCompletadas') return !tarea.completada;
        return true;
    });

    return (
        <div>
            <h1>Gestor de Tareas</h1>
            <FormularioNuevaTarea onAgregarTarea={agregarTarea} />
            <div>
                <button onClick={() => setFiltro('todas')}>Todas</button>
                <button onClick={() => setFiltro('completadas')}>Completadas</button>
                <button onClick={() => setFiltro('noCompletadas')}>No Completadas</button>
            </div>
            <ListaTareas
                tareas={tareasFiltradas}
                onToggleCompletada={toggleCompletada}
                onEliminarTarea={eliminarTarea}
            />
        </div>
    );
};

export default App;
