export default function TabContent({title, description, code, selectedTopic, ...props}){
    if (!selectedTopic){
        return (
            <p>Please select a topic</p>
        );
    }
    
    return (
        <div {...props}>
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
}