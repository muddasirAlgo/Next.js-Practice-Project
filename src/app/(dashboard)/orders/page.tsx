'use client';
import CardMetric from "@/components/Dashboard/main/CardMetric";
import { LoadingButton } from "@/components/ui/loading-button";
import { ShoppingBagIcon, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronLeft, ChevronRight, CopyIcon, Filter, Share } from "lucide-react";
import CreateOrderModal from "@/components/Dashboard/orders/CreateOrderModal";

export default function OrdersPage() {
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);

    const orderData = [
        { id: 1, customer: "Janet Adebayo", date: "12 Aug 2022 - 12:25 am", type: "Home Delivery", tracking: "9348fjr73", total: "₦25,000.00", status: "Completed" },
        { id: 2, customer: "Samuel Johnson", date: "12 Aug 2022 - 12:25 am", type: "Home Delivery", tracking: "9348fjr73", total: "₦25,000.00", status: "In-Progress" },
        { id: 3, customer: "Francis Doe", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", tracking: "9348fjr73", total: "₦25,000.00", status: "Pending" },
        { id: 4, customer: "Christian Dior", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", tracking: "9348fjr73", total: "₦25,000.00", status: "Completed" },
        { id: 5, customer: "Christian Dior", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", tracking: "9348fjr73", total: "₦25,000.00", status: "Completed" },
        { id: 6, customer: "Janet Adebayo", date: "12 Aug 2022 - 12:25 am", type: "Home Delivery", tracking: "9348fjr73", total: "₦25,000.00", status: "Completed" },
        { id: 7, customer: "Samuel Johnson", date: "12 Aug 2022 - 12:25 am", type: "Home Delivery", tracking: "9348fjr73", total: "₦25,000.00", status: "In-Progress" },
        { id: 8, customer: "Francis Doe", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", tracking: "9348fjr73", total: "₦25,000.00", status: "Pending" },
        { id: 9, customer: "Christian Dior", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", tracking: "9348fjr73", total: "₦25,000.00", status: "Completed" },
        { id: 10, customer: "Christian Dior", date: "12 Aug 2022 - 12:25 am", type: "Pick Up", tracking: "9348fjr73", total: "₦25,000.00", status: "Completed" },
    ];

    return (
        <div >
            <div className="p-4 flex justify-between">
                <h1 className="text-[16px] font-medium font-poppins text-[#45464E]">Orders Summary</h1>
                <div>
                    <LoadingButton type="submit" onClick={() => setOpen(true)} className="w-full font-poppins rounded-xl font-light bg-primaryColor hover:bg-authBg hover:text-black text-white">
                        <span className="flex items-center gap-2">
                            <span>+</span>
                            Create a New Order
                        </span>
                    </LoadingButton>
                    <CreateOrderModal open={open} onClose={() => setOpen(false)} />
                </div>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <CardMetric
                    icon={<ShoppingBagIcon className="h-5 w-5 text-orange-500" />}
                    title="All Orders"
                    subtitle="Pending"
                    stat="450"
                    secondaryStat="5"
                    growth="+0.00%"
                    time="This Week"
                />

                <CardMetric
                    icon={<ShoppingBasket className="h-5 w-5 text-orange-500" />}
                    title="Canceled"
                    subtitle="Returned"
                    stat="30"
                    secondaryStat="20"
                    isValueRed={true}
                    growth="-20%"
                    time="This Week"
                />

                <CardMetric
                    icon={<ShoppingCart className="h-5 w-5 text-orange-500" />}
                    title="Abandoned Cart"
                    subtitle="Customers"
                    stat="20%"
                    secondaryStat="30"
                    growth="+0.00%"
                    time="This Week"
                />
            </div>

            {/* Customer Orders Section */}
            <div className="p-4 bg-white rounded-lg mx-4 mb-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-poppins font-light">Customer Orders</h2>
                    <div className="flex gap-2">
                        <div className="relative">
                            <Input
                                placeholder="Search"
                                className="pl-10 h-10 w-60 font-poppins font-light rounded-md border border-gray-200"
                            />
                            <div className="absolute left-3 top-2.5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 14L10 10M11.3333 6.66667C11.3333 9.24028 9.24028 11.3333 6.66667 11.3333C4.09305 11.3333 2 9.24028 2 6.66667C2 4.09305 4.09305 2 6.66667 2C9.24028 2 11.3333 4.09305 11.3333 6.66667Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <Button variant="outline" className="h-10 rounded-md border font-poppins font-light  border-gray-200 bg-white text-gray-700">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button variant="outline" className="h-10 rounded-md border font-poppins font-light border-gray-200 bg-white text-gray-700">
                            <Share className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="h-10 rounded-md font-poppins font-light border border-gray-200 bg-white text-gray-700">
                                    Bulk Action
                                    <ChevronDown className="h-4 w-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem className="font-poppins font-light">Mark as Completed</DropdownMenuItem>
                                <DropdownMenuItem className="font-poppins font-light">Mark as Pending</DropdownMenuItem>
                                <DropdownMenuItem className="font-poppins font-light">Delete Selected</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50 border-t border-b border-gray-200">
                                <TableHead className="w-12 text-gray-500 font-poppins font-light">
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Customer Name
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Order Date
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Order Type
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Tracking ID
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Order Total
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Action
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Status
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orderData.map((order) => (
                                <TableRow key={order.id} className="border-b border-gray-200">
                                    <TableCell className="p-2">
                                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                    </TableCell>
                                    <TableCell className="font-poppins font-light text-gray-700">{order.customer}</TableCell>
                                    <TableCell className="font-poppins font-light text-gray-600">{order.date}</TableCell>
                                    <TableCell className="font-poppins font-light text-gray-600">{order.type}</TableCell>
                                    <TableCell>
                                        <div className="font-poppins font-light flex items-center">
                                            {order.tracking}
                                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                                                <CopyIcon className="h-4 w-4 text-gray-500" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                    <TableCell className="font-poppins font-light">{order.total}</TableCell>
                                    <TableCell>
                                        <Select defaultValue={order.status.toLowerCase()}>
                                            <SelectTrigger className="w-32 h-8 bg-gray-100 border-none font-poppins font-light text-gray-700">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="completed">Completed</SelectItem>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="in-progress">In-Progress</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            className={`px-3 py-1 rounded-md font-poppins font-light ${order.status === "Completed"
                                                    ? "bg-green-100 text-green-800"
                                                    : order.status === "Pending"
                                                        ? "bg-amber-100 text-amber-800"
                                                        : "bg-blue-100 text-primaryColor-800"
                                                }`}
                                        >
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-between font-poppins font-light mt-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Select defaultValue="10">
                            <SelectTrigger className="w-24 h-8">
                                <SelectValue placeholder="Items" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                            </SelectContent>
                        </Select>
                        <span>Items per page</span>
                    </div>
                    <div>1-10 of 200 items</div>
                    <div className="flex items-center font-poppins font-light gap-2">
                        <span>of 44 pages</span>
                        <div className="flex">
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-md border border-gray-200">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-md border border-gray-200 border-l-0">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}