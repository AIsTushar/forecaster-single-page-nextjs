import Card from "./Card";

function Membership() {
  return (
    <div className="py-32 flex flex-col gap-16 items-center">
      <h2 className="bg-gradient-to-b from-white to-[#999999] text-transparent bg-clip-text text-[64px] font-semibold leading-[100%] tracking-[-1%]">
        Membership
      </h2>
      <p className="h-[72px] w-[716px] text-center text-2xl leading-[150%] font-medium text-white">
        If a $500 golf ball isn’t enough, you can improve our margins further by
        kindly providing us with recurring revenue.
      </p>
      <div className="flex flex-col lg:flex-row gap-6">
        <Card
          btnText="Get Basic"
          title="basic"
          price="free"
          featureOne="“Evil” mode only"
          featureTwo="No saved data"
        />
        <Card
          btnText="Get Pro"
          title="pro"
          price="$19"
          featureOne="“Evil” and “Coach” modes"
          featureTwo="Basic analytics"
        />
        <Card
          btnText="Get Premium"
          title="premium"
          price="$39"
          featureOne="All feedback modes"
          featureTwo="Advanced analytics"
        />
      </div>

      <p className="leading-[150%] tracking-[1%] text-white">
        *Plans and prices are subject to change based on the whims of our CFO.
      </p>
    </div>
  );
}

export default Membership;
