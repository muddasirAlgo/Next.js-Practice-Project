import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";
import { LoadingButton } from "@/components/ui/loading-button";

export default function ConversationsPage() {
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
                    {/* Contacts Column */}
                    <div className="w-full md:w-[300px] lg:w-[320px] border-r mx-2 rounded-xl bg-white flex flex-col">
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-md font-poppins font-light">Contacts</h2>
                                <span className="text-sm text-gray-400">34</span>
                            </div>
                            <Input placeholder="Search" className="h-9 rounded-md" />
                        </div>

                        <ScrollArea className="flex-1 ">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                >
                                    <div className="flex gap-3 items-center">
                                        <img
                                            src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i + 10}.jpg`}
                                            alt="avatar"
                                            className="w-10 h-10 rounded-sm object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-light font-poppins text-gray-900">{["Jane Doe", "Janet Adebayo", "Kunle Adekunle"][i % 3]}</p>
                                            <p className="text-xs font-light font-poppins text-gray-500 truncate w-[160px]">
                                                Hi, i want make enquiries about yo...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right space-y-1">
                                        <p className="text-[11px] font-light text-gray-400">12:55 am</p>
                                        {i % 3 === 0 && (
                                            <div className="flex gap-1 items-center">
                                                <Badge className="bg-yellow-200 text-yellow-700 font-light font-poppins rounded-md px-1 text-[10px]">New</Badge>
                                                <span className="text-xs bg-primaryColor text-white rounded-full px-1.5 py-0.5 text-[10px]">
                                                    2
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>

                    {/* Message Panel */}
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
                </div>
            </div>
        </div>
    );
}
