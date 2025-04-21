// Define interfaces for our data structures
interface Product {
    name: string;
    price: string;
    stock: string;
    image: string;
  }
  
  interface Message {
    id: number;
    text: string;
    time: string;
    isUser: boolean;
    product?: Product;
  }
  
  interface Conversation {
    date: string;
    messages: Message[];
  }
  
  interface Contact {
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
    conversations?: Conversation[];
  }