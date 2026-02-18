import { useState } from 'react';


export default function ContactCard(props) {
    const [showJob, setShowJob] = useState(false);



    return (
        <div style={{ padding: 12, border: "1px solid #444", borderRadius: 8, marginBottom: 12 }}>
            <h3 style={{ margin: 0 }}>{props.name}</h3>
            <p style={{ margin: "6px 0 0" }}>{props.email}</p>

            {showJob && <p style={{ margin: "6px 0 0" }}>{props.jobTitle}</p>}

            <button onClick={() => setShowJob(prev => !prev)} style={{ marginTop: 10 }}>
                {showJob ? "Hide job title" : "Show job title"}
            </button>
        </div>
    );
}