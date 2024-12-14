import CreateNote from "./CreateNote";
import Group from "./Group";
import Note from "./Note";

export default function TextViewer(props) {
    console.log(props.selectedGroup);
    return (
        <div style={{
            width: '75vw',
            height: '100vh'
        }}>
            <Group style={{
                position: 'fixed',
                top: '0px',
                width: "100%",
                height: '10%',
                background: 'black',
                ...props.style
            }} />

            <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                height: '10vh',
                position: 'relative',
                top: '35vh'}}>
                {props.selectedGroup.notes?.map((note, index) => (
                    <Note key={index} content={note.content} />
                ))}
            </div>
            <CreateNote onSubmit={props.onSubmit} onChange={props.onChange} value={props.value} />
        </div>
    )
}