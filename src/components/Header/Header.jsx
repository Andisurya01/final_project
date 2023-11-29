import cover from "../../assets/img/cover.jpg"

const Header = () => {
    return (
        <div className="bg-DARKBLUE05 w-full flex">
            <div className="relative w-[884px] h-[300px]">
                <img src={cover} className="w-full h-full object-cover" alt="header" />
                <div className="absolute top-0 right-0 w-full h-full" style={{background: 'linear-gradient(270deg, #6148FF 5%, rgba(255, 233, 202, 0) 100%)'}}>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-white text-2xl font-medium">Belajar <br/> dari Praktisi Terbaik!</h1>
                <button className="bg-white mt-4 flex items-center justify-center w-[250px] h-10 rounded-2xl hover:bg-LIGHTBLUE active:bg-LIGHTBLUE">
                    <h1 className="text-DARKBLUE05 text-2xl font-bold">IKUTI KELAS</h1>
                </button>
            </div>
        </div>
    )
}

export default Header