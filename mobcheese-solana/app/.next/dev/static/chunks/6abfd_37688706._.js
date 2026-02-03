(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/base.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeDecode",
    ()=>encodeDecode
]);
const encodeDecode = (layout)=>{
    const decode = layout.decode.bind(layout);
    const encode = layout.encode.bind(layout);
    return {
        decode,
        encode
    };
}; //# sourceMappingURL=base.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/bigint.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bigInt",
    ()=>bigInt,
    "bigIntBE",
    ()=>bigIntBE,
    "u128",
    ()=>u128,
    "u128be",
    ()=>u128be,
    "u192",
    ()=>u192,
    "u192be",
    ()=>u192be,
    "u256",
    ()=>u256,
    "u256be",
    ()=>u256be,
    "u64",
    ()=>u64,
    "u64be",
    ()=>u64be
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout/lib/Layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bigint$2d$buffer$2f$dist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/bigint-buffer/dist/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/base.mjs [app-client] (ecmascript)");
;
;
;
const bigInt = (length)=>(property)=>{
        const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blob"])(length, property);
        const { encode, decode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDecode"])(layout);
        const bigIntLayout = layout;
        bigIntLayout.decode = (buffer, offset)=>{
            const src = decode(buffer, offset);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bigint$2d$buffer$2f$dist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigIntLE"])(__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(src));
        };
        bigIntLayout.encode = (bigInt, buffer, offset)=>{
            const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bigint$2d$buffer$2f$dist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBufferLE"])(bigInt, length);
            return encode(src, buffer, offset);
        };
        return bigIntLayout;
    };
const bigIntBE = (length)=>(property)=>{
        const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blob"])(length, property);
        const { encode, decode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDecode"])(layout);
        const bigIntLayout = layout;
        bigIntLayout.decode = (buffer, offset)=>{
            const src = decode(buffer, offset);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bigint$2d$buffer$2f$dist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBigIntBE"])(__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(src));
        };
        bigIntLayout.encode = (bigInt, buffer, offset)=>{
            const src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bigint$2d$buffer$2f$dist$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBufferBE"])(bigInt, length);
            return encode(src, buffer, offset);
        };
        return bigIntLayout;
    };
const u64 = bigInt(8);
const u64be = bigIntBE(8);
const u128 = bigInt(16);
const u128be = bigIntBE(16);
const u192 = bigInt(24);
const u192be = bigIntBE(24);
const u256 = bigInt(32);
const u256be = bigIntBE(32); //# sourceMappingURL=bigint.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/decimal.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WAD",
    ()=>WAD,
    "decimal",
    ()=>decimal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bignumber$2e$js$2f$bignumber$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/bignumber.js/bignumber.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/base.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$bigint$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/bigint.mjs [app-client] (ecmascript)");
;
;
;
const WAD = new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bignumber$2e$js$2f$bignumber$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]('1e+18');
const decimal = (property)=>{
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$bigint$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u128"])(property);
    const { encode, decode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDecode"])(layout);
    const decimalLayout = layout;
    decimalLayout.decode = (buffer, offset)=>{
        const src = decode(buffer, offset).toString();
        return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$bignumber$2e$js$2f$bignumber$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](src).div(WAD);
    };
    decimalLayout.encode = (decimal, buffer, offset)=>{
        const src = BigInt(decimal.times(WAD).integerValue().toString());
        return encode(src, buffer, offset);
    };
    return decimalLayout;
}; //# sourceMappingURL=decimal.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/native.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bool",
    ()=>bool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout/lib/Layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/base.mjs [app-client] (ecmascript)");
;
;
const bool = (property)=>{
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u8"])(property);
    const { encode, decode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDecode"])(layout);
    const boolLayout = layout;
    boolLayout.decode = (buffer, offset)=>{
        const src = decode(buffer, offset);
        return !!src;
    };
    boolLayout.encode = (bool, buffer, offset)=>{
        const src = Number(bool);
        return encode(src, buffer, offset);
    };
    return boolLayout;
}; //# sourceMappingURL=native.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/web3.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicKey",
    ()=>publicKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout/lib/Layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/base.mjs [app-client] (ecmascript)");
;
;
;
const publicKey = (property)=>{
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2f$lib$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blob"])(32, property);
    const { encode, decode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDecode"])(layout);
    const publicKeyLayout = layout;
    publicKeyLayout.decode = (buffer, offset)=>{
        const src = decode(buffer, offset);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](src);
    };
    publicKeyLayout.encode = (publicKey, buffer, offset)=>{
        const src = publicKey.toBuffer();
        return encode(src, buffer, offset);
    };
    return publicKeyLayout;
}; //# sourceMappingURL=web3.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/base.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$bigint$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/bigint.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$decimal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/decimal.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$native$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/native.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$buffer$2d$layout$2d$utils$2f$lib$2f$esm$2f$web3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/buffer-layout-utils/lib/esm/web3.mjs [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/mobcheese-solana/app/node_modules/bigint-buffer/dist/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
let converter;
/**
 * Convert a little-endian buffer into a BigInt.
 * @param buf The little-endian buffer to convert
 * @returns A BigInt with the little-endian representation of buf.
 */ function toBigIntLE(buf) {
    {
        const reversed = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(buf);
        reversed.reverse();
        const hex = reversed.toString('hex');
        if (hex.length === 0) {
            return BigInt(0);
        }
        return BigInt(`0x${hex}`);
    }
    //TURBOPACK unreachable
    ;
}
exports.toBigIntLE = toBigIntLE;
/**
 * Convert a big-endian buffer into a BigInt
 * @param buf The big-endian buffer to convert.
 * @returns A BigInt with the big-endian representation of buf.
 */ function toBigIntBE(buf) {
    {
        const hex = buf.toString('hex');
        if (hex.length === 0) {
            return BigInt(0);
        }
        return BigInt(`0x${hex}`);
    }
    //TURBOPACK unreachable
    ;
}
exports.toBigIntBE = toBigIntBE;
/**
 * Convert a BigInt to a little-endian buffer.
 * @param num   The BigInt to convert.
 * @param width The number of bytes that the resulting buffer should be.
 * @returns A little-endian buffer representation of num.
 */ function toBufferLE(num, width) {
    {
        const hex = num.toString(16);
        const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');
        buffer.reverse();
        return buffer;
    }
    //TURBOPACK unreachable
    ;
}
exports.toBufferLE = toBufferLE;
/**
 * Convert a BigInt to a big-endian buffer.
 * @param num   The BigInt to convert.
 * @param width The number of bytes that the resulting buffer should be.
 * @returns A big-endian buffer representation of num.
 */ function toBufferBE(num, width) {
    {
        const hex = num.toString(16);
        return __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(hex.padStart(width * 2, '0').slice(0, width * 2), 'hex');
    }
    //TURBOPACK unreachable
    ;
}
exports.toBufferBE = toBufferBE;
}),
"[project]/mobcheese-solana/app/node_modules/bignumber.js/bignumber.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BigNumber",
    ()=>BigNumber,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/*
 *      bignumber.js v9.3.1
 *      A JavaScript library for arbitrary-precision arithmetic.
 *      https://github.com/MikeMcl/bignumber.js
 *      Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *      MIT Licensed.
 *
 *      BigNumber.prototype methods     |  BigNumber methods
 *                                      |
 *      absoluteValue            abs    |  clone
 *      comparedTo                      |  config               set
 *      decimalPlaces            dp     |      DECIMAL_PLACES
 *      dividedBy                div    |      ROUNDING_MODE
 *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
 *      exponentiatedBy          pow    |      RANGE
 *      integerValue                    |      CRYPTO
 *      isEqualTo                eq     |      MODULO_MODE
 *      isFinite                        |      POW_PRECISION
 *      isGreaterThan            gt     |      FORMAT
 *      isGreaterThanOrEqualTo   gte    |      ALPHABET
 *      isInteger                       |  isBigNumber
 *      isLessThan               lt     |  maximum              max
 *      isLessThanOrEqualTo      lte    |  minimum              min
 *      isNaN                           |  random
 *      isNegative                      |  sum
 *      isPositive                      |
 *      isZero                          |
 *      minus                           |
 *      modulo                   mod    |
 *      multipliedBy             times  |
 *      negated                         |
 *      plus                            |
 *      precision                sd     |
 *      shiftedBy                       |
 *      squareRoot               sqrt   |
 *      toExponential                   |
 *      toFixed                         |
 *      toFormat                        |
 *      toFraction                      |
 *      toJSON                          |
 *      toNumber                        |
 *      toPrecision                     |
 *      toString                        |
 *      valueOf                         |
 *
 */ var isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = '[BigNumber Error] ', tooManyDigits = bignumberError + 'Number primitive has more than 15 significant digits: ', BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER = 0x1fffffffffffff, // MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
