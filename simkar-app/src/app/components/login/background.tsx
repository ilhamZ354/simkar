
export default function Background ({children} : any) {
    return (
        <div className="flex min-h-screen justify-center items-center bg-gradient-to-br from-white to-green-200">
            <div className="flex w-[80%] h-96 m-5 backdrop-blur-sm backdrop-brightness-150 rounded-2xl drop-shadow-md">
                {children}
            </div>
        </div>
    )
}