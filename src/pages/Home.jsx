import Title from "../components/Title";
import './Home.css';
import './MobileView.css'
import { useEffect, useState } from "react";
import CreateGroup from "../components/CreateGroup";
import Group from "../components/Group";
import Empty from "../components/Empty";
import TextViewer from "../components/TextViewer";

export default function Home() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [groups, setGroups] = useState(() => {
        const storedGroups = localStorage.getItem("groups");
        return storedGroups ? JSON.parse(storedGroups) : [];
    });

    const [selectedGroup, setSelectedGroup] = useState(() => {
        const storedGroup = localStorage.getItem('selected-group');
        return storedGroup ? JSON.parse(storedGroup) : null;
    });
    const [text, setText] = useState(localStorage.getItem('text'));
    // Load groups from localStorage on component mount
    useEffect(() => {
        const storedGroups = localStorage.getItem("groups");
        if (storedGroups) {
            setGroups(JSON.parse(storedGroups)); // Parse the JSON string back into an array
        }
    }, []); // Empty dependency array ensures this runs only once

    function addNoteToGroup(groupName, noteContent) {
        setGroups((prevGroups) => {
            const updatedGroups = prevGroups.map((group) => {
                if (group.groupName === groupName) {
                    return {
                        ...group,
                        notes: [...(group.notes || []), { content: noteContent, createdAt: new Date() }]
                    };
                }
                return group;
            });
    
            // Save updated groups to localStorage
            localStorage.setItem("groups", JSON.stringify(updatedGroups));
            
            const updatedSelectedGroup = updatedGroups.find(group => group.groupName === groupName);
            setSelectedGroup(updatedSelectedGroup);  // Update the selectedGroup state

            return updatedGroups;
        });
    }
    // Update localStorage whenever groups change
    useEffect(() => {
        localStorage.setItem("groups", JSON.stringify(groups)); // Save groups array as a JSON string
    }, [groups]); // Runs every time `groups` changes

    function handleNoteSubmit(e) {
        e.preventDefault();

        addNoteToGroup(selectedGroup.groupName, text);
        
        setText("");
        localStorage.setItem("text", "");
    }

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
      };

      const handleNoteCreation = (groupData) => {
        setGroups((prevGroups) => [...prevGroups, groupData]);
    };
    return (
        
        <div>
            <div style={{
                display: 'flex',
                width: '100vw'
            }}>
                <div className={`home ${selectedGroup ? 'none' : ''}`} style={{
                    
                    height: '100vh',
                    background: 'white'
                }}>
                    <Title style={{
                        letterSpacing: '0.02em',
                        fontSize: '2.5rem',
                        fontWeight: '500',
                        textAlign: 'center',
                        position: 'sticky',
                        top: '5vh',
                        cursor: 'pointer'
                    }} 
                        onClick={() => {
                            setSelectedGroup(null);
                            localStorage.setItem('selected-group', null);
                        }}
                    />

                    <div className="groups" style={{
                        position: 'relative',
                        // top: '10vh',
                        height: '84.9vh',
                        overflowY: 'auto'
                    }}>
                        {groups.map((group, index) => (
                            <Group key={index} boxStyle={{backgroundColor: selectedGroup?.groupName === group.groupName? 'rgba(0, 0, 0, 0.171)' : 'white'}}
                            circleStyle={{backgroundColor: group.color}}
                            groupName={getTrimmedName(group.groupName)}
                            initials = {getInitials(group.groupName)}
                            onClick={() => {setSelectedGroup(group); localStorage.setItem('selected-group', JSON.stringify(group))}} />
                        ))}
                    </div>

                    <div className="add-btn" onClick={togglePopup} style={{
                        borderRadius: '50%',
                        width: '5.5rem',
                        height: '5.5rem',
                        color: 'white',
                        fontFamily: "'Roboto', sans-serif",
                        background: 'rgba(22, 0, 139, 1)',
                        fontSize: '4.5rem',
                        position: 'sticky',
                        // left: '18vw',
                        // bottom: '1vh',
                    }}><p style={{
                        textAlign: 'center'
                        }}>+</p></div>
                </div>

                {selectedGroup? <TextViewer
                    circleColor={{backgroundColor: selectedGroup.color}}
                    initials={getInitials(selectedGroup.groupName)}
                    groupName = {getTrimmedName(selectedGroup.groupName)}
                    selectedGroup={selectedGroup}
                    onSubmit={handleNoteSubmit}
                    onChange={(e) => {setText(e.target.value); localStorage.setItem('text', e.target.value)}} value={text || ""}
                    buttonStyle={{color: text?.trim() !== "" ? "#001F8B" : "#ABABAB"}}
                /> : <Empty /> }
                
                
                {isPopupVisible && <div className="overlay" onClick={togglePopup}></div>}
            </div>
        {isPopupVisible && <CreateGroup onSubmit={handleNoteCreation} />}
        </div>
    )
}

function getTrimmedName(name) {
    const trimmedName = name.trim(); // Remove leading and trailing spaces
    const normalizedName = trimmedName.replace(/\s+/g, ' ');
    return normalizedName;
}

function getInitials(name) {
    const trimmerdName = getTrimmedName(name);
    const words = trimmerdName.split(' ');

    const initials = words.slice(0, 2).map(word => word[0].toUpperCase()).join('');
    return initials;
}