POWS_TEN = [
    1,
    10,
    100,
    1e3,
    1e4,
    1e5,
    1e6,
    1e7,
    1e8,
    1e9,
    1e10,
    1e11,
    1e12,
    1e13
], SQRT_BASE = 1e7, // EDITABLE
// The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
// the arguments to toExponential, toFixed, toFormat, and toPrecision.
MAX = 1E9; // 0 to MAX_INT32
/*
 * Create and return a BigNumber constructor.
 */ function clone(configObject) {
    var div, convertBase, parseNumeric, P = BigNumber.prototype = {
        constructor: BigNumber,
        toString: null,
        valueOf: null
    }, ONE = new BigNumber(1), //----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
    // The default values below must be integers within the inclusive ranges stated.
    // The values can also be changed at run-time using BigNumber.set.
    // The maximum number of decimal places for operations involving division.
    DECIMAL_PLACES = 20, // The rounding mode used when rounding to the above decimal places, and when using
    // toExponential, toFixed, toFormat and toPrecision, and round (default value).
    // UP         0 Away from zero.
    // DOWN       1 Towards zero.
    // CEIL       2 Towards +Infinity.
    // FLOOR      3 Towards -Infinity.
    // HALF_UP    4 Towards nearest neighbour. If equidistant, up.
    // HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
    // HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
    // HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
    // HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
    ROUNDING_MODE = 4, // EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
    // The exponent value at and beneath which toString returns exponential notation.
    // Number type: -7
    TO_EXP_NEG = -7, // The exponent value at and above which toString returns exponential notation.
    // Number type: 21
    TO_EXP_POS = 21, // RANGE : [MIN_EXP, MAX_EXP]
    // The minimum exponent value, beneath which underflow to zero occurs.
    // Number type: -324  (5e-324)
    MIN_EXP = -1e7, // The maximum exponent value, above which overflow to Infinity occurs.
    // Number type:  308  (1.7976931348623157e+308)
    // For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
    MAX_EXP = 1e7, // Whether to use cryptographically-secure random number generation, if available.
    CRYPTO = false, // The modulo mode used when calculating the modulus: a mod n.
    // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
    // The remainder (r) is calculated as: r = a - n * q.
    //
    // UP        0 The remainder is positive if the dividend is negative, else is negative.
    // DOWN      1 The remainder has the same sign as the dividend.
    //             This modulo mode is commonly known as 'truncated division' and is
    //             equivalent to (a % n) in JavaScript.
    // FLOOR     3 The remainder has the same sign as the divisor (Python %).
    // HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
    // EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
    //             The remainder is always positive.
    //
    // The truncated division, floored division, Euclidian division and IEEE 754 remainder
    // modes are commonly used for the modulus operation.
    // Although the other rounding modes can also be used, they may not give useful results.
    MODULO_MODE = 1, // The maximum number of significant digits of the result of the exponentiatedBy operation.
    // If POW_PRECISION is 0, there will be unlimited significant digits.
    POW_PRECISION = 0, // The format specification used by the BigNumber.prototype.toFormat method.
    FORMAT = {
        prefix: '',
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ',',
        decimalSeparator: '.',
        fractionGroupSize: 0,
        fractionGroupSeparator: '\xA0',
        suffix: ''
    }, // The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
    // '-', '.', whitespace, or repeated character.
    // '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
    ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz', alphabetHasNormalDecimalDigits = true;
    //------------------------------------------------------------------------------------------
    // CONSTRUCTOR
    /*
   * The BigNumber constructor and exported function.
   * Create and return a new instance of a BigNumber object.
   *
   * v {number|string|BigNumber} A numeric value.
   * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
   */ function BigNumber(v, b) {
        var alphabet, c, caseChanged, e, i, isNum, len, str, x = this;
        // Enable constructor call without `new`.
        if (!(x instanceof BigNumber)) return new BigNumber(v, b);
        if (b == null) {
            if (v && v._isBigNumber === true) {
                x.s = v.s;
                if (!v.c || v.e > MAX_EXP) {
                    x.c = x.e = null;
                } else if (v.e < MIN_EXP) {
                    x.c = [
                        x.e = 0
                    ];
                } else {
                    x.e = v.e;
                    x.c = v.c.slice();
                }
                return;
            }
            if ((isNum = typeof v == 'number') && v * 0 == 0) {
                // Use `1 / n` to handle minus zero also.
                x.s = 1 / v < 0 ? (v = -v, -1) : 1;
                // Fast path for integers, where n < 2147483648 (2**31).
                if (v === ~~v) {
                    for(e = 0, i = v; i >= 10; i /= 10, e++);
                    if (e > MAX_EXP) {
                        x.c = x.e = null;
                    } else {
                        x.e = e;
                        x.c = [
                            v
                        ];
                    }
                    return;
                }
                str = String(v);
            } else {
                if (!isNumeric.test(str = String(v))) return parseNumeric(x, str, isNum);
                x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
            }
            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
            // Exponential form?
            if ((i = str.search(/e/i)) > 0) {
                // Determine exponent.
                if (e < 0) e = i;
                e += +str.slice(i + 1);
                str = str.substring(0, i);
            } else if (e < 0) {
                // Integer.
                e = str.length;
            }
        } else {
            // '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
            intCheck(b, 2, ALPHABET.length, 'Base');
            // Allow exponential notation to be used with base 10 argument, while
            // also rounding to DECIMAL_PLACES as with other bases.
            if (b == 10 && alphabetHasNormalDecimalDigits) {
                x = new BigNumber(v);
                return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
            }
            str = String(v);
            if (isNum = typeof v == 'number') {
                // Avoid potential interpretation of Infinity and NaN as base 44+ values.
                if (v * 0 != 0) return parseNumeric(x, str, isNum, b);
                x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
                // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
                if (BigNumber.DEBUG && str.replace(/^0\.0*|\./, '').length > 15) {
                    throw Error(tooManyDigits + v);
                }
            } else {
                x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
            }
            alphabet = ALPHABET.slice(0, b);
            e = i = 0;
            // Check that str is a valid base b number.
            // Don't use RegExp, so alphabet can contain special characters.
            for(len = str.length; i < len; i++){
                if (alphabet.indexOf(c = str.charAt(i)) < 0) {
                    if (c == '.') {
                        // If '.' is not the first character and it has not be found before.
                        if (i > e) {
                            e = len;
                            continue;
                        }
                    } else if (!caseChanged) {
                        // Allow e.g. hexadecimal 'FF' as well as 'ff'.
                        if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                            caseChanged = true;
                            i = -1;
                            e = 0;
                            continue;
                        }
                    }
                    return parseNumeric(x, String(v), isNum, b);
                }
            }
            // Prevent later check for length on converted number.
            isNum = false;
            str = convertBase(str, b, 10, x.s);
            // Decimal point?
            if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');
            else e = str.length;
        }
        // Determine leading zeros.
        for(i = 0; str.charCodeAt(i) === 48; i++);
        // Determine trailing zeros.
        for(len = str.length; str.charCodeAt(--len) === 48;);
        if (str = str.slice(i, ++len)) {
            len -= i;
            // '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
            if (isNum && BigNumber.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER || v !== mathfloor(v))) {
                throw Error(tooManyDigits + x.s * v);
            }
            // Overflow?
            if ((e = e - i - 1) > MAX_EXP) {
                // Infinity.
                x.c = x.e = null;
            // Underflow?
            } else if (e < MIN_EXP) {
                // Zero.
                x.c = [
                    x.e = 0
                ];
            } else {
                x.e = e;
                x.c = [];
                // Transform base
                // e is the base 10 exponent.
                // i is where to slice str to get the first element of the coefficient array.
                i = (e + 1) % LOG_BASE;
                if (e < 0) i += LOG_BASE; // i < 1
                if (i < len) {
                    if (i) x.c.push(+str.slice(0, i));
                    for(len -= LOG_BASE; i < len;){
                        x.c.push(+str.slice(i, i += LOG_BASE));
                    }
                    i = LOG_BASE - (str = str.slice(i)).length;
                } else {
                    i -= len;
                }
                for(; i--; str += '0');
                x.c.push(+str);
            }
        } else {
            // Zero.
            x.c = [
                x.e = 0
            ];
        }
    }
    // CONSTRUCTOR PROPERTIES
    BigNumber.clone = clone;
    BigNumber.ROUND_UP = 0;
    BigNumber.ROUND_DOWN = 1;
    BigNumber.ROUND_CEIL = 2;
    BigNumber.ROUND_FLOOR = 3;
    BigNumber.ROUND_HALF_UP = 4;
    BigNumber.ROUND_HALF_DOWN = 5;
    BigNumber.ROUND_HALF_EVEN = 6;
    BigNumber.ROUND_HALF_CEIL = 7;
    BigNumber.ROUND_HALF_FLOOR = 8;
    BigNumber.EUCLID = 9;
    /*
   * Configure infrequently-changing library-wide settings.
   *
   * Accept an object with the following optional properties (if the value of a property is
   * a number, it must be an integer within the inclusive range stated):
   *
   *   DECIMAL_PLACES   {number}           0 to MAX
   *   ROUNDING_MODE    {number}           0 to 8
   *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
   *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
   *   CRYPTO           {boolean}          true or false
   *   MODULO_MODE      {number}           0 to 9
   *   POW_PRECISION       {number}           0 to MAX
   *   ALPHABET         {string}           A string of two or more unique characters which does
   *                                       not contain '.'.
   *   FORMAT           {object}           An object with some of the following properties:
   *     prefix                 {string}
   *     groupSize              {number}
   *     secondaryGroupSize     {number}
   *     groupSeparator         {string}
   *     decimalSeparator       {string}
   *     fractionGroupSize      {number}
   *     fractionGroupSeparator {string}
   *     suffix                 {string}
   *
   * (The values assigned to the above FORMAT object properties are not checked for validity.)
   *
   * E.g.
   * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
   *
   * Ignore properties/parameters set to null or undefined, except for ALPHABET.
   *
   * Return an object with the properties current values.
   */ BigNumber.config = BigNumber.set = function(obj) {
        var p, v;
        if (obj != null) {
            if (typeof obj == 'object') {
                // DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
                // '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = 'DECIMAL_PLACES')) {
                    v = obj[p];
                    intCheck(v, 0, MAX, p);
                    DECIMAL_PLACES = v;
                }
                // ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
                // '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = 'ROUNDING_MODE')) {
                    v = obj[p];
                    intCheck(v, 0, 8, p);
                    ROUNDING_MODE = v;
                }
                // EXPONENTIAL_AT {number|number[]}
                // Integer, -MAX to MAX inclusive or
                // [integer -MAX to 0 inclusive, 0 to MAX inclusive].
                // '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = 'EXPONENTIAL_AT')) {
                    v = obj[p];
                    if (v && v.pop) {
                        intCheck(v[0], -MAX, 0, p);
                        intCheck(v[1], 0, MAX, p);
                        TO_EXP_NEG = v[0];
                        TO_EXP_POS = v[1];
                    } else {
                        intCheck(v, -MAX, MAX, p);
                        TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
                    }
                }
                // RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
                // [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
                // '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
                if (obj.hasOwnProperty(p = 'RANGE')) {
                    v = obj[p];
                    if (v && v.pop) {
                        intCheck(v[0], -MAX, -1, p);
                        intCheck(v[1], 1, MAX, p);
                        MIN_EXP = v[0];
                        MAX_EXP = v[1];
                    } else {
                        intCheck(v, -MAX, MAX, p);
                        if (v) {
                            MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                        } else {
                            throw Error(bignumberError + p + ' cannot be zero: ' + v);
                        }
                    }
                }
                // CRYPTO {boolean} true or false.
                // '[BigNumber Error] CRYPTO not true or false: {v}'
                // '[BigNumber Error] crypto unavailable'
                if (obj.hasOwnProperty(p = 'CRYPTO')) {
                    v = obj[p];
                    if (v === !!v) {
                        if (v) {
                            if (typeof crypto != 'undefined' && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                                CRYPTO = v;
                            } else {
                                CRYPTO = !v;
                                throw Error(bignumberError + 'crypto unavailable');
                            }
                        } else {
                            CRYPTO = v;
                        }
                    } else {
                        throw Error(bignumberError + p + ' not true or false: ' + v);
                    }
                }
                // MODULO_MODE {number} Integer, 0 to 9 inclusive.
                // '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = 'MODULO_MODE')) {
                    v = obj[p];
                    intCheck(v, 0, 9, p);
                    MODULO_MODE = v;
                }
                // POW_PRECISION {number} Integer, 0 to MAX inclusive.
                // '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
                if (obj.hasOwnProperty(p = 'POW_PRECISION')) {
                    v = obj[p];
                    intCheck(v, 0, MAX, p);
                    POW_PRECISION = v;
                }
                // FORMAT {object}
                // '[BigNumber Error] FORMAT not an object: {v}'
                if (obj.hasOwnProperty(p = 'FORMAT')) {
                    v = obj[p];
                    if (typeof v == 'object') FORMAT = v;
                    else throw Error(bignumberError + p + ' not an object: ' + v);
                }
                // ALPHABET {string}
                // '[BigNumber Error] ALPHABET invalid: {v}'
                if (obj.hasOwnProperty(p = 'ALPHABET')) {
                    v = obj[p];
                    // Disallow if less than two characters,
                    // or if it contains '+', '-', '.', whitespace, or a repeated character.
                    if (typeof v == 'string' && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                        alphabetHasNormalDecimalDigits = v.slice(0, 10) == '0123456789';
                        ALPHABET = v;
                    } else {
                        throw Error(bignumberError + p + ' invalid: ' + v);
                    }
                }
            } else {
                // '[BigNumber Error] Object expected: {v}'
                throw Error(bignumberError + 'Object expected: ' + obj);
            }
        }
        return {
            DECIMAL_PLACES: DECIMAL_PLACES,
            ROUNDING_MODE: ROUNDING_MODE,
            EXPONENTIAL_AT: [
                TO_EXP_NEG,
                TO_EXP_POS
            ],
            RANGE: [
                MIN_EXP,
                MAX_EXP
            ],
            CRYPTO: CRYPTO,
            MODULO_MODE: MODULO_MODE,
            POW_PRECISION: POW_PRECISION,
            FORMAT: FORMAT,
            ALPHABET: ALPHABET
        };
    };
    /*
   * Return true if v is a BigNumber instance, otherwise return false.
   *
   * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
   *
   * v {any}
   *
   * '[BigNumber Error] Invalid BigNumber: {v}'
   */ BigNumber.isBigNumber = function(v) {
        if (!v || v._isBigNumber !== true) return false;
        if (!BigNumber.DEBUG) return true;
        var i, n, c = v.c, e = v.e, s = v.s;
        out: if (({}).toString.call(c) == '[object Array]') {
            if ((s === 1 || s === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
                // If the first element is zero, the BigNumber value must be zero.
                if (c[0] === 0) {
                    if (e === 0 && c.length === 1) return true;
                    break out;
                }
                // Calculate number of digits that c[0] should have, based on the exponent.
                i = (e + 1) % LOG_BASE;
                if (i < 1) i += LOG_BASE;
                // Calculate number of digits of c[0].
                //if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
                if (String(c[0]).length == i) {
                    for(i = 0; i < c.length; i++){
                        n = c[i];
                        if (n < 0 || n >= BASE || n !== mathfloor(n)) break out;
                    }
                    // Last element cannot be zero, unless it is the only element.
                    if (n !== 0) return true;
                }
            }
        // Infinity/NaN
        } else if (c === null && e === null && (s === null || s === 1 || s === -1)) {
            return true;
        }
        throw Error(bignumberError + 'Invalid BigNumber: ' + v);
    };
    /*
   * Return a new BigNumber whose value is the maximum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */ BigNumber.maximum = BigNumber.max = function() {
        return maxOrMin(arguments, -1);
    };
    /*
   * Return a new BigNumber whose value is the minimum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */ BigNumber.minimum = BigNumber.min = function() {
        return maxOrMin(arguments, 1);
    };
    /*
   * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
   * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
   * zeros are produced).
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
   * '[BigNumber Error] crypto unavailable'
   */ BigNumber.random = function() {
        var pow2_53 = 0x20000000000000;
        // Return a 53 bit integer n, where 0 <= n < 9007199254740992.
        // Check if Math.random() produces more than 32 bits of randomness.
        // If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
        // 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
        var random53bitInt = Math.random() * pow2_53 & 0x1fffff ? function() {
            return mathfloor(Math.random() * pow2_53);
        } : function() {
            return (Math.random() * 0x40000000 | 0) * 0x800000 + (Math.random() * 0x800000 | 0);
        };
        return function(dp) {
            var a, b, e, k, v, i = 0, c = [], rand = new BigNumber(ONE);
            if (dp == null) dp = DECIMAL_PLACES;
            else intCheck(dp, 0, MAX);
            k = mathceil(dp / LOG_BASE);
            if (CRYPTO) {
                // Browsers supporting crypto.getRandomValues.
                if (crypto.getRandomValues) {
                    a = crypto.getRandomValues(new Uint32Array(k *= 2));
                    for(; i < k;){
                        // 53 bits:
                        // ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
                        // 11111 11111111 11111111 11111111 11100000 00000000 00000000
                        // ((Math.pow(2, 32) - 1) >>> 11).toString(2)
                        //                                     11111 11111111 11111111
                        // 0x20000 is 2^21.
                        v = a[i] * 0x20000 + (a[i + 1] >>> 11);
                        // Rejection sampling:
                        // 0 <= v < 9007199254740992
                        // Probability that v >= 9e15, is
                        // 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
                        if (v >= 9e15) {
                            b = crypto.getRandomValues(new Uint32Array(2));
                            a[i] = b[0];
                            a[i + 1] = b[1];
                        } else {
                            // 0 <= v <= 8999999999999999
                            // 0 <= (v % 1e14) <= 99999999999999
                            c.push(v % 1e14);
                            i += 2;
                        }
                    }
                    i = k / 2;
                // Node.js supporting crypto.randomBytes.
                } else if (crypto.randomBytes) {
                    // buffer
                    a = crypto.randomBytes(k *= 7);
                    for(; i < k;){
                        // 0x1000000000000 is 2^48, 0x10000000000 is 2^40
                        // 0x100000000 is 2^32, 0x1000000 is 2^24
                        // 11111 11111111 11111111 11111111 11111111 11111111 11111111
                        // 0 <= v < 9007199254740992
                        v = (a[i] & 31) * 0x1000000000000 + a[i + 1] * 0x10000000000 + a[i + 2] * 0x100000000 + a[i + 3] * 0x1000000 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                        if (v >= 9e15) {
                            crypto.randomBytes(7).copy(a, i);
                        } else {
                            // 0 <= (v % 1e14) <= 99999999999999
                            c.push(v % 1e14);
                            i += 7;
                        }
                    }
                    i = k / 7;
                } else {
                    CRYPTO = false;
                    throw Error(bignumberError + 'crypto unavailable');
                }
            }
            // Use Math.random.
            if (!CRYPTO) {
                for(; i < k;){
                    v = random53bitInt();
                    if (v < 9e15) c[i++] = v % 1e14;
                }
            }
            k = c[--i];
            dp %= LOG_BASE;
            // Convert trailing digits to zeros according to dp.
            if (k && dp) {
                v = POWS_TEN[LOG_BASE - dp];
                c[i] = mathfloor(k / v) * v;
            }
            // Remove trailing elements which are zero.
            for(; c[i] === 0; c.pop(), i--);
            // Zero?
            if (i < 0) {
                c = [
                    e = 0
                ];
            } else {
                // Remove leading elements which are zero and adjust exponent accordingly.
                for(e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE);
                // Count the digits of the first element of c to determine leading zeros, and...
                for(i = 1, v = c[0]; v >= 10; v /= 10, i++);
                // adjust the exponent accordingly.
                if (i < LOG_BASE) e -= LOG_BASE - i;
            }
            rand.e = e;
            rand.c = c;
            return rand;
        };
    }();
    /*
   * Return a BigNumber whose value is the sum of the arguments.
   *
   * arguments {number|string|BigNumber}
   */ BigNumber.sum = function() {
        var i = 1, args = arguments, sum = new BigNumber(args[0]);
        for(; i < args.length;)sum = sum.plus(args[i++]);
        return sum;
    };
    // PRIVATE FUNCTIONS
    // Called by BigNumber and BigNumber.prototype.toString.
    convertBase = function() {
        var decimal = '0123456789';
        /*
     * Convert string of baseIn to an array of numbers of baseOut.
     * Eg. toBaseOut('255', 10, 16) returns [15, 15].
     * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
     */ function toBaseOut(str, baseIn, baseOut, alphabet) {
            var j, arr = [
                0
            ], arrL, i = 0, len = str.length;
            for(; i < len;){
                for(arrL = arr.length; arrL--; arr[arrL] *= baseIn);
                arr[0] += alphabet.indexOf(str.charAt(i++));
                for(j = 0; j < arr.length; j++){
                    if (arr[j] > baseOut - 1) {
                        if (arr[j + 1] == null) arr[j + 1] = 0;
                        arr[j + 1] += arr[j] / baseOut | 0;
                        arr[j] %= baseOut;
                    }
                }
            }
            return arr.reverse();
        }
        // Convert a numeric string of baseIn to a numeric string of baseOut.
        // If the caller is toString, we are converting from base 10 to baseOut.
        // If the caller is BigNumber, we are converting from baseIn to base 10.
        return function(str, baseIn, baseOut, sign, callerIsToString) {
            var alphabet, d, e, k, r, x, xc, y, i = str.indexOf('.'), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
            // Non-integer.
            if (i >= 0) {
                k = POW_PRECISION;
                // Unlimited precision.
                POW_PRECISION = 0;
                str = str.replace('.', '');
                y = new BigNumber(baseIn);
                x = y.pow(str.length - i);
                POW_PRECISION = k;
                // Convert str as if an integer, then restore the fraction part by dividing the
                // result by its base raised to a power.
                y.c = toBaseOut(toFixedPoint(coeffToString(x.c), x.e, '0'), 10, baseOut, decimal);
                y.e = y.c.length;
            }
            // Convert the number as integer.
            xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet = ALPHABET, decimal) : (alphabet = decimal, ALPHABET));
            // xc now represents str as an integer and converted to baseOut. e is the exponent.
            e = k = xc.length;
            // Remove trailing zeros.
            for(; xc[--k] == 0; xc.pop());
            // Zero?
            if (!xc[0]) return alphabet.charAt(0);
            // Does str represent an integer? If so, no need for the division.
            if (i < 0) {
                --e;
            } else {
                x.c = xc;
                x.e = e;
                // The sign is needed for correct rounding.
                x.s = sign;
                x = div(x, y, dp, rm, baseOut);
                xc = x.c;
                r = x.r;
                e = x.e;
            }
            // xc now represents str converted to baseOut.
            // The index of the rounding digit.
            d = e + dp + 1;
            // The rounding digit: the digit to the right of the digit that may be rounded up.
            i = xc[d];
            // Look at the rounding digits and mode to determine whether to round up.
            k = baseOut / 2;
            r = r || d < 0 || xc[d + 1] != null;
            r = rm < 4 ? (i != null || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
            // If the index of the rounding digit is not greater than zero, or xc represents
            // zero, then the result of the base conversion is zero or, if rounding up, a value
            // such as 0.00001.
            if (d < 1 || !xc[0]) {
                // 1^-dp or 0
                str = r ? toFixedPoint(alphabet.charAt(1), -dp, alphabet.charAt(0)) : alphabet.charAt(0);
            } else {
                // Truncate xc to the required number of decimal places.
                xc.length = d;
                // Round up?
                if (r) {
                    // Rounding up may mean the previous digit has to be rounded up and so on.
                    for(--baseOut; ++xc[--d] > baseOut;){
                        xc[d] = 0;
                        if (!d) {
                            ++e;
                            xc = [
                                1
                            ].concat(xc);
                        }
                    }
                }
                // Determine trailing zeros.
                for(k = xc.length; !xc[--k];);
                // E.g. [4, 11, 15] becomes 4bf.
                for(i = 0, str = ''; i <= k; str += alphabet.charAt(xc[i++]));
                // Add leading zeros, decimal point and trailing zeros as required.
                str = toFixedPoint(str, e, alphabet.charAt(0));
            }
            // The caller will add the sign.
            return str;
        };
    }();
    // Perform division in the specified base. Called by div and convertBase.
    div = function() {
        // Assume non-zero x and k.
        function multiply(x, k, base) {
            var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
            for(x = x.slice(); i--;){
                xlo = x[i] % SQRT_BASE;
                xhi = x[i] / SQRT_BASE | 0;
                m = khi * xlo + xhi * klo;
                temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
                carry = (temp / base | 0) + (m / SQRT_BASE | 0) + khi * xhi;
                x[i] = temp % base;
            }
            if (carry) x = [
                carry
            ].concat(x);
            return x;
        }
        function compare(a, b, aL, bL) {
            var i, cmp;
            if (aL != bL) {
                cmp = aL > bL ? 1 : -1;
            } else {
                for(i = cmp = 0; i < aL; i++){
                    if (a[i] != b[i]) {
                        cmp = a[i] > b[i] ? 1 : -1;
                        break;
                    }
                }
            }
            return cmp;
        }
        function subtract(a, b, aL, base) {
            var i = 0;
            // Subtract b from a.
            for(; aL--;){
                a[aL] -= i;
                i = a[aL] < b[aL] ? 1 : 0;
                a[aL] = i * base + a[aL] - b[aL];
            }
            // Remove leading zeros.
            for(; !a[0] && a.length > 1; a.splice(0, 1));
        }
        // x: dividend, y: divisor.
        return function(x, y, dp, rm, base) {
            var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
            // Either NaN, Infinity or 0?
            if (!xc || !xc[0] || !yc || !yc[0]) {
                return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
                !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
                xc && xc[0] == 0 || !yc ? s * 0 : s / 0);
            }
            q = new BigNumber(s);
            qc = q.c = [];
            e = x.e - y.e;
            s = dp + e + 1;
            if (!base) {
                base = BASE;
                e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
                s = s / LOG_BASE | 0;
            }
            // Result exponent may be one less then the current value of e.
            // The coefficients of the BigNumbers from convertBase may have trailing zeros.
            for(i = 0; yc[i] == (xc[i] || 0); i++);
            if (yc[i] > (xc[i] || 0)) e--;
            if (s < 0) {
                qc.push(1);
                more = true;
            } else {
                xL = xc.length;
                yL = yc.length;
                i = 0;
                s += 2;
                // Normalise xc and yc so highest order digit of yc is >= base / 2.
                n = mathfloor(base / (yc[0] + 1));
                // Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
                // if (n > 1 || n++ == 1 && yc[0] < base / 2) {
                if (n > 1) {
                    yc = multiply(yc, n, base);
                    xc = multiply(xc, n, base);
                    yL = yc.length;
                    xL = xc.length;
                }
                xi = yL;
                rem = xc.slice(0, yL);
                remL = rem.length;
                // Add zeros to make remainder as long as divisor.
                for(; remL < yL; rem[remL++] = 0);
                yz = yc.slice();
                yz = [
                    0
                ].concat(yz);
                yc0 = yc[0];
                if (yc[1] >= base / 2) yc0++;
                // Not necessary, but to prevent trial digit n > base, when using base 3.
                // else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
                do {
                    n = 0;
                    // Compare divisor and remainder.
                    cmp = compare(yc, rem, yL, remL);
                    // If divisor < remainder.
                    if (cmp < 0) {
                        // Calculate trial digit, n.
                        rem0 = rem[0];
                        if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);
                        // n is how many times the divisor goes into the current remainder.
                        n = mathfloor(rem0 / yc0);
                        //  Algorithm:
                        //  product = divisor multiplied by trial digit (n).
                        //  Compare product and remainder.
                        //  If product is greater than remainder:
                        //    Subtract divisor from product, decrement trial digit.
                        //  Subtract product from remainder.
                        //  If product was less than remainder at the last compare:
                        //    Compare new remainder and divisor.
                        //    If remainder is greater than divisor:
                        //      Subtract divisor from remainder, increment trial digit.
                        if (n > 1) {
                            // n may be > base only when base is 3.
                            if (n >= base) n = base - 1;
                            // product = divisor * trial digit.
                            prod = multiply(yc, n, base);
                            prodL = prod.length;
                            remL = rem.length;
                            // Compare product and remainder.
                            // If product > remainder then trial digit n too high.
                            // n is 1 too high about 5% of the time, and is not known to have
                            // ever been more than 1 too high.
                            while(compare(prod, rem, prodL, remL) == 1){
                                n--;
                                // Subtract divisor from product.
                                subtract(prod, yL < prodL ? yz : yc, prodL, base);
                                prodL = prod.length;
                                cmp = 1;
                            }
                        } else {
                            // n is 0 or 1, cmp is -1.
                            // If n is 0, there is no need to compare yc and rem again below,
                            // so change cmp to 1 to avoid it.
                            // If n is 1, leave cmp as -1, so yc and rem are compared again.
                            if (n == 0) {
                                // divisor < remainder, so n must be at least 1.
                                cmp = n = 1;
                            }
                            // product = divisor
                            prod = yc.slice();
                            prodL = prod.length;
                        }
                        if (prodL < remL) prod = [
                            0
                        ].concat(prod);
                        // Subtract product from remainder.
                        subtract(rem, prod, remL, base);
                        remL = rem.length;
                        // If product was < remainder.
                        if (cmp == -1) {
                            // Compare divisor and new remainder.
                            // If divisor < new remainder, subtract divisor from remainder.
                            // Trial digit n too low.
                            // n is 1 too low about 5% of the time, and very rarely 2 too low.
                            while(compare(yc, rem, yL, remL) < 1){
                                n++;
                                // Subtract divisor from remainder.
                                subtract(rem, yL < remL ? yz : yc, remL, base);
                                remL = rem.length;
                            }
                        }
                    } else if (cmp === 0) {
                        n++;
                        rem = [
                            0
                        ];
                    } // else cmp === 1 and n will be 0
                    // Add the next digit, n, to the result array.
                    qc[i++] = n;
                    // Update the remainder.
                    if (rem[0]) {
                        rem[remL++] = xc[xi] || 0;
                    } else {
                        rem = [
                            xc[xi]
                        ];
                        remL = 1;
                    }
                }while ((xi++ < xL || rem[0] != null) && s--)
                more = rem[0] != null;
                // Leading zero?
                if (!qc[0]) qc.splice(0, 1);
            }
            if (base == BASE) {
                // To calculate q.e, first get the number of digits of qc[0].
                for(i = 1, s = qc[0]; s >= 10; s /= 10, i++);
                round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
            // Caller is convertBase.
            } else {
                q.e = e;
                q.r = +more;
            }
            return q;
        };
    }();
    /*
   * Return a string representing the value of BigNumber n in fixed-point or exponential
   * notation rounded to the specified decimal places or significant digits.
   *
   * n: a BigNumber.
   * i: the index of the last digit required (i.e. the digit that may be rounded up).
   * rm: the rounding mode.
   * id: 1 (toExponential) or 2 (toPrecision).
   */ function format(n, i, rm, id) {
        var c0, e, ne, len, str;
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);
        if (!n.c) return n.toString();
        c0 = n.c[0];
        ne = n.e;
        if (i == null) {
            str = coeffToString(n.c);
            str = id == 1 || id == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, '0');
        } else {
            n = round(new BigNumber(n), i, rm);
            // n.e may have changed if the value was rounded up.
            e = n.e;
            str = coeffToString(n.c);
            len = str.length;
            // toPrecision returns exponential notation if the number of significant digits
            // specified is less than the number of digits necessary to represent the integer
            // part of the value in fixed-point notation.
            // Exponential notation.
            if (id == 1 || id == 2 && (i <= e || e <= TO_EXP_NEG)) {
                // Append zeros?
                for(; len < i; str += '0', len++);
                str = toExponential(str, e);
            // Fixed-point notation.
            } else {
                i -= ne + (id === 2 && e > ne);
                str = toFixedPoint(str, e, '0');
                // Append zeros?
                if (e + 1 > len) {
                    if (--i > 0) for(str += '.'; i--; str += '0');
                } else {
                    i += e - len;
                    if (i > 0) {
                        if (e + 1 == len) str += '.';
                        for(; i--; str += '0');
                    }
                }
            }
        }
        return n.s < 0 && c0 ? '-' + str : str;
    }
    // Handle BigNumber.max and BigNumber.min.
    // If any number is NaN, return NaN.
    function maxOrMin(args, n) {
        var k, y, i = 1, x = new BigNumber(args[0]);
        for(; i < args.length; i++){
            y = new BigNumber(args[i]);
            if (!y.s || (k = compare(x, y)) === n || k === 0 && x.s === n) {
                x = y;
            }
        }
        return x;
    }
    /*
   * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
   * Called by minus, plus and times.
   */ function normalise(n, c, e) {
        var i = 1, j = c.length;
        // Remove trailing zeros.
        for(; !c[--j]; c.pop());
        // Calculate the base 10 exponent. First get the number of digits of c[0].
        for(j = c[0]; j >= 10; j /= 10, i++);
        // Overflow?
        if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
            // Infinity.
            n.c = n.e = null;
        // Underflow?
        } else if (e < MIN_EXP) {
            // Zero.
            n.c = [
                n.e = 0
            ];
        } else {
            n.e = e;
            n.c = c;
        }
        return n;
    }
    // Handle values that fail the validity test in BigNumber.
    parseNumeric = function() {
        var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(x, str, isNum, b) {
            var base, s = isNum ? str : str.replace(whitespaceOrPlus, '');
            // No exception on ±Infinity or NaN.
            if (isInfinityOrNaN.test(s)) {
                x.s = isNaN(s) ? null : s < 0 ? -1 : 1;
            } else {
                if (!isNum) {
                    // basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
                    s = s.replace(basePrefix, function(m, p1, p2) {
                        base = (p2 = p2.toLowerCase()) == 'x' ? 16 : p2 == 'b' ? 2 : 8;
                        return !b || b == base ? p1 : m;
                    });
                    if (b) {
                        base = b;
                        // E.g. '1.' to '1', '.1' to '0.1'
                        s = s.replace(dotAfter, '$1').replace(dotBefore, '0.$1');
                    }
                    if (str != s) return new BigNumber(s, base);
                }
                // '[BigNumber Error] Not a number: {n}'
                // '[BigNumber Error] Not a base {b} number: {n}'
                if (BigNumber.DEBUG) {
                    throw Error(bignumberError + 'Not a' + (b ? ' base ' + b : '') + ' number: ' + str);
                }
                // NaN
                x.s = null;
            }
            x.c = x.e = null;
        };
    }();
    /*
   * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
   * If r is truthy, it is known that there are more digits after the rounding digit.
   */ function round(x, sd, rm, r) {
        var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
        // if x is not Infinity or NaN...
        if (xc) {
            // rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
            // n is a base 1e14 number, the value of the element of array x.c containing rd.
            // ni is the index of n within x.c.
            // d is the number of digits of n.
            // i is the index of rd within n including leading zeros.
            // j is the actual index of rd within n (if < 0, rd is a leading zero).
            out: {
                // Get the number of digits of the first element of xc.
                for(d = 1, k = xc[0]; k >= 10; k /= 10, d++);
                i = sd - d;
                // If the rounding digit is in the first element of xc...
                if (i < 0) {
                    i += LOG_BASE;
                    j = sd;
                    n = xc[ni = 0];
                    // Get the rounding digit at index j of n.
                    rd = mathfloor(n / pows10[d - j - 1] % 10);
                } else {
                    ni = mathceil((i + 1) / LOG_BASE);
                    if (ni >= xc.length) {
                        if (r) {
                            // Needed by sqrt.
                            for(; xc.length <= ni; xc.push(0));
                            n = rd = 0;
                            d = 1;
                            i %= LOG_BASE;
                            j = i - LOG_BASE + 1;
                        } else {
                            break out;
                        }
                    } else {
                        n = k = xc[ni];
                        // Get the number of digits of n.
                        for(d = 1; k >= 10; k /= 10, d++);
                        // Get the index of rd within n.
                        i %= LOG_BASE;
                        // Get the index of rd within n, adjusted for leading zeros.
                        // The number of leading zeros of n is given by LOG_BASE - d.
                        j = i - LOG_BASE + d;
                        // Get the rounding digit at index j of n.
                        rd = j < 0 ? 0 : mathfloor(n / pows10[d - j - 1] % 10);
                    }
                }
                r = r || sd < 0 || // Are there any non-zero digits after the rounding digit?
                // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
                // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
                xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
                r = rm < 4 ? (rd || r) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
                (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
                if (sd < 1 || !xc[0]) {
                    xc.length = 0;
                    if (r) {
                        // Convert sd to decimal places.
                        sd -= x.e + 1;
                        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                        xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                        x.e = -sd || 0;
                    } else {
                        // Zero.
                        xc[0] = x.e = 0;
                    }
                    return x;
                }
                // Remove excess digits.
                if (i == 0) {
                    xc.length = ni;
                    k = 1;
                    ni--;
                } else {
                    xc.length = ni + 1;
                    k = pows10[LOG_BASE - i];
                    // E.g. 56700 becomes 56000 if 7 is the rounding digit.
                    // j > 0 means i > number of leading zeros of n.
                    xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
                }
                // Round up?
                if (r) {
                    for(;;){
                        // If the digit to be rounded up is in the first element of xc...
                        if (ni == 0) {
                            // i will be the length of xc[0] before k is added.
                            for(i = 1, j = xc[0]; j >= 10; j /= 10, i++);
                            j = xc[0] += k;
                            for(k = 1; j >= 10; j /= 10, k++);
                            // if i != k the length has increased.
                            if (i != k) {
                                x.e++;
                                if (xc[0] == BASE) xc[0] = 1;
                            }
                            break;
                        } else {
                            xc[ni] += k;
                            if (xc[ni] != BASE) break;
                            xc[ni--] = 0;
                            k = 1;
                        }
                    }
                }
                // Remove trailing zeros.
                for(i = xc.length; xc[--i] === 0; xc.pop());
            }
            // Overflow? Infinity.
            if (x.e > MAX_EXP) {
                x.c = x.e = null;
            // Underflow? Zero.
            } else if (x.e < MIN_EXP) {
                x.c = [
                    x.e = 0
                ];
            }
        }
        return x;
    }
    function valueOf(n) {
        var str, e = n.e;
        if (e === null) return n.toString();
        str = coeffToString(n.c);
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, '0');
        return n.s < 0 ? '-' + str : str;
    }
    // PROTOTYPE/INSTANCE METHODS
    /*
   * Return a new BigNumber whose value is the absolute value of this BigNumber.
   */ P.absoluteValue = P.abs = function() {
        var x = new BigNumber(this);
        if (x.s < 0) x.s = 1;
        return x;
    };
    /*
   * Return
   *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
   *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
   *   0 if they have the same value,
   *   or null if the value of either is NaN.
   */ P.comparedTo = function(y, b) {
        return compare(this, new BigNumber(y, b));
    };
    /*
   * If dp is undefined or null or true or false, return the number of decimal places of the
   * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   *
   * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */ P.decimalPlaces = P.dp = function(dp, rm) {
        var c, n, v, x = this;
        if (dp != null) {
            intCheck(dp, 0, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(new BigNumber(x), dp + x.e + 1, rm);
        }
        if (!(c = x.c)) return null;
        n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
        // Subtract the number of trailing zeros of the last number.
        if (v = c[v]) for(; v % 10 == 0; v /= 10, n--);
        if (n < 0) n = 0;
        return n;
    };
    /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
   * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */ P.dividedBy = P.div = function(y, b) {
        return div(this, new BigNumber(y, b), DECIMAL_PLACES, ROUNDING_MODE);
    };
    /*
   * Return a new BigNumber whose value is the integer part of dividing the value of this
   * BigNumber by the value of BigNumber(y, b).
   */ P.dividedToIntegerBy = P.idiv = function(y, b) {
        return div(this, new BigNumber(y, b), 0, 1);
    };
    /*
   * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
   *
   * If m is present, return the result modulo m.
   * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
   * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
   *
   * The modular power operation works efficiently when x, n, and m are integers, otherwise it
   * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
   *
   * n {number|string|BigNumber} The exponent. An integer.
   * [m] {number|string|BigNumber} The modulus.
   *
   * '[BigNumber Error] Exponent not an integer: {n}'
   */ P.exponentiatedBy = P.pow = function(n, m) {
        var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
        n = new BigNumber(n);
        // Allow NaN and ±Infinity, but not other non-integers.
        if (n.c && !n.isInteger()) {
            throw Error(bignumberError + 'Exponent not an integer: ' + valueOf(n));
        }
        if (m != null) m = new BigNumber(m);
        // Exponent of MAX_SAFE_INTEGER is 15.
        nIsBig = n.e > 14;
        // If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
        if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
            // The sign of the result of pow when x is negative depends on the evenness of n.
            // If +n overflows to ±Infinity, the evenness of n would be not be known.
            y = new BigNumber(Math.pow(+valueOf(x), nIsBig ? n.s * (2 - isOdd(n)) : +valueOf(n)));
            return m ? y.mod(m) : y;
        }
        nIsNeg = n.s < 0;
        if (m) {
            // x % m returns NaN if abs(m) is zero, or m is NaN.
            if (m.c ? !m.c[0] : !m.s) return new BigNumber(NaN);
            isModExp = !nIsNeg && x.isInteger() && m.isInteger();
            if (isModExp) x = x.mod(m);
        // Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
        // Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
        } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
            // If x is negative and n is odd, k = -0, else k = 0.
            k = x.s < 0 && isOdd(n) ? -0 : 0;
            // If x >= 1, k = ±Infinity.
            if (x.e > -1) k = 1 / k;
            // If n is negative return ±0, else return ±Infinity.
            return new BigNumber(nIsNeg ? 1 / k : k);
        } else if (POW_PRECISION) {
            // Truncating each coefficient array to a length of k after each multiplication
            // equates to truncating significant digits to POW_PRECISION + [28, 41],
            // i.e. there will be a minimum of 28 guard digits retained.
            k = mathceil(POW_PRECISION / LOG_BASE + 2);
        }
        if (nIsBig) {
            half = new BigNumber(0.5);
            if (nIsNeg) n.s = 1;
            nIsOdd = isOdd(n);
        } else {
            i = Math.abs(+valueOf(n));
            nIsOdd = i % 2;
        }
        y = new BigNumber(ONE);
        // Performs 54 loop iterations for n of 9007199254740991.
        for(;;){
            if (nIsOdd) {
                y = y.times(x);
                if (!y.c) break;
                if (k) {
                    if (y.c.length > k) y.c.length = k;
                } else if (isModExp) {
                    y = y.mod(m); //y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
                }
            }
            if (i) {
                i = mathfloor(i / 2);
                if (i === 0) break;
                nIsOdd = i % 2;
            } else {
                n = n.times(half);
                round(n, n.e + 1, 1);
                if (n.e > 14) {
                    nIsOdd = isOdd(n);
                } else {
                    i = +valueOf(n);
                    if (i === 0) break;
                    nIsOdd = i % 2;
                }
            }
            x = x.times(x);
            if (k) {
                if (x.c && x.c.length > k) x.c.length = k;
            } else if (isModExp) {
                x = x.mod(m); //x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
            }
        }
        if (isModExp) return y;
        if (nIsNeg) y = ONE.div(y);
        return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
    };
    /*
   * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
   * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
   */ P.integerValue = function(rm) {
        var n = new BigNumber(this);
        if (rm == null) rm = ROUNDING_MODE;
        else intCheck(rm, 0, 8);
        return round(n, n.e + 1, rm);
    };
    /*
   * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
   * otherwise return false.
   */ P.isEqualTo = P.eq = function(y, b) {
        return compare(this, new BigNumber(y, b)) === 0;
    };
    /*
   * Return true if the value of this BigNumber is a finite number, otherwise return false.
   */ P.isFinite = function() {
        return !!this.c;
    };
    /*
   * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
   * otherwise return false.
   */ P.isGreaterThan = P.gt = function(y, b) {
        return compare(this, new BigNumber(y, b)) > 0;
    };
    /*
   * Return true if the value of this BigNumber is greater than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */ P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
        return (b = compare(this, new BigNumber(y, b))) === 1 || b === 0;
    };
    /*
   * Return true if the value of this BigNumber is an integer, otherwise return false.
   */ P.isInteger = function() {
        return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
    };
    /*
   * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
   * otherwise return false.
   */ P.isLessThan = P.lt = function(y, b) {
        return compare(this, new BigNumber(y, b)) < 0;
    };
    /*
   * Return true if the value of this BigNumber is less than or equal to the value of
   * BigNumber(y, b), otherwise return false.
   */ P.isLessThanOrEqualTo = P.lte = function(y, b) {
        return (b = compare(this, new BigNumber(y, b))) === -1 || b === 0;
    };
    /*
   * Return true if the value of this BigNumber is NaN, otherwise return false.
   */ P.isNaN = function() {
        return !this.s;
    };
    /*
   * Return true if the value of this BigNumber is negative, otherwise return false.
   */ P.isNegative = function() {
        return this.s < 0;
    };
    /*
   * Return true if the value of this BigNumber is positive, otherwise return false.
   */ P.isPositive = function() {
        return this.s > 0;
    };
    /*
   * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
   */ P.isZero = function() {
        return !!this.c && this.c[0] == 0;
    };
    /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new BigNumber whose value is the value of this BigNumber minus the value of
   * BigNumber(y, b).
   */ P.minus = function(y, b) {
        var i, j, t, xLTy, x = this, a = x.s;
        y = new BigNumber(y, b);
        b = y.s;
        // Either NaN?
        if (!a || !b) return new BigNumber(NaN);
        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.plus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
            // Either Infinity?
            if (!xc || !yc) return xc ? (y.s = -b, y) : new BigNumber(yc ? x : NaN);
            // Either zero?
            if (!xc[0] || !yc[0]) {
                // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
                return yc[0] ? (y.s = -b, y) : new BigNumber(xc[0] ? x : // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
                ROUNDING_MODE == 3 ? -0 : 0);
            }
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        // Determine which is the bigger number.
        if (a = xe - ye) {
            if (xLTy = a < 0) {
                a = -a;
                t = xc;
            } else {
                ye = xe;
                t = yc;
            }
            t.reverse();
            // Prepend zeros to equalise exponents.
            for(b = a; b--; t.push(0));
            t.reverse();
        } else {
            // Exponents equal. Check digit by digit.
            j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
            for(a = b = 0; b < j; b++){
                if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
        }
        // x < y? Point xc to the array of the bigger number.
        if (xLTy) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
        }
        b = (j = yc.length) - (i = xc.length);
        // Append zeros to xc if shorter.
        // No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
        if (b > 0) for(; b--; xc[i++] = 0);
        b = BASE - 1;
        // Subtract yc from xc.
        for(; j > a;){
            if (xc[--j] < yc[j]) {
                for(i = j; i && !xc[--i]; xc[i] = b);
                --xc[i];
                xc[j] += BASE;
            }
            xc[j] -= yc[j];
        }
        // Remove leading zeros and adjust exponent accordingly.
        for(; xc[0] == 0; xc.splice(0, 1), --ye);
        // Zero?
        if (!xc[0]) {
            // Following IEEE 754 (2008) 6.3,
            // n - n = +0  but  n - n = -0  when rounding towards -Infinity.
            y.s = ROUNDING_MODE == 3 ? -1 : 1;
            y.c = [
                y.e = 0
            ];
            return y;
        }
        // No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
        // for finite x and y.
        return normalise(y, xc, ye);
    };
    /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
   * BigNumber(y, b). The result depends on the value of MODULO_MODE.
   */ P.modulo = P.mod = function(y, b) {
        var q, s, x = this;
        y = new BigNumber(y, b);
        // Return NaN if x is Infinity or NaN, or y is NaN or zero.
        if (!x.c || !y.s || y.c && !y.c[0]) {
            return new BigNumber(NaN);
        // Return x if y is Infinity or x is zero.
        } else if (!y.c || x.c && !x.c[0]) {
            return new BigNumber(x);
        }
        if (MODULO_MODE == 9) {
            // Euclidian division: q = sign(y) * floor(x / abs(y))
            // r = x - qy    where  0 <= r < abs(y)
            s = y.s;
            y.s = 1;
            q = div(x, y, 0, 3);
            y.s = s;
            q.s *= s;
        } else {
            q = div(x, y, 0, MODULO_MODE);
        }
        y = x.minus(q.times(y));
        // To match JavaScript %, ensure sign of zero is sign of dividend.
        if (!y.c[0] && MODULO_MODE == 1) y.s = x.s;
        return y;
    };
    /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
   * of BigNumber(y, b).
   */ P.multipliedBy = P.times = function(y, b) {
        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber(y, b)).c;
        // Either NaN, ±Infinity or ±0?
        if (!xc || !yc || !xc[0] || !yc[0]) {
            // Return NaN if either is NaN, or one is 0 and the other is Infinity.
            if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
                y.c = y.e = y.s = null;
            } else {
                y.s *= x.s;
                // Return ±Infinity if either is ±Infinity.
                if (!xc || !yc) {
                    y.c = y.e = null;
                // Return ±0 if either is ±0.
                } else {
                    y.c = [
                        0
                    ];
                    y.e = 0;
                }
            }
            return y;
        }
        e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
        y.s *= x.s;
        xcL = xc.length;
        ycL = yc.length;
        // Ensure xc points to longer array and xcL to its length.
        if (xcL < ycL) {
            zc = xc;
            xc = yc;
            yc = zc;
            i = xcL;
            xcL = ycL;
            ycL = i;
        }
        // Initialise the result array with zeros.
        for(i = xcL + ycL, zc = []; i--; zc.push(0));
        base = BASE;
        sqrtBase = SQRT_BASE;
        for(i = ycL; --i >= 0;){
            c = 0;
            ylo = yc[i] % sqrtBase;
            yhi = yc[i] / sqrtBase | 0;
            for(k = xcL, j = i + k; j > i;){
                xlo = xc[--k] % sqrtBase;
                xhi = xc[k] / sqrtBase | 0;
                m = yhi * xlo + xhi * ylo;
                xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
                c = (xlo / base | 0) + (m / sqrtBase | 0) + yhi * xhi;
                zc[j--] = xlo % base;
            }
            zc[j] = c;
        }
        if (c) {
            ++e;
        } else {
            zc.splice(0, 1);
        }
        return normalise(y, zc, e);
    };
    /*
   * Return a new BigNumber whose value is the value of this BigNumber negated,
   * i.e. multiplied by -1.
   */ P.negated = function() {
        var x = new BigNumber(this);
        x.s = -x.s || null;
        return x;
    };
    /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new BigNumber whose value is the value of this BigNumber plus the value of
   * BigNumber(y, b).
   */ P.plus = function(y, b) {
        var t, x = this, a = x.s;
        y = new BigNumber(y, b);
        b = y.s;
        // Either NaN?
        if (!a || !b) return new BigNumber(NaN);
        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.minus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
            // Return ±Infinity if either ±Infinity.
            if (!xc || !yc) return new BigNumber(a / 0);
            // Either zero?
            // Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
            if (!xc[0] || !yc[0]) return yc[0] ? y : new BigNumber(xc[0] ? x : a * 0);
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        // Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
        if (a = xe - ye) {
            if (a > 0) {
                ye = xe;
                t = yc;
            } else {
                a = -a;
                t = xc;
            }
            t.reverse();
            for(; a--; t.push(0));
            t.reverse();
        }
        a = xc.length;
        b = yc.length;
        // Point xc to the longer array, and b to the shorter length.
        if (a - b < 0) {
            t = yc;
            yc = xc;
            xc = t;
            b = a;
        }
        // Only start adding at yc.length - 1 as the further digits of xc can be ignored.
        for(a = 0; b;){
            a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
            xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
        }
        if (a) {
            xc = [
                a
            ].concat(xc);
            ++ye;
        }
        // No need to check for zero, as +x + +y != 0 && -x + -y != 0
        // ye = MAX_EXP + 1 possible
        return normalise(y, xc, ye);
    };
    /*
   * If sd is undefined or null or true or false, return the number of significant digits of
   * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
   * If sd is true include integer-part trailing zeros in the count.
   *
   * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
   * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
   * ROUNDING_MODE if rm is omitted.
   *
   * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
   *                     boolean: whether to count integer-part trailing zeros: true or false.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */ P.precision = P.sd = function(sd, rm) {
        var c, n, v, x = this;
        if (sd != null && sd !== !!sd) {
            intCheck(sd, 1, MAX);
            if (rm == null) rm = ROUNDING_MODE;
            else intCheck(rm, 0, 8);
            return round(new BigNumber(x), sd, rm);
        }
        if (!(c = x.c)) return null;
        v = c.length - 1;
        n = v * LOG_BASE + 1;
        if (v = c[v]) {
            // Subtract the number of trailing zeros of the last element.
            for(; v % 10 == 0; v /= 10, n--);
            // Add the number of digits of the first element.
            for(v = c[0]; v >= 10; v /= 10, n++);
        }
        if (sd && x.e + 1 > n) n = x.e + 1;
        return n;
    };
    /*
   * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
   * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
   *
   * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
   */ P.shiftedBy = function(k) {
        intCheck(k, -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER);
        return this.times('1e' + k);
    };
    /*
   *  sqrt(-n) =  N
   *  sqrt(N) =  N
   *  sqrt(-I) =  N
   *  sqrt(I) =  I
   *  sqrt(0) =  0
   *  sqrt(-0) = -0
   *
   * Return a new BigNumber whose value is the square root of the value of this BigNumber,
   * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
   */ P.squareRoot = P.sqrt = function() {
        var m, n, r, rep, t, x = this, c = x.c, s = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber('0.5');
        // Negative/NaN/Infinity/zero?
        if (s !== 1 || !c || !c[0]) {
            return new BigNumber(!s || s < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
        }
        // Initial estimate.
        s = Math.sqrt(+valueOf(x));
        // Math.sqrt underflow/overflow?
        // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
        if (s == 0 || s == 1 / 0) {
            n = coeffToString(c);
            if ((n.length + e) % 2 == 0) n += '0';
            s = Math.sqrt(+n);
            e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
            if (s == 1 / 0) {
                n = '5e' + e;
            } else {
                n = s.toExponential();
                n = n.slice(0, n.indexOf('e') + 1) + e;
            }
            r = new BigNumber(n);
        } else {
            r = new BigNumber(s + '');
        }
        // Check for zero.
        // r could be zero if MIN_EXP is changed after the this value was created.
        // This would cause a division by zero (x/t) and hence Infinity below, which would cause
        // coeffToString to throw.
        if (r.c[0]) {
            e = r.e;
            s = e + dp;
            if (s < 3) s = 0;
            // Newton-Raphson iteration.
            for(;;){
                t = r;
                r = half.times(t.plus(div(x, t, dp, 1)));
                if (coeffToString(t.c).slice(0, s) === (n = coeffToString(r.c)).slice(0, s)) {
                    // The exponent of r may here be one less than the final result exponent,
                    // e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
                    // are indexed correctly.
                    if (r.e < e) --s;
                    n = n.slice(s - 3, s + 1);
                    // The 4th rounding digit may be in error by -1 so if the 4 rounding digits
                    // are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
                    // iteration.
                    if (n == '9999' || !rep && n == '4999') {
                        // On the first iteration only, check to see if rounding up gives the
                        // exact result as the nines may infinitely repeat.
                        if (!rep) {
                            round(t, t.e + DECIMAL_PLACES + 2, 0);
                            if (t.times(t).eq(x)) {
                                r = t;
                                break;
                            }
                        }
                        dp += 4;
                        s += 4;
                        rep = 1;
                    } else {
                        // If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
                        // result. If not, then there are further digits and m will be truthy.
                        if (!+n || !+n.slice(1) && n.charAt(0) == '5') {
                            // Truncate to the first rounding digit.
                            round(r, r.e + DECIMAL_PLACES + 2, 1);
                            m = !r.times(r).eq(x);
                        }
                        break;
                    }
                }
            }
        }
        return round(r, r.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
    };
    /*
   * Return a string representing the value of this BigNumber in exponential notation and
   * rounded using ROUNDING_MODE to dp fixed decimal places.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */ P.toExponential = function(dp, rm) {
        if (dp != null) {
            intCheck(dp, 0, MAX);
            dp++;
        }
        return format(this, dp, rm, 1);
    };
    /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounding
   * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
   *
   * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
   * but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   */ P.toFixed = function(dp, rm) {
        if (dp != null) {
            intCheck(dp, 0, MAX);
            dp = dp + this.e + 1;
        }
        return format(this, dp, rm);
    };
    /*
   * Return a string representing the value of this BigNumber in fixed-point notation rounded
   * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
   * of the format or FORMAT object (see BigNumber.set).
   *
   * The formatting object may contain some or all of the properties shown below.
   *
   * FORMAT = {
   *   prefix: '',
   *   groupSize: 3,
   *   secondaryGroupSize: 0,
   *   groupSeparator: ',',
   *   decimalSeparator: '.',
   *   fractionGroupSize: 0,
   *   fractionGroupSeparator: '\xA0',      // non-breaking space
   *   suffix: ''
   * };
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   * [format] {object} Formatting options. See FORMAT pbject above.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
   * '[BigNumber Error] Argument not an object: {format}'
   */ P.toFormat = function(dp, rm, format) {
        var str, x = this;
        if (format == null) {
            if (dp != null && rm && typeof rm == 'object') {
                format = rm;
                rm = null;
            } else if (dp && typeof dp == 'object') {
                format = dp;
                dp = rm = null;
            } else {
                format = FORMAT;
            }
        } else if (typeof format != 'object') {
            throw Error(bignumberError + 'Argument not an object: ' + format);
        }
        str = x.toFixed(dp, rm);
        if (x.c) {
            var i, arr = str.split('.'), g1 = +format.groupSize, g2 = +format.secondaryGroupSize, groupSeparator = format.groupSeparator || '', intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
            if (g2) {
                i = g1;
                g1 = g2;
                g2 = i;
                len -= i;
            }
            if (g1 > 0 && len > 0) {
                i = len % g1 || g1;
                intPart = intDigits.substr(0, i);
                for(; i < len; i += g1)intPart += groupSeparator + intDigits.substr(i, g1);
                if (g2 > 0) intPart += groupSeparator + intDigits.slice(i);
                if (isNeg) intPart = '-' + intPart;
            }
            str = fractionPart ? intPart + (format.decimalSeparator || '') + ((g2 = +format.fractionGroupSize) ? fractionPart.replace(new RegExp('\\d{' + g2 + '}\\B', 'g'), '$&' + (format.fractionGroupSeparator || '')) : fractionPart) : intPart;
        }
        return (format.prefix || '') + str + (format.suffix || '');
    };
    /*
   * Return an array of two BigNumbers representing the value of this BigNumber as a simple
   * fraction with an integer numerator and an integer denominator.
   * The denominator will be a positive non-zero value less than or equal to the specified
   * maximum denominator. If a maximum denominator is not specified, the denominator will be
   * the lowest value necessary to represent the number exactly.
   *
   * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
   *
   * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
   */ P.toFraction = function(md) {
        var d, d0, d1, d2, e, exp, n, n0, n1, q, r, s, x = this, xc = x.c;
        if (md != null) {
            n = new BigNumber(md);
            // Throw if md is less than one or is not an integer, unless it is Infinity.
            if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE)) {
                throw Error(bignumberError + 'Argument ' + (n.isInteger() ? 'out of range: ' : 'not an integer: ') + valueOf(n));
            }
        }
        if (!xc) return new BigNumber(x);
        d = new BigNumber(ONE);
        n1 = d0 = new BigNumber(ONE);
        d1 = n0 = new BigNumber(ONE);
        s = coeffToString(xc);
        // Determine initial denominator.
        // d is a power of 10 and the minimum max denominator that specifies the value exactly.
        e = d.e = s.length - x.e - 1;
        d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
        md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
        exp = MAX_EXP;
        MAX_EXP = 1 / 0;
        n = new BigNumber(s);
        // n0 = d1 = 0
        n0.c[0] = 0;
        for(;;){
            q = div(n, d, 0, 1);
            d2 = d0.plus(q.times(d1));
            if (d2.comparedTo(md) == 1) break;
            d0 = d1;
            d1 = d2;
            n1 = n0.plus(q.times(d2 = n1));
            n0 = d2;
            d = n.minus(q.times(d2 = d));
            n = d2;
        }
        d2 = div(md.minus(d0), d1, 0, 1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        e = e * 2;
        // Determine which fraction is closer to x, n0/d0 or n1/d1
        r = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(div(n0, d0, e, ROUNDING_MODE).minus(x).abs()) < 1 ? [
            n1,
            d1
        ] : [
            n0,
            d0
        ];
        MAX_EXP = exp;
        return r;
    };
    /*
   * Return the value of this BigNumber converted to a number primitive.
   */ P.toNumber = function() {
        return +valueOf(this);
    };
    /*
   * Return a string representing the value of this BigNumber rounded to sd significant digits
   * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
   * necessary to represent the integer part of the value in fixed-point notation, then use
   * exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
   */ P.toPrecision = function(sd, rm) {
        if (sd != null) intCheck(sd, 1, MAX);
        return format(this, sd, rm, 2);
    };
    /*
   * Return a string representing the value of this BigNumber in base b, or base 10 if b is
   * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
   * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
   * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
   * TO_EXP_NEG, return exponential notation.
   *
   * [b] {number} Integer, 2 to ALPHABET.length inclusive.
   *
   * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
   */ P.toString = function(b) {
        var str, n = this, s = n.s, e = n.e;
        // Infinity or NaN?
        if (e === null) {
            if (s) {
                str = 'Infinity';
                if (s < 0) str = '-' + str;
            } else {
                str = 'NaN';
            }
        } else {
            if (b == null) {
                str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, '0');
            } else if (b === 10 && alphabetHasNormalDecimalDigits) {
                n = round(new BigNumber(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
                str = toFixedPoint(coeffToString(n.c), n.e, '0');
            } else {
                intCheck(b, 2, ALPHABET.length, 'Base');
                str = convertBase(toFixedPoint(coeffToString(n.c), e, '0'), 10, b, s, true);
            }
            if (s < 0 && n.c[0]) str = '-' + str;
        }
        return str;
    };
    /*
   * Return as toString, but do not accept a base argument, and include the minus sign for
   * negative zero.
   */ P.valueOf = P.toJSON = function() {
        return valueOf(this);
    };
    P._isBigNumber = true;
    P[Symbol.toStringTag] = 'BigNumber';
    // Node.js v10.12.0+
    P[Symbol.for('nodejs.util.inspect.custom')] = P.valueOf;
    if (configObject != null) BigNumber.set(configObject);
    return BigNumber;
}
// PRIVATE HELPER FUNCTIONS
// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
function bitFloor(n) {
    var i = n | 0;
    return n > 0 || n === i ? i : i - 1;
}
// Return a coefficient array as a string of base 10 digits.
function coeffToString(a) {
    var s, z, i = 1, j = a.length, r = a[0] + '';
    for(; i < j;){
        s = a[i++] + '';
        z = LOG_BASE - s.length;
        for(; z--; s = '0' + s);
        r += s;
    }
    // Determine trailing zeros.
    for(j = r.length; r.charCodeAt(--j) === 48;);
    return r.slice(0, j + 1 || 1);
}
// Compare the value of BigNumbers x and y.
function compare(x, y) {
    var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either NaN?
    if (!i || !j) return null;
    a = xc && !xc[0];
    b = yc && !yc[0];
    // Either zero?
    if (a || b) return a ? b ? 0 : -j : i;
    // Signs differ?
    if (i != j) return i;
    a = i < 0;
    b = k == l;
    // Either Infinity?
    if (!xc || !yc) return b ? 0 : !xc ^ a ? 1 : -1;
    // Compare exponents.
    if (!b) return k > l ^ a ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l;
    // Compare digit by digit.
    for(i = 0; i < j; i++)if (xc[i] != yc[i]) return xc[i] > yc[i] ^ a ? 1 : -1;
    // Compare lengths.
    return k == l ? 0 : k > l ^ a ? 1 : -1;
}
/*
 * Check that n is a primitive number, an integer, and in range, otherwise throw.
 */ function intCheck(n, min, max, name) {
    if (n < min || n > max || n !== mathfloor(n)) {
        throw Error(bignumberError + (name || 'Argument') + (typeof n == 'number' ? n < min || n > max ? ' out of range: ' : ' not an integer: ' : ' not a primitive number: ') + String(n));
    }
}
// Assumes finite n.
function isOdd(n) {
    var k = n.c.length - 1;
    return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
}
function toExponential(str, e) {
    return (str.length > 1 ? str.charAt(0) + '.' + str.slice(1) : str) + (e < 0 ? 'e' : 'e+') + e;
}
function toFixedPoint(str, e, z) {
    var len, zs;
    // Negative exponent?
    if (e < 0) {
        // Prepend zeros.
        for(zs = z + '.'; ++e; zs += z);
        str = zs + str;
    // Positive exponent
    } else {
        len = str.length;
        // Append zeros.
        if (++e > len) {
            for(zs = z, e -= len; --e; zs += z);
            str += zs;
        } else if (e < len) {
            str = str.slice(0, e) + '.' + str.slice(e);
        }
    }
    return str;
}
var BigNumber = clone();
const __TURBOPACK__default__export__ = BigNumber;
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCodecSentinel",
    ()=>addCodecSentinel,
    "addCodecSizePrefix",
    ()=>addCodecSizePrefix,
    "addDecoderSentinel",
    ()=>addDecoderSentinel,
    "addDecoderSizePrefix",
    ()=>addDecoderSizePrefix,
    "addEncoderSentinel",
    ()=>addEncoderSentinel,
    "addEncoderSizePrefix",
    ()=>addEncoderSizePrefix,
    "assertByteArrayHasEnoughBytesForCodec",
    ()=>assertByteArrayHasEnoughBytesForCodec,
    "assertByteArrayIsNotEmptyForCodec",
    ()=>assertByteArrayIsNotEmptyForCodec,
    "assertByteArrayOffsetIsNotOutOfRange",
    ()=>assertByteArrayOffsetIsNotOutOfRange,
    "assertIsFixedSize",
    ()=>assertIsFixedSize,
    "assertIsVariableSize",
    ()=>assertIsVariableSize,
    "combineCodec",
    ()=>combineCodec,
    "containsBytes",
    ()=>containsBytes,
    "createCodec",
    ()=>createCodec,
    "createDecoder",
    ()=>createDecoder,
    "createEncoder",
    ()=>createEncoder,
    "fixBytes",
    ()=>fixBytes,
    "fixCodecSize",
    ()=>fixCodecSize,
    "fixDecoderSize",
    ()=>fixDecoderSize,
    "fixEncoderSize",
    ()=>fixEncoderSize,
    "getEncodedSize",
    ()=>getEncodedSize,
    "isFixedSize",
    ()=>isFixedSize,
    "isVariableSize",
    ()=>isVariableSize,
    "mergeBytes",
    ()=>mergeBytes,
    "offsetCodec",
    ()=>offsetCodec,
    "offsetDecoder",
    ()=>offsetDecoder,
    "offsetEncoder",
    ()=>offsetEncoder,
    "padBytes",
    ()=>padBytes,
    "padLeftCodec",
    ()=>padLeftCodec,
    "padLeftDecoder",
    ()=>padLeftDecoder,
    "padLeftEncoder",
    ()=>padLeftEncoder,
    "padRightCodec",
    ()=>padRightCodec,
    "padRightDecoder",
    ()=>padRightDecoder,
    "padRightEncoder",
    ()=>padRightEncoder,
    "resizeCodec",
    ()=>resizeCodec,
    "resizeDecoder",
    ()=>resizeDecoder,
    "resizeEncoder",
    ()=>resizeEncoder,
    "reverseCodec",
    ()=>reverseCodec,
    "reverseDecoder",
    ()=>reverseDecoder,
    "reverseEncoder",
    ()=>reverseEncoder,
    "transformCodec",
    ()=>transformCodec,
    "transformDecoder",
    ()=>transformDecoder,
    "transformEncoder",
    ()=>transformEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
;
// src/add-codec-sentinel.ts
// src/bytes.ts
var mergeBytes = (byteArrays)=>{
    const nonEmptyByteArrays = byteArrays.filter((arr)=>arr.length);
    if (nonEmptyByteArrays.length === 0) {
        return byteArrays.length ? byteArrays[0] : new Uint8Array();
    }
    if (nonEmptyByteArrays.length === 1) {
        return nonEmptyByteArrays[0];
    }
    const totalLength = nonEmptyByteArrays.reduce((total, arr)=>total + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    nonEmptyByteArrays.forEach((arr)=>{
        result.set(arr, offset);
        offset += arr.length;
    });
    return result;
};
var padBytes = (bytes, length)=>{
    if (bytes.length >= length) return bytes;
    const paddedBytes = new Uint8Array(length).fill(0);
    paddedBytes.set(bytes);
    return paddedBytes;
};
var fixBytes = (bytes, length)=>padBytes(bytes.length <= length ? bytes : bytes.slice(0, length), length);
function containsBytes(data, bytes, offset) {
    const slice = offset === 0 && data.length === bytes.length ? data : data.slice(offset, offset + bytes.length);
    if (slice.length !== bytes.length) return false;
    return bytes.every((b, i)=>b === slice[i]);
}
function getEncodedSize(value, encoder) {
    return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
}
function createEncoder(encoder) {
    return Object.freeze({
        ...encoder,
        encode: (value)=>{
            const bytes = new Uint8Array(getEncodedSize(value, encoder));
            encoder.write(value, bytes, 0);
            return bytes;
        }
    });
}
function createDecoder(decoder) {
    return Object.freeze({
        ...decoder,
        decode: (bytes, offset = 0)=>decoder.read(bytes, offset)[0]
    });
}
function createCodec(codec) {
    return Object.freeze({
        ...codec,
        decode: (bytes, offset = 0)=>codec.read(bytes, offset)[0],
        encode: (value)=>{
            const bytes = new Uint8Array(getEncodedSize(value, codec));
            codec.write(value, bytes, 0);
            return bytes;
        }
    });
}
function isFixedSize(codec) {
    return "fixedSize" in codec && typeof codec.fixedSize === "number";
}
function assertIsFixedSize(codec) {
    if (!isFixedSize(codec)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH"]);
    }
}
function isVariableSize(codec) {
    return !isFixedSize(codec);
}
function assertIsVariableSize(codec) {
    if (!isVariableSize(codec)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH"]);
    }
}
function combineCodec(encoder, decoder) {
    if (isFixedSize(encoder) !== isFixedSize(decoder)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH"]);
    }
    if (isFixedSize(encoder) && isFixedSize(decoder) && encoder.fixedSize !== decoder.fixedSize) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH"], {
            decoderFixedSize: decoder.fixedSize,
            encoderFixedSize: encoder.fixedSize
        });
    }
    if (!isFixedSize(encoder) && !isFixedSize(decoder) && encoder.maxSize !== decoder.maxSize) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH"], {
            decoderMaxSize: decoder.maxSize,
            encoderMaxSize: encoder.maxSize
        });
    }
    return {
        ...decoder,
        ...encoder,
        decode: decoder.decode,
        encode: encoder.encode,
        read: decoder.read,
        write: encoder.write
    };
}
// src/add-codec-sentinel.ts
function addEncoderSentinel(encoder, sentinel) {
    const write = (value, bytes, offset)=>{
        const encoderBytes = encoder.encode(value);
        if (findSentinelIndex(encoderBytes, sentinel) >= 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL"], {
                encodedBytes: encoderBytes,
                hexEncodedBytes: hexBytes(encoderBytes),
                hexSentinel: hexBytes(sentinel),
                sentinel
            });
        }
        bytes.set(encoderBytes, offset);
        offset += encoderBytes.length;
        bytes.set(sentinel, offset);
        offset += sentinel.length;
        return offset;
    };
    if (isFixedSize(encoder)) {
        return createEncoder({
            ...encoder,
            fixedSize: encoder.fixedSize + sentinel.length,
            write
        });
    }
    return createEncoder({
        ...encoder,
        ...encoder.maxSize != null ? {
            maxSize: encoder.maxSize + sentinel.length
        } : {},
        getSizeFromValue: (value)=>encoder.getSizeFromValue(value) + sentinel.length,
        write
    });
}
function addDecoderSentinel(decoder, sentinel) {
    const read = (bytes, offset)=>{
        const candidateBytes = offset === 0 ? bytes : bytes.slice(offset);
        const sentinelIndex = findSentinelIndex(candidateBytes, sentinel);
        if (sentinelIndex === -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES"], {
                decodedBytes: candidateBytes,
                hexDecodedBytes: hexBytes(candidateBytes),
                hexSentinel: hexBytes(sentinel),
                sentinel
            });
        }
        const preSentinelBytes = candidateBytes.slice(0, sentinelIndex);
        return [
            decoder.decode(preSentinelBytes),
            offset + preSentinelBytes.length + sentinel.length
        ];
    };
    if (isFixedSize(decoder)) {
        return createDecoder({
            ...decoder,
            fixedSize: decoder.fixedSize + sentinel.length,
            read
        });
    }
    return createDecoder({
        ...decoder,
        ...decoder.maxSize != null ? {
            maxSize: decoder.maxSize + sentinel.length
        } : {},
        read
    });
}
function addCodecSentinel(codec, sentinel) {
    return combineCodec(addEncoderSentinel(codec, sentinel), addDecoderSentinel(codec, sentinel));
}
function findSentinelIndex(bytes, sentinel) {
    return bytes.findIndex((byte, index, arr)=>{
        if (sentinel.length === 1) return byte === sentinel[0];
        return containsBytes(arr, sentinel, index);
    });
}
function hexBytes(bytes) {
    return bytes.reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
}
function assertByteArrayIsNotEmptyForCodec(codecDescription, bytes, offset = 0) {
    if (bytes.length - offset <= 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY"], {
            codecDescription
        });
    }
}
function assertByteArrayHasEnoughBytesForCodec(codecDescription, expected, bytes, offset = 0) {
    const bytesLength = bytes.length - offset;
    if (bytesLength < expected) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH"], {
            bytesLength,
            codecDescription,
            expected
        });
    }
}
function assertByteArrayOffsetIsNotOutOfRange(codecDescription, offset, bytesLength) {
    if (offset < 0 || offset > bytesLength) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE"], {
            bytesLength,
            codecDescription,
            offset
        });
    }
}
// src/add-codec-size-prefix.ts
function addEncoderSizePrefix(encoder, prefix) {
    const write = (value, bytes, offset)=>{
        const encoderBytes = encoder.encode(value);
        offset = prefix.write(encoderBytes.length, bytes, offset);
        bytes.set(encoderBytes, offset);
        return offset + encoderBytes.length;
    };
    if (isFixedSize(prefix) && isFixedSize(encoder)) {
        return createEncoder({
            ...encoder,
            fixedSize: prefix.fixedSize + encoder.fixedSize,
            write
        });
    }
    const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
    const encoderMaxSize = isFixedSize(encoder) ? encoder.fixedSize : encoder.maxSize ?? null;
    const maxSize = prefixMaxSize !== null && encoderMaxSize !== null ? prefixMaxSize + encoderMaxSize : null;
    return createEncoder({
        ...encoder,
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (value)=>{
            const encoderSize = getEncodedSize(value, encoder);
            return getEncodedSize(encoderSize, prefix) + encoderSize;
        },
        write
    });
}
function addDecoderSizePrefix(decoder, prefix) {
    const read = (bytes, offset)=>{
        const [bigintSize, decoderOffset] = prefix.read(bytes, offset);
        const size = Number(bigintSize);
        offset = decoderOffset;
        if (offset > 0 || bytes.length > size) {
            bytes = bytes.slice(offset, offset + size);
        }
        assertByteArrayHasEnoughBytesForCodec("addDecoderSizePrefix", size, bytes);
        return [
            decoder.decode(bytes),
            offset + size
        ];
    };
    if (isFixedSize(prefix) && isFixedSize(decoder)) {
        return createDecoder({
            ...decoder,
            fixedSize: prefix.fixedSize + decoder.fixedSize,
            read
        });
    }
    const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
    const decoderMaxSize = isFixedSize(decoder) ? decoder.fixedSize : decoder.maxSize ?? null;
    const maxSize = prefixMaxSize !== null && decoderMaxSize !== null ? prefixMaxSize + decoderMaxSize : null;
    return createDecoder({
        ...decoder,
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function addCodecSizePrefix(codec, prefix) {
    return combineCodec(addEncoderSizePrefix(codec, prefix), addDecoderSizePrefix(codec, prefix));
}
// src/fix-codec-size.ts
function fixEncoderSize(encoder, fixedBytes) {
    return createEncoder({
        fixedSize: fixedBytes,
        write: (value, bytes, offset)=>{
            const variableByteArray = encoder.encode(value);
            const fixedByteArray = variableByteArray.length > fixedBytes ? variableByteArray.slice(0, fixedBytes) : variableByteArray;
            bytes.set(fixedByteArray, offset);
            return offset + fixedBytes;
        }
    });
}
function fixDecoderSize(decoder, fixedBytes) {
    return createDecoder({
        fixedSize: fixedBytes,
        read: (bytes, offset)=>{
            assertByteArrayHasEnoughBytesForCodec("fixCodecSize", fixedBytes, bytes, offset);
            if (offset > 0 || bytes.length > fixedBytes) {
                bytes = bytes.slice(offset, offset + fixedBytes);
            }
            if (isFixedSize(decoder)) {
                bytes = fixBytes(bytes, decoder.fixedSize);
            }
            const [value] = decoder.read(bytes, 0);
            return [
                value,
                offset + fixedBytes
            ];
        }
    });
}
function fixCodecSize(codec, fixedBytes) {
    return combineCodec(fixEncoderSize(codec, fixedBytes), fixDecoderSize(codec, fixedBytes));
}
// src/offset-codec.ts
function offsetEncoder(encoder, config) {
    return createEncoder({
        ...encoder,
        write: (value, bytes, preOffset)=>{
            const wrapBytes = (offset)=>modulo(offset, bytes.length);
            const newPreOffset = config.preOffset ? config.preOffset({
                bytes,
                preOffset,
                wrapBytes
            }) : preOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPreOffset, bytes.length);
            const postOffset = encoder.write(value, bytes, newPreOffset);
            const newPostOffset = config.postOffset ? config.postOffset({
                bytes,
                newPreOffset,
                postOffset,
                preOffset,
                wrapBytes
            }) : postOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPostOffset, bytes.length);
            return newPostOffset;
        }
    });
}
function offsetDecoder(decoder, config) {
    return createDecoder({
        ...decoder,
        read: (bytes, preOffset)=>{
            const wrapBytes = (offset)=>modulo(offset, bytes.length);
            const newPreOffset = config.preOffset ? config.preOffset({
                bytes,
                preOffset,
                wrapBytes
            }) : preOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPreOffset, bytes.length);
            const [value, postOffset] = decoder.read(bytes, newPreOffset);
            const newPostOffset = config.postOffset ? config.postOffset({
                bytes,
                newPreOffset,
                postOffset,
                preOffset,
                wrapBytes
            }) : postOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPostOffset, bytes.length);
            return [
                value,
                newPostOffset
            ];
        }
    });
}
function offsetCodec(codec, config) {
    return combineCodec(offsetEncoder(codec, config), offsetDecoder(codec, config));
}
function modulo(dividend, divisor) {
    if (divisor === 0) return 0;
    return (dividend % divisor + divisor) % divisor;
}
function resizeEncoder(encoder, resize) {
    if (isFixedSize(encoder)) {
        const fixedSize = resize(encoder.fixedSize);
        if (fixedSize < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                bytesLength: fixedSize,
                codecDescription: "resizeEncoder"
            });
        }
        return createEncoder({
            ...encoder,
            fixedSize
        });
    }
    return createEncoder({
        ...encoder,
        getSizeFromValue: (value)=>{
            const newSize = resize(encoder.getSizeFromValue(value));
            if (newSize < 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                    bytesLength: newSize,
                    codecDescription: "resizeEncoder"
                });
            }
            return newSize;
        }
    });
}
function resizeDecoder(decoder, resize) {
    if (isFixedSize(decoder)) {
        const fixedSize = resize(decoder.fixedSize);
        if (fixedSize < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                bytesLength: fixedSize,
                codecDescription: "resizeDecoder"
            });
        }
        return createDecoder({
            ...decoder,
            fixedSize
        });
    }
    return decoder;
}
function resizeCodec(codec, resize) {
    return combineCodec(resizeEncoder(codec, resize), resizeDecoder(codec, resize));
}
// src/pad-codec.ts
function padLeftEncoder(encoder, offset) {
    return offsetEncoder(resizeEncoder(encoder, (size)=>size + offset), {
        preOffset: ({ preOffset })=>preOffset + offset
    });
}
function padRightEncoder(encoder, offset) {
    return offsetEncoder(resizeEncoder(encoder, (size)=>size + offset), {
        postOffset: ({ postOffset })=>postOffset + offset
    });
}
function padLeftDecoder(decoder, offset) {
    return offsetDecoder(resizeDecoder(decoder, (size)=>size + offset), {
        preOffset: ({ preOffset })=>preOffset + offset
    });
}
function padRightDecoder(decoder, offset) {
    return offsetDecoder(resizeDecoder(decoder, (size)=>size + offset), {
        postOffset: ({ postOffset })=>postOffset + offset
    });
}
function padLeftCodec(codec, offset) {
    return combineCodec(padLeftEncoder(codec, offset), padLeftDecoder(codec, offset));
}
function padRightCodec(codec, offset) {
    return combineCodec(padRightEncoder(codec, offset), padRightDecoder(codec, offset));
}
// src/reverse-codec.ts
function copySourceToTargetInReverse(source, target_WILL_MUTATE, sourceOffset, sourceLength, targetOffset = 0) {
    while(sourceOffset < --sourceLength){
        const leftValue = source[sourceOffset];
        target_WILL_MUTATE[sourceOffset + targetOffset] = source[sourceLength];
        target_WILL_MUTATE[sourceLength + targetOffset] = leftValue;
        sourceOffset++;
    }
    if (sourceOffset === sourceLength) {
        target_WILL_MUTATE[sourceOffset + targetOffset] = source[sourceOffset];
    }
}
function reverseEncoder(encoder) {
    assertIsFixedSize(encoder);
    return createEncoder({
        ...encoder,
        write: (value, bytes, offset)=>{
            const newOffset = encoder.write(value, bytes, offset);
            copySourceToTargetInReverse(bytes, bytes, offset, offset + encoder.fixedSize);
            return newOffset;
        }
    });
}
function reverseDecoder(decoder) {
    assertIsFixedSize(decoder);
    return createDecoder({
        ...decoder,
        read: (bytes, offset)=>{
            const reversedBytes = bytes.slice();
            copySourceToTargetInReverse(bytes, reversedBytes, offset, offset + decoder.fixedSize);
            return decoder.read(reversedBytes, offset);
        }
    });
}
function reverseCodec(codec) {
    return combineCodec(reverseEncoder(codec), reverseDecoder(codec));
}
// src/transform-codec.ts
function transformEncoder(encoder, unmap) {
    return createEncoder({
        ...isVariableSize(encoder) ? {
            ...encoder,
            getSizeFromValue: (value)=>encoder.getSizeFromValue(unmap(value))
        } : encoder,
        write: (value, bytes, offset)=>encoder.write(unmap(value), bytes, offset)
    });
}
function transformDecoder(decoder, map) {
    return createDecoder({
        ...decoder,
        read: (bytes, offset)=>{
            const [value, newOffset] = decoder.read(bytes, offset);
            return [
                map(value, bytes, offset),
                newOffset
            ];
        }
    });
}
function transformCodec(codec, unmap, map) {
    return createCodec({
        ...transformEncoder(codec, unmap),
        read: map ? transformDecoder(codec, map).read : codec.read
    });
}
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCodecSentinel",
    ()=>addCodecSentinel,
    "addCodecSizePrefix",
    ()=>addCodecSizePrefix,
    "addDecoderSentinel",
    ()=>addDecoderSentinel,
    "addDecoderSizePrefix",
    ()=>addDecoderSizePrefix,
    "addEncoderSentinel",
    ()=>addEncoderSentinel,
    "addEncoderSizePrefix",
    ()=>addEncoderSizePrefix,
    "assertByteArrayHasEnoughBytesForCodec",
    ()=>assertByteArrayHasEnoughBytesForCodec,
    "assertByteArrayIsNotEmptyForCodec",
    ()=>assertByteArrayIsNotEmptyForCodec,
    "assertByteArrayOffsetIsNotOutOfRange",
    ()=>assertByteArrayOffsetIsNotOutOfRange,
    "assertIsFixedSize",
    ()=>assertIsFixedSize,
    "assertIsVariableSize",
    ()=>assertIsVariableSize,
    "combineCodec",
    ()=>combineCodec,
    "containsBytes",
    ()=>containsBytes,
    "createCodec",
    ()=>createCodec,
    "createDecoder",
    ()=>createDecoder,
    "createEncoder",
    ()=>createEncoder,
    "fixBytes",
    ()=>fixBytes,
    "fixCodecSize",
    ()=>fixCodecSize,
    "fixDecoderSize",
    ()=>fixDecoderSize,
    "fixEncoderSize",
    ()=>fixEncoderSize,
    "getEncodedSize",
    ()=>getEncodedSize,
    "isFixedSize",
    ()=>isFixedSize,
    "isVariableSize",
    ()=>isVariableSize,
    "mergeBytes",
    ()=>mergeBytes,
    "offsetCodec",
    ()=>offsetCodec,
    "offsetDecoder",
    ()=>offsetDecoder,
    "offsetEncoder",
    ()=>offsetEncoder,
    "padBytes",
    ()=>padBytes,
    "padLeftCodec",
    ()=>padLeftCodec,
    "padLeftDecoder",
    ()=>padLeftDecoder,
    "padLeftEncoder",
    ()=>padLeftEncoder,
    "padRightCodec",
    ()=>padRightCodec,
    "padRightDecoder",
    ()=>padRightDecoder,
    "padRightEncoder",
    ()=>padRightEncoder,
    "resizeCodec",
    ()=>resizeCodec,
    "resizeDecoder",
    ()=>resizeDecoder,
    "resizeEncoder",
    ()=>resizeEncoder,
    "reverseCodec",
    ()=>reverseCodec,
    "reverseDecoder",
    ()=>reverseDecoder,
    "reverseEncoder",
    ()=>reverseEncoder,
    "transformCodec",
    ()=>transformCodec,
    "transformDecoder",
    ()=>transformDecoder,
    "transformEncoder",
    ()=>transformEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
