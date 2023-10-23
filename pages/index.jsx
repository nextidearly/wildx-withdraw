import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  usePrepareContractWrite,
  useContractWrite,
  useAccount,
  useContractRead,
} from "wagmi";
import GenesisABI from "./assets/genesisABI.json";
import { parseEther } from "ethers";
import { useEffect, useState } from "react";
import { watchBlockNumber } from "@wagmi/core";

const Home = () => {
  const { address } = useAccount();
  const [value, setValue] = useState(0);
  const [balance, setBalance] = useState("");

  const deposits = useContractRead({
    address: "0x10b73Ca18705d962854359484fF0184f6ef91Bd6",
    abi: GenesisABI,
    functionName: "userInfo",
    args: [1, address],
    chainId: 8453,
    watch: true,
  });

  const unwatch = watchBlockNumber({
    chainId: 8453,
  });

  const { config } = usePrepareContractWrite({
    address: "0x10b73Ca18705d962854359484fF0184f6ef91Bd6",
    abi: GenesisABI,
    functionName: "withdraw",
    chainId: 8453,
    args: [1, parseEther(value.toString() || "0")],
  });

  const { write, isSuccess, data, isLoading } = useContractWrite({
    ...config,
  });

  async function updateUI() {
    const rdep = (deposits.data || 0).toString();
    setBalance(rdep);
  }

  const withdraw = () => {
    if (!address) {
      alert("please connect wallet");
    } else {
      write?.();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Withdrawed successfully");
    }
  }, [isSuccess]);

  useEffect(() => {
    updateUI();
    //eslint-disable-next-line
  }, [unwatch]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Withdraw</title>
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <div className={styles.grid}>
          <div>
            <p className={styles.grid}>
              Deposits Amount: {balance} &nbsp; Wildx/wETH
            </p>
            <div className={styles.form}>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className={styles.withdraw} onClick={withdraw}>
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
