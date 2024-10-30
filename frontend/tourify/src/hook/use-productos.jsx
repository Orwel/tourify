import { useState, useEffect } from 'react';
import { useSupabase } from '../context/supabase-context';


export const useProductos = () => {
  const { supabase } = useSupabase(); 
  const [productos, setProductos] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true); 
      const { data, error } = await supabase
        .from('productos') 
        .select('*'); 

      if (error) {
        setError(error); 
        setLoading(false); 
        return;
      }

      setProductos(data);
      setLoading(false);
    };

    fetchProductos(); 
  }, [supabase]); 

  return { productos, loading, error }; 
};