;
// src/add-codec-sentinel.ts
// src/bytes.ts
var mergeBytes = (byteArrays)=>{
    const nonEmptyByteArrays = byteArrays.filter((arr)=>arr.length);
    if (nonEmptyByteArrays.length === 0) {
        return byteArrays.length ? byteArrays[0] : new Uint8Array();
    }
    if (nonEmptyByteArrays.length === 1) {
        return nonEmptyByteArrays[0];
    }
    const totalLength = nonEmptyByteArrays.reduce((total, arr)=>total + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    nonEmptyByteArrays.forEach((arr)=>{
        result.set(arr, offset);
        offset += arr.length;
    });
    return result;
};
var padBytes = (bytes, length)=>{
    if (bytes.length >= length) return bytes;
    const paddedBytes = new Uint8Array(length).fill(0);
    paddedBytes.set(bytes);
    return paddedBytes;
};
var fixBytes = (bytes, length)=>padBytes(bytes.length <= length ? bytes : bytes.slice(0, length), length);
function containsBytes(data, bytes, offset) {
    const slice = offset === 0 && data.length === bytes.length ? data : data.slice(offset, offset + bytes.length);
    if (slice.length !== bytes.length) return false;
    return bytes.every((b, i)=>b === slice[i]);
}
function getEncodedSize(value, encoder) {
    return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
}
function createEncoder(encoder) {
    return Object.freeze({
        ...encoder,
        encode: (value)=>{
            const bytes = new Uint8Array(getEncodedSize(value, encoder));
            encoder.write(value, bytes, 0);
            return bytes;
        }
    });
}
function createDecoder(decoder) {
    return Object.freeze({
        ...decoder,
        decode: (bytes, offset = 0)=>decoder.read(bytes, offset)[0]
    });
}
function createCodec(codec) {
    return Object.freeze({
        ...codec,
        decode: (bytes, offset = 0)=>codec.read(bytes, offset)[0],
        encode: (value)=>{
            const bytes = new Uint8Array(getEncodedSize(value, codec));
            codec.write(value, bytes, 0);
            return bytes;
        }
    });
}
function isFixedSize(codec) {
    return "fixedSize" in codec && typeof codec.fixedSize === "number";
}
function assertIsFixedSize(codec) {
    if (!isFixedSize(codec)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH"]);
    }
}
function isVariableSize(codec) {
    return !isFixedSize(codec);
}
function assertIsVariableSize(codec) {
    if (!isVariableSize(codec)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH"]);
    }
}
function combineCodec(encoder, decoder) {
    if (isFixedSize(encoder) !== isFixedSize(decoder)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH"]);
    }
    if (isFixedSize(encoder) && isFixedSize(decoder) && encoder.fixedSize !== decoder.fixedSize) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH"], {
            decoderFixedSize: decoder.fixedSize,
            encoderFixedSize: encoder.fixedSize
        });
    }
    if (!isFixedSize(encoder) && !isFixedSize(decoder) && encoder.maxSize !== decoder.maxSize) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH"], {
            decoderMaxSize: decoder.maxSize,
            encoderMaxSize: encoder.maxSize
        });
    }
    return {
        ...decoder,
        ...encoder,
        decode: decoder.decode,
        encode: encoder.encode,
        read: decoder.read,
        write: encoder.write
    };
}
// src/add-codec-sentinel.ts
function addEncoderSentinel(encoder, sentinel) {
    const write = (value, bytes, offset)=>{
        const encoderBytes = encoder.encode(value);
        if (findSentinelIndex(encoderBytes, sentinel) >= 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL"], {
                encodedBytes: encoderBytes,
                hexEncodedBytes: hexBytes(encoderBytes),
                hexSentinel: hexBytes(sentinel),
                sentinel
            });
        }
        bytes.set(encoderBytes, offset);
        offset += encoderBytes.length;
        bytes.set(sentinel, offset);
        offset += sentinel.length;
        return offset;
    };
    if (isFixedSize(encoder)) {
        return createEncoder({
            ...encoder,
            fixedSize: encoder.fixedSize + sentinel.length,
            write
        });
    }
    return createEncoder({
        ...encoder,
        ...encoder.maxSize != null ? {
            maxSize: encoder.maxSize + sentinel.length
        } : {},
        getSizeFromValue: (value)=>encoder.getSizeFromValue(value) + sentinel.length,
        write
    });
}
function addDecoderSentinel(decoder, sentinel) {
    const read = (bytes, offset)=>{
        const candidateBytes = offset === 0 ? bytes : bytes.slice(offset);
        const sentinelIndex = findSentinelIndex(candidateBytes, sentinel);
        if (sentinelIndex === -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES"], {
                decodedBytes: candidateBytes,
                hexDecodedBytes: hexBytes(candidateBytes),
                hexSentinel: hexBytes(sentinel),
                sentinel
            });
        }
        const preSentinelBytes = candidateBytes.slice(0, sentinelIndex);
        return [
            decoder.decode(preSentinelBytes),
            offset + preSentinelBytes.length + sentinel.length
        ];
    };
    if (isFixedSize(decoder)) {
        return createDecoder({
            ...decoder,
            fixedSize: decoder.fixedSize + sentinel.length,
            read
        });
    }
    return createDecoder({
        ...decoder,
        ...decoder.maxSize != null ? {
            maxSize: decoder.maxSize + sentinel.length
        } : {},
        read
    });
}
function addCodecSentinel(codec, sentinel) {
    return combineCodec(addEncoderSentinel(codec, sentinel), addDecoderSentinel(codec, sentinel));
}
function findSentinelIndex(bytes, sentinel) {
    return bytes.findIndex((byte, index, arr)=>{
        if (sentinel.length === 1) return byte === sentinel[0];
        return containsBytes(arr, sentinel, index);
    });
}
function hexBytes(bytes) {
    return bytes.reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
}
function assertByteArrayIsNotEmptyForCodec(codecDescription, bytes, offset = 0) {
    if (bytes.length - offset <= 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY"], {
            codecDescription
        });
    }
}
function assertByteArrayHasEnoughBytesForCodec(codecDescription, expected, bytes, offset = 0) {
    const bytesLength = bytes.length - offset;
    if (bytesLength < expected) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH"], {
            bytesLength,
            codecDescription,
            expected
        });
    }
}
function assertByteArrayOffsetIsNotOutOfRange(codecDescription, offset, bytesLength) {
    if (offset < 0 || offset > bytesLength) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE"], {
            bytesLength,
            codecDescription,
            offset
        });
    }
}
// src/add-codec-size-prefix.ts
function addEncoderSizePrefix(encoder, prefix) {
    const write = (value, bytes, offset)=>{
        const encoderBytes = encoder.encode(value);
        offset = prefix.write(encoderBytes.length, bytes, offset);
        bytes.set(encoderBytes, offset);
        return offset + encoderBytes.length;
    };
    if (isFixedSize(prefix) && isFixedSize(encoder)) {
        return createEncoder({
            ...encoder,
            fixedSize: prefix.fixedSize + encoder.fixedSize,
            write
        });
    }
    const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
    const encoderMaxSize = isFixedSize(encoder) ? encoder.fixedSize : encoder.maxSize ?? null;
    const maxSize = prefixMaxSize !== null && encoderMaxSize !== null ? prefixMaxSize + encoderMaxSize : null;
    return createEncoder({
        ...encoder,
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (value)=>{
            const encoderSize = getEncodedSize(value, encoder);
            return getEncodedSize(encoderSize, prefix) + encoderSize;
        },
        write
    });
}
function addDecoderSizePrefix(decoder, prefix) {
    const read = (bytes, offset)=>{
        const [bigintSize, decoderOffset] = prefix.read(bytes, offset);
        const size = Number(bigintSize);
        offset = decoderOffset;
        if (offset > 0 || bytes.length > size) {
            bytes = bytes.slice(offset, offset + size);
        }
        assertByteArrayHasEnoughBytesForCodec("addDecoderSizePrefix", size, bytes);
        return [
            decoder.decode(bytes),
            offset + size
        ];
    };
    if (isFixedSize(prefix) && isFixedSize(decoder)) {
        return createDecoder({
            ...decoder,
            fixedSize: prefix.fixedSize + decoder.fixedSize,
            read
        });
    }
    const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
    const decoderMaxSize = isFixedSize(decoder) ? decoder.fixedSize : decoder.maxSize ?? null;
    const maxSize = prefixMaxSize !== null && decoderMaxSize !== null ? prefixMaxSize + decoderMaxSize : null;
    return createDecoder({
        ...decoder,
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function addCodecSizePrefix(codec, prefix) {
    return combineCodec(addEncoderSizePrefix(codec, prefix), addDecoderSizePrefix(codec, prefix));
}
// src/fix-codec-size.ts
function fixEncoderSize(encoder, fixedBytes) {
    return createEncoder({
        fixedSize: fixedBytes,
        write: (value, bytes, offset)=>{
            const variableByteArray = encoder.encode(value);
            const fixedByteArray = variableByteArray.length > fixedBytes ? variableByteArray.slice(0, fixedBytes) : variableByteArray;
            bytes.set(fixedByteArray, offset);
            return offset + fixedBytes;
        }
    });
}
function fixDecoderSize(decoder, fixedBytes) {
    return createDecoder({
        fixedSize: fixedBytes,
        read: (bytes, offset)=>{
            assertByteArrayHasEnoughBytesForCodec("fixCodecSize", fixedBytes, bytes, offset);
            if (offset > 0 || bytes.length > fixedBytes) {
                bytes = bytes.slice(offset, offset + fixedBytes);
            }
            if (isFixedSize(decoder)) {
                bytes = fixBytes(bytes, decoder.fixedSize);
            }
            const [value] = decoder.read(bytes, 0);
            return [
                value,
                offset + fixedBytes
            ];
        }
    });
}
function fixCodecSize(codec, fixedBytes) {
    return combineCodec(fixEncoderSize(codec, fixedBytes), fixDecoderSize(codec, fixedBytes));
}
// src/offset-codec.ts
function offsetEncoder(encoder, config) {
    return createEncoder({
        ...encoder,
        write: (value, bytes, preOffset)=>{
            const wrapBytes = (offset)=>modulo(offset, bytes.length);
            const newPreOffset = config.preOffset ? config.preOffset({
                bytes,
                preOffset,
                wrapBytes
            }) : preOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPreOffset, bytes.length);
            const postOffset = encoder.write(value, bytes, newPreOffset);
            const newPostOffset = config.postOffset ? config.postOffset({
                bytes,
                newPreOffset,
                postOffset,
                preOffset,
                wrapBytes
            }) : postOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPostOffset, bytes.length);
            return newPostOffset;
        }
    });
}
function offsetDecoder(decoder, config) {
    return createDecoder({
        ...decoder,
        read: (bytes, preOffset)=>{
            const wrapBytes = (offset)=>modulo(offset, bytes.length);
            const newPreOffset = config.preOffset ? config.preOffset({
                bytes,
                preOffset,
                wrapBytes
            }) : preOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPreOffset, bytes.length);
            const [value, postOffset] = decoder.read(bytes, newPreOffset);
            const newPostOffset = config.postOffset ? config.postOffset({
                bytes,
                newPreOffset,
                postOffset,
                preOffset,
                wrapBytes
            }) : postOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPostOffset, bytes.length);
            return [
                value,
                newPostOffset
            ];
        }
    });
}
function offsetCodec(codec, config) {
    return combineCodec(offsetEncoder(codec, config), offsetDecoder(codec, config));
}
function modulo(dividend, divisor) {
    if (divisor === 0) return 0;
    return (dividend % divisor + divisor) % divisor;
}
function resizeEncoder(encoder, resize) {
    if (isFixedSize(encoder)) {
        const fixedSize = resize(encoder.fixedSize);
        if (fixedSize < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                bytesLength: fixedSize,
                codecDescription: "resizeEncoder"
            });
        }
        return createEncoder({
            ...encoder,
            fixedSize
        });
    }
    return createEncoder({
        ...encoder,
        getSizeFromValue: (value)=>{
            const newSize = resize(encoder.getSizeFromValue(value));
            if (newSize < 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                    bytesLength: newSize,
                    codecDescription: "resizeEncoder"
                });
            }
            return newSize;
        }
    });
}
function resizeDecoder(decoder, resize) {
    if (isFixedSize(decoder)) {
        const fixedSize = resize(decoder.fixedSize);
        if (fixedSize < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                bytesLength: fixedSize,
                codecDescription: "resizeDecoder"
            });
        }
        return createDecoder({
            ...decoder,
            fixedSize
        });
    }
    return decoder;
}
function resizeCodec(codec, resize) {
    return combineCodec(resizeEncoder(codec, resize), resizeDecoder(codec, resize));
}
// src/pad-codec.ts
function padLeftEncoder(encoder, offset) {
    return offsetEncoder(resizeEncoder(encoder, (size)=>size + offset), {
        preOffset: ({ preOffset })=>preOffset + offset
    });
}
function padRightEncoder(encoder, offset) {
    return offsetEncoder(resizeEncoder(encoder, (size)=>size + offset), {
        postOffset: ({ postOffset })=>postOffset + offset
    });
}
function padLeftDecoder(decoder, offset) {
    return offsetDecoder(resizeDecoder(decoder, (size)=>size + offset), {
        preOffset: ({ preOffset })=>preOffset + offset
    });
}
function padRightDecoder(decoder, offset) {
    return offsetDecoder(resizeDecoder(decoder, (size)=>size + offset), {
        postOffset: ({ postOffset })=>postOffset + offset
    });
}
function padLeftCodec(codec, offset) {
    return combineCodec(padLeftEncoder(codec, offset), padLeftDecoder(codec, offset));
}
function padRightCodec(codec, offset) {
    return combineCodec(padRightEncoder(codec, offset), padRightDecoder(codec, offset));
}
// src/reverse-codec.ts
function copySourceToTargetInReverse(source, target_WILL_MUTATE, sourceOffset, sourceLength, targetOffset = 0) {
    while(sourceOffset < --sourceLength){
        const leftValue = source[sourceOffset];
        target_WILL_MUTATE[sourceOffset + targetOffset] = source[sourceLength];
        target_WILL_MUTATE[sourceLength + targetOffset] = leftValue;
        sourceOffset++;
    }
    if (sourceOffset === sourceLength) {
        target_WILL_MUTATE[sourceOffset + targetOffset] = source[sourceOffset];
    }
}
function reverseEncoder(encoder) {
    assertIsFixedSize(encoder);
    return createEncoder({
        ...encoder,
        write: (value, bytes, offset)=>{
            const newOffset = encoder.write(value, bytes, offset);
            copySourceToTargetInReverse(bytes, bytes, offset, offset + encoder.fixedSize);
            return newOffset;
        }
    });
}
function reverseDecoder(decoder) {
    assertIsFixedSize(decoder);
    return createDecoder({
        ...decoder,
        read: (bytes, offset)=>{
            const reversedBytes = bytes.slice();
            copySourceToTargetInReverse(bytes, reversedBytes, offset, offset + decoder.fixedSize);
            return decoder.read(reversedBytes, offset);
        }
    });
}
function reverseCodec(codec) {
    return combineCodec(reverseEncoder(codec), reverseDecoder(codec));
}
// src/transform-codec.ts
function transformEncoder(encoder, unmap) {
    return createEncoder({
        ...isVariableSize(encoder) ? {
            ...encoder,
            getSizeFromValue: (value)=>encoder.getSizeFromValue(unmap(value))
        } : encoder,
        write: (value, bytes, offset)=>encoder.write(unmap(value), bytes, offset)
    });
}
function transformDecoder(decoder, map) {
    return createDecoder({
        ...decoder,
        read: (bytes, offset)=>{
            const [value, newOffset] = decoder.read(bytes, offset);
            return [
                map(value, bytes, offset),
                newOffset
            ];
        }
    });
}
function transformCodec(codec, unmap, map) {
    return createCodec({
        ...transformEncoder(codec, unmap),
        read: map ? transformDecoder(codec, map).read : codec.read
    });
}
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidNumberOfItemsForCodec",
    ()=>assertValidNumberOfItemsForCodec,
    "getArrayCodec",
    ()=>getArrayCodec,
    "getArrayDecoder",
    ()=>getArrayDecoder,
    "getArrayEncoder",
    ()=>getArrayEncoder,
    "getBitArrayCodec",
    ()=>getBitArrayCodec,
    "getBitArrayDecoder",
    ()=>getBitArrayDecoder,
    "getBitArrayEncoder",
    ()=>getBitArrayEncoder,
    "getBooleanCodec",
    ()=>getBooleanCodec,
    "getBooleanDecoder",
    ()=>getBooleanDecoder,
    "getBooleanEncoder",
    ()=>getBooleanEncoder,
    "getBytesCodec",
    ()=>getBytesCodec,
    "getBytesDecoder",
    ()=>getBytesDecoder,
    "getBytesEncoder",
    ()=>getBytesEncoder,
    "getConstantCodec",
    ()=>getConstantCodec,
    "getConstantDecoder",
    ()=>getConstantDecoder,
    "getConstantEncoder",
    ()=>getConstantEncoder,
    "getDataEnumCodec",
    ()=>getDataEnumCodec,
    "getDataEnumDecoder",
    ()=>getDataEnumDecoder,
    "getDataEnumEncoder",
    ()=>getDataEnumEncoder,
    "getDiscriminatedUnionCodec",
    ()=>getDiscriminatedUnionCodec,
    "getDiscriminatedUnionDecoder",
    ()=>getDiscriminatedUnionDecoder,
    "getDiscriminatedUnionEncoder",
    ()=>getDiscriminatedUnionEncoder,
    "getEnumCodec",
    ()=>getEnumCodec,
    "getEnumDecoder",
    ()=>getEnumDecoder,
    "getEnumEncoder",
    ()=>getEnumEncoder,
    "getHiddenPrefixCodec",
    ()=>getHiddenPrefixCodec,
    "getHiddenPrefixDecoder",
    ()=>getHiddenPrefixDecoder,
    "getHiddenPrefixEncoder",
    ()=>getHiddenPrefixEncoder,
    "getHiddenSuffixCodec",
    ()=>getHiddenSuffixCodec,
    "getHiddenSuffixDecoder",
    ()=>getHiddenSuffixDecoder,
    "getHiddenSuffixEncoder",
    ()=>getHiddenSuffixEncoder,
    "getMapCodec",
    ()=>getMapCodec,
    "getMapDecoder",
    ()=>getMapDecoder,
    "getMapEncoder",
    ()=>getMapEncoder,
    "getNullableCodec",
    ()=>getNullableCodec,
    "getNullableDecoder",
    ()=>getNullableDecoder,
    "getNullableEncoder",
    ()=>getNullableEncoder,
    "getScalarEnumCodec",
    ()=>getScalarEnumCodec,
    "getScalarEnumDecoder",
    ()=>getScalarEnumDecoder,
    "getScalarEnumEncoder",
    ()=>getScalarEnumEncoder,
    "getSetCodec",
    ()=>getSetCodec,
    "getSetDecoder",
    ()=>getSetDecoder,
    "getSetEncoder",
    ()=>getSetEncoder,
    "getStructCodec",
    ()=>getStructCodec,
    "getStructDecoder",
    ()=>getStructDecoder,
    "getStructEncoder",
    ()=>getStructEncoder,
    "getTupleCodec",
    ()=>getTupleCodec,
    "getTupleDecoder",
    ()=>getTupleDecoder,
    "getTupleEncoder",
    ()=>getTupleEncoder,
    "getUnionCodec",
    ()=>getUnionCodec,
    "getUnionDecoder",
    ()=>getUnionDecoder,
    "getUnionEncoder",
    ()=>getUnionEncoder,
    "getUnitCodec",
    ()=>getUnitCodec,
    "getUnitDecoder",
    ()=>getUnitDecoder,
    "getUnitEncoder",
    ()=>getUnitEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
