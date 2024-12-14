export default function Color(props) {
    return (
        <div style={{
            borderRadius: '50%',
            width: '2rem',
            height: '2rem',
            ...props.style
        }}
        onClick={props.onClick}
        ></div>
    )
}