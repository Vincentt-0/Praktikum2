import Navbar from "../compenent/Navbar";
import Card from "./components/Card";

export default function Home() {
    return (
        <>
        <Navbar></Navbar>
        <div className="flex justify-center gap-4 m-10">
            <Card title="Komponen 1" description="Ini adalah komponen pertama" />
            <Card title="Komponen 2" description="Ini adalah komponen kedua" />
        </div>
        </>
    );
}
