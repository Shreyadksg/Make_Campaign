const CampaignFactory = require('./artifacts/contracts/Campaign.sol/CampaignFactory.json');
const { ethers } = require('ethers');
require('dotenv').config({path: './.env.local'})

const main = async ()=>{
    //console.log(process.env.NEXT_PUBLIC_RPC_URL);
    const provider=new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL
    );
    
   // console.log(provider);
    const contract= new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        provider
    );
    
    
    const getData = contract.filters.campaignCreated();
    const events1= await contract.queryFilter(getData);
    console.log(events1);
    
    
};

main();