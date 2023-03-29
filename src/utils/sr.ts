import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const sr: any = isSSR ? null : ScrollReveal();

export default sr;
