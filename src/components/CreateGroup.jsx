import { useState } from "react";
import "./CreateGroup.css"
import Color from "./Color";

export default function CreateGroup( {onSubmit, groups} ) {
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

        const groupExists = groups.some(
            (group) => group.groupName.toLowerCase() === getTrimmedName(groupName).toLowerCase()
        );

        if (groupExists) {
            alert("Group name already exists!");
            return;
        }

        // Send the data to the parent component
        onSubmit({ groupName, color: selectedColor });

        setGroupName("");
        setSelectedColor(null);
    }
    return (
        <div className="container" style={{
            //width: '50vw',
            height: '33vh',
            background: 'white',
            zIndex: '1000',
            position: 'fixed',
            // bottom: '33vh',
            // left: '25vw'
        }}>
            <form onSubmit={handleSubmit} style={{
                width: '100%',
                position: 'relative',
                left: '2.5vw',
                top: '3vh'
            }}>
                <p style={{
                    fontFamily: 'Roboto',
                    fontSize: '2rem',
                    fontWeight: '500',
                    lineHeight: '3rem',
                    letterSpacing: '0.035em'
                }}>Create New Group</p>
                <div className="group-name" style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2vw',
                    marginTop: '2vh'}}>
                    <p style={{
                        fontFamily: 'Roboto',
                        fontWeight: '500',
                        fontSize: '1.75rem',
                        lineHeight: '2.75rem',
                        letterSpacing: '0.035em'
                    }}>Group Name</p>
                    <div className="input-div" style={{
                        //width: '50%',
                        height: '4vh',
                    }}>
                        <input type= "text" placeholder="Enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '4rem',
                                padding: '1.3rem',
                                fontSize: '1.3rem',
                                fontFamily: 'Roboto'
                            }}
                        ></input>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2vw',
                    marginTop: '3vh'}}>
                    <p style={{
                        fontFamily: 'Roboto',
                        fontWeight: '500',
                        fontSize: '1.75rem',
                        lineHeight: '2.75rem',
                        letterSpacing: '0.035em'
                    }}>Choose Color</p>
                    <div style={{
                        display: 'flex',
                        gap: '2vw'}}>
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
                <button className="button" style={{
                        textAlign: 'center',
                        // float: 'right',
                        // position: 'relative',
                        // right: '5vw',
                        // top: '4vh',
                        background: '#001F8B',
                        color: 'white',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        // width: '8vw',
                        // height: '4vh',
                        borderRadius: '0.75rem',
                        border: 'none',
                        fontSize: '1.3rem'
                    }}
                    type="submit">Create</button>
            </form>
        </div>
    )
}

function getTrimmedName(name) {
    const trimmedName = name.trim(); // Remove leading and trailing spaces
    const normalizedName = trimmedName.replace(/\s+/g, ' ');
    return normalizedName;
}