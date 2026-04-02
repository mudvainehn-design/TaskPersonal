import { Camera, Link as LinkIcon, Brush, MapPin, X, Plus, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function SettingsView() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-[100rem] mx-auto px-12 py-12"
    >
      <header className="mb-16">
        <h2 className="font-headline font-extrabold text-[4.2rem] tracking-tighter text-on-surface mb-2">Ajustes de Perfil</h2>
        <p className="text-on-surface-variant text-[1.6rem] font-body max-w-2xl">
          Personaliza tu espacio de trabajo y cómo te presentas ante el equipo. El diseño es la inteligencia hecha visible.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl sunlight-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 primary-gradient opacity-5 rounded-bl-[100%] transition-all group-hover:scale-110" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-surface p-1 mb-6 sunlight-shadow bg-surface overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/curator/400/400" 
                  alt="Profile Large" 
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button className="bg-surface-container-high text-on-surface px-6 py-2 rounded-full font-label text-[1.1rem] font-bold hover:bg-surface-container-highest transition-colors mb-2">
                Cambiar Imagen
              </button>
              <p className="text-on-surface-variant text-[1rem] opacity-60">JPG, PNG o GIF. Máx 5MB.</p>
            </div>
          </div>

          <div className="bg-secondary/5 p-8 rounded-xl border border-secondary/10">
            <h4 className="font-headline font-bold text-[1.4rem] text-secondary mb-4">Estado del Plan</h4>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[1.2rem] font-medium">Curator Pro</span>
              <span className="bg-secondary text-on-primary px-3 py-1 rounded-full text-[1rem] font-bold">Activo</span>
            </div>
            <p className="text-on-surface-variant text-[1.1rem]">Tu próxima renovación es el 12 de Octubre, 2024.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest p-12 rounded-xl sunlight-shadow">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-on-surface-variant font-label text-[1.1rem] font-bold tracking-wider uppercase pl-2">Nombre</label>
                  <input 
                    type="text" 
                    defaultValue="Elena"
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 text-[1.4rem] font-body text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-on-surface-variant font-label text-[1.1rem] font-bold tracking-wider uppercase pl-2">Apellidos</label>
                  <input 
                    type="text" 
                    defaultValue="Soler"
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 text-[1.4rem] font-body text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-on-surface-variant font-label text-[1.1rem] font-bold tracking-wider uppercase pl-2">Avatar URL</label>
                <div className="flex gap-4">
                  <input 
                    type="url" 
                    defaultValue="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                    className="flex-grow bg-surface-container-low border-none rounded-xl px-6 py-4 text-[1.4rem] font-body text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                  />
                  <button className="bg-surface-container-low p-4 rounded-xl hover:bg-surface-container transition-colors text-on-surface-variant">
                    <LinkIcon size={20} />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-on-surface-variant font-label text-[1.1rem] font-bold tracking-wider uppercase pl-2">Mis campos</label>
                <div className="space-y-4">
                  {[
                    { label: 'Especialidad', value: 'Diseño Editorial & UI', icon: Brush, color: 'primary' },
                    { label: 'Ubicación', value: 'Madrid, España', icon: MapPin, color: 'secondary' }
                  ].map((field, i) => (
                    <div key={i} className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-outline-variant/10">
                      <div className={`w-10 h-10 rounded-full bg-${field.color}/10 flex items-center justify-center`}>
                        <field.icon size={18} className={`text-${field.color}`} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-[1.2rem] font-bold text-on-surface">{field.label}</p>
                        <p className="text-[1.1rem] text-on-surface-variant">{field.value}</p>
                      </div>
                      <button className="text-on-surface-variant/40 hover:text-error transition-colors">
                        <X size={18} />
                      </button>
                    </div>
                  ))}
                  <button className="w-full py-4 border-2 border-dashed border-outline-variant/30 rounded-xl text-on-surface-variant font-medium hover:bg-surface transition-all flex items-center justify-center gap-2">
                    <Plus size={18} />
                    Añadir campo personalizado
                  </button>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center justify-end gap-6 border-t border-outline-variant/10">
                <button className="text-on-surface-variant font-bold text-[1.3rem] hover:text-on-surface transition-colors">
                  Descartar cambios
                </button>
                <button className="w-full sm:w-auto px-12 py-5 primary-gradient text-on-primary font-headline font-bold text-[1.5rem] rounded-xl sunlight-shadow hover:scale-[1.02] active:scale-95 transition-all">
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 p-8 border-2 border-outline-variant/10 rounded-xl flex flex-col md:flex-row items-center gap-8 bg-error/5">
            <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-error" size={24} />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h5 className="text-[1.4rem] font-bold text-on-surface">Zona de Peligro</h5>
              <p className="text-[1.2rem] text-on-surface-variant">Al eliminar tu cuenta, todos tus datos y tareas serán borrados permanentemente.</p>
            </div>
            <button className="px-6 py-3 text-error font-bold text-[1.2rem] border border-error/30 rounded-lg hover:bg-error hover:text-on-primary transition-all">
              Eliminar Cuenta
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
