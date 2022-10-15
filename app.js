const sendMessage = document.querySelector('.msgbox__btn');
const container = document.querySelector('.msgbox');
const randomResponse = () =>{
    
    setTimeout(() => {
        const outputArray = ['ok', 'nice', 'test push message',
        'lemon vodka twice', 'ąężźćż',
        'tomasz', 'hajto', 'baba',
        'jebac panstwo izrael',
            'can i have lemon vodka?'
        ]
        let output = Math.random();
        output = Math.floor((output*10));
        console.log(outputArray[output]);
        const response = document.createElement('p');
        response.classList.add('msgbox__rcv');
        response.innerHTML = `
        ${outputArray[output]}
        `;
        document.querySelector('.msgbox').appendChild(response);
        container.scrollTop = container.scrollHeight;
    },3000);
    container.scrollTop = container.scrollHeight;
    
}
console.log(container);
const send = (e) =>{
    let msg = document.querySelector('.msgbox__type').value;
    if( (e.key === "Enter") || e.pointerType === "mouse" && msg != "") {
        const msgsent = document.createElement('p');
        msgsent.classList.add('msgbox__snt');
        msgsent.innerHTML = `
        ${msg}
        `;
        document.querySelector('.msgbox').appendChild(msgsent);
        document.querySelector('.msgbox__type').value = '';
        randomResponse();
    }
    
}

sendMessage.addEventListener('click', send);
document.querySelector('.msgbox__type').addEventListener('keypress', send);