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
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-32 px-12 max-w-[1600px] mx-auto min-h-screen flex items-center justify-center">
        <p className="text-neutral-400 text-sm tracking-wider">Loading work...</p>
      </div>
    );
  }

  const firstProject = projects[0];
  const secondProject = projects[3];
  const thirdProject = projects.length > 6 ? projects[6] : (projects.length > 4 ? projects[4] : null);

  const workImage1 = '/images/work-image-1.jpg';
  const workImage2 = '/images/work-image-2.jpg';
  const workImage3 = '/images/work-image-3.jpg';

  const fallbackImage = 'https://images.pexels.com/photos/6069571/pexels-photo-6069571.jpeg?auto=compress&cs=tinysrgb&w=800';

  return (
    <div className="pt-32 px-12 max-w-[1600px] mx-auto pb-48 min-h-screen">
      <div className="flex flex-col gap-24">
        {(firstProject || workImage1) && (
          <div 
            key={firstProject?.id || 'work-image-1'} 
            className="group cursor-pointer max-w-[280px] self-end mr-0"
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
            className="group cursor-pointer max-w-[400px] self-start ml-8"
            style={{ marginTop: 'calc(-8rem - 6rem)' }}
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
            className="group cursor-pointer self-start ml-[50%]"
            style={{ marginTop: 'calc(-200px - 1rem)' }}
          >
            <div className="max-w-[295px]">
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
