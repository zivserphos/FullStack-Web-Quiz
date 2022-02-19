declare global {
  interface CheerioFunc {
    $: cheerio.Root;
    elem: cheerio.Element;
  }
}

export {};