// src/array.ts
function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
    if (expected !== actual) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS"], {
            actual,
            codecDescription,
            expected
        });
    }
}
function maxCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : Math.max(all, size), 0);
}
function sumCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : all + size, 0);
}
function getFixedSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : null;
}
function getMaxSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : codec.maxSize ?? null;
}
// src/array.ts
function getArrayEncoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Encoder"])();
    const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            getSizeFromValue: (array)=>{
                const prefixSize = typeof size === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(array.length, size) : 0;
                return prefixSize + [
                    ...array
                ].reduce((all, value)=>all + (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(value, item), 0);
            },
            maxSize
        },
        write: (array, bytes, offset)=>{
            if (typeof size === "number") {
                assertValidNumberOfItemsForCodec("array", size, array.length);
            }
            if (typeof size === "object") {
                offset = size.write(array.length, bytes, offset);
            }
            array.forEach((value)=>{
                offset = item.write(value, bytes, offset);
            });
            return offset;
        }
    });
}
function getArrayDecoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Decoder"])();
    const itemSize = getFixedSize(item);
    const fixedSize = computeArrayLikeCodecSize(size, itemSize);
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            maxSize
        },
        read: (bytes, offset)=>{
            const array = [];
            if (typeof size === "object" && bytes.slice(offset).length === 0) {
                return [
                    array,
                    offset
                ];
            }
            if (size === "remainder") {
                while(offset < bytes.length){
                    const [value, newOffset2] = item.read(bytes, offset);
                    offset = newOffset2;
                    array.push(value);
                }
                return [
                    array,
                    offset
                ];
            }
            const [resolvedSize, newOffset] = typeof size === "number" ? [
                size,
                offset
            ] : size.read(bytes, offset);
            offset = newOffset;
            for(let i = 0; i < resolvedSize; i += 1){
                const [value, newOffset2] = item.read(bytes, offset);
                offset = newOffset2;
                array.push(value);
            }
            return [
                array,
                offset
            ];
        }
    });
}
function getArrayCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getArrayEncoder(item, config), getArrayDecoder(item, config));
}
function computeArrayLikeCodecSize(size, itemSize) {
    if (typeof size !== "number") return null;
    if (size === 0) return 0;
    return itemSize === null ? null : itemSize * size;
}
function getBitArrayEncoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: size,
        write (value, bytes, offset) {
            const bytesToAdd = [];
            for(let i = 0; i < size; i += 1){
                let byte = 0;
                for(let j = 0; j < 8; j += 1){
                    const feature = Number(value[i * 8 + j] ?? 0);
                    byte |= feature << (backward ? j : 7 - j);
                }
                if (backward) {
                    bytesToAdd.unshift(byte);
                } else {
                    bytesToAdd.push(byte);
                }
            }
            bytes.set(bytesToAdd, offset);
            return size;
        }
    });
}
function getBitArrayDecoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: size,
        read (bytes, offset) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])("bitArray", size, bytes, offset);
            const booleans = [];
            let slice = bytes.slice(offset, offset + size);
            slice = backward ? slice.reverse() : slice;
            slice.forEach((byte)=>{
                for(let i = 0; i < 8; i += 1){
                    if (backward) {
                        booleans.push(Boolean(byte & 1));
                        byte >>= 1;
                    } else {
                        booleans.push(Boolean(byte & 128));
                        byte <<= 1;
                    }
                }
            });
            return [
                booleans,
                offset + size
            ];
        }
    });
}
function getBitArrayCodec(size, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBitArrayEncoder(size, config), getBitArrayDecoder(size, config));
}
function getBooleanEncoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])(), (value)=>value ? 1 : 0);
}
function getBooleanDecoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])(), (value)=>Number(value) === 1);
}
function getBooleanCodec(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBooleanEncoder(config), getBooleanDecoder(config));
}
function getBytesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>value.length,
        write: (value, bytes, offset)=>{
            bytes.set(value, offset);
            return offset + value.length;
        }
    });
}
function getBytesDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read: (bytes, offset)=>{
            const slice = bytes.slice(offset);
            return [
                slice,
                offset + slice.length
            ];
        }
    });
}
function getBytesCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBytesEncoder(), getBytesDecoder());
}
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
function getConstantEncoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: constant.length,
        write: (_, bytes, offset)=>{
            bytes.set(constant, offset);
            return offset + constant.length;
        }
    });
}
function getConstantDecoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: constant.length,
        read: (bytes, offset)=>{
            const base16 = getBase16Decoder();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, constant, offset)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_CONSTANT"], {
                    constant,
                    data: bytes,
                    hexConstant: base16.decode(constant),
                    hexData: base16.decode(bytes),
                    offset
                });
            }
            return [
                void 0,
                offset + constant.length
            ];
        }
    });
}
function getConstantCodec(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getConstantEncoder(constant), getConstantDecoder(constant));
}
function getTupleEncoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>items.map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[index], item)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (value, bytes, offset)=>{
            assertValidNumberOfItemsForCodec("tuple", items.length, value.length);
            items.forEach((item, index)=>{
                offset = item.write(value[index], bytes, offset);
            });
            return offset;
        }
    });
}
function getTupleDecoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const values = [];
            items.forEach((item)=>{
                const [newValue, newOffset] = item.read(bytes, offset);
                values.push(newValue);
                offset = newOffset;
            });
            return [
                values,
                offset
            ];
        }
    });
}
function getTupleCodec(items) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getTupleEncoder(items), getTupleDecoder(items));
}
function getUnionEncoder(variants, getIndexFromValue) {
    const fixedSize = getUnionFixedSize(variants);
    const write = (variant, bytes, offset)=>{
        const index = getIndexFromValue(variant);
        assertValidVariantIndex(variants, index);
        return variants[index].write(variant, bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            fixedSize,
            write
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (variant)=>{
            const index = getIndexFromValue(variant);
            assertValidVariantIndex(variants, index);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(variant, variants[index]);
        },
        write
    });
}
function getUnionDecoder(variants, getIndexFromBytes) {
    const fixedSize = getUnionFixedSize(variants);
    const read = (bytes, offset)=>{
        const index = getIndexFromBytes(bytes, offset);
        assertValidVariantIndex(variants, index);
        return variants[index].read(bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            fixedSize,
            read
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function getUnionCodec(variants, getIndexFromValue, getIndexFromBytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUnionEncoder(variants, getIndexFromValue), getUnionDecoder(variants, getIndexFromBytes));
}
function assertValidVariantIndex(variants, index) {
    if (typeof variants[index] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE"], {
            maxRange: variants.length - 1,
            minRange: 0,
            variant: index
        });
    }
}
function getUnionFixedSize(variants) {
    if (variants.length === 0) return 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(variants[0])) return null;
    const variantSize = variants[0].fixedSize;
    const sameSizedVariants = variants.every((variant)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(variant) && variant.fixedSize === variantSize);
    return sameSizedVariants ? variantSize : null;
}
function getUnionMaxSize(variants) {
    return maxCodecSizes(variants.map((variant)=>getMaxSize(variant)));
}
// src/discriminated-union.ts
function getDiscriminatedUnionEncoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return getUnionEncoder(variants.map(([, variant], index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            variant
        ]), (value)=>[
                index,
                value
            ])), (value)=>getVariantDiscriminator(variants, value[discriminatorProperty]));
}
function getDiscriminatedUnionDecoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return getUnionDecoder(variants.map(([discriminator, variant])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            variant
        ]), ([, value])=>({
                [discriminatorProperty]: discriminator,
                ...value
            }))), (bytes, offset)=>Number(prefix.read(bytes, offset)[0]));
}
function getDiscriminatedUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getDiscriminatedUnionEncoder(variants, config), getDiscriminatedUnionDecoder(variants, config));
}
function getVariantDiscriminator(variants, discriminatorValue) {
    const discriminator = variants.findIndex(([key])=>discriminatorValue === key);
    if (discriminator < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT"], {
            value: discriminatorValue,
            variants: variants.map(([key])=>key)
        });
    }
    return discriminator;
}
var getDataEnumEncoder = getDiscriminatedUnionEncoder;
var getDataEnumDecoder = getDiscriminatedUnionDecoder;
var getDataEnumCodec = getDiscriminatedUnionCodec;
// src/enum-helpers.ts
function getEnumStats(constructor) {
    const numericalValues = [
        ...new Set(Object.values(constructor).filter((v)=>typeof v === "number"))
    ].sort();
    const enumRecord = Object.fromEntries(Object.entries(constructor).slice(numericalValues.length));
    const enumKeys = Object.keys(enumRecord);
    const enumValues = Object.values(enumRecord);
    const stringValues = [
        .../* @__PURE__ */ new Set([
            ...enumKeys,
            ...enumValues.filter((v)=>typeof v === "string")
        ])
    ];
    return {
        enumKeys,
        enumRecord,
        enumValues,
        numericalValues,
        stringValues
    };
}
function getEnumIndexFromVariant({ enumKeys, enumValues, variant }) {
    const valueIndex = findLastIndex(enumValues, (value)=>value === variant);
    if (valueIndex >= 0) return valueIndex;
    return enumKeys.findIndex((key)=>key === variant);
}
function getEnumIndexFromDiscriminator({ discriminator, enumKeys, enumValues, useValuesAsDiscriminators }) {
    if (!useValuesAsDiscriminators) {
        return discriminator >= 0 && discriminator < enumKeys.length ? discriminator : -1;
    }
    return findLastIndex(enumValues, (value)=>value === discriminator);
}
function findLastIndex(array, predicate) {
    let l = array.length;
    while(l--){
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}
function formatNumericalValues(values) {
    if (values.length === 0) return "";
    let range = [
        values[0],
        values[0]
    ];
    const ranges = [];
    for(let index = 1; index < values.length; index++){
        const value = values[index];
        if (range[1] + 1 === value) {
            range[1] = value;
        } else {
            ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
            range = [
                value,
                value
            ];
        }
    }
    ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
    return ranges.join(", ");
}
// src/enum.ts
function getEnumEncoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues, stringValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(prefix, (variant)=>{
        const index = getEnumIndexFromVariant({
            enumKeys,
            enumValues,
            variant
        });
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT"], {
                formattedNumericalValues: formatNumericalValues(numericalValues),
                numericalValues,
                stringValues,
                variant
            });
        }
        return useValuesAsDiscriminators ? enumValues[index] : index;
    });
}
function getEnumDecoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(prefix, (value)=>{
        const discriminator = Number(value);
        const index = getEnumIndexFromDiscriminator({
            discriminator,
            enumKeys,
            enumValues,
            useValuesAsDiscriminators
        });
        if (index < 0) {
            const validDiscriminators = useValuesAsDiscriminators ? numericalValues : [
                ...Array(enumKeys.length).keys()
            ];
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator,
                formattedValidDiscriminators: formatNumericalValues(validDiscriminators),
                validDiscriminators
            });
        }
        return enumValues[index];
    });
}
function getEnumCodec(constructor, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getEnumEncoder(constructor, config), getEnumDecoder(constructor, config));
}
var getScalarEnumEncoder = getEnumEncoder;
var getScalarEnumDecoder = getEnumDecoder;
var getScalarEnumCodec = getEnumCodec;
function getHiddenPrefixEncoder(encoder, prefixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        ...prefixedEncoders,
        encoder
    ]), (value)=>[
            ...prefixedEncoders.map(()=>void 0),
            value
        ]);
}
function getHiddenPrefixDecoder(decoder, prefixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        ...prefixedDecoders,
        decoder
    ]), (tuple)=>tuple[tuple.length - 1]);
}
function getHiddenPrefixCodec(codec, prefixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenPrefixEncoder(codec, prefixedCodecs), getHiddenPrefixDecoder(codec, prefixedCodecs));
}
function getHiddenSuffixEncoder(encoder, suffixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        encoder,
        ...suffixedEncoders
    ]), (value)=>[
            value,
            ...suffixedEncoders.map(()=>void 0)
        ]);
}
function getHiddenSuffixDecoder(decoder, suffixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        decoder,
        ...suffixedDecoders
    ]), (tuple)=>tuple[0]);
}
function getHiddenSuffixCodec(codec, suffixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenSuffixEncoder(codec, suffixedCodecs), getHiddenSuffixDecoder(codec, suffixedCodecs));
}
function getMapEncoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(getTupleEncoder([
        key,
        value
    ]), config), (map)=>[
            ...map.entries()
        ]);
}
function getMapDecoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(getTupleDecoder([
        key,
        value
    ]), config), (entries)=>new Map(entries));
}
function getMapCodec(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getMapEncoder(key, value, config), getMapDecoder(key, value, config));
}
function getUnitEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 0,
        write: (_value, _bytes, offset)=>offset
    });
}
function getUnitDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: 0,
        read: (_bytes, offset)=>[
                void 0,
                offset
            ]
    });
}
function getUnitCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUnitEncoder(), getUnitDecoder());
}
// src/nullable.ts
function getNullableEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getUnitEncoder(), (_boolean)=>void 0);
        }
        return getBooleanEncoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getUnitEncoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitEncoder();
        }
        return getConstantEncoder(config.noneValue);
    })();
    return getUnionEncoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            item
        ]), (value)=>[
                true,
                value
            ])
    ], (variant)=>Number(variant !== null));
}
function getNullableDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getUnitDecoder(), ()=>false);
        }
        return getBooleanDecoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getUnitDecoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitDecoder();
        }
        return getConstantDecoder(config.noneValue);
    })();
    return getUnionDecoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            noneValue
        ]), ()=>null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            item
        ]), ([, value])=>value)
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getNullableCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getNullableEncoder(item, config), getNullableDecoder(item, config));
}
function getSetEncoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(item, config), (set)=>[
            ...set
        ]);
}
function getSetDecoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(item, config), (entries)=>new Set(entries));
}
function getSetCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getSetEncoder(item, config), getSetDecoder(item, config));
}
function getStructEncoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>fields.map(([key, codec])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[key], codec)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (struct, bytes, offset)=>{
            fields.forEach(([key, codec])=>{
                offset = codec.write(struct[key], bytes, offset);
            });
            return offset;
        }
    });
}
function getStructDecoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const struct = {};
            fields.forEach(([key, codec])=>{
                const [value, newOffset] = codec.read(bytes, offset);
                offset = newOffset;
                struct[key] = value;
            });
            return [
                struct,
                offset
            ];
        }
    });
}
function getStructCodec(fields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getStructEncoder(fields), getStructDecoder(fields));
}
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidNumberOfItemsForCodec",
    ()=>assertValidNumberOfItemsForCodec,
    "getArrayCodec",
    ()=>getArrayCodec,
    "getArrayDecoder",
    ()=>getArrayDecoder,
    "getArrayEncoder",
    ()=>getArrayEncoder,
    "getBitArrayCodec",
    ()=>getBitArrayCodec,
    "getBitArrayDecoder",
    ()=>getBitArrayDecoder,
    "getBitArrayEncoder",
    ()=>getBitArrayEncoder,
    "getBooleanCodec",
    ()=>getBooleanCodec,
    "getBooleanDecoder",
    ()=>getBooleanDecoder,
    "getBooleanEncoder",
    ()=>getBooleanEncoder,
    "getBytesCodec",
    ()=>getBytesCodec,
    "getBytesDecoder",
    ()=>getBytesDecoder,
    "getBytesEncoder",
    ()=>getBytesEncoder,
    "getConstantCodec",
    ()=>getConstantCodec,
    "getConstantDecoder",
    ()=>getConstantDecoder,
    "getConstantEncoder",
    ()=>getConstantEncoder,
    "getDataEnumCodec",
    ()=>getDataEnumCodec,
    "getDataEnumDecoder",
    ()=>getDataEnumDecoder,
    "getDataEnumEncoder",
    ()=>getDataEnumEncoder,
    "getDiscriminatedUnionCodec",
    ()=>getDiscriminatedUnionCodec,
    "getDiscriminatedUnionDecoder",
    ()=>getDiscriminatedUnionDecoder,
    "getDiscriminatedUnionEncoder",
    ()=>getDiscriminatedUnionEncoder,
    "getEnumCodec",
    ()=>getEnumCodec,
    "getEnumDecoder",
    ()=>getEnumDecoder,
    "getEnumEncoder",
    ()=>getEnumEncoder,
    "getHiddenPrefixCodec",
    ()=>getHiddenPrefixCodec,
    "getHiddenPrefixDecoder",
    ()=>getHiddenPrefixDecoder,
    "getHiddenPrefixEncoder",
    ()=>getHiddenPrefixEncoder,
    "getHiddenSuffixCodec",
    ()=>getHiddenSuffixCodec,
    "getHiddenSuffixDecoder",
    ()=>getHiddenSuffixDecoder,
    "getHiddenSuffixEncoder",
    ()=>getHiddenSuffixEncoder,
    "getMapCodec",
    ()=>getMapCodec,
    "getMapDecoder",
    ()=>getMapDecoder,
    "getMapEncoder",
    ()=>getMapEncoder,
    "getNullableCodec",
    ()=>getNullableCodec,
    "getNullableDecoder",
    ()=>getNullableDecoder,
    "getNullableEncoder",
    ()=>getNullableEncoder,
    "getScalarEnumCodec",
    ()=>getScalarEnumCodec,
    "getScalarEnumDecoder",
    ()=>getScalarEnumDecoder,
    "getScalarEnumEncoder",
    ()=>getScalarEnumEncoder,
    "getSetCodec",
    ()=>getSetCodec,
    "getSetDecoder",
    ()=>getSetDecoder,
    "getSetEncoder",
    ()=>getSetEncoder,
    "getStructCodec",
    ()=>getStructCodec,
    "getStructDecoder",
    ()=>getStructDecoder,
    "getStructEncoder",
    ()=>getStructEncoder,
    "getTupleCodec",
    ()=>getTupleCodec,
    "getTupleDecoder",
    ()=>getTupleDecoder,
    "getTupleEncoder",
    ()=>getTupleEncoder,
    "getUnionCodec",
    ()=>getUnionCodec,
    "getUnionDecoder",
    ()=>getUnionDecoder,
    "getUnionEncoder",
    ()=>getUnionEncoder,
    "getUnitCodec",
    ()=>getUnitCodec,
    "getUnitDecoder",
    ()=>getUnitDecoder,
    "getUnitEncoder",
    ()=>getUnitEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
