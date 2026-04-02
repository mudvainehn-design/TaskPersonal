import { PenLine } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAdd(value);
      setValue('');
    }
  };

  return (
    <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
      <div className="lg:col-span-8">
        <h2 className="font-headline font-extrabold text-[4.2rem] leading-tight mb-4 text-on-surface">
          Organiza tu <span className="text-primary italic">Atmósfera.</span>
        </h2>
        <form onSubmit={handleSubmit} className="relative group">
          <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="¿Qué obra maestra crearás hoy?" 
            className="w-full bg-surface-container-high border-none rounded-xl px-8 py-6 text-[1.8rem] font-body text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/10 transition-all outline-none sunlight-shadow"
          />
        </form>
      </div>
      <div className="lg:col-span-4">
        <button 
          onClick={handleSubmit}
          className="w-full py-6 px-8 rounded-xl bg-primary text-on-primary font-headline font-bold text-[1.8rem] flex items-center justify-center gap-4 hover:bg-primary-dim transition-all shadow-xl shadow-primary/10 active:scale-95"
        >
          Añadir a la Colección
          <PenLine size={24} />
        </button>
      </div>
    </div>
  );
}
