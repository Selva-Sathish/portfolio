export default function Hero(){
    return (

        <div style={{ color: 'white', height: '100vh', display: 'grid' , gridTemplateRows: "repeat(3, minmax(0, 1fr))" }}>
            <div>
            </div>
            <div style={{ margin: '0 2em', lineHeight: '2em'}}>
                <h2>Selva Satheesh</h2>
                <h3>Passionate <span>Software Engineer</span></h3>
            </div>
        </div>
    )
}