import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HomeImage from "@/components/home/HomeImage";
import StartButton from "@/components/home/StartButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center flex-grow mt-10">
        <HomeImage />
        <StartButton child={"会話を始める"} link={"chatbot"} />
      </div>
      <Footer />
    </div>
  );
}
