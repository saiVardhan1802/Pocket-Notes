import CreateNote from "./CreateNote";
import Note from "./Note";
import "./TextViewer.css"

export default function TextViewer(props) {
    console.log(props.selectedGroup);
    return (
        <div className="parent" style={{
            //width: '75vw',
            height: '100vh',
            background: '#DAE5F5',
            
        }}>

            <div style={{
                position: 'fixed',
                top: '0px',
                width: "100%",
                height: '10%',
                background: '#001F8B',
                display: 'flex',
                alignItems: 'center',
                zIndex: '2'
            }}>
                <i className="fas fa-arrow-left" style={{
                     fontSize: "3rem", 
                     color: "white", 
                     marginLeft: '3vw',
                     marginRight: '2vw'}}
                     onClick={props.backClick}></i>
                <div style={{
                    ...props.circleColor,
                    height: '4.5rem',
                    width: '4.5rem',
                    borderRadius: '50%',
                    //textAlign: 'center',
                    position: 'relative',
                    bottom: '0.2vh',
                    fontFamily: 'Roboto',
                    fontSize: '1.8rem',
                    color: 'white',
                    fontWeight: '500',
                    margin: '1.3vh 1vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    // marginTop: '2vh'
                }}> 
                    <p style={{}}>{props.initials}</p>
                </div>
                <p style={{
                    fontSize: '1.8rem',
                    fontFamily: 'Roboto',
                    color: 'white',
                    fontWeight: '500',
                    //marginTop: '3vh',
                    marginLeft: '0.5vw'
                }}>{props.groupName}</p>
            </div>

            <div className="calc" style={{
                display: 'flex', 
                flexDirection: 'column', 
                position: 'relative',
                top: '10vh',
                //height: 'calc(100vh - 35vh)',  // Subtract the height of the fixed header
                overflowY: 'auto',             // Enable vertical scroll
                padding: '1vh 1vw',
                }}>
                {props.selectedGroup.notes?.map((note, index) => (
                    <Note key={index} content={note.content} createdAt={note.createdAt} />
                ))}
            </div>
            <CreateNote onSubmit={props.onSubmit} onChange={props.onChange} value={props.value} buttonStyle={props.buttonStyle}/>
        </div>
    )
}