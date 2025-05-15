function Phone() {
    return ( 
   

            <div className="fixed bottom-10 left-10 cursor-pointer flex flex-row items-center z-30">
            <img
                className="w-14 h-auto z-20 -mr-3 animate-shake-spin"
                src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
                alt="Phone"
            />
            <div className="flex items-center pl-4 w-32 h-10 rounded-tr-2xl rounded-br-2xl bg-blue-500 z-10">
                <p className="text-white font-normal">0822.663.686</p>
            </div>
            </div>

     );
}

export default Phone;