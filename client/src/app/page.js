import Image from "next/image";
import Room from "./pages/room";
import UploadForm from "./components/uploadForm";

export default function Home() {
  return (
    <div>

      <UploadForm />
      <Room />
    </div>


  );
}
