import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  category: string;
  image_url: string;
  year: number;
  description?: string;
}

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      if (!supabase) {
        // Si no hay configuración de Supabase, no hacemos llamada remota
        setProjects([]);
        return;
      }
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const firstProject = projects[0];
  const secondProject = projects[3];
  const thirdProject = projects.length > 6 ? projects[6] : (projects.length > 4 ? projects[4] : null);

  const workImage1 = '/images/work-image-1.jpg';
  const workImage2 = '/images/work-image-2.jpg';
  const workImage3 = '/images/work-image-3.jpg';

  const fallbackImage = 'https://images.pexels.com/photos/6069571/pexels-photo-6069571.jpeg?auto=compress&cs=tinysrgb&w=800';

  return (
    <div className="pt-28 md:pt-32 px-6 md:px-12 max-w-[1600px] mx-auto pb-32 md:pb-48 min-h-screen">
      <div className="flex flex-col gap-16 md:gap-24">
        {(firstProject || workImage1) && (
          <div 
            key={firstProject?.id || 'work-image-1'} 
            className="group cursor-pointer w-full max-w-sm md:max-w-[280px] self-stretch md:self-end mr-0"
          >
            <div className="overflow-hidden bg-neutral-100 aspect-[3/4] mb-4">
              <img
                src={workImage1}
                alt={firstProject?.title || "Work Project 1"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = firstProject?.image_url || fallbackImage;
                }}
              />
            </div>
            <p className="text-xs text-neutral-400 tracking-wide text-right">
              {firstProject ? `${firstProject.category} • ${firstProject.year}` : "Category • Year"}
            </p>
          </div>
        )}

        {(secondProject || workImage2) && (
          <div 
            key={secondProject?.id || 'work-image-2'} 
            className="group cursor-pointer w-full max-w-md md:max-w-[400px] self-stretch md:self-start md:ml-8 md:-mt-32"
          >
            <div className="overflow-hidden bg-neutral-100 aspect-[3/4] mb-4">
              <img
                src={workImage2}
                alt={secondProject?.title || "Work Project 2"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = secondProject?.image_url || fallbackImage;
                }}
              />
            </div>
            <p className="text-xs text-neutral-400 tracking-wide text-right">
              {secondProject ? `${secondProject.category} • ${secondProject.year}` : "Category • Year"}
            </p>
          </div>
        )}

        {(thirdProject || workImage3) && (
          <div 
            key={thirdProject?.id || 'work-image-3'} 
            className="group cursor-pointer w-full max-w-sm md:max-w-[295px] self-stretch md:self-start md:ml-[50%] md:-mt-[200px]"
          >
            <div className="overflow-hidden bg-neutral-100 aspect-[3/4] mb-4">
              <img
                src={workImage3}
                alt={thirdProject?.title || "Work Project 3"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = thirdProject?.image_url || fallbackImage;
                }}
              />
            </div>
            <p className="text-xs text-neutral-400 tracking-wide text-right">
              {thirdProject ? `${thirdProject.category} • ${thirdProject.year}` : "Category • Year"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
