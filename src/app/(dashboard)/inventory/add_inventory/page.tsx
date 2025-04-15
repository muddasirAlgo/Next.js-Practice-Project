import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadingButton } from "@/components/ui/loading-button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import { PNG } from "@/assets/png";

export default function AddInventoryPage() {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-[16px] font-light font-poppins text-[#45464E]">
                    New Inventory Item
                </h1>
                <div className="flex gap-4">
                    <LoadingButton className="bg-black hover:bg-[#01010130] text-white hover:text-black px-4 py-2 rounded-xl font-poppins font-light text-sm">
                        Save as Draft
                    </LoadingButton>
                    <LoadingButton className="bg-primaryColor hover:bg-[#d7d6f6] text-white hover:text-black px-4 py-2 rounded-xl font-poppins font-light text-sm">
                        Save & Publish
                    </LoadingButton>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:h-[550px]">
                <Card className="col-span-2 p-4">
                    <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-14 p-4">
                        <div className="flex flex-col gap-6">
                            <Input placeholder="Product Name" />
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Product Category" />
                                </SelectTrigger>
                            </Select>
                            <div className="flex gap-4">
                                <Input placeholder="Selling Price" />
                                <Input placeholder="Cost Price" />
                            </div>
                            <Input type="number" placeholder="Quantity in Stock" />
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Order Type" />
                                </SelectTrigger>
                            </Select>

                            <div className="flex items-center justify-between col-span-1">
                                <p className="text-sm font-poppins font-light text-gray-600">Discount</p>
                                <Switch />
                            </div>
                            <div className="flex items-center justify-between col-span-1">
                                <p className="text-sm font-poppins font-light text-gray-600">Expiry Date</p>
                                <Switch />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">

                            <Textarea
                                placeholder="Short Description"
                                className="col-span-1 h-[100px]"
                            />
                            <Textarea
                                placeholder="Your text goes here"
                                className="col-span-2 h-[120px]"
                            />
                            <p className="text-xs font-poppins font-light text-gray-400 col-span-2">
                                Add a long description for your product
                            </p>

                            <div className="flex items-center justify-between col-span-1">
                                <p className="text-sm font-poppins font-light text-gray-600">Return Policy</p>
                                <Switch />
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-[12px] font-poppins font-light text-gray-600">Date Addred</p>
                                <div className="flex gap-2 col-span-2">
                                    <div className="flex items-center bg-[#EFF1F9] gap-2 border px-3 py-2 rounded-md w-full">
                                        <CalendarDays className="w-4 h-4 text-black" />
                                        <span className="text-sm font-poppins font-light text-[#ABAFB1]">12/12/2020</span>
                                    </div>
                                    <div className="flex bg-[#EFF1F9] items-center gap-2 border px-3 py-2 rounded-md w-full">
                                        <Clock className="w-4 h-4 text-black" />
                                        <span className="text-sm font-poppins font-light text-[#ABAFB1]">12:00 PM</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-4 flex flex-col gap-4">
                        <div className="border border-dashed flex flex-col gap-3 text-center items-center justify-center rounded-md p-6 bg-[#EFF1F9]">
                            <Image
                                src={PNG.Image}
                                alt="Image"
                                width={40}
                                height={40}
                            />
                            <p className="text-sm text-primaryColor font-poppins font-medium">Upload Image</p>
                            <p className="text-[12px] font-poppins font-light text-gray-500">
                                Upload a cover image for your product.
                                <br />File Format <b>jpeg, png</b> — Recommended Size <b>600x600</b> (1:1)
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium mb-2  text-gray-700">Additional Images</p>
                            <div className="grid  grid-cols-2 gap-4">
                                <div className="border border-dashed  flex flex-col gap-2 items-center justify-center bg-[#EFF1F9] rounded-md p-6 text-center">
                                    <Image
                                        src={PNG.Image}
                                        alt="Image"
                                        width={40}
                                        height={40}
                                    />
                                    <p className="text-sm text-primaryColor font-medium">Upload Image</p>
                                </div>
                                <div className="border border-dashed bg-[#EFF1F9] rounded-md"></div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
