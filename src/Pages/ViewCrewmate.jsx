import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client.jsx';

function ViewCrewmate() {
    const { id } = useParams();
    const [crewmate, setCrewmate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCrewmate = async () => {
            try {
                const { data, error } = await supabase
                    .from('crewmates')
                    .select()
                    .eq('id', id)
                    .single();

                if (error) throw error;

                setCrewmate(data);
            }

            catch (err) {
                setError(err.message);
            }

            finally {
                setLoading(false);
            }
        };

        fetchCrewmate();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error: {error}</p>;

    if (!crewmate) return <p>No crewmate found.</p>;

    return (
        <div className="crewmate-info">
            <h1>{crewmate.name}</h1>
            <p>Speed: {crewmate.speed}</p>
            <p>Color: {crewmate.color}</p>
        </div>
    );
}

export default ViewCrewmate;
