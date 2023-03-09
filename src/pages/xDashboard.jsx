// import React, { useState, useEffect } from "react";
// import stakingABI from "../utils/abi/StakingABI.json";
// import {
//   erc20ABI,
//   useContractRead,
//   useContractReads
// } from "wagmi";
// import { Link } from "react-router-dom";
// import ethers from "ethers";

// export const xDashboard = () => {
//   const [stakedTokens, setStakedTokens] = useState([""]);
//   const contractBase = {
//     v2: "0xccF6772F52D007E082bF4A01757C4091F5f4dD92",
//   };

//   const contract = contractBase.v2;

//   const {
//     data: stakedTokensAddress,
//     isError,
//     isLoading,
//     isSuccess,
//   } = useContractRead({
//     address: contract,
//     abi: stakingABI,
//     functionName: "getStakeTokens",
//   });

//   useEffect(() => {
//     setStakedTokens(stakedTokensAddress);
//   }, [stakedTokensAddress]);

//   console.log(stakedTokens);

//   const genName = stakedTokens.map((e) => {
//     return {
//       address: e,
//       abi: erc20ABI,
//       functionName: "name",
//     };
//   });

//   const genSymbol = stakedTokens.map((e) => {
//     return {
//       address: e,
//       abi: erc20ABI,
//       functionName: "symbol",
//     };
//   });

//   const genAmount = stakedTokens.map((e) => {
//     return {
//       address: e,
//       abi: erc20ABI,
//       functionName: "balanceOf",
//       args: [contract],
//     };
//   });

//   const { data: tokenNames } = useContractReads({
//     contracts: genName,
//   });

//   const { data: tokenSymbols } = useContractReads({
//     contracts: genSymbol,
//   });

//   const { data: tokenBalance } = useContractReads({
//     contracts: genAmount,
//   });

//   return (
//     <main className="mt-10 w-5/6">
//       <h1 className="text-2l font-semibold">Dashboard</h1>
//       <div className="grid grid-cols-3 gap-8 mt-10">
//         {tokenNames.map((e, i) => {
//           return (
//             <Link to={`/dashboard/${stakedTokens[i]}`}>
//               <div className="p-4 aspect-square group cursor-pointer relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5">
//                 <div>
//                   <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
//                     <svg
//                       aria-hidden="true"
//                       className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"
//                     >
//                       <defs>
//                         <pattern
//                           id=":R56hd6:"
//                           width="72"
//                           height="56"
//                           patternUnits="userSpaceOnUse"
//                           x="50%"
//                           y="16"
//                         >
//                           <path d="M.5 56V.5H72" fill="none"></path>
//                         </pattern>
//                       </defs>
//                       <rect
//                         width="100%"
//                         height="100%"
//                         stroke-width="0"
//                         fill="url(#:R56hd6:)"
//                       ></rect>
//                       <svg x="50%" y="16" class="overflow-visible">
//                         <rect
//                           stroke-width="0"
//                           width="73"
//                           height="57"
//                           x="0"
//                           y="56"
//                         ></rect>
//                         <rect
//                           stroke-width="0"
//                           width="73"
//                           height="57"
//                           x="72"
//                           y="168"
//                         ></rect>
//                       </svg>
//                     </svg>
//                   </div>
//                 </div>

//                     <div className=" ">
//                         <p >
//                           {tokenSymbols[i]}  
//                         </p>
//                     </div>

//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </main>
//   );
// };

// // export default xDashboard;
