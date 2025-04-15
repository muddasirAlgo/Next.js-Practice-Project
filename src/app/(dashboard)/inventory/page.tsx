'use client';
import CardMetric from "@/components/Dashboard/main/CardMetric";
import { LoadingButton } from "@/components/ui/loading-button";
import { Folder, ShoppingBagIcon, ShoppingBasket, ShoppingCart } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown, ChevronLeft, ChevronRight, CopyIcon, Filter, Share } from "lucide-react";
import { useRouter } from "next/navigation";
import ROUTES from "@/constants/routes";

export default function InventoryPage() {
    const [page, setPage] = useState(1);

    const router = useRouter();
    const handleClick = () => {
        router.push(`http://localhost:3000/${ROUTES.dashboard.addInventory}`);
    };

    const orderData = [
        { id: 1, product: "iPhone 13 Pro", date: "12 Aug 2022 - 12:25 am", category: "Gadgets", discount: "3", inStock: "120", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Published", action: 'Publish' },
        { id: 2, product: "iPhone 12 Pro", date: "12 Aug 2022 - 12:25 am", category: "Gadgets", discount: "3", inStock: "120", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Unpublished", action: 'Publish' },
        { id: 3, product: "Polo T-Shirt", date: "12 Aug 2022 - 12:25 am", category: "Fashion", discount: "3", inStock: "120", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Unublished", action: 'Publish' },
        { id: 4, product: "Polo T-Shirt", date: "12 Aug 2022 - 12:25 am", category: "Fashion", discount: "3", inStock: "120", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Published", action: 'Publish' },
        { id: 5, product: "Polo T-Shirt", date: "12 Aug 2022 - 12:25 am", category: "Fashion", discount: "3", inStock: "120", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Published", action: 'Publish' },
        { id: 6, product: "iPhone 13 Pro", date: "12 Aug 2022 - 12:25 am", category: "Gadgets", discount: "3", inStock: "Out of Stock", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Unublished", action: 'Publish' },
        { id: 7, product: "iPhone 12 Pro", date: "12 Aug 2022 - 12:25 am", category: "Gadgets", discount: "3", inStock: "Out of Stock", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Published", action: 'Publish' },
        { id: 8, product: "Polo T-Shirt", date: "12 Aug 2022 - 12:25 am", category: "Fashion", discount: "3", inStock: "Out of Stock", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Unublished", action: 'Publish' },
        { id: 9, product: "Polo T-Shirt", date: "12 Aug 2022 - 12:25 am", category: "Fashion", discount: "3", inStock: "Out of Stock", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Published", action: 'Publish' },
        { id: 10, product: "Polo T-Shirt", date: "12 Aug 2022 - 12:25 am", category: "Fashion", discount: "3", inStock: "Out of Stock", totalPrice: "₦25,000.00", unitPrice: "₦25,000.00", status: "Published", action: 'Publish' },
    ];

    return (
        <div >
            <div className="p-4 flex justify-between">
                <h1 className="text-[16px] font-medium font-poppins text-[#45464E]">Inventory Summary</h1>
                <div>
                    <LoadingButton type="submit" onClick={handleClick} className="w-full font-poppins rounded-xl font-light bg-primaryColor hover:bg-authBg hover:text-black text-white">
                        <span className="flex items-center gap-2">
                            <span>+</span>
                            Add a New Product
                        </span>
                    </LoadingButton>
                </div>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                <CardMetric
                    icon={<Folder className="h-5 w-5 text-white" />}
                    title="All Products"
                    subtitle="Active"
                    stat="0"
                    secondaryStat="0"
                    growth="+0.00%"
                    bg="bg-indigo-500 text-white"
                    isBold={true}
                />

                <CardMetric
                    icon={<ShoppingBasket className="h-5 w-5 text-orange-500" />}
                    title="Low Stock Alert"
                    subtitle="Start Rating"
                    isShow={true}
                    stat="30"
                    secondaryStat="20"
                    isValueRed={true}
                    growth="-20%"
                    time="This Week"
                />


            </div>

            {/* Customer Orders Section */}
            <div className="p-4 bg-white rounded-lg mx-4 mb-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-poppins font-light">Inventory Items</h2>
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
                                        Product Name
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Category
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Unit Price
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>

                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        In-Stock
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Discount
                                        <ChevronDown className="h-4 w-4 ml-1" />
                                    </div>
                                </TableHead>
                                <TableHead className="text-gray-500 font-poppins font-light">
                                    <div className="flex items-center">
                                        Total Value
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
                                    <TableCell className="font-poppins font-light text-gray-700">{order.product}</TableCell>
                                    <TableCell className="font-poppins font-light text-gray-600">{order.category}</TableCell>
                                    <TableCell className="font-poppins font-light text-gray-600">{order.unitPrice}</TableCell>
                                    <TableCell className="font-poppins font-light text-gray-600">{order.inStock}</TableCell>
                                    <TableCell className="font-poppins font-light">{order.discount}</TableCell>
                                    <TableCell className="font-poppins font-light">{order.totalPrice}</TableCell>
                                    <TableCell>
                                        <Select defaultValue={order.action.toLowerCase() === "Published" ? "Published" : "Unpublished"}>
                                            <SelectTrigger className="w-32 h-8 bg-gray-100 border-none font-poppins font-light text-gray-700">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Published">Published</SelectItem>
                                                <SelectItem value="Unpublished">Unpublished</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            className={`px-3 py-1 rounded-md font-poppins font-light ${order.status === "Published"
                                                ? "bg-green-100 text-green-800"
                                                : order.status === "Unpublished"
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