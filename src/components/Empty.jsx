import Title from "./Title";
import image from "../assets/people.png";


export default function Empty() {
    return (
        <div style={{
            width: '75vw',
            height: '100vh',
            background: '#DAE5F5'
        }}>
            <div style={{
                height: '50vh',
                width: '38vw',
                position: 'relative',
                left: '18vw',
                top: '14vh'
            }}>
                <img src={image} style={{
                    alignItems: 'center'
                }}/>
                <Title style={{
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: '3.5rem'
                }} />
                <p style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '200',
                    letterSpacing: '0.02em',
                    lineHeight: '2rem',
                    fontSize: '1.5rem',
                    textAlign: 'center'
                }}>Send and receive messages without keeping your phone online.
                Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <footer style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: '400',
                    lineHeight: '2rem',
                    letterSpacing: '0.02em',
                    textAlign: "center",
                    position: 'relative',
                    top: '29vh'
                }}><i className="fa-solid fa-lock"></i> end-to-end encrypted</footer>
            </div>
        </div>
    )
}