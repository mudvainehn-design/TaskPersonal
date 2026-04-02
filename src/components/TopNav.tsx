import { Search, Bell, Settings as SettingsIcon } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b-4 border-surface-container-low">
      <div className="max-w-[144rem] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <h1 className="text-[2.4rem] font-bold tracking-tighter text-primary font-headline">The Solar Editorial</h1>
          <nav className="hidden lg:flex items-center gap-8 font-headline text-[1.4rem]">
            <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">Todas las tareas</a>
            <a href="#" className="text-on-surface opacity-70 hover:opacity-100 transition-opacity">Completadas</a>
            <a href="#" className="text-on-surface opacity-70 hover:opacity-100 transition-opacity">Pendientes</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-60" size={18} />
            <input 
              type="text" 
              placeholder="Buscar tareas curadas..." 
              className="bg-surface-container-low border-none rounded-full pl-12 pr-6 py-2 w-64 focus:ring-2 focus:ring-primary/20 text-[1.4rem] transition-all outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-all text-on-surface-variant">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-all text-on-surface-variant">
              <SettingsIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
