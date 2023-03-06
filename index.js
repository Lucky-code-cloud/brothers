//side-bar
const menuItems =document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//Theme
const theme = document.querySelector('#theme');
const themeModel =document.querySelector('.customize-theme');


//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display ='none';
        } else{
            document.querySelector('.notification-popup').
            style.display ='block';
            document.querySelector('#notifications .notification-count')
            .style.display ='none';
        }
    })
})

/*---Messages---*/
/*---Seacrh Chats--*/
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLocaleLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
}

//Search chat
messageSearch.addEventListener('keyup', searchMessage);

//highlight message card
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display=
    'none';
    setTimeout(() => {
        messages.style.boxShadow ='none';
    }, 2500);
})

//Theme Customization
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

theme.addEventListener('click', openThemeModel);