// src/array.ts
function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
    if (expected !== actual) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS"], {
            actual,
            codecDescription,
            expected
        });
    }
}
function maxCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : Math.max(all, size), 0);
}
function sumCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : all + size, 0);
}
function getFixedSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : null;
}
function getMaxSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : codec.maxSize ?? null;
}
// src/array.ts
function getArrayEncoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Encoder"])();
    const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            getSizeFromValue: (array)=>{
                const prefixSize = typeof size === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(array.length, size) : 0;
                return prefixSize + [
                    ...array
                ].reduce((all, value)=>all + (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(value, item), 0);
            },
            maxSize
        },
        write: (array, bytes, offset)=>{
            if (typeof size === "number") {
                assertValidNumberOfItemsForCodec("array", size, array.length);
            }
            if (typeof size === "object") {
                offset = size.write(array.length, bytes, offset);
            }
            array.forEach((value)=>{
                offset = item.write(value, bytes, offset);
            });
            return offset;
        }
    });
}
function getArrayDecoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Decoder"])();
    const itemSize = getFixedSize(item);
    const fixedSize = computeArrayLikeCodecSize(size, itemSize);
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            maxSize
        },
        read: (bytes, offset)=>{
            const array = [];
            if (typeof size === "object" && bytes.slice(offset).length === 0) {
                return [
                    array,
                    offset
                ];
            }
            if (size === "remainder") {
                while(offset < bytes.length){
                    const [value, newOffset2] = item.read(bytes, offset);
                    offset = newOffset2;
                    array.push(value);
                }
                return [
                    array,
                    offset
                ];
            }
            const [resolvedSize, newOffset] = typeof size === "number" ? [
                size,
                offset
            ] : size.read(bytes, offset);
            offset = newOffset;
            for(let i = 0; i < resolvedSize; i += 1){
                const [value, newOffset2] = item.read(bytes, offset);
                offset = newOffset2;
                array.push(value);
            }
            return [
                array,
                offset
            ];
        }
    });
}
function getArrayCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getArrayEncoder(item, config), getArrayDecoder(item, config));
}
function computeArrayLikeCodecSize(size, itemSize) {
    if (typeof size !== "number") return null;
    if (size === 0) return 0;
    return itemSize === null ? null : itemSize * size;
}
function getBitArrayEncoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: size,
        write (value, bytes, offset) {
            const bytesToAdd = [];
            for(let i = 0; i < size; i += 1){
                let byte = 0;
                for(let j = 0; j < 8; j += 1){
                    const feature = Number(value[i * 8 + j] ?? 0);
                    byte |= feature << (backward ? j : 7 - j);
                }
                if (backward) {
                    bytesToAdd.unshift(byte);
                } else {
                    bytesToAdd.push(byte);
                }
            }
            bytes.set(bytesToAdd, offset);
            return size;
        }
    });
}
function getBitArrayDecoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: size,
        read (bytes, offset) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])("bitArray", size, bytes, offset);
            const booleans = [];
            let slice = bytes.slice(offset, offset + size);
            slice = backward ? slice.reverse() : slice;
            slice.forEach((byte)=>{
                for(let i = 0; i < 8; i += 1){
                    if (backward) {
                        booleans.push(Boolean(byte & 1));
                        byte >>= 1;
                    } else {
                        booleans.push(Boolean(byte & 128));
                        byte <<= 1;
                    }
                }
            });
            return [
                booleans,
                offset + size
            ];
        }
    });
}
function getBitArrayCodec(size, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBitArrayEncoder(size, config), getBitArrayDecoder(size, config));
}
function getBooleanEncoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])(), (value)=>value ? 1 : 0);
}
function getBooleanDecoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])(), (value)=>Number(value) === 1);
}
function getBooleanCodec(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBooleanEncoder(config), getBooleanDecoder(config));
}
function getBytesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>value.length,
        write: (value, bytes, offset)=>{
            bytes.set(value, offset);
            return offset + value.length;
        }
    });
}
function getBytesDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read: (bytes, offset)=>{
            const slice = bytes.slice(offset);
            return [
                slice,
                offset + slice.length
            ];
        }
    });
}
function getBytesCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBytesEncoder(), getBytesDecoder());
}
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
function getConstantEncoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: constant.length,
        write: (_, bytes, offset)=>{
            bytes.set(constant, offset);
            return offset + constant.length;
        }
    });
}
function getConstantDecoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: constant.length,
        read: (bytes, offset)=>{
            const base16 = getBase16Decoder();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, constant, offset)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_CONSTANT"], {
                    constant,
                    data: bytes,
                    hexConstant: base16.decode(constant),
                    hexData: base16.decode(bytes),
                    offset
                });
            }
            return [
                void 0,
                offset + constant.length
            ];
        }
    });
}
function getConstantCodec(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getConstantEncoder(constant), getConstantDecoder(constant));
}
function getTupleEncoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>items.map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[index], item)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (value, bytes, offset)=>{
            assertValidNumberOfItemsForCodec("tuple", items.length, value.length);
            items.forEach((item, index)=>{
                offset = item.write(value[index], bytes, offset);
            });
            return offset;
        }
    });
}
function getTupleDecoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const values = [];
            items.forEach((item)=>{
                const [newValue, newOffset] = item.read(bytes, offset);
                values.push(newValue);
                offset = newOffset;
            });
            return [
                values,
                offset
            ];
        }
    });
}
function getTupleCodec(items) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getTupleEncoder(items), getTupleDecoder(items));
}
function getUnionEncoder(variants, getIndexFromValue) {
    const fixedSize = getUnionFixedSize(variants);
    const write = (variant, bytes, offset)=>{
        const index = getIndexFromValue(variant);
        assertValidVariantIndex(variants, index);
        return variants[index].write(variant, bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            fixedSize,
            write
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (variant)=>{
            const index = getIndexFromValue(variant);
            assertValidVariantIndex(variants, index);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(variant, variants[index]);
        },
        write
    });
}
function getUnionDecoder(variants, getIndexFromBytes) {
    const fixedSize = getUnionFixedSize(variants);
    const read = (bytes, offset)=>{
        const index = getIndexFromBytes(bytes, offset);
        assertValidVariantIndex(variants, index);
        return variants[index].read(bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            fixedSize,
            read
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function getUnionCodec(variants, getIndexFromValue, getIndexFromBytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUnionEncoder(variants, getIndexFromValue), getUnionDecoder(variants, getIndexFromBytes));
}
function assertValidVariantIndex(variants, index) {
    if (typeof variants[index] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE"], {
            maxRange: variants.length - 1,
            minRange: 0,
            variant: index
        });
    }
}
function getUnionFixedSize(variants) {
    if (variants.length === 0) return 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(variants[0])) return null;
    const variantSize = variants[0].fixedSize;
    const sameSizedVariants = variants.every((variant)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFixedSize"])(variant) && variant.fixedSize === variantSize);
    return sameSizedVariants ? variantSize : null;
}
function getUnionMaxSize(variants) {
    return maxCodecSizes(variants.map((variant)=>getMaxSize(variant)));
}
// src/discriminated-union.ts
function getDiscriminatedUnionEncoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return getUnionEncoder(variants.map(([, variant], index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            variant
        ]), (value)=>[
                index,
                value
            ])), (value)=>getVariantDiscriminator(variants, value[discriminatorProperty]));
}
function getDiscriminatedUnionDecoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return getUnionDecoder(variants.map(([discriminator, variant])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            variant
        ]), ([, value])=>({
                [discriminatorProperty]: discriminator,
                ...value
            }))), (bytes, offset)=>Number(prefix.read(bytes, offset)[0]));
}
function getDiscriminatedUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getDiscriminatedUnionEncoder(variants, config), getDiscriminatedUnionDecoder(variants, config));
}
function getVariantDiscriminator(variants, discriminatorValue) {
    const discriminator = variants.findIndex(([key])=>discriminatorValue === key);
    if (discriminator < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT"], {
            value: discriminatorValue,
            variants: variants.map(([key])=>key)
        });
    }
    return discriminator;
}
var getDataEnumEncoder = getDiscriminatedUnionEncoder;
var getDataEnumDecoder = getDiscriminatedUnionDecoder;
var getDataEnumCodec = getDiscriminatedUnionCodec;
// src/enum-helpers.ts
function getEnumStats(constructor) {
    const numericalValues = [
        ...new Set(Object.values(constructor).filter((v)=>typeof v === "number"))
    ].sort();
    const enumRecord = Object.fromEntries(Object.entries(constructor).slice(numericalValues.length));
    const enumKeys = Object.keys(enumRecord);
    const enumValues = Object.values(enumRecord);
    const stringValues = [
        .../* @__PURE__ */ new Set([
            ...enumKeys,
            ...enumValues.filter((v)=>typeof v === "string")
        ])
    ];
    return {
        enumKeys,
        enumRecord,
        enumValues,
        numericalValues,
        stringValues
    };
}
function getEnumIndexFromVariant({ enumKeys, enumValues, variant }) {
    const valueIndex = findLastIndex(enumValues, (value)=>value === variant);
    if (valueIndex >= 0) return valueIndex;
    return enumKeys.findIndex((key)=>key === variant);
}
function getEnumIndexFromDiscriminator({ discriminator, enumKeys, enumValues, useValuesAsDiscriminators }) {
    if (!useValuesAsDiscriminators) {
        return discriminator >= 0 && discriminator < enumKeys.length ? discriminator : -1;
    }
    return findLastIndex(enumValues, (value)=>value === discriminator);
}
function findLastIndex(array, predicate) {
    let l = array.length;
    while(l--){
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}
function formatNumericalValues(values) {
    if (values.length === 0) return "";
    let range = [
        values[0],
        values[0]
    ];
    const ranges = [];
    for(let index = 1; index < values.length; index++){
        const value = values[index];
        if (range[1] + 1 === value) {
            range[1] = value;
        } else {
            ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
            range = [
                value,
                value
            ];
        }
    }
    ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
    return ranges.join(", ");
}
// src/enum.ts
function getEnumEncoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues, stringValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(prefix, (variant)=>{
        const index = getEnumIndexFromVariant({
            enumKeys,
            enumValues,
            variant
        });
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT"], {
                formattedNumericalValues: formatNumericalValues(numericalValues),
                numericalValues,
                stringValues,
                variant
            });
        }
        return useValuesAsDiscriminators ? enumValues[index] : index;
    });
}
function getEnumDecoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(prefix, (value)=>{
        const discriminator = Number(value);
        const index = getEnumIndexFromDiscriminator({
            discriminator,
            enumKeys,
            enumValues,
            useValuesAsDiscriminators
        });
        if (index < 0) {
            const validDiscriminators = useValuesAsDiscriminators ? numericalValues : [
                ...Array(enumKeys.length).keys()
            ];
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator,
                formattedValidDiscriminators: formatNumericalValues(validDiscriminators),
                validDiscriminators
            });
        }
        return enumValues[index];
    });
}
function getEnumCodec(constructor, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getEnumEncoder(constructor, config), getEnumDecoder(constructor, config));
}
var getScalarEnumEncoder = getEnumEncoder;
var getScalarEnumDecoder = getEnumDecoder;
var getScalarEnumCodec = getEnumCodec;
function getHiddenPrefixEncoder(encoder, prefixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        ...prefixedEncoders,
        encoder
    ]), (value)=>[
            ...prefixedEncoders.map(()=>void 0),
            value
        ]);
}
function getHiddenPrefixDecoder(decoder, prefixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        ...prefixedDecoders,
        decoder
    ]), (tuple)=>tuple[tuple.length - 1]);
}
function getHiddenPrefixCodec(codec, prefixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenPrefixEncoder(codec, prefixedCodecs), getHiddenPrefixDecoder(codec, prefixedCodecs));
}
function getHiddenSuffixEncoder(encoder, suffixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        encoder,
        ...suffixedEncoders
    ]), (value)=>[
            value,
            ...suffixedEncoders.map(()=>void 0)
        ]);
}
function getHiddenSuffixDecoder(decoder, suffixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        decoder,
        ...suffixedDecoders
    ]), (tuple)=>tuple[0]);
}
function getHiddenSuffixCodec(codec, suffixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenSuffixEncoder(codec, suffixedCodecs), getHiddenSuffixDecoder(codec, suffixedCodecs));
}
function getMapEncoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(getTupleEncoder([
        key,
        value
    ]), config), (map)=>[
            ...map.entries()
        ]);
}
function getMapDecoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(getTupleDecoder([
        key,
        value
    ]), config), (entries)=>new Map(entries));
}
function getMapCodec(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getMapEncoder(key, value, config), getMapDecoder(key, value, config));
}
function getUnitEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 0,
        write: (_value, _bytes, offset)=>offset
    });
}
function getUnitDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: 0,
        read: (_bytes, offset)=>[
                void 0,
                offset
            ]
    });
}
function getUnitCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUnitEncoder(), getUnitDecoder());
}
// src/nullable.ts
function getNullableEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getUnitEncoder(), (_boolean)=>void 0);
        }
        return getBooleanEncoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getUnitEncoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitEncoder();
        }
        return getConstantEncoder(config.noneValue);
    })();
    return getUnionEncoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            item
        ]), (value)=>[
                true,
                value
            ])
    ], (variant)=>Number(variant !== null));
}
function getNullableDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getUnitDecoder(), ()=>false);
        }
        return getBooleanDecoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getUnitDecoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitDecoder();
        }
        return getConstantDecoder(config.noneValue);
    })();
    return getUnionDecoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            noneValue
        ]), ()=>null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            item
        ]), ([, value])=>value)
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getNullableCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getNullableEncoder(item, config), getNullableDecoder(item, config));
}
function getSetEncoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(item, config), (set)=>[
            ...set
        ]);
}
function getSetDecoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(item, config), (entries)=>new Set(entries));
}
function getSetCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getSetEncoder(item, config), getSetDecoder(item, config));
}
function getStructEncoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>fields.map(([key, codec])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[key], codec)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (struct, bytes, offset)=>{
            fields.forEach(([key, codec])=>{
                offset = codec.write(struct[key], bytes, offset);
            });
            return offset;
        }
    });
}
function getStructDecoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const struct = {};
            fields.forEach(([key, codec])=>{
                const [value, newOffset] = codec.read(bytes, offset);
                offset = newOffset;
                struct[key] = value;
            });
            return [
                struct,
                offset
            ];
        }
    });
}
function getStructCodec(fields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getStructEncoder(fields), getStructDecoder(fields));
}
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/lib/esm/state/tokenGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOKEN_GROUP_SIZE",
    ()=>TOKEN_GROUP_SIZE,
    "packTokenGroup",
    ()=>packTokenGroup,
    "unpackTokenGroup",
    ()=>unpackTokenGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
const tokenGroupCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructCodec"])([
    [
        'updateAuthority',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixCodecSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCodec"])(), 32)
    ],
    [
        'mint',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixCodecSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCodec"])(), 32)
    ],
    [
        'size',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Codec"])()
    ],
    [
        'maxSize',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Codec"])()
    ]
]);
const TOKEN_GROUP_SIZE = tokenGroupCodec.fixedSize;
// Checks if all elements in the array are 0
function isNonePubkey(buffer) {
    for(let i = 0; i < buffer.length; i++){
        if (buffer[i] !== 0) {
            return false;
        }
    }
    return true;
}
function packTokenGroup(group) {
    // If no updateAuthority given, set it to the None/Zero PublicKey for encoding
    const updateAuthority = group.updateAuthority ?? __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].default;
    return tokenGroupCodec.encode({
        updateAuthority: updateAuthority.toBuffer(),
        mint: group.mint.toBuffer(),
        size: group.size,
        maxSize: group.maxSize
    });
}
function unpackTokenGroup(buffer) {
    const data = tokenGroupCodec.decode(buffer);
    return isNonePubkey(data.updateAuthority) ? {
        mint: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.mint),
        size: data.size,
        maxSize: data.maxSize
    } : {
        updateAuthority: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.updateAuthority),
        mint: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.mint),
        size: data.size,
        maxSize: data.maxSize
    };
} //# sourceMappingURL=tokenGroup.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/lib/esm/state/tokenGroupMember.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOKEN_GROUP_MEMBER_SIZE",
    ()=>TOKEN_GROUP_MEMBER_SIZE,
    "packTokenGroupMember",
    ()=>packTokenGroupMember,
    "unpackTokenGroupMember",
    ()=>unpackTokenGroupMember
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
const tokenGroupMemberCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructCodec"])([
    [
        'mint',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixCodecSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCodec"])(), 32)
    ],
    [
        'group',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixCodecSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCodec"])(), 32)
    ],
    [
        'memberNumber',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Codec"])()
    ]
]);
const TOKEN_GROUP_MEMBER_SIZE = tokenGroupMemberCodec.fixedSize;
function packTokenGroupMember(member) {
    return tokenGroupMemberCodec.encode({
        mint: member.mint.toBuffer(),
        group: member.group.toBuffer(),
        memberNumber: member.memberNumber
    });
}
function unpackTokenGroupMember(buffer) {
    const data = tokenGroupMemberCodec.decode(buffer);
    return {
        mint: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.mint),
        group: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.group),
        memberNumber: data.memberNumber
    };
} //# sourceMappingURL=tokenGroupMember.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/lib/esm/instruction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInitializeGroupInstruction",
    ()=>createInitializeGroupInstruction,
    "createInitializeMemberInstruction",
    ()=>createInitializeMemberInstruction,
    "createUpdateGroupAuthorityInstruction",
    ()=>createUpdateGroupAuthorityInstruction,
    "createUpdateGroupMaxSizeInstruction",
    ()=>createUpdateGroupMaxSizeInstruction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-group/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
