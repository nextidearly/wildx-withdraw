import React, { useState } from "react";
import { BTCAddresses } from "./../config/config";

let number = 0;

const Home = () => {
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);
  const [sum3, setSum3] = useState(0);
  const [sum4, setSum4] = useState(0);
  const [sum5, setSum5] = useState(0);
  const [sum6, setSum6] = useState(0);
  const [sum7, setSum7] = useState(0);
  const [sum8, setSum8] = useState(0);
  const [sum9, setSum9] = useState(0);
  const [num, setNum] = useState(0);

  const fetchBalances = (addresses) => {
    let lastAddress = "";
    let key = 0;
    const interval = setInterval(async () => {
      if (num === BTCAddresses.length) {
        clearInterval(interval);
        return;
      }

      try {
        const address = addresses[key].Address;
        const myAddress = await fetch(`/mempool/address/${address}`);
        if (myAddress.satus === 429) {
          fetchBalances(BTCAddresses.slice(number === 0 ? 0 : number - 1));
          clearInterval(interval);
        } else {
          const json = await myAddress.json();
          const balance =
            (Number(json.chain_stats.funded_txo_sum) -
              Number(json.chain_stats.spent_txo_sum)) /
            100000000;

          if (lastAddress !== json.address) {
            setData((data) => [...data, { [json.address]: balance * 34748.5 }]);
            setSum((i) => i + balance * 34748.5);

            if (balance * 34748 > 10000) {
              setSum1((i) => i + 1);
            }

            if (balance * 34748 > 5000) {
              setSum2((i) => i + 1);
            }

            if (balance * 34748 > 3000) {
              setSum3((i) => i + 1);
            }

            if (balance * 34748 > 2000) {
              setSum4((i) => i + 1);
            }

            if (balance * 34748 > 1000) {
              setSum5((i) => i + 1);
            }

            if (balance * 34748 > 500) {
              setSum6((i) => i + 1);
            }

            if (balance * 34748 > 100) {
              setSum7((i) => i + 1);
            }

            if (balance * 34748 > 50) {
              setSum8((i) => i + 1);
            }

            if (balance * 34748 < 50) {
              setSum9((i) => i + 1);
            }

            key += 1;
            number += 1;
            setNum(number);
            lastAddress = json.address;
          }
        }
      } catch (error) {}
    }, 300);
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center flex-col items-center">
        <button
          className="mx-auto bg-black py-4 px-16 rounded-md border border-gray-600 shadow shadow-black transition ease-in-out hover:scale-105 cursor-pointer"
          onClick={() => fetchBalances(BTCAddresses)}
        >
          fetch Balances
        </button>
        <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black w-64 my-4 mt-8 text-xl font-semibold">
          <span> SUM :</span> <span>~$ {sum.toFixed(2)}</span>{" "}
        </div>
        <div className="text-center my-3 text-xl font-semibold grid grid-cols-5 w-full gap-3">
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>Number</span> <span>{num}/1639</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +10000</span> <span className="text-red-600">{sum1}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +5000</span> <span className="text-green-600">{sum2}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +3000</span> <span className="text-orange-600">{sum3}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +2000</span> <span className="text-[#9333ea]">{sum4}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +1000</span> <span className="text-[#d97706]">{sum5}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +500</span> <span className="text-[#166534]">{sum6}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +100</span> <span className="text-[#406ec2]">{sum7}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ +50</span> <span className="text-[#3c3e41]">{sum8}</span>{" "}
          </div>
          <div className="flex justify-between p-3 bg-gray-800/20 rounded-md shadow shadow-black">
            <span>$ -50</span> <span className="text-[#3e3e3fb2]">{sum9}</span>{" "}
          </div>
        </div>
        <ul>
          {data &&
            data.map((item, key) => {
              if (item[Object.keys(item)[0]] > 10000) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between  text-red-600"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 5000) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between  text-green-600"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 3000) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between  text-orange-600"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 2000) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between  text-[#9333ea]"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 1000) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between text-[#d97706]"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 500) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between text-[#166534]"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 100) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between text-[#406ec2]"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> ~$ {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] > 50) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between text-[#3c3e41]"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }

              if (item[Object.keys(item)[0]] < 50) {
                return (
                  <li
                    key={key}
                    className="bg-gray-800/20 shadow shadow-black py-1 px-5 rounded  mb-1 flex justify-between text-[#3e3e3fb2]"
                  >
                    <span> {Object.keys(item)[0]} :</span>{" "}
                    <span> {item[Object.keys(item)[0]].toFixed(2)} </span>{" "}
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
