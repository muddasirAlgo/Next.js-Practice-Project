export interface Contact {
    id: number;
    name: string;
    message: string;
    time: string;
    isNew: boolean;
    unread: number;
    isOnline: boolean;
    avatar: string;
    isNewCustomer?: boolean;
    orders?: number;
    conversations?: {
        date: string;
        messages: {
            id: number;
            text: string;
            time: string;
            isUser: boolean;
            product?: {
                name: string;
                price: string;
                stock: string;
                image: string;
            };
        }[];
    }[];
}

export const contacts: Contact[] = [
    { 
        id: 1, 
        name: "Jane Doe", 
        message: "Hi, i want make enquiries about your product", 
        time: "12:55 am", 
        isNew: true, 
        unread: 2,
        isOnline: true,
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        isNewCustomer: true,
        orders: 0,
        conversations: [
            { 
                date: "12 August 2022",
                messages: [
                    {
                        id: 1,
                        text: "Hello, I want to make enquiries about your product",
                        time: "12:55 am",
                        isUser: true,
                        product: {
                            name: "iPhone 13",
                            price: "₦730,000.00",
                            stock: "12 In Stock",
                            image: "https://randomuser.me/api/portraits/men/12.jpg"
                        }
                    }
                ]
            },
            {
                date: "Today",
                messages: [
                    {
                        id: 2,
                        text: "I want to know if the price is negotiable, i need about 2 Units",
                        time: "12:55 am",
                        isUser: true
                    }
                ]
            }
        ]
    },
    { 
        id: 2, 
        name: "Janet Adebayo", 
        message: "Hi, i want make enquiries about your product", 
        time: "12:55 am", 
        isNew: true, 
        unread: 0,
        isOnline: false,
        avatar: "https://randomuser.me/api/portraits/women/11.jpg",
        conversations: [
            {
                date: "Today",
                messages: [
                    {
                        id: 1,
                        text: "Hello Janet, thank you for reaching out",
                        time: "12:57 am",
                        isUser: false
                    },
                    {
                        id: 2,
                        text: "What do you need to know?",
                        time: "12:57 am",
                        isUser: false
                    }
                ]
            }
        ]
    },
    { 
        id: 3, 
        name: "Kunle Adekunle", 
        message: "Hi, i want make enquiries about your product", 
        time: "12:55 am", 
        isNew: true, 
        unread: 0,
        isOnline: true,
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
    }
];

// Duplicate contacts to achieve 10 contacts
export const allContacts: Contact[] = [...contacts];
for (let i = 0; i < 7; i++) {
    allContacts.push({...contacts[i % 3], id: i + 4});
} 