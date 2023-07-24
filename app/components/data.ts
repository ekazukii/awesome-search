type SearchItem = {
  description?: string;
  title?: string;
  origin_description: string;
  isGithub: boolean;
  repositoryname: string;
  URL: string;
  origin: string;
  displayName?: string;
};

const searchResult: SearchItem[] = [
  {
    repositoryname: 'amazon alexa',
    isGithub: true,
    origin: 'miguelmota---awesome-amazon-alexa',
    description:
      'DEPRECATED Node.js web server for interacting with the Alexa Voice Service. - GitHub - miguelmota/AVS-server: DEPRECATED Node.js web server for interacting with the Alexa Voice Service.',
    origin_description: 'Node.js web server for interacting with the Alexa Voice Service.',
    title: 'miguelmota/AVS-server: DEPRECATED Node.js web server for interacting with the Alexa Voice Service.',
    URL: 'https://github.com/miguelmota/AVS-server',
    displayName: 'AVS-server',
  },
  {
    description:
      'Rust binding for TDengine. Contribute to songtianyi/tdengine-rust-bindings development by creating an account on GitHub.',

    isGithub: true,
    origin: 'taosdata---awesome-tdengine',
    origin_description: "It's a Rust bindings project for TDengine.",
    repositoryname: 'tdengine',
    title: 'songtianyi/tdengine-rust-bindings: Rust binding for TDengine',
    URL: 'https://github.com/songtianyi/tdengine-rust-bindings',
    displayName: 'tdengine-rust-bindings',
  },
  {
    description:
      'Custom React hooks for your project. Contribute to stevenpersia/captain-hook development by creating an account on GitHub.',
    isGithub: true,
    origin: 'rehooks---awesome-react-hooks',
    origin_description: 'Modest list of hooks.',
    repositoryname: 'react hooks',
    title: 'stevenpersia/captain-hook: Custom React hooks for your project.',
    displayName: 'captain-hook',
    URL: 'https://github.com/stevenpersia/captain-hook',
  },
  {
    description:
      'normalize.css with a styled-components mindset. Contribute to yldio/normalized-styled-components development by creating an account on GitHub.',

    isGithub: true,
    origin: 'styled-components---awesome-styled-components',
    origin_description: 'normalize.css with a styled-components mindset.',
    repositoryname: 'styled components',
    title: 'yldio/normalized-styled-components: normalize.css with a styled-components mindset',
    displayName: 'normalized-styled-components',
    URL: 'https://github.com/yldio/normalized-styled-components',
  },
  {
    description:
      'Minimal TAP output formatter. Contribute to derhuerst/tap-min development by creating an account on GitHub.',

    isGithub: true,
    origin: 'sindresorhus---awesome-tap',
    origin_description: 'Minimal output.',
    repositoryname: 'tap',
    title: 'derhuerst/tap-min: Minimal TAP output formatter.',
    URL: 'https://github.com/derhuerst/tap-min',
    displayName: 'tap-min',
  },
  {
    isGithub: false,
    origin: 'coq-community---awesome-coq',
    origin_description:
      'Toolchain for verifying C code inside Coq in a higher-order concurrent, impredicative separation logic that is sound w.r.t. the Clight language of the CompCert compiler.',
    repositoryname: 'coq',
    title: 'Verified Software Toolchain',
    URL: 'https://vst.cs.princeton.edu',
    displayName: 'Verified Software Toolchain',
  },
  {
    isGithub: false,
    origin: 'eselkin---awesome-computational-neuroscience',
    origin_description: '|               | +                   |',
    repositoryname: 'computational neuroscience',
    title: 'Computation and Neural Systems (CNS)\n  \n\n     | \n    \n    Biology and Biological Engineering',
    displayName: 'Computation and Neural Systems (CNS)',
    URL: 'http://www.cns.caltech.edu/people/faculty/camerer.html',
  },
  {
    isGithub: false,
    origin: 'jinwchoi---awesome-action-recognition',
    origin_description: 'J. Dai et al., ICCV2017. official code(https://github.com/msracver/Deformable-ConvNets)',
    repositoryname: 'action recognition',
    URL: 'http://openaccess.thecvf.com/content_ICCV_2017/papers/Dai_Deformable_Convolutional_Networks_ICCV_2017_paper.pdf',
  },
  {
    isGithub: false,
    origin: 'toplap---awesome-livecoding',
    origin_description: 'Andrew Sorensen.',
    repositoryname: 'livecoding',
    URL: 'https://www.youtube.com/watch?v=Sg2BjFQnr9s',
  },
];

export { searchResult };
export type { SearchItem };
