import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import TaskInput from './components/TaskInput';
import TaskCard, { Task } from './components/TaskCard';
import SettingsView from './components/SettingsView';
import { Lightbulb, Plus, LayoutGrid, Settings } from 'lucide-react';

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Finalizar el Sistema de Diseño Editorial para el lanzamiento solar',
    description: 'Refinar las reglas de capas tonales y asegurar que la escala tipográfica sea consistente en todas las superficies.',
    priority: 'high',
    category: 'Diseño',
    dueDate: 'Hoy, 5:00 PM',
    completed: false,
  },
  {
    id: '2',
    title: 'Revisar licencias tipográficas para Manrope & Plus Jakarta',
    description: 'Confirmar todos los derechos comerciales para la nueva interfaz de la aplicación web y materiales de marketing.',
    priority: 'medium',
    category: 'Trabajo',
    dueDate: 'Quedan 2 días',
    completed: false,
  },
  {
    id: '3',
    title: 'Seleccionar paleta de colores rojo cálido (#B7131A)',
    description: 'Definir los tokens primarios, secundarios y terciarios basados en la lógica de Material Design 3.',
    priority: 'low',
    category: 'Finalizado',
    dueDate: 'Completada',
    completed: true,
  },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [currentView, setCurrentView] = useState('today');
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description: 'Nueva tarea añadida desde la colección.',
      priority: 'medium',
      category: 'Personal',
      dueDate: 'Próximamente',
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="min-h-screen flex">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <main className="flex-1 md:ml-[28rem] flex flex-col">
        <TopNav />
        
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {currentView === 'settings' ? (
              <SettingsView key="settings" />
            ) : (
              <motion.section 
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-[120rem] mx-auto px-8 py-12 w-full"
              >
                <TaskInput onAdd={handleAddTask} />

                <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
                  <div className="flex items-center gap-3">
                    {(['all', 'completed', 'pending'] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-2 rounded-full font-label font-bold text-[1.2rem] transition-all hover:translate-y-[-0.2rem] ${
                          filter === f 
                            ? 'bg-primary text-on-primary' 
                            : 'bg-surface-container-highest text-on-surface-variant font-medium'
                        }`}
                      >
                        {f === 'all' ? 'Todo' : f === 'completed' ? 'Completadas' : 'Pendientes'}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant font-label text-[1.2rem]">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> 
                      {activeCount} Tareas Activas
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" /> 
                      {completedCount} Terminadas
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredTasks.map((task) => (
                      <TaskCard 
                        key={task.id} 
                        task={task} 
                        onToggle={handleToggleTask}
                        onDelete={handleDeleteTask}
                      />
                    ))}
                  </AnimatePresence>

                  {/* Quote Card */}
                  <article className="hidden lg:flex flex-col justify-center items-center p-8 rounded-2xl primary-gradient text-on-primary sunlight-shadow">
                    <Lightbulb size={48} className="mb-6" />
                    <p className="text-center font-headline font-bold text-[2rem] leading-tight">
                      "La eficiencia consiste en hacer las cosas bien; la efectividad en hacer las cosas correctas."
                    </p>
                    <span className="mt-4 font-label text-[1.2rem] opacity-70">— Peter Drucker</span>
                  </article>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Nav */}
        <footer className="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl z-50 border-t border-outline-variant/10">
          <div className="flex justify-around items-center py-4">
            <button 
              onClick={() => setCurrentView('today')}
              className={`flex flex-col items-center gap-1 ${currentView === 'today' ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              <LayoutGrid size={24} />
              <span className="text-[1rem] font-bold">Hoy</span>
            </button>
            <div className="relative -top-8">
              <button className="w-16 h-16 rounded-full bg-primary text-on-primary shadow-xl shadow-primary/30 flex items-center justify-center active:scale-95 transition-transform">
                <Plus size={30} />
              </button>
            </div>
            <button 
              onClick={() => setCurrentView('settings')}
              className={`flex flex-col items-center gap-1 ${currentView === 'settings' ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              <Settings size={24} />
              <span className="text-[1rem] font-bold">Ajustes</span>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}

