import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x1b33e6CeA88aafE0B065A2950E5035E4A2C78B6c"
);

export default instance;
