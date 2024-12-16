import "./CreateNote.css"

export default function CreateNote(props) {
    return (
        <div className="outer-box" style={{
            //width: '75vw',
            // height: '17vh',
            background: '#001F8B',
            position: 'fixed',
            bottom: '0px',
            zIndex: '2'
        }}>
            <form onSubmit={props.onSubmit} style={{
                width: '91.5%',
                height: '80%',
                position: 'relative',
                left: '3.7%',
                top: '10%',            
            }}>
                <textarea value={props.value} onChange={props.onChange} placeholder="Enter your text here.........." style={{
                   width: '100%',
                   height: '100%',
                   fontSize: '1.2rem',
                   padding: '1.2vh 4vw 1.2vh 1.5vw',
                   outline: 'none',
                   borderRadius: '0.5rem'
                }}></textarea>
                <button type="submit" style={{
                    // position: 'relative',
                    // bottom: '7vh',
                    // right: '1vw',
                    background: 'white',
                    border: 'none',
                    float: "right",

                }}><i className="material-icons" style={{
                    ...props.buttonStyle,
                    fontSize: '2.5rem',}}>send</i></button>
            </form>
        </div>
    )
}