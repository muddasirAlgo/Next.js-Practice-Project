"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Smile, Send } from "lucide-react";
import { LoadingButton } from "@/components/ui/loading-button";
import { Contact, allContacts } from "@/data/contacts";

export default function ConversationsPage() {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    
    const handleContactClick = (contact: Contact) => {
        setSelectedContact(contact);
    };

    return (
        <div>
            <div className="p-4 flex justify-between items-center">
                <h1 className="text-[16px] font-light font-poppins text-[#45464E]">
                    Conversations with Customers
                </h1>
                <LoadingButton className="bg-primaryColor hover:bg-[#d7d6f6] text-white hover:text-black px-4 py-2 rounded-xl font-poppins font-light text-sm">
                    New Message
                </LoadingButton>
            </div>
            <div className="flex flex-col my-2 mx-2">
                <div className="flex flex-1 overflow-hidden">
                    {/* contacts */}
                    <div className="w-full md:w-[300px] lg:w-[320px] border-r mx-2 rounded-xl bg-white flex flex-col">
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-md font-poppins font-light">Contacts</h2>
                                <span className="text-sm text-gray-400">34</span>
                            </div>
                            <Input placeholder="Search" className="h-9 rounded-md" />
                        </div>

                        <ScrollArea className="flex-1">
                            {allContacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer ${
                                        selectedContact?.id === contact.id ? "bg-gray-100" : ""
                                    }`}
                                    onClick={() => handleContactClick(contact)}
                                >
                                    <div className="flex gap-3 items-center">
                                        <div className="relative">
                                            <img
                                                src={contact.avatar}
                                                alt="avatar"
                                                className="w-10 h-10 rounded-sm object-cover"
                                            />
                                            {contact.isOnline && (
                                                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-sm font-light font-poppins text-gray-900">{contact.name}</p>
                                            <p className="text-xs font-light font-poppins text-gray-500 truncate w-[160px]">
                                                {contact.message}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <p className="text-[11px] font-light text-gray-400">{contact.time}</p>
                                        {contact.isNew && (
                                            <div className="flex gap-1 items-center">
                                                <Badge className="bg-yellow-200 text-yellow-700 font-light font-poppins rounded-md px-1 text-[10px]">New</Badge>
                                                {contact.unread > 0 && (
                                                    <span className="text-xs bg-primaryColor text-white rounded-full px-1.5 py-0.5 text-[10px]">
                                                        {contact.unread}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>

                    {/* message section */}
                    {selectedContact ? (
                        <div className="flex-1 bg-white mx-4 rounded-xl flex flex-col">
                            {/* Header */}
                            <div className="px-4 py-3 border-b flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={selectedContact.avatar}
                                        alt={selectedContact.name}
                                        className="w-10 h-10 rounded-sm object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-medium">{selectedContact.name}</h3>
                                            {selectedContact.isNewCustomer && (
                                                <Badge className="bg-yellow-200 text-yellow-700 font-light font-poppins rounded-md px-2 py-0.5 text-[10px]">
                                                    New Customer
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {selectedContact.isOnline && (
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                                                    <span className="text-xs text-gray-500">Online</span>
                                                </div>
                                            )}
                                            <span className="text-xs text-gray-500">{selectedContact.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    {selectedContact.orders !== undefined && (
                                        <div className="flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                                            </svg>
                                            <span className="text-xs text-gray-500">{selectedContact.orders} Orders</span>
                                        </div>
                                    )}
                                    <button className="text-primaryColor text-sm">View Profile</button>
                                </div>
                            </div>
                            
                            {/* Messages */}
                            <ScrollArea className="flex-1 p-4">
                                {selectedContact.conversations?.map((conversation, index) => (
                                    <div key={index} className="mb-6">
                                        <div className="text-center mb-4">
                                            <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                                                {conversation.date}
                                            </span>
                                        </div>
                                        
                                        {conversation.messages.map((message) => (
                                            <div key={message.id} className={`mb-4 ${message.isUser ? "flex gap-4 justify-end" : ""}`}>
                                                {message.product && (
                                                    <div className="bg-gray-50 p-3 rounded-lg mb-2 max-w-md">
                                                        <div className="flex gap-3">
                                                            <img 
                                                                src={message.product.image} 
                                                                alt={message.product.name}
                                                                className="w-16 h-16 object-cover rounded"
                                                            />
                                                            <div>
                                                                <h4 className="font-light font-poppins text-sm">{message.product.name}</h4>
                                                                <p className="text-sm font-light font-poppins">{message.product.price}</p>
                                                                <p className="text-xs font-light font-poppins text-gray-500">{message.product.stock}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                <div className={`flex ${message.isUser ? "justify-end" : ""}`}>
                                                    <div className={`px-4 py-2 rounded-lg max-w-md ${
                                                        message.isUser 
                                                            ? "bg-primaryColor text-white" 
                                                            : "bg-[#FBF3E9] text-black"
                                                    }`}>
                                                        <p className="text-sm font-light font-poppins">{message.text}</p>
                                                    </div>
                                                </div>
                                                <div className={`flex font-light font-poppins items-center gap-1 mt-1 ${message.isUser ? "justify-end" : ""}`}>
                                                    <span className="text-xs text-gray-500">{message.time}</span>
                                                    {!message.isUser && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </ScrollArea>
                            
                            {/* Message Input */}
                            <div className="p-4 border-t flex items-center gap-2">
                                <button className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                </button>
                                <div className="flex-1 relative">
                                    <Input
                                        placeholder="Your message"
                                        className="pr-10 py-2"
                                    />
                                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <Smile size={18} />
                                    </button>
                                </div>
                                <button className="bg-[#FBF3E9] hover:bg-[#f7ead7] text-black px-3 py-2 rounded-lg">
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-1 bg-white mx-4 rounded-xl flex items-center justify-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                                    <MessageSquare className="w-12 h-12 text-gray-500" />
                                </div>
                                <h2 className="font-medium font-poppins text-gray-700">Messages</h2>
                                <p className="text-sm text-gray-400">Click on a contact to view messages.</p>
                                <LoadingButton className="bg-primaryColor font-light font-poppins text-white rounded-md px-4 py-2 text-sm mt-2">
                                    New Message
                                </LoadingButton>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}