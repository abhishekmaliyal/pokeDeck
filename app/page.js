import Info from "@/components/Info";
import Cartoon from "@/components/Cartoon";

export default function Home() {
    return (
        <>
            <div className="cartoon flex items-center justify-center h-screen bg-white">
                {/* <div className="text-white text-2xl h-[500px] w-[800px] backdrop-blur-xl rounded-3xl shadow-lg  border-2 border-red-500 p-5">
          this is a test
        </div> */}
                <Info />

                <Cartoon />
            </div>
        </>
    );
}
