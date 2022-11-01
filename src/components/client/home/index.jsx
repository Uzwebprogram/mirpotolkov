import HomeHero from "./home-hero";
import HomeCard from "./home-card";
import HomeCeiling from "./home-ceiling";
import HomeCost from "./home-cost";
import HomeAdvantage from "./home-advantage";
import HomeDiscount from "./home-discount";
import HomeChoose from "./home-choose";
function HomeComponent(params) {
  return (
    <>
      <HomeHero isText={true} />
      <HomeCard />
      <HomeCeiling />
      <HomeCost isCost={true} />
      <HomeAdvantage />
      <HomeDiscount isCount={true} />
      <HomeChoose/>
      <HomeDiscount isCount={true} />
    </>
  );
}
export default HomeComponent;
