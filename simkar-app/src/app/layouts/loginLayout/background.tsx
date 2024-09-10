
export default function Background ({children} : any) {
    return (
        <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-white to-green-200">
            <div className="flex w-[80%] m-5 backdrop-blur-sm bg-white/80 rounded-2xl drop-shadow-md">
                <div className="w-full m-7">
                {children}
                </div>
            </div>
        </div>
    )
}