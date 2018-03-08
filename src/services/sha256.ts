let hexcase = 0;
let b64pad = "";

export class Sha256 {
  static sha256_K: number[] = new Array(
   1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
   -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
   1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
   264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
   -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
   113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
   1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
   -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
   430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
   1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
   -1866530822, -1538233109, -1090935817, -965641998
  );
  
  private rstr2hex(input: string): string {
    try { hexcase } catch(e) { hexcase=0; }
    let hex_tab:string = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    let output:string = "";
    let x: number;
    for(let i = 0; i < input.length; i++)
    {
      x = input.charCodeAt(i);
      output += hex_tab.charAt((x >>> 4) & 0x0F)
          + hex_tab.charAt( x    & 0x0F);
    }
    return output;
  }

  private rstr_sha256(s: string): string {
    return this.binb2rstr(this.binb_sha256(this.rstr2binb(s), s.length * 8));
  }

  private binb2rstr(input: number[]): string {
    let output:string = "";
    for(let i = 0; i < input.length * 32; i += 8)
      output += String.fromCharCode((input[i>>5] >>> (24 - i % 32)) & 0xFF);
    return output;
  }

  private binb_sha256(m: number[], l: number): number[] {
    let HASH: number[] = new Array(1779033703, -1150833019, 1013904242, -1521486534,
                1359893119, -1694144372, 528734635, 1541459225),
           W: number[] = new Array(64),
           a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number,
           i: number, j: number, T1: number, T2: number;
      
    /* append padding */
    m[l >> 5] |= 0x80 << (24 - l % 32);
    m[((l + 64 >> 9) << 4) + 15] = l;
  
    for(i = 0; i < m.length; i += 16) {
      a = HASH[0];
      b = HASH[1];
      c = HASH[2];
      d = HASH[3];
      e = HASH[4];
      f = HASH[5];
      g = HASH[6];
      h = HASH[7];
  
      for(j = 0; j < 64; j++) {
        if (j < 16) W[j] = m[j + i];
        else W[j] = this.safe_add(this.safe_add(this.safe_add(this.sha256_Gamma1256(W[j - 2]), W[j - 7]),
          this.sha256_Gamma0256(W[j - 15])), W[j - 16]);
        
        T1 = this.safe_add(this.safe_add(this.safe_add(this.safe_add(h, this.sha256_Sigma1256(e)), this.sha256_Ch(e, f, g)),
              Sha256.sha256_K[j]), W[j]);
        T2 = this.safe_add(this.sha256_Sigma0256(a), this.sha256_Maj(a, b, c));
        h = g;
        g = f;
        f = e;
        e = this.safe_add(d, T1);
        d = c;
        c = b;
        b = a;
        a = this.safe_add(T1, T2);
      }
    
      HASH[0] = this.safe_add(a, HASH[0]);
      HASH[1] = this.safe_add(b, HASH[1]);
      HASH[2] = this.safe_add(c, HASH[2]);
      HASH[3] = this.safe_add(d, HASH[3]);
      HASH[4] = this.safe_add(e, HASH[4]);
      HASH[5] = this.safe_add(f, HASH[5]);
      HASH[6] = this.safe_add(g, HASH[6]);
      HASH[7] = this.safe_add(h, HASH[7]);
    }
    return HASH;
  }

  private safe_add (x: number, y: number): number {
    let lsw: number = (x & 0xFFFF) + (y & 0xFFFF);
    let msw: number = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }

  private rstr2binb(input: string): number[] {
    let output: number[] = Array(input.length >> 2);
    for(let i = 0; i < output.length; i++)
      output[i] = 0;
    for(let i = 0; i < input.length * 8; i += 8)
      output[i>>5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
    return output;
  }
  /*
   * Main sha256 function, with its support functions
   */
  private sha256_S (X: number, n: number): number {return ( X >>> n ) | (X << (32 - n));}
  private sha256_R (X: number, n: number): number {return ( X >>> n );}
  private sha256_Ch(x: number, y: number, z: number): number {return ((x & y) ^ ((~x) & z));}
  private sha256_Maj(x: number, y: number, z: number): number {return ((x & y) ^ (x & z) ^ (y & z));}
  private sha256_Gamma1256(x: number): number {return (this.sha256_S(x, 17) ^ this.sha256_S(x, 19) ^ this.sha256_R(x, 10));}
  private sha256_Gamma0256(x: number): number {return (this.sha256_S(x, 7) ^ this.sha256_S(x, 18) ^ this.sha256_R(x, 3));}
  private sha256_Sigma1256(x: number): number {return (this.sha256_S(x, 6) ^ this.sha256_S(x, 11) ^ this.sha256_S(x, 25));}
  private sha256_Sigma0256(x: number): number {return (this.sha256_S(x, 2) ^ this.sha256_S(x, 13) ^ this.sha256_S(x, 22));}


  private str2rstr_utf8(input): string {
    let output: string = "";
    let i: number = -1;
    let x: number, y: number;
      
    while(++i < input.length) {
      /* Decode utf-16 surrogate pairs */
      x = input.charCodeAt(i);
      y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
      if(0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
        x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
        i++;
      }
      
      /* Encode output as utf-8 */
      if(x <= 0x7F)
      output += String.fromCharCode(x);
      else if(x <= 0x7FF)
      output += String.fromCharCode(0xC0 | ((x >>> 6 ) & 0x1F),
                      0x80 | ( x     & 0x3F));
      else if(x <= 0xFFFF)
      output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
                      0x80 | ((x >>> 6 ) & 0x3F),
                      0x80 | ( x     & 0x3F));
      else if(x <= 0x1FFFFF)
      output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
                      0x80 | ((x >>> 12) & 0x3F),
                      0x80 | ((x >>> 6 ) & 0x3F),
                      0x80 | ( x     & 0x3F));
    }
    return output;
  }

  hex_sha256(s): string  { 
    return this.rstr2hex(this.rstr_sha256(this.str2rstr_utf8(s))); 
  }
}