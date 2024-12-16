import './Title.css'

export default function Title(props) {
    return (
        <p className='title' onClick={props.onClick} style={{
            fontFamily: "'Roboto', sans-serif",
            
            ...props.style
        }}>Pocket Notes</p>
    )
}