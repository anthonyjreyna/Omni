import { MainLayout } from "../src/components/layout/MainLayout";
import MetaData from "./meta-data";
import LandingPage from "../src/components/landing-page";
import img from "../public/images/logo.png";

export default function Root() {
  return (
    <>
      <MetaData
        title="Omnioutreach"
        description="We Find, Qualify, and Book Meetings With Your Dream Clients. 100% Done For You.Performance Based. Don’t Just Trust Us. Try Us."
        ogImage={img.src}
      />
      <main>
        <LandingPage />
      </main>
    </>
  );
}

Root.getLayout = (page) => <MainLayout>{page}</MainLayout>;
