import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CountdownTimer from "./components/CountdownTimer";
import WhyRegister from "./components/WhyRegister";
import EarlyBenefits from "./components/EarlyBenefits";
import WhoShouldJoin from "./components/WhoShouldJoin";
import RegisterForm from "./components/RegisterForm";
import HowItWorks from "./components/HowItWorks";
import StatsBar from "./components/StatsBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CountdownTimer />
      <WhyRegister />
      <EarlyBenefits />
      <WhoShouldJoin />
      <RegisterForm />
      <HowItWorks />
      <StatsBar />
      <Footer />
    </>
  );
}
