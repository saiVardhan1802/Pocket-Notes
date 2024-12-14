
export default function Title(props) {
    return (
        <p style={{
            fontFamily: "'Roboto', sans-serif",
            
            ...props.style
        }}>Pocket Notes</p>
    )
}