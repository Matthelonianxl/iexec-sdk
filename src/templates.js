const main = {
  description:
    'My iExec ressource description, must be at least 150 chars long in order to pass the validation checks. Describe your application, dataset or workerpool to your users',
  license: 'MIT',
  author: '?',
  social: {
    website: '?',
    github: '?',
  },
  logo: 'logo.png',
};

const app = {
  owner: '0x0000000000000000000000000000000000000000',
  name: 'hello-world',
  type: 'DOCKER',
  multiaddr: 'registry.hub.docker.com/hello-world:linux',
  checksum:
    '0x90bef26b4e016c47ef0814cc02db77e56ca7aef0dca5b079b48326a2a7326ca5',
  mrenclave: '',
};

const buyConf = {
  params: '{ "0": "" }',
  tag: '0x0000000000000000000000000000000000000000000000000000000000000000',
  trust: 0,
};

const dataset = {
  owner: '0x0000000000000000000000000000000000000000',
  name: 'my-dataset',
  multiaddr: '/ipfs/QmW2WQi7j6c7UgJTarActp7tDNikE4B2qXtFCfLPdsgaTQ',
  checksum:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
};

const compatibleDapp = {
  name: 'Recomanded-dapp-for-MyDataset',
  addresses: {
    42: '0x0000000000000000000000000000000000000000',
  },
  buyConf,
};

const dapps = [compatibleDapp];

const workerpool = {
  owner: '0x0000000000000000000000000000000000000000',
  description: 'my-workerpool',
};

const order = {
  apporder: {
    app: '0x0000000000000000000000000000000000000000',
    appprice: 0,
    volume: 1000000,
    tag: '0x0000000000000000000000000000000000000000000000000000000000000000',
    datasetrestrict: '0x0000000000000000000000000000000000000000',
    workerpoolrestrict: '0x0000000000000000000000000000000000000000',
    requesterrestrict: '0x0000000000000000000000000000000000000000',
  },
  datasetorder: {
    dataset: '0x0000000000000000000000000000000000000000',
    datasetprice: 0,
    volume: 1000000,
    tag: '0x0000000000000000000000000000000000000000000000000000000000000000',
    apprestrict: '0x0000000000000000000000000000000000000000',
    workerpoolrestrict: '0x0000000000000000000000000000000000000000',
    requesterrestrict: '0x0000000000000000000000000000000000000000',
  },
  workerpoolorder: {
    workerpool: '0x0000000000000000000000000000000000000000',
    workerpoolprice: 0,
    volume: 1,
    category: 1,
    trust: 0,
    tag: '0x0000000000000000000000000000000000000000000000000000000000000000',
    apprestrict: '0x0000000000000000000000000000000000000000',
    datasetrestrict: '0x0000000000000000000000000000000000000000',
    requesterrestrict: '0x0000000000000000000000000000000000000000',
  },
  requestorder: {
    app: '0x0000000000000000000000000000000000000000',
    appmaxprice: 0,
    dataset: '0x0000000000000000000000000000000000000000',
    datasetmaxprice: 0,
    workerpool: '0x0000000000000000000000000000000000000000',
    workerpoolmaxprice: 0,
    volume: 1,
    category: 1,
    trust: 0,
    tag: '0x0000000000000000000000000000000000000000000000000000000000000000',
    beneficiary: '0x0000000000000000000000000000000000000000',
    callback: '0x0000000000000000000000000000000000000000',
    params: '{ "0": "--help" }',
  },
};

const category = {
  name: 'CAT1',
  description: 'new hub category',
  workClockTimeRef: '100',
};

const chains = {
  default: 'kovan',
  chains: {
    dev: {
      host: 'http://localhost:8545',
      sms: 'http://localhost:5000',
      id: '17',
      hub: '0x60E25C038D70A15364DAc11A042DB1dD7A2cccBC',
    },
    ropsten: {
      host: 'https://ropsten.infura.io/v3/f3e0664e01504f5ab2b4360853ce0dc7',
      id: '3',
    },
    rinkeby: {
      host: 'https://rinkeby.infura.io/v3/f3e0664e01504f5ab2b4360853ce0dc7',
      id: '4',
    },
    kovan: {
      host: 'https://kovan.infura.io/v3/f3e0664e01504f5ab2b4360853ce0dc7',
      id: '42',
    },
    mainnet: {
      host: 'https://mainnet.infura.io/v3/f3e0664e01504f5ab2b4360853ce0dc7',
      id: '1',
    },
  },
};

const createOrder = (orderName, overwrite = {}) => Object.assign({}, order[orderName], overwrite);
const overwriteObject = (obj, overwrite = {}) => Object.assign({}, obj, overwrite);

module.exports = {
  main,
  app,
  dataset,
  workerpool,
  category,
  buyConf,
  dapps,
  chains,
  overwriteObject,
  createOrder,
};
