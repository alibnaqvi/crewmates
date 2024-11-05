import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../Client.jsx'
import '../App.css';

function EditCrewmate() {
    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: 0, color: ""});

    const updateCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .update({ name: post.name, speed: post.speed,  color: post.color})
            .eq('id', id);

        window.location = "/";
    };

    const deleteCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .delete()
            .eq('id', id);

        window.location = "http://localhost:5173/";
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div className="form-container">
            <form className="crewmate-form">
                <label className="form-label" htmlFor="name">Name</label>
                <br/>
                <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    value={post.name}
                    onChange={handleChange}
                />
                <br/>
                <br/>

                <label className="form-label" htmlFor="speed">Speed</label>
                <br/>
                <input
                    className="form-range"
                    type="range"
                    id="speed"
                    name="speed"
                    min="0"
                    max="100"
                    value={post.speed}
                    onChange={handleChange}
                />
                <span className="form-speed">{post.speed}</span>
                <br/>
                <br/>

                <label className="form-label" htmlFor="color">Color</label>
                <br/>
                <select
                    className="form-select"
                    id="color"
                    name="color"
                    value={post.color}
                    onChange={handleChange}
                >
                    <option value="">Select Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="purple">Purple</option>
                    <option value="brown">Brown</option>
                    <option value="cyan">Cyan</option>
                    <option value="lime">Lime</option>
                </select>
                <br/>
                <br/>

                <input
                    className="form-submit"
                    type="submit"
                    value="Submit"
                    onClick={updateCrewmate}
                />

                <button className="form-delete" onClick={deleteCrewmate}>Delete</button>
            </form>
        </div>
    )
}

export default EditCrewmate
