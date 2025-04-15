'use client'
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("account");

    return (
        <div className="max-w-6xl mx-auto my-6 p-8 bg-white rounded-lg shadow-sm">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-6">
                    <TabsTrigger
                        value="account"
                        className={`px-6 py-2 ${activeTab === "account" ? "border-b-2 border-primaryColor font-poppins font-light" : ""}`}
                    >
                        Account
                    </TabsTrigger>
                    <TabsTrigger
                        value="business"
                        className={`px-6 py-2 ${activeTab === "business" ? "border-b-2 border-primaryColor font-poppins font-light" : ""}`}
                    >
                        Business
                    </TabsTrigger>
                    <TabsTrigger
                        value="security"
                        className={`px-6 py-2 ${activeTab === "security" ? "border-b-2 border-primaryColor font-poppins font-light" : ""}`}
                    >
                        Security
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="mb-8">
                <h2 className="text-xl font-poppins font-light text-gray-800">Account Settings</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                    <div className="space-y-6">
                        <div>
                            <Label htmlFor="firstName" className="text-sm font-poppins font-light text-gray-500">First Name</Label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3  flex items-center font-poppins font-light text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </span>
                                <Input id="firstName" className="pl-10" defaultValue="Usman" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="lastName" className="text-sm font-poppins font-light text-gray-500">Last Name</Label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center font-poppins font-light text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </span>
                                <Input id="lastName" className="pl-10" defaultValue="Ndako" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-sm font-poppins font-light text-gray-500">Email</Label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center font-poppins font-light text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                </span>
                                <Input id="email" className="pl-10" defaultValue="usmanndako@gmail.com" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="phone" className="text-sm font-poppins font-light text-gray-500">Phone Number</Label>
                            <div className="flex">
                                <Select defaultValue="+234">
                                    <SelectTrigger className="w-24">
                                        <SelectValue placeholder="+234" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="+234">+234</SelectItem>
                                        <SelectItem value="+1">+1</SelectItem>
                                        <SelectItem value="+44">+44</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input id="phone" className="flex-1 ml-2" defaultValue="08065650633" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="address" className="text-sm font-poppins font-light text-gray-500">Address</Label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-3 flex items-center font-poppins font-light text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </span>
                                <Input id="address" className="pl-10" defaultValue="No. 93 Skyfield Apartments" />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="city" className="text-sm font-poppins font-light text-gray-500">City</Label>
                            <Input id="city" defaultValue="Yaba" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="country" className="text-sm font-poppins font-light text-gray-500">Country</Label>
                                <Select defaultValue="Nigeria">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Nigeria">Nigeria</SelectItem>
                                        <SelectItem value="USA">USA</SelectItem>
                                        <SelectItem value="UK">UK</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="state" className="text-sm font-poppins font-light text-gray-500">State</Label>
                                <Select defaultValue="Lagos">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select state" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Lagos">Lagos</SelectItem>
                                        <SelectItem value="Abuja">Abuja</SelectItem>
                                        <SelectItem value="Rivers">Rivers</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="flex flex-col items-center">
                        <div className="relative w-36 h-36 mb-4">
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Profile"
                                className="w-full h-full object-cover rounded-md"
                            />
                            <div className="absolute top-2 right-2 flex space-x-1">
                                <button className="bg-white p-1 rounded-full shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw">
                                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                        <path d="M21 3v5h-5"></path>
                                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                        <path d="M3 21v-5h5"></path>
                                    </svg>
                                </button>
                                <button className="bg-white p-1 rounded-full shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end ">
                <Button className="bg-primaryColor font-poppins font-light hover:bg-primaryColor text-white px-6">Update</Button>
            </div>
        </div>
    );
}