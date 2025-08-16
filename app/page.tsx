import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#fff]">
      <HomePage />
      <AboutPage />
      </div>
  );
}
function HomePage(){
  return(
    <div className="flex h-screen px-[80px] flex-col justify-center items-center gap-2 bg-[#001487]" >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 798" preserveAspectRatio="xMidYMid slice" fill="none" className="absolute inset-0 w-full h-full">
<g filter="url(#filter0_n_400_2151)">
<rect width="100%" height="100%" fill="white" fillOpacity="0.04"/>
</g>
<defs>
<filter id="filter0_n_400_2151" x="0" y="0" width="1440" height="798" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feTurbulence type="fractalNoise" baseFrequency="0.40000000596046448 0.40000000596046448" stitchTiles="stitch" numOctaves="3" result="noise" seed="9340"/>
<feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise"/>
<feComponentTransfer in="alphaNoise" result="coloredNoise1">
<feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
</feComponentTransfer>
<feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"/>
<feFlood floodColor="#FFFFFF" result="color1Flood"/>
<feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1"/>
<feMerge result="effect1_noise_400_2151">
<feMergeNode in="shape"/>
<feMergeNode in="color1"/>
</feMerge>
</filter>
</defs>
</svg>
<div className="flex w-[1239px] h-[497px] flex-col justify-center items-center gap-12 shrink-0" >
<div className="flex w-[1079px] flex-col items-center gap-6" >
<div className="relative flex flex-col justify-center items-center [-moz-column-gap:-32px] self-stretch" >
<p className="absolute left-[15px] top-[-63px] rotate-[-30deg] text-[#C0FF1D] text-right font-[LaureenproW05-Bold] text-[48px] font-bold leading-[90%]">
(ابداع
  بصري)
</p>
<p className="text-[#A6ADD5] text-center text-[100px] font-semibold leading-[110%]">
We Create Brands That Stand Out
</p>
<p className="w-[1079px] h-[110px] text-white/65 text-center  text-[100px] font-semibold leading-[110%]">
That 
  <span className="text-white px-4 font-[Myanmar_MN] text-[100px] font-normal leading-[110%]">
  leave
</span>
a Mark.
</p>
</div>
<p className="w-[546px] text-white text-center  text-[18px] font-normal leading-[130%]">
A creative agency specializing in marketing and brand design. We help you stand out, grow, and excel.
</p>

</div>
<div className="flex items-start gap-6">
<div className="flex justify-center items-center px-12 py-4 gap-[25px] rounded-[30.46px] bg-gradient-to-b from-[#75CDFF] to-[#24B0FF] shadow-[inset_0_4px_9.519px_rgba(255,251,211,0.5),0_2px_5.711px_#1A1954]">
Watch our creativity
</div>
<div className="flex items-center px-12 py-4 gap-[25px] rounded-[30.46px] border border-white/14 bg-[#2A3A9A] shadow-[inset_0_1px_12px_rgba(255,255,255,0.08)]">
Contact us
</div>
</div>

</div>
    </div>  
  )
}


function AboutPage(){
  return(
    <div className="flex flex-col items-start w-[var(--widht,1440px)] px-[var(--margin,80px)] py-[104px] gap-14 bg-white">
  <div className="flex flex-col items-start gap-6">
  <p className="text-[var(--Content-Primary,#0F218D)]  text-[18px] font-medium leading-[140%] capitalize">
  Your text here
</p>
<p className="text-[var(--Content-Natural-Primary,#13131D)]  text-[48px] font-medium leading-[120%]">
55 Agency is a creative team specializing
<span className="text-[var(--Content-Natural-Tertiary,#8084AA)]  text-[48px] font-medium leading-[120%]">
in marketing, design, and brand building. We help businesses craft strong identities, create engaging designs, and launch effective marketing campaigns that drive real results.
</span>
</p>
</div>
<div className="flex items-start gap-2">
<div className="flex justify-center items-center px-12 py-4 gap-[25px] rounded-[30.46px] bg-gradient-to-b from-[#75CDFF] to-[#24B0FF] shadow-[inset_0_4px_9.519px_rgba(255,251,211,0.5),0_2px_5.711px_#1A1954]">
Watch our creativity
</div>
<div className="flex items-center px-12 py-4 gap-[25px] rounded-[30.46px] border border-white/14 bg-[#2A3A9A] shadow-[inset_0_1px_12px_rgba(255,255,255,0.08)]">
Contact us
</div>
</div>
</div>
  )
}