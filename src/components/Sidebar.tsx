import { 
  LayoutGrid, 
  Calendar, 
  User, 
  Briefcase, 
  Settings, 
  Archive, 
  Trash2, 
  Plus 
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'today', label: 'Hoy', icon: LayoutGrid },
    { id: 'upcoming', label: 'Próximas', icon: Calendar },
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'work', label: 'Trabajo', icon: Briefcase },
    { id: 'settings', label: 'Ajustes', icon: Settings },
  ];

  return (
    <aside className="hidden md:flex flex-col h-screen w-[28rem] fixed left-0 top-0 bg-surface-container-low py-12 z-50">
      <div className="px-8 mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-container overflow-hidden sunlight-shadow">
            <img 
              src="https://picsum.photos/seed/curator/200/200" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="font-headline font-bold text-primary text-[1.8rem]">El Curador</h2>
            <p className="text-[1.125rem] text-on-surface-variant opacity-70">Productividad como Arte</p>
          </div>
        </div>
        
        <button className="w-full py-4 px-6 rounded-xl bg-primary text-on-primary font-headline font-bold text-[1.4rem] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20">
          <Plus size={18} />
          Crear Tarea
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center gap-4 pl-8 py-3 transition-all duration-200 hover:translate-x-2 text-left ${
              currentView === item.id 
                ? 'text-primary font-bold bg-surface-container-lowest rounded-r-full' 
                : 'text-on-surface-variant opacity-70 hover:opacity-100'
            }`}
          >
            <item.icon size={20} />
            <span className="text-[1.125rem]">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto px-8 space-y-4">
        <div className="h-[1px] bg-outline-variant opacity-15" />
        <button className="flex items-center gap-4 text-on-surface-variant pl-2 py-2 transition-transform duration-200 hover:translate-x-2 opacity-70 hover:opacity-100 w-full text-left">
          <Archive size={20} />
          <span className="text-[1.125rem]">Archivo</span>
        </button>
        <button className="flex items-center gap-4 text-on-surface-variant pl-2 py-2 transition-transform duration-200 hover:translate-x-2 opacity-70 hover:opacity-100 w-full text-left">
          <Trash2 size={20} />
          <span className="text-[1.125rem]">Papelera</span>
        </button>
      </div>
    </aside>
  );
}
