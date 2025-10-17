interface Font {
  fontFamily?: string;
  fontStyle?: string;
  fontWeight?: number | string;
  fontSize?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  textTransform?: string;
  textDecoration?: string;
  textAlign?: string;
  textOverflow?: string;
  whiteSpace?: string;
  wordBreak?: string;
  wordWrap?: string;
  wordSpacing?: number | string;
}

function fontStr({ fontWeight, fontSize, lineHeight, letterSpacing, fontFamily }: Font) {
  return `
    font-family: ${fontFamily}, sans-serif;
    font-style: normal;
    font-weight : ${fontWeight};
    font-size : ${fontSize}px;
    line-height : ${lineHeight}px;
    letter-spacing: ${letterSpacing}%;
    `;
}

function fontObj({ fontWeight, fontSize, lineHeight, letterSpacing, fontFamily }: Font) {
  return {
    fontFamily: fontFamily,
    fontStyle: 'normal',
    fontWeight: `${fontWeight}`,
    fontSize: `${fontSize}px`,
    lineHeight: `${lineHeight}px`,
    letterSpacing: `${letterSpacing}%`,
  };
}

export const fontsObject = {
  'heading-1-48-b': fontObj({
    fontWeight: 700,
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: -2,
  }),
  'heading-2-32-b': fontObj({
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: -2,
  }),
  'heading-3-28-b': fontObj({
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 42,
    letterSpacing: -2,
  }),
  'heading-4-24-b': fontObj({
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -2,
  }),
  'heading-5-20-b': fontObj({
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -2,
  }),
  'heading-6-18-b': fontObj({
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -2,
  }),
  'heading-7-16-b': fontObj({
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -2,
  }),
  'title-1-32-sb': fontObj({
    fontWeight: 600,
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: -2,
  }),
  'title-2-28-sb': fontObj({
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 42,
    letterSpacing: -2,
  }),
  'title-3-24-sb': fontObj({
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -2,
  }),
  'title-4-20-sb': fontObj({
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: -2,
  }),
  'title-5-18-sb': fontObj({
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -2,
  }),
  'title-6-16-sb': fontObj({
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -1.5,
  }),
  'title-7-14-sb': fontObj({
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -1.5,
  }),
  'body-1-18-m': fontObj({
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 30,
    letterSpacing: -1.5,
  }),
  'body-2-16-m': fontObj({
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -1.5,
  }),
  'body-2-16-r': fontObj({
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -1.5,
  }),
  'body-3-14-m': fontObj({
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -1.5,
  }),
  'body-3-14-r': fontObj({
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -1.5,
  }),
  'body-3-14-l': fontObj({
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: -1.5,
  }),
  'body-4-13-m': fontObj({
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -1.5,
  }),
  'body-4-13-r': fontObj({
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -1.5,
  }),
  'body-4-13-l': fontObj({
    fontWeight: 300,
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: -1.5,
  }),
  'label-1-18-sb': fontObj({
    fontWeight: 600,
    fontSize: 19,
    lineHeight: 24,
    letterSpacing: -2,
  }),
  'label-2-16-sb': fontObj({
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -2,
  }),
  'label-3-14-sb': fontObj({
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -2,
  }),
  'label-4-12-sb': fontObj({
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -2,
  }),
  'label-5-11-sb': fontObj({
    fontWeight: 600,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: -2,
  }),
} satisfies Record<string, Font>;

export const fontsString = Object.fromEntries(
  Object.entries(fontsObject).map(([key, value]) => [key, fontStr(value)]),
) as Record<keyof typeof fontsObject, string>;
