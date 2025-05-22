function Child(props) {
    function sendMessage() {
        props.onSend("I go to University of West Georgia.");
    }

    return (
        <div>
            <p>{props.message}</p>
            <button onClick={sendMessage}>Send Message</button>
        </div>
    );
}

export default Child;