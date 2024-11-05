import { useState, useEffect } from 'react';
import Card from '../Components/Card.jsx';
import { supabase } from '../Client.jsx'

function ReadCrewmates(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
                .from('crewmates')
                .select();

            setPosts(data)
        }

        fetchPosts();
    }, [props]);

    return (
        <div>
            {
                posts && posts.length > 0 ? (
                    posts.map((post) => (
                        <Card
                            key={post.id}
                            id={post.id}
                            name={post.name}
                            speed={post.speed}
                            color={post.color}
                        />
                    ))
                ) : (
                    <p className="no-crewmates-message">{'No Crewmates Yet'}</p>
                )
            }
        </div>

    )
}

export default ReadCrewmates;
