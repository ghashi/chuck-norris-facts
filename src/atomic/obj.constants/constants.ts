export enum BrandColor {
  Coquelicot = '#E53D00',
  OrangeRed = '#FF4300',
  Snow = '#FFF9F7',
  ChineseRed = '#A04321',
  KenyanCopper = '#681E04'
}

// We used class rather than enums since enums don't support computed values
export class Color {
  public static readonly Black = 'black';
  public static readonly White = 'white';

  public static readonly GrayXLight = '#F8F9F9';
  public static readonly GrayLight = '#DEE1E3';
  public static readonly Gray = '#777';
  public static readonly GrayDark = '#555';
  public static readonly GrayXDark = '#333';

  public static readonly Primary = BrandColor.OrangeRed;
  public static readonly Secondary = BrandColor.ChineseRed;

  public static readonly Alert = '#CF000F';
  public static readonly Warning = '#F5E51B';
  public static readonly Success = '#26C281';
}

export enum FontFamily {
  Primary = 'Muli, sans-serif'
}

export enum FontWeight {
  Bold = 'bold',
  SemiBold = 600,
  Normal = 'normal',
  Lighter = 200
}

export enum FontSize {
  Base = '16px',
  Small = '0.667rem',
  Medium = '1rem',
  Large = '1.33rem',
  XLarge = '2.35rem',
  XXLarge = '3.12rem'
}

export enum Spacing {
  XSmall = '4px',
  Small = '8px',
  Medium = '16px',
  Large = '24px',
  XLarge = '32px',
  XXLarge = '60px'
}
