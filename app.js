const sendMessage = document.querySelector('.msgbox__btn');
const container = document.querySelector('.msgbox');
const phone = document.querySelector('.phone');
const backdrop = document.querySelector('.backdrop');
const onback = document.querySelector('.onback');
const randomResponse = () =>{
    
    setTimeout(() => {
        const outputArray = ['ok', 'nice', 'test push message',
        'lemon vodka twice', 'ąężźćż',
        'tomasz', 'hajto', 'baba',
        'This. is very loooooong (actualy average) text image to check how it displays',
            'can i have lemon vodka?'
        ]
        let output = Math.random();
        output = Math.floor((output*10));
        const response = document.createElement('p');
        response.classList.add('msgbox__rcv');
        response.innerHTML = `
        ${outputArray[output]}
        `;
        document.querySelector('.msgbox').appendChild(response);
        container.scrollTop = container.scrollHeight;
    },3000);
    container.scrollTop = container.scrollHeight;
    
};
const send = (e) =>{
    let msg = document.querySelector('.msgbox__type').value;
    if(( (e.key === "Enter") || e.pointerType === "mouse")&& msg != "") {
        const msgsent = document.createElement('p');
        msgsent.classList.add('msgbox__snt');
        msgsent.innerHTML = `
        ${msg}
        `;
        document.querySelector('.msgbox').appendChild(msgsent);
        document.querySelector('.msgbox__type').value = '';
        randomResponse();
    };
    
};

let flag = 0;

const goFullScreen = () =>{
    document.querySelector('.description').classList.add('none');
    backdrop.classList.remove('none');
    document.querySelector('.phone').classList.add('onFull');
}

const goBac = () =>{
    backdrop.classList.add('none');
    document.querySelector('.description').classList.remove('none');
}

sendMessage.addEventListener('click', send);
document.querySelector('.msgbox__type').addEventListener('keypress', send);
document.querySelector('.description__button').addEventListener('click', goFullScreen);
backdrop.addEventListener('click', goBac);