;
;
function getInstructionEncoder(discriminator, dataEncoder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleEncoder"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesEncoder"])(),
        dataEncoder
    ]), (data)=>[
            discriminator,
            data
        ]);
}
function getPublicKeyEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), 32), (publicKey)=>publicKey.toBytes());
}
function createInitializeGroupInstruction(args) {
    const { programId, group, mint, mintAuthority, updateAuthority, maxSize } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: group
            },
            {
                isSigner: false,
                isWritable: false,
                pubkey: mint
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: mintAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_group_interface:initialize_token_group') */ 121,
            113,
            108,
            39,
            54,
            51,
            0,
            4
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'updateAuthority',
                getPublicKeyEncoder()
            ],
            [
                'maxSize',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])()
            ]
        ])).encode({
            updateAuthority: updateAuthority ?? __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId,
            maxSize
        }))
    });
}
function createUpdateGroupMaxSizeInstruction(args) {
    const { programId, group, updateAuthority, maxSize } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: group
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: updateAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_group_interface:update_group_max_size') */ 108,
            37,
            171,
            143,
            248,
            30,
            18,
            110
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'maxSize',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])()
            ]
        ])).encode({
            maxSize
        }))
    });
}
function createUpdateGroupAuthorityInstruction(args) {
    const { programId, group, currentAuthority, newAuthority } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: group
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: currentAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_group_interface:update_authority') */ 161,
            105,
            88,
            1,
            237,
            221,
            216,
            203
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'newAuthority',
                getPublicKeyEncoder()
            ]
        ])).encode({
            newAuthority: newAuthority ?? __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
        }))
    });
}
function createInitializeMemberInstruction(args) {
    const { programId, member, memberMint, memberMintAuthority, group, groupUpdateAuthority } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: member
            },
            {
                isSigner: false,
                isWritable: false,
                pubkey: memberMint
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: memberMintAuthority
            },
            {
                isSigner: false,
                isWritable: true,
                pubkey: group
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: groupUpdateAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_group_interface:initialize_member') */ 152,
            32,
            222,
            176,
            223,
            237,
            116,
            134
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$group$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([])).encode({}))
    });
} //# sourceMappingURL=instruction.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/options/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOptionCodec",
    ()=>getOptionCodec,
    "getOptionDecoder",
    ()=>getOptionDecoder,
    "getOptionEncoder",
    ()=>getOptionEncoder,
    "isNone",
    ()=>isNone,
    "isOption",
    ()=>isOption,
    "isSome",
    ()=>isSome,
    "none",
    ()=>none,
    "some",
    ()=>some,
    "unwrapOption",
    ()=>unwrapOption,
    "unwrapOptionRecursively",
    ()=>unwrapOptionRecursively,
    "wrapNullable",
    ()=>wrapNullable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
