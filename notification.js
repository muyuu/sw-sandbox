const init = ()=> {
    setAllowNotification();
    setShowNotification();
};

const setAllowNotification = ()=>{
    const el = document.getElementById('allowNotification');
    el.addEventListener('click', (e)=>{
        requestNotification();
    });
};

const setShowNotification = ()=>{
    const el = document.getElementById('showNotification');
    el.addEventListener('click', (e)=>{
        showNotification();
    });
};

const requestNotification = ()=>{
    if ( ! hasNotificationApi() ) return;

    Notification.requestPermission()
        .then(permission => {
            switch (permission) {
                case 'granted':
                    // allowed
                    console.log('allowed');
                    break;
                case 'denied':
                    // denied
                    console.log('denied');
                    break;
                case 'default':
                    // default
                    console.log('default');
                    break;
                default:
                    breka;
            }
        });
};

const showNotification = ()=> {
    const title = '見出し';
    const options = {
        body: '本文',
        icon: 'http://via.placeholder.com/240x240?text=icon',
        data: {
            foo: '任意のデータ',
        },
    };
    const notification = new Notification(title, options);
};

const hasNotificationApi = () => {
    return !!window.Notification;
};

init();

