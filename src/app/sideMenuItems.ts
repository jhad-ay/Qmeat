export class SideMenuItems {
    constructor(){
        this.items = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'About Us',
                url: '/aboutus',
                icon: 'information-circle'
            },
            {
                title: 'Contact Us',
                url: '/url',
                icon: 'call'
            },
            {
                title: 'Our Branches',
                url: '/branches',
                icon: 'pin'
            },
            {
                title: 'Price list',
                url: '/priceList',
                icon: 'cash'
            },
            {
                title: 'Shareholder Inquiry',
                url: '/shareholder',
                icon: 'checkbox'
            },
            {
                title: 'Suggestion & Complain',
                url: '/suggestion',
                icon: 'heart-half'
            },
            {
                title: 'Feedback',
                url: '/feedback',
                icon: 'happy'
            }
        ];
    }

    items: any[];
}