;
// src/option.ts
var some = (value)=>({
        __option: "Some",
        value
    });
var none = ()=>({
        __option: "None"
    });
var isOption = (input)=>!!(input && typeof input === "object" && "__option" in input && (input.__option === "Some" && "value" in input || input.__option === "None"));
var isSome = (option)=>option.__option === "Some";
var isNone = (option)=>option.__option === "None";
// src/unwrap-option.ts
function unwrapOption(option, fallback) {
    if (isSome(option)) return option.value;
    return fallback ? fallback() : null;
}
var wrapNullable = (nullable)=>nullable !== null ? some(nullable) : none();
// src/option-codec.ts
function getOptionEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitEncoder"])(), (_boolean)=>void 0);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanEncoder"])({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitEncoder"])(), item.fixedSize);
        }
        if (!config.noneValue) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitEncoder"])();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstantEncoder"])(config.noneValue);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnionEncoder"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleEncoder"])([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleEncoder"])([
            prefix,
            item
        ]), (value)=>[
                true,
                isOption(value) && isSome(value) ? value.value : value
            ])
    ], (variant)=>{
        const option = isOption(variant) ? variant : wrapNullable(variant);
        return Number(isSome(option));
    });
}
function getOptionDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitDecoder"])(), ()=>false);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanDecoder"])({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixDecoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitDecoder"])(), item.fixedSize);
        }
        if (!config.noneValue) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitDecoder"])();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConstantDecoder"])(config.noneValue);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnionDecoder"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
            prefix,
            noneValue
        ]), ()=>none()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
            prefix,
            item
        ]), ([, value])=>some(value))
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getOptionCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getOptionEncoder(item, config), getOptionDecoder(item, config));
}
// src/unwrap-option-recursively.ts
function unwrapOptionRecursively(input, fallback) {
    if (!input || ArrayBuffer.isView(input)) {
        return input;
    }
    const next = (x)=>fallback ? unwrapOptionRecursively(x, fallback) : unwrapOptionRecursively(x);
    if (isOption(input)) {
        if (isSome(input)) return next(input.value);
        return fallback ? fallback() : null;
    }
    if (Array.isArray(input)) {
        return input.map(next);
    }
    if (typeof input === "object") {
        return Object.fromEntries(Object.entries(input).map(([k, v])=>[
                k,
                next(v)
            ]));
    }
    return input;
}
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/errors/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue, givenValue = testValue) {
    if (!testValue.match(new RegExp(`^[${alphabet4}]*$`))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp(`((?!${zeroCharacter}).*)`));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 ?? 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset = 0) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>{
                try {
                    return atob(value).length;
                } catch (e2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            },
            write (value, bytes, offset) {
                try {
                    const bytesToAdd = atob(value).split("").map((c)=>c.charCodeAt(0));
                    bytes.set(bytesToAdd, offset);
                    return bytesToAdd.length + offset;
                } catch (e2) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        alphabet: alphabet3,
                        base: 64,
                        value
                    });
                }
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
            read (bytes, offset = 0) {
                const slice = bytes.slice(offset);
                const value = btoa(String.fromCharCode(...slice));
                return [
                    value,
                    bytes.length
                ];
            }
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.browser.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder ||= new o()).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder ||= new o()).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder ||= new e()).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.browser.mjs.map
 //# sourceMappingURL=index.browser.mjs.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/lib/esm/field.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Field",
    ()=>Field,
    "getFieldCodec",
    ()=>getFieldCodec,
    "getFieldConfig",
    ()=>getFieldConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
;
var Field;
(function(Field) {
    Field[Field["Name"] = 0] = "Name";
    Field[Field["Symbol"] = 1] = "Symbol";
    Field[Field["Uri"] = 2] = "Uri";
})(Field || (Field = {}));
const getFieldCodec = ()=>[
        [
            'Name',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitCodec"])()
        ],
        [
            'Symbol',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitCodec"])()
        ],
        [
            'Uri',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnitCodec"])()
        ],
        [
            'Key',
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructCodec"])([
                [
                    'value',
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleCodec"])([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCodecSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Codec"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Codec"])())
                    ])
                ]
            ])
        ]
    ];
function getFieldConfig(field) {
    if (field === Field.Name || field === 'Name' || field === 'name') {
        return {
            __kind: 'Name'
        };
    } else if (field === Field.Symbol || field === 'Symbol' || field === 'symbol') {
        return {
            __kind: 'Symbol'
        };
    } else if (field === Field.Uri || field === 'Uri' || field === 'uri') {
        return {
            __kind: 'Uri'
        };
    } else {
        return {
            __kind: 'Key',
            value: [
                field
            ]
        };
    }
} //# sourceMappingURL=field.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/lib/esm/instruction.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEmitInstruction",
    ()=>createEmitInstruction,
    "createInitializeInstruction",
    ()=>createInitializeInstruction,
    "createRemoveKeyInstruction",
    ()=>createRemoveKeyInstruction,
    "createUpdateAuthorityInstruction",
    ()=>createUpdateAuthorityInstruction,
    "createUpdateFieldInstruction",
    ()=>createUpdateFieldInstruction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/options/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$lib$2f$esm$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/lib/esm/field.js [app-client] (ecmascript)");
;
;
;
function getInstructionEncoder(discriminator, dataEncoder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleEncoder"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesEncoder"])(),
        dataEncoder
    ]), (data)=>[
            discriminator,
            data
        ]);
}
function getPublicKeyEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), 32), (publicKey)=>publicKey.toBytes());
}
function getStringEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Encoder"])());
}
function createInitializeInstruction(args) {
    const { programId, metadata, updateAuthority, mint, mintAuthority, name, symbol, uri } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: metadata
            },
            {
                isSigner: false,
                isWritable: false,
                pubkey: updateAuthority
            },
            {
                isSigner: false,
                isWritable: false,
                pubkey: mint
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: mintAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_metadata_interface:initialize_account') */ 210,
            225,
            30,
            162,
            88,
            184,
            77,
            141
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'name',
                getStringEncoder()
            ],
            [
                'symbol',
                getStringEncoder()
            ],
            [
                'uri',
                getStringEncoder()
            ]
        ])).encode({
            name,
            symbol,
            uri
        }))
    });
}
function createUpdateFieldInstruction(args) {
    const { programId, metadata, updateAuthority, field, value } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: metadata
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: updateAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_metadata_interface:updating_field') */ 221,
            233,
            49,
            45,
            181,
            202,
            220,
            200
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'field',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataEnumCodec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$lib$2f$esm$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldCodec"])())
            ],
            [
                'value',
                getStringEncoder()
            ]
        ])).encode({
            field: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$lib$2f$esm$2f$field$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldConfig"])(field),
            value
        }))
    });
}
function createRemoveKeyInstruction(args) {
    const { programId, metadata, updateAuthority, key, idempotent } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: metadata
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: updateAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_metadata_interface:remove_key_ix') */ 234,
            18,
            32,
            56,
            89,
            141,
            37,
            181
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'idempotent',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBooleanEncoder"])()
            ],
            [
                'key',
                getStringEncoder()
            ]
        ])).encode({
            idempotent,
            key
        }))
    });
}
function createUpdateAuthorityInstruction(args) {
    const { programId, metadata, oldAuthority, newAuthority } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: true,
                pubkey: metadata
            },
            {
                isSigner: true,
                isWritable: false,
                pubkey: oldAuthority
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_metadata_interface:update_the_authority') */ 215,
            228,
            166,
            228,
            84,
            100,
            86,
            123
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'newAuthority',
                getPublicKeyEncoder()
            ]
        ])).encode({
            newAuthority: newAuthority ?? __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemProgram"].programId
        }))
    });
}
function createEmitInstruction(args) {
    const { programId, metadata, start, end } = args;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionInstruction"]({
        programId,
        keys: [
            {
                isSigner: false,
                isWritable: false,
                pubkey: metadata
            }
        ],
        data: __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(getInstructionEncoder(new Uint8Array([
            /* await splDiscriminate('spl_token_metadata_interface:emitter') */ 250,
            166,
            180,
            250,
            13,
            12,
            184,
            70
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                'start',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])())
            ],
            [
                'end',
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU64Encoder"])())
            ]
        ])).encode({
            start: start ?? null,
            end: end ?? null
        }))
    });
} //# sourceMappingURL=instruction.js.map
}),
"[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/lib/esm/state.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOKEN_METADATA_DISCRIMINATOR",
    ()=>TOKEN_METADATA_DISCRIMINATOR,
    "pack",
    ()=>pack,
    "unpack",
    ()=>unpack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/web3.js/lib/index.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-core/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-data-structures/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-strings/dist/index.browser.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobcheese-solana/app/node_modules/@solana/spl-token-metadata/node_modules/@solana/codecs-numbers/dist/index.browser.mjs [app-client] (ecmascript)");
;
;
const TOKEN_METADATA_DISCRIMINATOR = __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from([
    112,
    132,
    90,
    90,
    11,
    88,
    157,
    87
]);
function getStringCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCodecSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUtf8Codec"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getU32Codec"])());
}
const tokenMetadataCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStructCodec"])([
    [
        'updateAuthority',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixCodecSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCodec"])(), 32)
    ],
    [
        'mint',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fixCodecSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBytesCodec"])(), 32)
    ],
    [
        'name',
        getStringCodec()
    ],
    [
        'symbol',
        getStringCodec()
    ],
    [
        'uri',
        getStringCodec()
    ],
    [
        'additionalMetadata',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayCodec"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$spl$2d$token$2d$metadata$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$browser$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTupleCodec"])([
            getStringCodec(),
            getStringCodec()
        ]))
    ]
]);
// Checks if all elements in the array are 0
function isNonePubkey(buffer) {
    for(let i = 0; i < buffer.length; i++){
        if (buffer[i] !== 0) {
            return false;
        }
    }
    return true;
}
function pack(meta) {
    // If no updateAuthority given, set it to the None/Zero PublicKey for encoding
    const updateAuthority = meta.updateAuthority ?? __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"].default;
    return tokenMetadataCodec.encode({
        ...meta,
        updateAuthority: updateAuthority.toBuffer(),
        mint: meta.mint.toBuffer()
    });
}
function unpack(buffer) {
    const data = tokenMetadataCodec.decode(buffer);
    return isNonePubkey(data.updateAuthority) ? {
        mint: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.mint),
        name: data.name,
        symbol: data.symbol,
        uri: data.uri,
        additionalMetadata: data.additionalMetadata
    } : {
        updateAuthority: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.updateAuthority),
        mint: new __TURBOPACK__imported__module__$5b$project$5d2f$mobcheese$2d$solana$2f$app$2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicKey"](data.mint),
        name: data.name,
        symbol: data.symbol,
        uri: data.uri,
        additionalMetadata: data.additionalMetadata
    };
} //# sourceMappingURL=state.js.map
}),
]);

//# sourceMappingURL=6abfd_37688706._.js.map