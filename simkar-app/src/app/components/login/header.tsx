import Image from "next/image"
export default function Header () {
    return (
        <div className="flex w-full text-gray-600">
                <Image
                src='/assets/images/logoptpn.png'
                alt="gambar"
                height={100}
                width={400}
                />
            <h1 className="text-green-400">SELAMAT DATANG DI SIMKAR</h1>
        </div>
    )
}