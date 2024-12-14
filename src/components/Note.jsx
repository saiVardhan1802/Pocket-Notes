export default function Note(props) {
    return (
        <div style={{
            width: '90%',
            background: 'red',
            color: 'white'
        }}>
            <p style={{}}>{props.content}</p>
        </div>
    )
}