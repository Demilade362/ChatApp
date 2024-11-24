const chatList = document.querySelector("#chat-list");
const newChatForm = document.querySelector('.new-chat');
const updateName = document.querySelector('.update-name');
const alertMsg = document.querySelector('.alert-msg');
const navbarNav = document.querySelector('#navbar-nav');

newChatForm.addEventListener('submit', e => {
    e.preventDefault();

    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(e => console.log(e));
})


updateName.addEventListener('submit', e => {
    e.preventDefault();
    const username = updateName.username.value.trim();
    chatroom.updateUsername(username)

    updateName.reset();

    alertMsg.innerText = `You have successfully updated your name to ${username}`;
    setTimeout(() => {
        alertMsg.innerText = '';
    }, 3000)
})

navbarNav.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        chatUI.clear();
        // console.log(e.target.getAttribute('id'));
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(chat => chatUI.render(chat));
    }
})


const username = localStorage.username ? localStorage.username : 'Anonymous';

const chatroom = new ChatRoom('general', username);
const chatUI = new ChatUI(chatList);


chatroom.getChats((data) => {
    chatUI.render(data);
})