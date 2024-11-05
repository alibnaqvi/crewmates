import { useState } from 'react';
import { supabase } from '../Client.jsx';
import '../App.css';

function AddCrewmate() {
    const [post, setPost] = useState({ name: "", speed: 0, color: "" });

    const addCrewmate = async (event) => {
        event.preventDefault();

        await supabase
            .from('crewmates')
            .insert({ name: post.name, speed: post.speed, color: post.color })
            .select();

        window.location = "/";
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
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
                    onClick={addCrewmate}
                />
            </form>
        </div>
    );
}

export default AddCrewmate;
