import {create} from 'zustand';

const colorTema = create((set) => ({
  tema: 'claro', 
  cambiarTema: () => set((state) => ({tema: state.tema === 'claro' ? 'oscuro' : 'claro',})),
  
}));

export default colorTema;