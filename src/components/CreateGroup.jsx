import { useState } from "react";
import Color from "./Color";

export default function CreateGroup( {onSubmit} ) {
    const colors = [
        'rgba(179, 139, 250, 1)',
        'rgba(255, 121, 242, 1)',
        'rgba(67, 230, 252, 1)',
        'rgba(241, 149, 118, 1)',
        'rgba(0, 71, 255, 1)',
        'rgba(102, 145, 255, 1)'
    ]

    const [selectedColor, setSelectedColor] = useState(null);
    const [groupName, setGroupName] = useState("");

    

    function handleSubmit(e) {
        e.preventDefault();
        if (!groupName.trim() || !selectedColor) {
            alert("Please fill in all fields!");
            return;
        }

        // Send the data to the parent component
        onSubmit({ groupName, color: selectedColor });

        setGroupName("");
        setSelectedColor(null);
    }
    return (
        <div style={{
            width: '50vw',
            height: '33vh',
            background: 'white',
            zIndex: '1000',
            position: 'fixed',
            bottom: '33vh',
            left: '25vw'
        }}>
            <form onSubmit={handleSubmit}>
                <p>Create New Group</p>
                <div className="group-name" style={{display: 'flex'}}>
                    <p>Group Name</p>
                    <input type= "text" placeholder="Enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)}></input>
                </div>
                <div style={{display: 'flex'}}>
                    <p>Choose Color</p>
                    <div style={{display: 'flex'}}>
                        {colors.map((color, index) => (
                            <Color key={index} 
                            style={{
                                backgroundColor: color,
                                border: selectedColor === color ? '0.25rem solid black' : 'none',
                            }} 
                            onClick={() => setSelectedColor(color)}
                            />
                        ))}
                    </div>
                </div>
                <button style={{
                        textAlign: 'center'
                    }}
                    type="submit">Create</button>
            </form>
        </div>
    )
}