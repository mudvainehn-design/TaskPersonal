import { Check, Clock, Calendar, Edit2, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  dueDate: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  key?: string;
}

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  const isUrgent = task.priority === 'high';

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`group relative bg-surface-container-lowest p-8 rounded-2xl transition-all duration-300 sunlight-shadow ${
        isUrgent ? 'border-l-4 border-primary' : ''
      } ${task.completed ? 'opacity-60' : ''}`}
    >
      <div className="flex justify-between items-start mb-6">
        <span className={`px-3 py-1 rounded-full text-[1rem] font-bold tracking-wider uppercase ${
          task.completed 
            ? 'bg-surface-container-highest text-on-surface-variant' 
            : isUrgent 
              ? 'bg-primary/10 text-primary' 
              : 'bg-secondary/10 text-secondary'
        }`}>
          {task.completed ? 'Finalizado' : task.priority === 'high' ? 'Alta Prioridad' : task.category}
        </span>
        
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 hover:bg-surface-container rounded-lg text-on-surface-variant transition-colors">
            <Edit2 size={16} />
          </button>
          <button 
            onClick={() => onDelete(task.id)}
            className="p-2 hover:bg-error/10 rounded-lg text-error transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <h3 className={`font-headline font-bold text-[1.8rem] leading-snug mb-4 text-on-surface group-hover:text-primary transition-colors ${
        task.completed ? 'line-through text-on-surface-variant' : ''
      }`}>
        {task.title}
      </h3>
      
      <p className="font-body text-[1.3rem] text-on-surface-variant leading-relaxed mb-8">
        {task.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {task.completed ? (
            <Check className="text-primary" size={16} />
          ) : (
            <Calendar className="text-secondary opacity-60" size={16} />
          )}
          <span className={`font-label text-[1.1rem] ${task.completed ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
            {task.completed ? 'Completada' : task.dueDate}
          </span>
        </div>

        <button 
          onClick={() => onToggle(task.id)}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all active:scale-90 ${
            task.completed 
              ? 'bg-primary border-primary text-on-primary' 
              : 'border-primary-container text-primary-container hover:bg-primary-container hover:text-white'
          }`}
        >
          <Check size={20} strokeWidth={3} />
        </button>
      </div>
    </motion.article>
  );
}
