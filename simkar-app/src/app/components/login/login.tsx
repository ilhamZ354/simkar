import FormLogin from "@/app/components/login/formLogin"
import Button from "@/app/components/button/button"
import Image from "next/image"
import Header from "./header"

export default function Login () {
    return (
        <div className="flex flex-row justify-between gap-4">
            <div className="w-full m-4 border border-gray-300 rounded-2xl">
                <div className="m-4">
                <Header />
                <FormLogin />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-2 text-white" label="login"/>
                </div>
            </div>
            <div className="w-full bg-cyan-500 rounded-lg">
                <Image
                    src='/assets/images/logoptpn.png'
                    alt="gambar"
                    height={100}
                    width={400}
                />
            </div>
        </div>
    )
}