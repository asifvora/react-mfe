interface Hosts {
  featureOne: string;
}

export default {
  featureOne: process.env.REACT_APP_FEATURE_ONE_HOST,
} as Hosts;
