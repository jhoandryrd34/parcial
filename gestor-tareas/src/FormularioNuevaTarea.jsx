import React, { useState } from 'react';

const FormularioNuevaTarea = ({ onAgregarTarea }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !descripcion) return;
        onAgregarTarea({ titulo, descripcion, completada: false });
        setTitulo('');
        setDescripcion('');
    };

    return (
        <form onSubmit={manejarSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default FormularioNuevaTarea;
