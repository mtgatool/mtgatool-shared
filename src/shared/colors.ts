import {
  WHITE,
  BLUE,
  BLACK,
  RED,
  GREEN,
  MULTI,
  COLORLESS,
} from "../shared/constants";

const colorFlags = {
  NONE: 0,
  W: 1,
  U: 2,
  B: 4,
  R: 8,
  G: 16,
  C: 32,
};

class Colors {
  private w: boolean;
  private u: boolean;
  private b: boolean;
  private r: boolean;
  private g: boolean;
  private c: boolean;

  /**
   * Creates a new colors object
   * Colors can be set by properties matching the colors (w, u, b, r, g)
   **/
  constructor() {
    this.w = false;
    this.u = false;
    this.b = false;
    this.r = false;
    this.g = false;
    this.c = false;

    return this;
  }

  /**
   * Returns an array containing the colors as non-repeating constants
   * inside an array.
   */
  get(): number[] {
    const _arr: number[] = [];
    if (this.w) _arr.push(WHITE);
    if (this.u) _arr.push(BLUE);
    if (this.b) _arr.push(BLACK);
    if (this.r) _arr.push(RED);
    if (this.g) _arr.push(GREEN);
    if (this.c) _arr.push(COLORLESS);
    return _arr;
  }

  /**
   * Returns an Integer that identifies this color as a "bitshift" sum
   */
  getBits(): number {
    let bits = 0;
    if (this.w) bits |= colorFlags.W;
    if (this.u) bits |= colorFlags.U;
    if (this.b) bits |= colorFlags.B;
    if (this.r) bits |= colorFlags.R;
    if (this.g) bits |= colorFlags.G;
    if (this.c) bits |= colorFlags.C;
    return bits;
  }

  /**
   * Return the color, multicolor or colorless.
   */
  getBaseColor(): number {
    if (this.length > 1) {
      return MULTI;
    } else if (this.length === 0) {
      return COLORLESS;
    }
    return this.get()[0];
  }

  /**
   * Returns the number of colors
   */
  get length(): number {
    let ret = 0;
    if (this.w) ret += 1;
    if (this.u) ret += 1;
    if (this.b) ret += 1;
    if (this.r) ret += 1;
    if (this.g) ret += 1;
    if (this.c) ret += 1;

    return ret;
  }

  /**
   * Adds a string mana cost to this class.
   */
  addFromCost(cost: string[]): Colors {
    if (cost.length === 0) this.c = true;

    cost.forEach((symbol) => {
      for (const c of symbol) {
        switch (c) {
          case "w":
            this.w = true;
            break;
          case "u":
            this.u = true;
            break;
          case "b":
            this.b = true;
            break;
          case "r":
            this.r = true;
            break;
          case "g":
            this.g = true;
            break;
          case "x":
            this.c = true;
            break;
          case "1":
            this.c = true;
            break;
          case "2":
            this.c = true;
            break;
          case "3":
            this.c = true;
            break;
          case "4":
            this.c = true;
            break;
          case "5":
            this.c = true;
            break;
          case "6":
            this.c = true;
            break;
          case "7":
            this.c = true;
            break;
          case "8":
            this.c = true;
            break;
          case "9":
            this.c = true;
            break;
          case "10":
            this.c = true;
            break;
          case "11":
            this.c = true;
            break;
          case "12":
            this.c = true;
            break;
          case "13":
            this.c = true;
            break;
          case "14":
            this.c = true;
            break;
          case "15":
            this.c = true;
            break;
          case "16":
            this.c = true;
            break;
          case "17":
            this.c = true;
            break;
          case "17":
            this.c = true;
            break;
          case "17":
            this.c = true;
            break;
          case "17":
            this.c = true;
            break;
        }
      }
    });

    return this;
  }

  /**
   * Adds an array mana cost to this one.
   */
  addFromArray(cost: number[]): Colors {
    cost.forEach((color) => {
      switch (color) {
        case WHITE:
          this.w = true;
          break;
        case BLUE:
          this.u = true;
          break;
        case BLACK:
          this.b = true;
          break;
        case RED:
          this.r = true;
          break;
        case GREEN:
          this.g = true;
          break;
        case COLORLESS:
          this.c = true;
          break;
      }
    });

    return this;
  }

  /**
   * Merges another instance of Colors into this one.
   */
  addFromColor(color: Colors): Colors {
    this.w = color.w;
    this.u = color.u;
    this.b = color.b;
    this.r = color.r;
    this.g = color.g;
    this.c = color.c;

    return this;
  }

  /**
   * Merges a "bitshift" integer into this color.
   */
  addFromBits(colorBits: number): Colors {
    this.w = !!(colorBits & colorFlags.W ? 1 : 0);
    this.u = !!(colorBits & colorFlags.U ? 1 : 0);
    this.b = !!(colorBits & colorFlags.B ? 1 : 0);
    this.r = !!(colorBits & colorFlags.R ? 1 : 0);
    this.g = !!(colorBits & colorFlags.G ? 1 : 0);
    this.c = !!(colorBits & colorFlags.C ? 1 : 0);

    return this;
  }

  /**
   * Checks if this color is equal to another
   */
  equalTo(color: Colors): boolean {
    return (
      this.w == color.w &&
      this.u == color.u &&
      this.b == color.b &&
      this.r == color.r &&
      this.g == color.g &&
      this.c == color.c
    );
  }

  getColorArchetype(): string {
    let currentColorFlags: number = colorFlags.NONE;
    if (this.w) currentColorFlags |= colorFlags.W;
    if (this.u) currentColorFlags |= colorFlags.U;
    if (this.b) currentColorFlags |= colorFlags.B;
    if (this.r) currentColorFlags |= colorFlags.R;
    if (this.g) currentColorFlags |= colorFlags.G;
    // All flags except colorless and above
    currentColorFlags =
      currentColorFlags > 32 ? currentColorFlags - 32 : currentColorFlags;

    switch (currentColorFlags) {
      case 1:
        return "Mono White";
      case 2:
        return "Mono Blue";
      case 3: //wu
        return "Azorius";
      case 4:
        return "Mono Black";
      case 5: //wb
        return "Orzhov";
      case 6: //ub
        return "Dimir";
      case 7: //wub
        return "Esper";
      case 8:
        return "Mono Red";
      case 9: //wr
        return "Boros";
      case 10: //ur
        return "Izzet";
      case 11: //wur
        return "Jeskai";
      case 12: //br
        return "Rakdos";
      case 13: //wbr
        return "Mardu";
      case 14: //ubr
        return "Grixis";
      case 15: //wubr
        return "WUBR";
      case 16:
        return "Mono Green";
      case 17: //wg
        return "Selesnya";
      case 18: //ug
        return "Simic";
      case 19: //wug
        return "Bant";
      case 20: //bg
        return "Golgari";
      case 21: //wbg
        return "Abzan";
      case 22: //ubg
        return "Sultai";
      case 23: //wubg
        return "WUBG";
      case 24: //rg
        return "Gruul";
      case 25: //wrg
        return "Naya";
      case 26: //urg
        return "Temur";
      case 27: //wurg
        return "WURG";
      case 28: //brg
        return "Jund";
      case 29: //wbrg
        return "WBRG";
      case 30: //ubrg
        return "UBRG";
      case 31:
        return "5-color";
      case 32:
        return "Colorless";
      default:
        return "";
    }
  }
}

export default Colors;
