import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarDays, Clock } from "lucide-react";
import { Switch } from "@/components/ui/switch";

interface CreateOrderModalProps {
    open: boolean;
    onClose: () => void;
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({ open, onClose }) => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([
        { id: 1, name: "iPhone 13", price: 730000, quantity: 1 },
        { id: 2, name: "iPhone 13", price: 730000, quantity: 1 },
    ]);
    const [isNewCustomer, setIsNewCustomer] = useState(false);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleQuantity = (id: number, delta: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl p-8 w-full">
                <DialogHeader>
                    <DialogTitle className="text-[20px] font-medium font-poppins">Create New Order</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4 gap-2 flex flex-col">
                        <div className="flex items-center justify-between">
                            <Label className="font-light font-poppins text-[16px] text-[#8B8D97]">Order Details</Label>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-3 justify-between col-span-1">
                                    <p className="text-[14px] font-poppins font-light text-[#8B8D97]">New Customer</p>
                                    <Switch checked={isNewCustomer} onCheckedChange={setIsNewCustomer}/>
                                </div>
                            </div>
                        </div>
                        {isNewCustomer ? (
                            <>
                            <Input placeholder="Customer Name" />
                            <Input placeholder="Customer Email" />
                            <div className="flex gap-2">
                              <div className="flex items-center bg-[#EFF1F9] justify-center px-4 rounded-md border font-light font-poppins text-[16px]  text-[#ABAFB1]">
                                +234
                              </div>
                              <Input placeholder="Phone Number" />
                            </div>
                          </>
                        ) : (
                        <Select >
                            <SelectTrigger><SelectValue placeholder="Select Customer" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="john">John Doe</SelectItem>
                                <SelectItem value="jane">Jane Smith</SelectItem>
                            </SelectContent>
                        </Select>
                          )}
                        <div className="grid grid-cols-2 gap-4">
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Payment Type" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cash">Cash</SelectItem>
                                    <SelectItem value="card">Card</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Order Type" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pickup">Pick Up</SelectItem>
                                    <SelectItem value="delivery">Delivery</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p className="font-poppins font-light text-[12px] text-[#53545C] ">Order and Time</p>
                            <div className="grid grid-cols-2 gap-4">

                                <div className="relative">
                                    <Input type="date" />
                                    <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="relative">
                                    <Input type="time" />
                                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p className="font-poppins font-light text-[12px] text-[#53545C] ">Order Status</p>
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Order Status" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Textarea placeholder="Order Note" />
                    </div>

                    {/* Right Side - Items */}
                    <div className="space-y-4 gap-2 flex flex-col">
                        <Label className="text-[16px] font-poppins font-light text-[#8B8D97]">Items</Label>
                        <Input
                            placeholder="Search item"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="space-y-3 max-h-[500px] flex justify-between flex-col overflow-y-auto">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-start justify-between rounded-lg">

                                    <div className="flex items-center gap-2">
                                        <img
                                            src="https://images.unsplash.com/photo-1695578130342-991b58f1ecb8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt={item.name}
                                            className="w-14 h-14 rounded"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-light text-[14px] text-[#45464E] font-poppins">{item.name}</div>
                                            <div className="font-light text-[14px] text-[#33343A] font-poppins">₦{item.price.toLocaleString()}</div>
                                            <div className="flex flex-row gap-8">
                                                <div className="font-light text-[14px] text-[#8B8D97] font-poppins">Sub-total</div>
                                                <div className="font-light text-[14px] text-[#8B8D97] font-poppins">₦{(item.price * item.quantity).toLocaleString()}</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end">
                                        <Button className="text-[#CC5F5F] font-light font-poppins text-[12px]" variant="ghost" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
                                        <div className="flex items-center gap-2">
                                            <Button variant="secondary" size="sm" onClick={() => handleQuantity(item.id, -1)}>-</Button>
                                            <span>{item.quantity}</span>
                                            <Button variant="secondary" size="sm" onClick={() => handleQuantity(item.id, 1)}>+</Button>
                                        </div>
                                    </div>
                                    {/* <div className="font-light text-[14px] text-[#8B8D97] font-poppins mt-1">Sub-total: ₦{(item.price * item.quantity).toLocaleString()}</div> */}
                                </div>
                            ))}
                        </div>

                        <div className="font-light flex justify-between font-poppins text-[#33343A] text-[16px]">
                            <p className="text-[#8B8D97]"> Total:</p>
                            ₦{total.toLocaleString()}
                        </div>

                    </div>
                </div>
                <div className="flex justify-center">
                    <DialogFooter className="mt-6  gap-4">
                        <Button className="bg-white font-light font-poppins text-[14px]" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button className="bg-primaryColor font-light font-poppins text-[14px] hover:bg-authBg hover:text-black">Create Order</Button>
                    </DialogFooter>
                </div>
            </DialogContent>


        </Dialog >
    );
};

export default CreateOrderModal;
