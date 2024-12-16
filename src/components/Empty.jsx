import Title from "./Title";
import image from "../assets/people.png";
import './Empty.css'


export default function Empty() {
    return (
        <div className="display" style={{
            width: '75vw',
            height: '100vh',
            background: '#DAE5F5',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                height: '50vh',
                width: '38vw',
                boxSizing: 'border-box'
                // position: 'relative',
                // left: '18vw',
                // top: '14vh'
            }}>
                <img src={image} style={{
                    alignItems: 'center',
                    width: '100%'
                }}/>
                <Title style={{
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: '3.5rem',
                    marginBottom: '1vh'
                }} />
                <span style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '500',
                    letterSpacing: '0.02em',
                    lineHeight: '2rem',
                    fontSize: '1rem',
                    textAlign: 'center'
                }}><p>Send and receive messages without keeping your phone online.</p>
                <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</p></span>
                <footer style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '400',
                    lineHeight: '2rem',
                    letterSpacing: '0.02em',
                    textAlign: "center",
                    position: 'fixed',
                    bottom: '1vh',
                    left: '56vw',
                    display: 'flex',
                    gap: '1vw',
                    alignItems: 'center'
                }}><i className="fa-solid fa-lock"></i> <p>end-to-end encrypted</p></footer>
            </div>
        </div>
    )
}