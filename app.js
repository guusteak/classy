const sendMessage = document.querySelector('.msgbox__btn');
const container = document.querySelector('.msgbox');
console.log(container);
const send = (e) =>{
    let msg = document.querySelector('.msgbox__type').value;
    console.log(e);
    if( (e.key === "Enter") || e.pointerType === "mouse") {
        console.log('spie')
        const msgsent = document.createElement('p');
        msgsent.classList.add('msgbox__snt');
        msgsent.innerHTML = `
        ${msg}
        `;
        document.querySelector('.msgbox').appendChild(msgsent);
        document.querySelector('.msgbox__type').value = '';
    }
    
}

sendMessage.addEventListener('click', send);
document.querySelector('.msgbox__type').addEventListener('keypress', send);