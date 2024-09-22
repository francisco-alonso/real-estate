import { ethers } from "ethers";

export interface NavigationProps {
    account: string;
    setAccount: () => void;
}

export interface Attributes {
    trait_type: string;
    value: number | string,
}

export interface Home {
    address: string;
    attributes: Attributes,
    description: string,
    id: string;
    image: string;
    name: string;
}

export interface HomeProps {
    home: Home;
    provider: ethers.providers.Web3Provider;
    togglePop: () => void;
    escrow: ethers.Contract;
}