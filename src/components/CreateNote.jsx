export default function CreateNote(props) {
    return (
        <div style={{
            width: '75vw',
            height: '25vh',
            background: '#001F8B',
            position: 'fixed',
            bottom: '0px'
        }}>
            <form onSubmit={props.onSubmit} style={{
                width: '95%',
                height: '80%'
            }}>
                <textarea value={props.value} onChange={props.onChange} placeholder="Enter your text here.........." style={{
                   width: '100%',
                   height: '100%'
                }}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}