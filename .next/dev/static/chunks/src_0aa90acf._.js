(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 42,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 32,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Progress = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, value, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ui/progress.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/progress.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Progress;
Progress.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Progress$React.forwardRef");
__turbopack_context__.k.register(_c1, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/radio-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadioGroup",
    ()=>RadioGroup,
    "RadioGroupItem",
    ()=>RadioGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-radio-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const RadioGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-2", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/radio-group.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = RadioGroup;
RadioGroup.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const RadioGroupItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                className: "h-2.5 w-2.5 fill-current text-current"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/radio-group.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ui/radio-group.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/radio-group.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = RadioGroupItem;
RadioGroupItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$radio$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "RadioGroup$React.forwardRef");
__turbopack_context__.k.register(_c1, "RadioGroup");
__turbopack_context__.k.register(_c2, "RadioGroupItem$React.forwardRef");
__turbopack_context__.k.register(_c3, "RadioGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/modules.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lessons",
    ()=>lessons,
    "modules",
    ()=>modules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-client] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
;
const modules = [
    {
        id: 1,
        title: "Budget Basics",
        description: "Learn to create and manage a personal budget that works for you",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"],
        duration: "12 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "primary"
    },
    {
        id: 2,
        title: "Understanding Credit",
        description: "Master credit scores, credit cards, and building good credit habits",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        duration: "15 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 200,
        color: "success"
    },
    {
        id: 3,
        title: "Saving Strategies",
        description: "Discover effective ways to save money and build an emergency fund",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        duration: "10 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "achievement"
    },
    {
        id: 4,
        title: "Investment Fundamentals",
        description: "Get started with investing: stocks, bonds, and retirement accounts",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        duration: "18 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 250,
        color: "primary"
    },
    {
        id: 5,
        title: "Goal Setting & Planning",
        description: "Set financial goals and create actionable plans to achieve them",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        duration: "8 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "success"
    },
    {
        id: 6,
        title: "Money Mindset",
        description: "Transform your relationship with money and build healthy habits",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        duration: "10 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "achievement"
    },
    // New Modules
    {
        id: 7,
        title: "The 50/30/20 Rule",
        description: "A simple framework to manage your after-tax income effectively",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
        duration: "5 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "info"
    },
    {
        id: 8,
        title: "Tracking Expenses",
        description: "Why knowing where your money goes is the first step to financial freedom",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"],
        duration: "7 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 120,
        color: "warning"
    },
    {
        id: 9,
        title: "Emergency Funds 101",
        description: "How much to save and where to keep it for life's unexpected events",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
        duration: "6 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "destructive"
    },
    {
        id: 10,
        title: "Reading a Credit Report",
        description: "Decode your credit report and spot errors that could hurt your score",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        duration: "15 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 200,
        color: "primary"
    },
    {
        id: 11,
        title: "Interest Rates Explained",
        description: "Understand APR, compound interest, and how they affect your debt",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        duration: "10 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 180,
        color: "warning"
    },
    {
        id: 12,
        title: "Debt: Snowball vs. Avalanche",
        description: "Compare two popular strategies for paying off debt faster",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        duration: "12 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 200,
        color: "destructive"
    },
    {
        id: 13,
        title: "Good vs. Bad Debt",
        description: "Learn to distinguish between debt that builds wealth and debt that destroys it",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        duration: "8 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "info"
    },
    {
        id: 14,
        title: "Consolidating Debt",
        description: "When and how to combine multiple debts into a single payment",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
        duration: "10 mins",
        difficulty: "Advanced",
        progress: 0,
        xp: 250,
        color: "achievement"
    },
    {
        id: 15,
        title: "Compound Interest Magic",
        description: "See how starting early can exponentially grow your wealth",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        duration: "8 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 150,
        color: "success"
    },
    {
        id: 16,
        title: "Stocks vs. Bonds",
        description: "Understand the key differences and roles of these asset classes",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        duration: "12 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 180,
        color: "primary"
    },
    {
        id: 17,
        title: "ETF Basics",
        description: "Why Exchange Traded Funds are a popular choice for beginners",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
        duration: "10 mins",
        difficulty: "Intermediate",
        progress: 0,
        xp: 200,
        color: "info"
    },
    {
        id: 18,
        title: "Risk Tolerance",
        description: "Determine your personal comfort level with investment risk",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        duration: "5 mins",
        difficulty: "Beginner",
        progress: 0,
        xp: 100,
        color: "warning"
    }
];
const lessons = {
    1: [
        {
            type: "intro",
            title: "Understanding Your Income",
            content: "In this lesson, you'll learn the difference between gross income and net income, and why this matters for your financial planning. We'll also explore different budgeting methods to find one that fits your personality."
        },
        {
            type: "content",
            title: "What is Gross Income?",
            content: "Gross income is the total amount of money you earn before any deductions are taken out. This includes your salary, bonuses, tips, and any other earnings.\n\nFor example, if your job offers you $50,000 per year, that's your gross income. However, you never actually see this full amount in your bank account."
        },
        {
            type: "quiz",
            title: "Quick Check",
            question: "Sarah earns $4,000 per month from her job. What is her gross income?",
            options: [
                "$4,000",
                "$3,500 (after taxes)",
                "$48,000 (annual)",
                "Both A and C"
            ],
            correctAnswer: 3,
            explanation: "Her gross monthly income is $4,000, and her gross annual income is $48,000. Both are correct ways to express gross income."
        },
        {
            type: "content",
            title: "What is Net Income?",
            content: "Net income (also called take-home pay) is what's left after all deductions:\n\n• Income taxes\n• Social Security\n• Medicare\n• Health insurance\n• Retirement contributions\n\nThis is the actual amount that goes into your bank account and the number you MUST use for budgeting."
        },
        {
            type: "content",
            title: "Needs vs. Wants",
            content: "A fundamental part of budgeting is distinguishing between necessities and luxuries.\n\n• **Needs**: Rent/Mortgage, Utilities, Basic Groceries, Transportation, Insurance, Minimum Debt Payments.\n• **Wants**: Dining out, Streaming Services, Designer Clothes, Travel, Upgraded Tech.\n\nBe honest with yourself: Is that daily latte a need or a want?"
        },
        {
            type: "tip",
            title: "The 24-Hour Rule",
            content: "For any 'want' over $50, wait 24 hours before buying it. 80% of the time, the urge to purchase will fade, saving you money without feeling deprived."
        },
        {
            type: "content",
            title: "Zero-Based Budgeting",
            content: " This method involves giving every dollar a job. \n\nFormula: Income - Expenses = $0.\n\nIf you have $3,000 income and $2,500 in expenses, you assign the remaining $500 to savings or debt. You don't leave money 'floating' in your account, which often leads to mindless spending."
        },
        {
            type: "content",
            title: "The Envelope System",
            content: "A classic way to control variable spending (like groceries or entertainment). You put a set amount of cash in an envelope for the month. When the envelope is empty, you stop spending in that category.\n\n**Modern Twist**: Use a separate debit card or a specific bank account for these variable expenses."
        },
        {
            type: "content",
            title: "Sinking Funds",
            content: "These are savings buckets for known upcoming expenses. Instead of being surprised by a $600 car insurance bill every 6 months, you save $100/month into a 'Car Insurance' sinking fund.\n\nIt smooths out your monthly cash flow and prevents budget shocks."
        },
        {
            type: "quiz",
            title: "Budgeting Logic",
            question: "Which budgeting method assigns every single dollar a specific purpose?",
            options: [
                "The Envelope System",
                "Zero-Based Budgeting",
                "The 50/30/20 Rule",
                "Pay Yourself First"
            ],
            correctAnswer: 1,
            explanation: "Zero-Based Budgeting ensures that Income minus Expenses equals Zero, meaning every dollar is deliberately allocated to spending or saving."
        },
        {
            type: "content",
            title: "Dealing with Irregular Income",
            content: "If you're a freelancer or work on commission, base your budget on your *lowest* expected monthly income. In high-earning months, put the surplus directly into savings or a 'buffer' fund to cover you during lean months."
        },
        {
            type: "quiz",
            title: "Test Your Understanding",
            question: "Why is net income more important than gross income for budgeting?",
            options: [
                "It sounds more professional",
                "It's the actual money you can spend",
                "It's always a bigger number",
                "Employers prefer it"
            ],
            correctAnswer: 1,
            explanation: "Net income is what you actually receive and can spend. When budgeting, you need to work with your actual take-home pay, not your gross income."
        },
        {
            type: "tip",
            title: "Pro Tip",
            content: "Always base your budget on your net income, not gross income. A common mistake is calculating expenses based on gross income, which leads to overspending.\n\n💡 Try this: Look at your last paycheck and identify the difference between your gross and net pay."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Great job! You've learned about income types, needs vs. wants, and powerful strategies like Zero-Based Budgeting and Sinking Funds. You're ready to take control!",
            xpEarned: 150
        }
    ],
    2: [
        {
            type: "intro",
            title: "Demystifying Credit",
            content: "Credit can be a powerful tool or a dangerous trap. In this lesson, we'll break down how credit works, how scores are calculated, and how to build a rock-solid history."
        },
        {
            type: "content",
            title: "What is a Credit Score?",
            content: "Your credit score is a three-digit number (usually between 300 and 850) that tells lenders how likely you are to repay debt. Think of it as your financial report card.\n\n• 720+: Excellent (Best rates)\n• 690-719: Good\n• 630-689: Fair\n• <629: Poor (High rates or denial)"
        },
        {
            type: "content",
            title: "The Big 5 Factors",
            content: "Your FICO score is calculated based on five factors:\n\n1. **Payment History (35%)**: The most critical factor. Pay. On. Time.\n2. **Amounts Owed (30%)**: Credit utilization ratio.\n3. **Length of Credit History (15%)**: Older accounts are better.\n4. **New Credit (10%)**: Avoid opening too many cards at once.\n5. **Credit Mix (10%)**: A mix of cards and loans is healthy."
        },
        {
            type: "content",
            title: "Hard vs. Soft Inquiries",
            content: "Not all credit checks are equal:\n\n• **Soft Inquiry**: Checking your own score, or employer background checks. **Does NOT affect your score.**\n• **Hard Inquiry**: Applying for a new loan or credit card. **Lowers your score slightly** (usually 5 points) and stays on report for 2 years."
        },
        {
            type: "content",
            title: "The 30% Utilization Rule",
            content: "Credit utilization is how much of your limit you use. If you have a $10,000 limit and a $5,000 balance, your utilization is 50%.\n\n**Aim for under 30%** (under 10% is even better). High utilization signals financial stress to lenders, even if you pay in full every month."
        },
        {
            type: "quiz",
            title: "Utilization Check",
            question: "You have a credit card with a $2,000 limit. To keep your utilization under 30%, what is the maximum balance you should carry?",
            options: [
                "$1,000",
                "$600",
                "$300",
                "$1,400"
            ],
            correctAnswer: 1,
            explanation: "$600 is 30% of $2,000. keeping your balance below this helps maximize your credit score."
        },
        {
            type: "content",
            title: "Authorized Users",
            content: "Want to boost your score? ask a parent or partner with excellent credit to add you as an 'authorized user' on their oldest card.\n\nYou inherit their positive payment history for that card instantly! (Just make sure they actually pay on time)."
        },
        {
            type: "content",
            title: "Secured Credit Cards",
            content: "If you have no credit or bad credit, start with a Secured Card. You put down a cash deposit (e.g., $200) which becomes your credit limit. It acts like a debit card but reports to credit bureaus, building your history."
        },
        {
            type: "tip",
            title: "Never Close Old Cards",
            content: "Closing your oldest credit card shortens your 'Length of Credit History' and lowers your total available credit, both of which can hurt your score. If it has no annual fee, keep it open and buy a small item once a year to keep it active."
        },
        {
            type: "content",
            title: "Disputing Errors",
            content: "1 in 5 people have errors on their credit report. If you see an account you didn't open or a 'late' payment that was on time, file a dispute immediately with the credit bureau. They have 30 days to verify it or remove it."
        },
        {
            type: "quiz",
            title: "Credit Quiz",
            question: "Which factor has the biggest impact on your credit score?",
            options: [
                "Total debt amount",
                "Payment history",
                "Number of credit cards",
                "Age"
            ],
            correctAnswer: 1,
            explanation: "Payment history accounts for 35% of your score. Missing even one payment can significantly drop your score."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You now have the blueprint for excellent credit. Pay on time, keep balances low, and watch your score climb!",
            xpEarned: 200
        }
    ],
    3: [
        {
            type: "intro",
            title: "The Art of Saving",
            content: "Saving isn't just about depriving yourself; it's about buying freedom. Let's master the art of keeping more of what you earn."
        },
        {
            type: "content",
            title: "Pay Yourself First",
            content: "This is the Golden Rule. Instead of saving what's left after spending, spend what's left after saving.\n\nAction: Set up an automatic transfer to your savings account to happen on the SAME day as your paycheck deposit. You won't miss money you never saw."
        },
        {
            type: "content",
            title: "The Power of High-Yield Savings Accounts (HYSA)",
            content: "Stop leaving money in a standard checking account earning 0.01%.\n\nA HYSA pays 10-20x more interest (e.g., 4-5% APY). On $10,000, that's the difference between earning $1 and earning $500 a year for doing nothing!"
        },
        {
            type: "quiz",
            title: "Interest Logic",
            question: "Why is a HYSA better than a regular savings account?",
            options: [
                "It has cooler debit cards",
                "It allows unlimited withdrawals",
                "It pays significantly higher interest rates",
                "It invests your money in stocks"
            ],
            correctAnswer: 2,
            explanation: "HYSAs offer much higher interest rates, allowing your idle cash to grow faster while staying safe (FDIC insured)."
        },
        {
            type: "content",
            title: "Micro-Saving Apps",
            content: "Apps like Acorns or Chime offer 'Round-Ups'. If you spend $4.50 on coffee, they round it up to $5.00 and save the $0.50.\n\nIt sounds small, but these tiny amounts can add up to hundreds of dollars a year effortlessly."
        },
        {
            type: "content",
            title: "The 'No-Spend' Challenge",
            content: "Gamify your savings! Pick one day a week (e.g., 'Zero-Dollar Tuesdays') where you spend $0 unrelated to fixed bills. Eat leftovers, walk instead of drive, read a book.\n\nAdvanced Level: Try a No-Spend Weekend once a month."
        },
        {
            type: "content",
            title: "Brand Name vs. Generic",
            content: "In many cases, generic medicines and food products have the EXACT same ingredients as brand names. Check the labels. Buying generic can lower your grocery bill by 20-30% instantly."
        },
        {
            type: "content",
            title: "Subscription Audit",
            content: "We all have 'Zombie Subscriptions'—services we pay for but don't use. \n\nCheck your bank statement for the last 3 months. Cancel anything you haven't used in 30 days. You can always resubscribe later if you miss it."
        },
        {
            type: "content",
            title: "Meal Prepping",
            content: "The average commercial lunch costs $15. Bringing leftovers costs $3.\n\nSaving $12/day x 5 days = $60/week = $3,120/year. That's a vacation funded just by making a sandwich."
        },
        {
            type: "quiz",
            title: "Strategy Check",
            question: "What is the 'Pay Yourself First' method?",
            options: [
                "Buying something nice for yourself before paying bills",
                "Saving a portion of income immediately upon receiving it",
                "Paying off debts before buying groceries",
                "Using a credit card for everything"
            ],
            correctAnswer: 1,
            explanation: "It means prioritizing your savings goals by setting aside money as soon as you get paid, ensuring you actually save."
        },
        {
            type: "tip",
            title: "Negotiate Your Bills",
            content: "Call your internet or phone provider once a year. Ask: 'I've been a loyal customer, is there a better rate available?' Often, they have retention offers just waiting for you to ask."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "From HYSAs to meal prepping, you now have a toolkit of strategies to supercharge your savings rate!",
            xpEarned: 150
        }
    ],
    4: [
        {
            type: "intro",
            title: "Investing 101",
            content: "Investing puts your money to work. It's the only reliable way to build wealth that outpaces inflation over the long term."
        },
        {
            type: "content",
            title: "Inflation: The Silent Killer",
            content: "If you bury $100 in the backyard, 20 years later it still says '$100', but it buys only half as much stuff.\n\nInvesting is a defense against inflation. You NEED your money to grow just to maintain its purchasing power."
        },
        {
            type: "content",
            title: "Asset Classes",
            content: "• **Stocks**: Ownership in companies. High risk, high growth.\n• **Bonds**: Loans to governments/companies. Medium risk, steady income.\n• **Cash**: Very low risk, loses value to inflation.\n• **Real Estate**: Tangible property.\n• **Commodities**: Gold, oil, corn."
        },
        {
            type: "content",
            title: "Diversification",
            content: "'Don't put all your eggs in one basket.'\n\nIf you own one stock (e.g., Tech Company X) and it goes bankrupt, you lose everything. If you own an Index Fund (500 companies), and Tech Company X fails, you barely notice because the other 499 might be doing fine."
        },
        {
            type: "quiz",
            title: "Investment Logic",
            question: "Why is diversification important?",
            options: [
                "It guarantees high returns",
                "It eliminates all fees",
                "It reduces risk by spreading investments",
                "It makes tax filing easier"
            ],
            correctAnswer: 2,
            explanation: "Diversification protects your portfolio. If one sector crashes, others might rise or stay stable, smoothing out your returns."
        },
        {
            type: "content",
            title: "Active vs. Passive Investing",
            content: "• **Active**: Trying to pick 'winning' stocks or time the market to beat the average. (Very hard, high fees).\n• **Passive**: Buying the WHOLE market (via Index Funds) and accepting the average return. (Easy, low fees, historically better for 90% of investors)."
        },
        {
            type: "content",
            title: "Dollar Cost Averaging (DCA)",
            content: "Instead of trying to time the market (buy low, sell high), invest a fixed amount every month (e.g., $500).\n\nWhen prices are high, you buy fewer shares. When prices are low, you buy MORE shares. Over time, this lowers your average cost per share automatically."
        },
        {
            type: "content",
            title: "Tax-Advantaged Accounts",
            content: "Use these 'buckets' to pay less tax:\n\n• **401(k)**: Employer sponsored, often with a 'match' (free money!).\n• **IRA (Individual Retirement Account)**: You open it yourself.\n• **Roth IRA**: You pay tax now, but tax-free withdrawals in retirement."
        },
        {
            type: "content",
            title: "The Impact of Fees",
            content: "Investment fees (Expense Ratios) eat your profits. A 1% fee sounds small, but over 30 years, it can reduce your final portfolio value by 25%!\n\nAim for low-cost index funds with expense ratios under 0.10%."
        },
        {
            type: "tip",
            title: "Time in the Market",
            content: "Missing just the 10 best days in the market over 20 years can cut your returns in half. Stay invested through the ups and downs. 'Time in the market beats timing the market.'"
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You've learned the pillars of investing: Diversify, keep costs low, and stay the course. Your future self thanks you!",
            xpEarned: 250
        }
    ],
    5: [
        {
            type: "intro",
            title: "Setting Financial Goals",
            content: "A goal without a plan is just a wish. Let's learn to set precise targets and build the roadmap to reach them."
        },
        {
            type: "content",
            title: "SMART Goals",
            content: "Make your goals SMART:\n\n• **Specific**: 'Save $5,000' vs 'Save money'\n• **Measurable**: Trackable progress\n• **Achievable**: Realistic for your income\n• **Relevant**: Aligns with your values\n• **Time-bound**: Has a deadline (e.g., 'by Dec 31st')"
        },
        {
            type: "quiz",
            title: "Goal Check",
            question: "Which is a SMART goal?",
            options: [
                "I want to be rich someday",
                "I will save $10,000 for a down payment by Dec 31st",
                "I will try to spend less on food",
                "I need to invest more"
            ],
            correctAnswer: 1,
            explanation: "This goal is Specific ($10k down payment), Measurable ($10k), Time-bound (Dec 31st), and presumably Achievable/Relevant."
        },
        {
            type: "content",
            title: "Time Horizons",
            content: "Categorize goals by time:\n\n• **Short-term (< 1 year)**: Emergency fund, vacation. (Keep in Cash/Savings)\n• **Medium-term (1-5 years)**: Car, House down payment. (CDs, Bonds, Conservative mix)\n• **Long-term (10+ years)**: Retirement. (Stocks/Equities for growth)"
        },
        {
            type: "content",
            title: "Visualize Your Success",
            content: "Psychology matters. Create a vision board or rename your savings accounts. Instead of 'Savings Account 1', name it 'Trip to Japan 2025'. Seeing the purpose of the money makes it harder to raid for impulse buys."
        },
        {
            type: "content",
            title: "Breaking it Down",
            content: "Big goals are scary. Break them down.\n\nGoal: $12,000 in one year.\nMonthly: $1,000.\nWeekly: $250.\nDaily: $35.\n\nCan you find $35 a day? That feels much more manageable than $12,000."
        },
        {
            type: "content",
            title: "Accountability Partners",
            content: "Share your goals with a friend or partner. You are 65% more likely to meet a goal if you commit to someone. If you have a specific accountability appointment with them, you are 95% likely to succeed!"
        },
        {
            type: "content",
            title: "The 'Why' Factor",
            content: "When motivation fades, your 'Why' keeps you going. \n\nDon't just save for 'retirement'. Save for 'freedom to travel' or 'security for my family'. distinct emotional connection drives action."
        },
        {
            type: "content",
            title: "Financial Independence (FIRE)",
            content: "A popular long-term goal is FIRE (Financial Independence, Retire Early). Ideally, having 25x your annual expenses invested allows you to live off the returns indefinitely."
        },
        {
            type: "tip",
            title: "Review and Adjust",
            content: "Life changes. Review your goals quarterly. It's okay to change them! If you no longer want to buy a house, stop saving for it and redirect that money to a new passion."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You've turned vague wishes into concrete plans. Now execute!",
            xpEarned: 100
        }
    ],
    6: [
        {
            type: "intro",
            title: "Mastering Your Money Mindset",
            content: "Your beliefs about money drive your financial decisions. Let's explore how to cultivate a healthy money mindset that serves you."
        },
        {
            type: "content",
            title: "Scarcity vs. Abundance",
            content: "A scarcity mindset focuses on what you lack ('I'll never have enough', 'Money is evil'). An abundance mindset focuses on possibility ('How can I afford this?', 'Money is a tool for good').\n\nShifting your language from 'I can't' to 'How can I' opens up creative solutions."
        },
        {
            type: "content",
            title: "Money Scripts",
            content: "We all have 'scripts' we learned in childhood. \n\n• **Avoidance**: 'I don't look at my bills.'\n• **Worship**: 'More money will solve all my problems.'\n• **Status**: 'My self-worth equals my net worth.'\n• **Vigilance**: 'I must save every penny or disaster will strike.'\n\nIdentifying your script is the first step to rewriting it."
        },
        {
            type: "content",
            title: "Lifestyle Creep",
            content: "Also known as the Hedonic Treadmill. As you earn more, you spend more, so you never actually get ahead.\n\n**The Fix**: When you get a raise, save 50% of the increase automatically. Enjoy the other 50%."
        },
        {
            type: "quiz",
            title: "Mindset Check",
            question: "What is 'Lifestyle Creep'?",
            options: [
                "Walking slowly through expensive stores",
                "Assuming your expenses must rise to match your income",
                "Buying creepy decorations",
                "A type of inflation"
            ],
            correctAnswer: 1,
            explanation: "Lifestyle creep happens when increased income leads to increased spending, neutralizing your ability to build wealth."
        },
        {
            type: "content",
            title: "The Comparison Thief",
            content: "'Comparison is the thief of joy.' Social media shows you everyone's highlight reel, not their bloopers (or detailed credit card debt).\n\nFocus on your own race. Your neighbor with the new BMW might be drowning in payments."
        },
        {
            type: "content",
            title: "Delayed Gratification",
            content: "The ability to say 'no' now for a better 'yes' later is the #1 predictor of financial success.\n\nTry it: Want a new phone? Challenge yourself to wait 30 days. If you still want it, buy it. Often, the impulse fades."
        },
        {
            type: "content",
            title: "Investing in Yourself",
            content: "You are your greatest asset. Spending money on education, health, or skills is not an 'expense'—it's an investment with infinite ROI.\n\nDon't be cheap with your health or your brain."
        },
        {
            type: "tip",
            title: "Gratitude Practice",
            content: "Start a 'Financial Gratitude Journal'. Every Friday, write down 3 things your money bought you that you are thankful for (e.g., 'Warm home', 'Coffee with a friend'). It shifts your focus from 'Not enough' to 'Enough'."
        },
        {
            type: "content",
            title: "Mindful Spending",
            content: "Before tapping your card, ask: 'Is this purchase aligned with my values?'\n\nIf you value travel but spend $200/month on cable TV you never watch, your spending is misaligned."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Your mindset is the foundation of your financial house. Keep building positive beliefs!",
            xpEarned: 150
        }
    ],
    7: [
        {
            type: "intro",
            title: "The 50/30/20 Rule",
            content: "A simple, intuitive framework for managing your money without complex spreadsheets. Perfect for beginners."
        },
        {
            type: "content",
            title: "The Breakdown",
            content: "The rule suggests dividing your *after-tax* (Net) income into three buckets:\n\n• **50% for Needs** (Rent, Groceries, Utilities, Insurance)\n• **30% for Wants** (Dining out, Hobbies, Streaming, Travel)\n• **20% for Goals** (Savings, Investments, Extra Debt Payments)"
        },
        {
            type: "content",
            title: "Real World Example",
            content: "You take home $4,000/month.\n\n• **Needs**: $2,000 max.\n• **Wants**: $1,200 max.\n• **Goals**: $800 minimum.\n\nIf your rent is $1,800, you only have $200 left for other needs. This forces you to prioritize."
        },
        {
            type: "quiz",
            title: "Scenario",
            question: "If your monthly take-home pay is $3,000, how much should you aim to save according to this rule?",
            options: [
                "$300",
                "$600",
                "$1,000",
                "$1,500"
            ],
            correctAnswer: 1,
            explanation: "20% of $3,000 is $600. This amount should go towards savings, investments, or extra debt payments."
        },
        {
            type: "content",
            title: "High Cost of Living Areas",
            content: "Living in NYC or SF? Your 'Needs' might be 60-70% just due to rent.\n\nThat's okay! Adjust the rule. Maybe try 60/20/20 or 70/20/10. The key is to keep the 'Goals' percentage as high as possible, even if 'Wants' have to shrink."
        },
        {
            type: "content",
            title: "Where Does Debt Go?",
            content: "• **Minimum Payments**: Go in the **50% Needs** bucket (you MUST pay them).\n• **Extra Payments**: Go in the **20% Goals** bucket (this accelerates your freedom)."
        },
        {
            type: "content",
            title: "The Grey Areas",
            content: "Is a gym membership a Need or a Want? \n\nTechnically a Want. You can exercise for free. But if it keeps you sane, prioritize it in your 30%. Be honest with your categorization."
        },
        {
            type: "content",
            title: "Automate The Split",
            content: "Don't do the math every month. Set up your direct deposit to split automatically:\n\n• 20% to Savings Account\n• 80% to Checking Account\n\nThen live off what lands in checking."
        },
        {
            type: "content",
            title: "Handling Bonuses",
            content: "Got a $1,000 bonus? The rule says:\n\n• $500 to boring stuff (or debt)\n• $300 for fun\n• $200 to savings\n\nOr, be a superhero and put 100% to debt/savings!"
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "You now have a solid framework for budgeting! Try applying this to your own income this month.",
            xpEarned: 100
        }
    ],
    8: [
        {
            type: "intro",
            title: "Tracking Your Expenses",
            content: "You can't manage what you don't measure. Tracking expenses is the diagnostic tool for your financial health."
        },
        {
            type: "content",
            title: "Where Does It Go?",
            content: "Small leaks sink great ships. That $5 daily coffee is $1,800 a year. Tracking helps you identify these leaks.\n\nUse an app, a spreadsheet, or a notebook. The method doesn't matter; consistency does."
        },
        {
            type: "content",
            title: "Manual vs. Automatic",
            content: "• **Automatic (Apps)**: Links to bank, categorizes for you. Pros: Easy, comprehensive. Cons: Passive, you might ignore the notifications.\n• **Manual (Excel/Notebook)**: You type every expense. Pros: High awareness, 'pain of paying'. Cons: Time-consuming."
        },
        {
            type: "quiz",
            title: "Awareness Check",
            question: "What is the primary benefit of tracking expenses?",
            options: [
                "It makes you feel guilty",
                "It takes up free time",
                "It creates awareness of spending habits",
                "It stops you from spending entirely"
            ],
            correctAnswer: 2,
            explanation: "Tracking creates awareness. Once you see where money is going, you can make conscious choices to redirect it."
        },
        {
            type: "content",
            title: "The 'Latte Factor'",
            content: "It's not just about lattes. It's about any small, habitual spend that adds up. Cigarettes, vending machine snacks, in-game purchases.\n\nIdentify your 'Latte Factor' and cut it by 50%."
        },
        {
            type: "content",
            title: "Category Creep",
            content: "Be specific. Don't just have a 'Misc' category. 'Misc' is a black hole where budgets go to die.\n\nBreak it down: 'Gifts', 'Home Repair', 'Parking'."
        },
        {
            type: "content",
            title: "Tracking Net Worth",
            content: "Expense tracking is about flow. Net Worth tracking is about accumulation.\n\nAssets - Liabilities = Net Worth.\n\nTrack this quarterly to see the big picture."
        },
        {
            type: "content",
            title: "Subscription Fatigue",
            content: "Use your tracker to spot recurring charges. Did you know you're still paying for that gym you moved away from 6 months ago? Your tracker knows."
        },
        {
            type: "content",
            title: "Privacy Concerns",
            content: "If you're wary of linking bank accounts to apps, manual tracking (exporting CSVs from your bank) is 100% private and secure."
        },
        {
            type: "tip",
            title: "Weekly Review",
            content: "Set a 'Money Date' with yourself every Sunday evening. Review last week's spending. Did you blow the dining budget? Adjust for next week."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Knowledge is power. By tracking your spending, you regain control over your financial life.",
            xpEarned: 120
        }
    ],
    9: [
        {
            type: "intro",
            title: "Building an Emergency Fund",
            content: "Life happens. The car breaks down, you lose a job, or a medical bill pops up. An emergency fund turns a disaster into an inconvenience."
        },
        {
            type: "content",
            title: "Why You Need One",
            content: "40% of Americans can't cover a $400 emergency without selling something or borrowing.\n\nDebt is the emergency fund's evil twin. Without savings, you are forced into high-interest debt when things go wrong."
        },
        {
            type: "content",
            title: "How Much is Enough?",
            content: "Aim for **3 to 6 months of essential living expenses**.\n\nNote: 'Essential'. If you lose your job, you won't be eating steak dinners. Calculate your 'bare bones' budget (Rent + Food + Utilities) x 3."
        },
        {
            type: "content",
            title: "Starter Fund",
            content: "3-6 months is daunting. Start with a micro-goal: **$1,000**.\n\nThis covers most minor car repairs or appliance replacements. Get here as fast as you can—sell things, work overtime, pause investing."
        },
        {
            type: "quiz",
            title: "Fund Logic",
            question: "What is an appropriate use of your emergency fund?",
            options: [
                "A flash sale on electronics",
                "Your car's transmission fails",
                "Down payment for a vacation",
                "Investing in crypto"
            ],
            correctAnswer: 1,
            explanation: "An emergency fund is for UNEXPECTED, URGENT, and NECESSARY expenses. A car failure fits all three."
        },
        {
            type: "content",
            title: "Where to Keep It?",
            content: "Keep it liquid (accessible) but separate. A **High-Yield Savings Account (HYSA)** is ideal.\n\nIt's separate enough that you won't accidentally spend it on pizza, but accessible within 1-2 days if you need it."
        },
        {
            type: "content",
            title: "What if I Need to Use It?",
            content: "Use it! That's what it's there for. Don't feel guilty.\n\nBUT, your #1 priority immediately becomes refilling it. Pause other goals until your shield is back up."
        },
        {
            type: "content",
            title: "Job Loss Protection",
            content: "In a recession, finding a new job can take 6 months. If you work in a volatile industry (tech startups, sales), aim for the higher end (6-9 months) of expenses."
        },
        {
            type: "tip",
            title: "Windfalls",
            content: "Get a tax refund? A birthday check? Put 50-100% of it into your emergency fund until it's fully funded."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Your emergency fund is your financial shield. Start building it today!",
            xpEarned: 100
        }
    ],
    10: [
        {
            type: "intro",
            title: "Reading Your Credit Report",
            content: "Your credit report contains the data that determines your score. Errors are common, so you need to know how to check it like a detective."
        },
        {
            type: "content",
            title: "The Big Three",
            content: "There are three major credit bureaus: **Equifax, Experian, and TransUnion**.\n\nYou are entitled to a free report from EACH of them every week (temporarily post-COVID) or at least annually at **AnnualCreditReport.com**."
        },
        {
            type: "content",
            title: "Section 1: Personal Info",
            content: "Check your name, address, and SSN. \n\nWarning Sign: An address you never lived at. This could mean someone opened an account in your name using a different address."
        },
        {
            type: "content",
            title: "Section 2: Credit Accounts (Trade Lines)",
            content: "This lists all your credit cards, loans, and mortgages.\n\nCheck:\n• **Status**: Should be 'Current' or 'Paid as Agreed'.\n• **Balance**: Does it look accurate?\n• **Ownership**: Is this actually your account?"
        },
        {
            type: "content",
            title: "Section 3: Inquiries",
            content: "Who has looked at your report?\n\n• **Hard Inquiries**: Stay for 2 years. If you see a hard inquiry from a bank you didn't apply to, it's a huge Red Flag for identity theft."
        },
        {
            type: "content",
            title: "Section 4: Public Records/Collections",
            content: "The scary stuff. Bankruptcies, tax liens, or debts sold to collection agencies.\n\nThese hurt your score the most. Ensure they are accurate. If a debt is old (usually 7+ years), it should fall off."
        },
        {
            type: "quiz",
            title: "Fact Check",
            question: "How often can you get a free credit report from the major bureaus?",
            options: [
                "Once a lifetime",
                "Once a year (or weekly recently)",
                "Only when denied credit",
                "Every month"
            ],
            correctAnswer: 1,
            explanation: "By law, you can access your report for free once every 12 months, though recent policies allow for more frequent free checks."
        },
        {
            type: "content",
            title: "Dispute Process",
            content: "Found an error? You can dispute it online with the bureau. They must investigate within 30 days. If the lender can't prove the debt is yours, the bureau MUST remove it."
        },
        {
            type: "content",
            title: "Credit Monitoring Services",
            content: "Services like Credit Karma offer free monitoring. They alert you instantly if a new inquiry or account appears. Highly recommended for peace of mind."
        },
        {
            type: "content",
            title: "Freezing Your Credit",
            content: "The ultimate protection. You can 'Freeze' your credit for free. This locks your report so NO ONE can open a new account in your name.\n\nWhen you need to apply for something, you temporarily 'Thaw' it using a PIN."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Regularly checking your report protects you from identity theft and errors. Mark your calendar!",
            xpEarned: 200
        }
    ],
    11: [
        {
            type: "intro",
            title: "Interest Rates Explained",
            content: "Interest is the price of money. When you borrow, you pay it. When you save, you earn it."
        },
        {
            type: "content",
            title: "APR vs. APY",
            content: "• **APR (Annual Percentage Rate)**: The cost of borrowing (e.g., credit cards, loans). Lower is better. A 25% APR on a credit card is a wealth destroyer.\n• **APY (Annual Percentage Yield)**: The return on savings. Higher is better. A 5% APY on a savings account is free money."
        },
        {
            type: "content",
            title: "Simple vs. Compound",
            content: "• **Simple Interest**: Calculated only on the principal amount.\n• **Compound Interest**: Calculated on the principal PLUS accumulated interest.\n\nCompound interest helps you when you invest, but hurts you when you have credit card debt."
        },
        {
            type: "content",
            title: "The Mortgage Math",
            content: "A 1% difference in interest rates is massive.\n\n$300k mortgage at 6%: Total paid ($647k)\n$300k mortgage at 7%: Total paid ($718k)\n\nThat 1% difference costs you **$71,000** over 30 years!"
        },
        {
            type: "quiz",
            title: "Interest Check",
            question: "Which scenario is better for you financially?",
            options: [
                "High APR on a loan, High APY on savings",
                "High APR on a loan, Low APY on savings",
                "Low APR on a loan, High APY on savings",
                "Low APR on a loan, Low APY on savings"
            ],
            correctAnswer: 2,
            explanation: "You want to pay little interest when borrowing (Low APR) and earn lots of interest when saving (High APY)."
        },
        {
            type: "content",
            title: "Fixed vs. Variable Rates",
            content: "• **Fixed**: The rate never changes (e.g., most mortgages). Safe and predictable.\n• **Variable**: The rate moves with the market (e.g., HELOCs, some Student Loans). Risky—your payment could double if rates rise."
        },
        {
            type: "content",
            title: "Credit Card Interest",
            content: "Credit cards compound interest **daily**. This is why balances grow so fast. \n\nIf you carry a balance, you are effectively paying 20-25% more for everything you buy."
        },
        {
            type: "content",
            title: "How to Lower Your Rates",
            content: "The best way to get lower interest rates is to improve your Credit Score. Lenders view you as less risky and reward you with cheaper money."
        },
        {
            type: "tip",
            title: "Refinancing",
            content: "If interest rates drop significantly below what you are paying on a loan, consider 'Refinancing'. This means taking a new loan with the lower rate to pay off the old one, saving you money monthly."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Understanding interest rates helps you make smarter borrowing and saving decisions.",
            xpEarned: 180
        }
    ],
    12: [
        {
            type: "intro",
            title: "Debt Repayment Strategies",
            content: "Learn two powerful methods to tackle debt: The Snowball and The Avalanche."
        },
        {
            type: "content",
            title: "The Debt Snowball",
            content: "List debts from **Smallest Balance** to **Largest Balance**. Ignore interest rates.\n\nPay minimums on everything, but attack the smallest debt with vengeance. When it's gone, that 'freed up' money rolls into the payment for the next smallest debt."
        },
        {
            type: "content",
            title: "Psychology Wins",
            content: "The Snowball works because of **Quick Wins**. Eliminating a debt completely in 2 months feels amazing. This motivation keeps you going, even if it's not mathematically perfect."
        },
        {
            type: "content",
            title: "The Debt Avalanche",
            content: "List debts from **Highest Interest Rate** to **Lowest Interest Rate**.\n\nAttack the debt with the highest rate (e.g., that 28% credit card) first. Mathematically, this saves you the most money and gets you out of debt faster."
        },
        {
            type: "quiz",
            title: "Which is better?",
            question: "Which method is better for someone who needs quick wins to stay motivated?",
            options: [
                "Debt Avalanche",
                "Debt Snowball",
                "Neither",
                "Paying randomly"
            ],
            correctAnswer: 1,
            explanation: "The Debt Snowball provides quick psychological wins by eliminating small debts fast, which helps build momentum."
        },
        {
            type: "content",
            title: "The Hybrid Method",
            content: "Can't decide? Knock out one or two tiny debts for a quick mood boost (Snowball), then switch to attacking the highest interest rate for efficiency (Avalanche)."
        },
        {
            type: "content",
            title: "Finding Extra Money",
            content: "To make either method work, you need 'Snow'. This is the extra cash you throw at the debt.\n\n• Sell things\n• Pick up a side hustle\n• Cut the cable\n\nEvery extra $50 helps considerably."
        },
        {
            type: "content",
            title: "When to Pause",
            content: "Pause your intense debt payoff if you have a genuine emergency. Use your emergency fund, handle the crisis, then restart. Don't add new debt."
        },
        {
            type: "tip",
            title: "Celebration",
            content: "Debt payoff is a grind. Celebrate milestones! Paid off the Visa card? Have a (paid for with cash) nice dinner. Train your brain that financial responsibility feels good."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Choose the strategy that fits your personality best. The best strategy is the one you stick to!",
            xpEarned: 200
        }
    ],
    13: [
        {
            type: "intro",
            title: "Good Debt vs. Bad Debt",
            content: "Not all debt is created equal. Some debt can help you build wealth, while other debt destroys it."
        },
        {
            type: "content",
            title: "Leverage",
            content: "Debt is 'Leverage'. It magnifies outcomes. \n\n• Buying a house that appreciates = Positive Leverage.\n• Buying a TV that depreciates = Negative Leverage."
        },
        {
            type: "content",
            title: "The Difference",
            content: "• **Good Debt**: Low interest, tax-deductible (sometimes), buys an appreciating asset. (e.g., Mortgage, Business Loan, Reasonable Student Loans).\n• **Bad Debt**: High interest, buys depreciating assets or consumption. (e.g., Credit Cards, Payday Loans, Car Loans for luxury cars)."
        },
        {
            type: "quiz",
            title: "Debt ID",
            question: "Which of the following is typically considered 'bad debt'?",
            options: [
                "A mortgage on a rental property",
                "A student loan for medical school",
                "Credit card debt for a vacation",
                "A small business loan"
            ],
            correctAnswer: 2,
            explanation: "A vacation is an experience, not an asset. Financing it with high-interest debt is a wealth-destroying move."
        },
        {
            type: "content",
            title: "The Grey Zone",
            content: "Some debt isn't clearly good or bad. \n\nExample: **Car Loans**. You need a car for work (Good), but buying a brand new $50k truck when a $10k sedan works is (Bad). Keep car debt minimal."
        },
        {
            type: "content",
            title: "Can Good Debt Go Bad?",
            content: "Yes! If you buy 'too much house' and become 'house poor' (payments are >40% of income), that 'Good' mortgage becomes a financial nightmare."
        },
        {
            type: "content",
            title: "Student Loans",
            content: "Rule of thumb: Don't borrow more than your expected first-year salary.\n\n$30k debt for a $60k engineering job? Good investment.\n$100k debt for a $40k job? Bad investment."
        },
        {
            type: "content",
            title: "Payday Loans",
            content: "The worst of the worst. APRs can hit 400%+. Avoid these at all costs. This is where your emergency fund saves you."
        },
        {
            type: "content",
            title: "Debt-to-Income Ratio (DTI)",
            content: "Lenders look at this. Ideally, your total monthly debt payments should be less than 36% of your gross income."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Leverage good debt carefully, avoid bad debt often, and never confuse the two.",
            xpEarned: 150
        }
    ],
    14: [
        {
            type: "intro",
            title: "Consolidating Debt",
            content: "Juggling multiple payments? Consolidation might simplify your life and save you money, but it's not a magic eraser."
        },
        {
            type: "content",
            title: "How it Works",
            content: "Debt consolidation involves taking out **one new loan** to pay off **multiple smaller debts**. \n\nGoal: Lower interest rate + Single monthly payment."
        },
        {
            type: "content",
            title: "Balance Transfer Cards",
            content: "A popular method. You transfer high-interest credit card debt to a new card with **0% APR for 12-18 months**.\n\nCatch: There is usually a 3-5% transfer fee, and you MUST pay it off before the promo period ends, or interest spikes."
        },
        {
            type: "quiz",
            title: "Consolidation Check",
            question: "What is the primary risk of debt consolidation?",
            options: [
                "It lowers your credit score forever",
                "It makes paying bills too easy",
                "Running up debt again on the now-empty credit cards",
                "Banks don't allow it"
            ],
            correctAnswer: 2,
            explanation: "The danger is behavioral. If you clear your credit cards with a loan but don't change your spending habits, you'll rack up new debt and have the loan to pay."
        },
        {
            type: "content",
            title: "Personal Loans",
            content: "You can get a personal loan from a bank or online lender. \n\nPros: Fixed repayment timeline (e.g., 3 years).\nCons: Origination fees and rates might still be high if your credit score is low."
        },
        {
            type: "content",
            title: "HELOC",
            content: "Home Equity Line of Credit. Using your house as collateral to pay off credit cards.\n\nRisk: **Very High**. If you default on credit cards, you ruin your score. If you default on a HELOC, you lose your house."
        },
        {
            type: "content",
            title: "Debt Management Plans (DMP)",
            content: "Offered by non-profit credit counseling agencies. They negotiate lower rates with creditors for you. You pay the agency, they pay the creditors. A safe alternative to bankruptcy."
        },
        {
            type: "tip",
            title: "Cut the Cards",
            content: "If you consolidate, physically cut up the credit cards you just paid off. remove them from Amazon/Apple Pay. Remove the temptation to reload them."
        },
        {
            type: "content",
            title: "When NOT to Consolidate",
            content: "If the new interest rate isn't significantly lower, or if the fees outweigh the interest savings, don't do it. Use the Snowball method instead."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Consolidation is a tool, not a cure. Use it wisely as part of a broader repayment plan.",
            xpEarned: 250
        }
    ],
    15: [
        {
            type: "intro",
            title: "The Magic of Compound Interest",
            content: "It's not magic, it's math. But it feels like magic. Let's see how your money makes its own babies."
        },
        {
            type: "content",
            title: "How it Works",
            content: "Compound interest is when you earn interest on your interest. Over time, this creates a hockey-stick growth curve.\n\nYear 1: $100 earns $10 = $110\nYear 2: $110 earns $11 = $121\n...Year 30: Massive growth."
        },
        {
            type: "content",
            title: "The Rule of 72",
            content: "A mental math shortcut. Divide 72 by your interest rate to see how many years it takes your money to double.\n\nAt 8% return: 72 / 8 = 9 years to double.\nAt 12% return: 72 / 12 = 6 years to double."
        },
        {
            type: "quiz",
            title: "Quick Math",
            question: "Using the Rule of 72, if you get a 6% return, how long will it take your investment to double?",
            options: [
                "6 years",
                "10 years",
                "12 years",
                "72 years"
            ],
            correctAnswer: 2,
            explanation: "72 divided by 6 equals 12. In 12 years, your money doubles without you adding a penny."
        },
        {
            type: "content",
            title: "Start Early",
            content: "Jack starts at 20, invests $200/mo until 30, then stops. (Total invested: $24k).\nJill starts at 30, invests $200/mo until 65. (Total invested: $84k).\n\nAt 65, Jack likely has MORE money, simply because his money had 10 extra years to compound."
        },
        {
            type: "content",
            title: "High Returns Matter",
            content: "Compounding works best with higher returns (investing) rather than low returns (savings accounts). A 2% difference in returns can result in hundreds of thousands of dollars difference over 40 years."
        },
        {
            type: "content",
            title: "Frequency",
            content: "The more frequently interest compounds (daily vs monthly vs annually), the more you earn. Most savings accounts compound monthly or daily."
        },
        {
            type: "content",
            title: "Patience is Key",
            content: "The 'hockey stick' curve looks flat for a long time. The big results happen at the end. Don't get discouraged in the first few years."
        },
        {
            type: "tip",
            title: "Time is Your Best Friend",
            content: "The earlier you start, the less you need to save to reach the same goal. Starting 10 years earlier can double your final amount without saving a penny more!"
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Start investing now, even if it's a small amount. Time is your greatest asset.",
            xpEarned: 150
        }
    ],
    16: [
        {
            type: "intro",
            title: "Stocks vs. Bonds",
            content: "These are the two main building blocks of most investment portfolios. Let's understand the difference."
        },
        {
            type: "content",
            title: "Stocks (Equity)",
            content: "When you buy a stock, you own a tiny piece of a company. You profit if the company grows or pays dividends.\n\n• **Pros**: High growth potential over long term (historically 7-10%).\n• **Cons**: Volatile. Prices can drop 50% in a crash."
        },
        {
            type: "content",
            title: "Bonds (Debt)",
            content: "When you buy a bond, you are lending money to a government or company. They pay you interest in return.\n\n• **Pros**: Safer, steady income, less volatile.\n• **Cons**: Lower returns (historically 3-5%). Inflation can eat profits."
        },
        {
            type: "content",
            title: "The Seesaw Relationship",
            content: "Historically, when stocks go down, bonds often go up (or stay flat). This is why owning both helps smooth out the ride. \n\nNote: This isn't always true (e.g., 2022), but it's a general principle."
        },
        {
            type: "quiz",
            title: "Risk Profile",
            question: "If you are young and investing for retirement in 40 years, which asset class is typically recommended for growth?",
            options: [
                "100% Cash",
                "Mostly Bonds",
                "Mostly Stocks",
                "Gold bars"
            ],
            correctAnswer: 2,
            explanation: "Stocks have historically provided the highest returns over long periods, making them suitable for long-term goals despite short-term volatility."
        },
        {
            type: "content",
            title: "Allocation by Age",
            content: "A common rule of thumb: **110 minus Age = % in Stocks**.\n\nAge 30: 110 - 30 = 80% Stocks, 20% Bonds.\nAge 60: 110 - 60 = 50% Stocks, 50% Bonds.\n\nAs you get older, you shift to bonds to protect what you've earned."
        },
        {
            type: "content",
            title: "Dividends",
            content: "Some stocks pay you cash (dividends) just for owning them. \n\nExample: If a stock costs $100 and pays a $3 dividend, that's a 3% yield. Reinvesting these dividends accelerates compounding wildly."
        },
        {
            type: "content",
            title: "Market Caps",
            content: "• **Large Cap**: Giant companies (Apple, Walmart). Stable.\n• **Mid Cap**: Growing companies. Balanced.\n• **Small Cap**: Newer/Smaller companies. High risk, high potential reward."
        },
        {
            type: "content",
            title: "Bear vs. Bull Markets",
            content: "• **Bull Market**: Prices are rising, everyone is happy.\n• **Bear Market**: Prices fall >20%, everyone is scared.\n\nHistory shows every Bear market has eventually been followed by a Bull market that reached new highs."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Balancing stocks and bonds allows you to manage risk while pursuing growth.",
            xpEarned: 180
        }
    ],
    17: [
        {
            type: "intro",
            title: "ETF Basics",
            content: "Exchange Traded Funds (ETFs) have revolutionized investing for everyday people."
        },
        {
            type: "content",
            title: "What is an ETF?",
            content: "An ETF is a basket of securities (like stocks) that trades on an exchange. Buying **ONE** share of an S&P 500 ETF instantly gives you exposure to **500** of the largest US companies."
        },
        {
            type: "content",
            title: "Why ETFs?",
            content: "• **Diversification**: Instant spread of risk.\n• **Low Cost**: Fees (Expense Ratios) are often incredibly low (e.g., 0.03%).\n• **Simplicity**: No need to analyze individual company balance sheets."
        },
        {
            type: "content",
            title: "Mutual Funds vs. ETFs",
            content: "• **Mutual Funds**: Only trade once a day at closing price. Often managed by humans (Active).\n• **ETFs**: Trade like stocks throughout the day. Often track an index (Passive)."
        },
        {
            type: "quiz",
            title: "ETF Logic",
            question: "What is the main advantage of an S&P 500 ETF?",
            options: [
                "It guarantees you will double your money",
                "It allows you to own 500 companies with one purchase",
                "It has zero risk",
                "It is managed by a celebrity investor"
            ],
            correctAnswer: 1,
            explanation: "Instead of buying 500 separate stocks (which would cost a fortune in fees and time), you buy one ticker symbol."
        },
        {
            type: "content",
            title: "Target Date Funds",
            content: "A special type of 'Fund of Funds'. You pick the year you retire (e.g., 2060). \n\nThe fund automatically starts aggressive (Projects: Stocks) and slowly becomes conservative (Projects: Bonds) as you get older. The ultimate 'Set it and Forget it'."
        },
        {
            type: "content",
            title: "The S&P 500",
            content: "The most famous index. It tracks the 500 largest US companies. Historically, it has returned about 10% per year on average over the last century. Many investors just buy this spread and nothing else."
        },
        {
            type: "content",
            title: "Total Market ETFs",
            content: "Even broader than the S&P 500. These buy ALMOST EVERY public company in the US (Thousands of stocks). Small caps, mid caps, large caps. You own the entire haystack."
        },
        {
            type: "tip",
            title: "Check the Expense Ratio",
            content: "Before buying an ETF, look at the 'Expense Ratio'. \n\nGood: < 0.10%\nOkay: 0.10% - 0.50%\nBad: > 0.50%\n\nDon't overpay for someone to simply track a computer-generated list."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "ETFs are a fantastic tool for building a diversified portfolio with minimal effort.",
            xpEarned: 200
        }
    ],
    18: [
        {
            type: "intro",
            title: "Understanding Risk Tolerance",
            content: "Investing isn't just about math; it's about psychology. How much volatility can you handle?"
        },
        {
            type: "content",
            title: "Factors of Risk",
            content: "1. **Time Horizon**: When do you need the money? (Longer = more risk capacity)\n2. **Financial Capacity**: Can you afford to lose money?\n3. **Emotional Tolerance**: Will you panic sell if the market drops 20%?"
        },
        {
            type: "content",
            title: "The Sleep Test",
            content: "If your investments are keeping you awake at night worrying, you have too much risk. Dial it back. \n\nPeace of mind is an asset class too."
        },
        {
            type: "quiz",
            title: "Self Check",
            question: "If the stock market drops 20% tomorrow, what should a long-term investor do?",
            options: [
                "Sell everything to prevent further loss",
                "Stick to the plan and do nothing (or buy more)",
                "Check their account every hour",
                "Complain on social media"
            ],
            correctAnswer: 1,
            explanation: "Panic selling locks in losses. History shows markets recover over time. Sticking to the plan is key."
        },
        {
            type: "content",
            title: "Volatility vs. Loss",
            content: "• **Volatility**: The price goes up and down but eventually recovers. (Normal part of investing).\n• **Permanent Loss**: The investment goes to zero and never comes back. (What happens with bad individual stocks or scams)."
        },
        {
            type: "content",
            title: "Sequence of Returns Risk",
            content: "A big risk for retirees. If the market crashes the year you retire and start withdrawing money, your portfolio might never recover.\n\nDefense: Have 2-3 years of cash (Cash Buffer) so you don't have to sell stocks during a crash."
        },
        {
            type: "content",
            title: "Conservative vs. Aggressive",
            content: "• **Conservative**: 20% Stocks / 80% Bonds. Stable but low growth.\n• **Balanced**: 60% Stocks / 40% Bonds. The classic mix.\n• **Aggressive**: 90% Stocks / 10% Bonds. Wild ride, max growth."
        },
        {
            type: "content",
            title: "Rebalancing",
            content: "If stocks go up, your 60/40 split might become 70/30. \n\n**Rebalancing** means selling the winner (stocks) and buying the loser (bonds) to get back to 60/40. This forces you to 'Buy Low, Sell High' automatically."
        },
        {
            type: "tip",
            title: "Know Thyself",
            content: "Take a risk tolerance quiz (available online from Vanguard/Fidelity). Be honest. Are you a daredevil or do you prefer safety? Invest according to YOUR personality, not your neighbor's."
        },
        {
            type: "complete",
            title: "Lesson Complete!",
            content: "Knowing your risk tolerance helps you build a portfolio you can stick with, even when times get tough.",
            xpEarned: 100
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lesson/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/radio-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/modules.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const Lesson = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, updateXP, updateProgress, isAuthenticated, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showExplanation, setShowExplanation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quizAnswers, setQuizAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lesson.useEffect": ()=>{
            if (!isLoading && !isAuthenticated) {
                router.push("/login");
            }
        }
    }["Lesson.useEffect"], [
        isLoading,
        isAuthenticated,
        router
    ]);
    if (isLoading || !isAuthenticated) {
        return null;
    }
    const lessonId = Number(params.id);
    const lessonContent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$modules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lessons"][lessonId];
    if (!lessonContent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-background flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-4",
                        children: "Lesson Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push("/modules"),
                        children: "Back to Modules"
                    }, void 0, false, {
                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                lineNumber: 40,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/lesson/[id]/page.tsx",
            lineNumber: 39,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    const currentContent = lessonContent[currentStep];
    const progress = (currentStep + 1) / lessonContent.length * 100;
    const handleNext = ()=>{
        if (currentContent.type === "quiz" && !showExplanation) {
            if (selectedAnswer === null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select an answer");
                return;
            }
            const isCorrect = selectedAnswer === currentContent.correctAnswer;
            setQuizAnswers({
                ...quizAnswers,
                [currentStep]: isCorrect
            });
            setShowExplanation(true);
            if (isCorrect) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Correct! 🎉");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Not quite right. Read the explanation below.");
            }
            return;
        }
        if (currentStep < lessonContent.length - 1) {
            setCurrentStep(currentStep + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        } else {
            const isAlreadyCompleted = user?.completedLessons?.includes(lessonId);
            if (!isAlreadyCompleted) {
                const xpEarned = currentContent.xpEarned || 0;
                const currentXP = user?.xp || 0;
                const newXP = currentXP + xpEarned;
                const newLevel = Math.floor(newXP / 500) + 1;
                // Update XP
                updateXP(newXP, newLevel);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Lesson completed! +${xpEarned} XP earned`, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0))
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Lesson reviewed!`, {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                        lineNumber: 90,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0))
                });
            }
            // Always update progress (to ensure "completed" state is set if it was missed, and to update currentLesson pointer)
            updateProgress(lessonId, true);
            setTimeout(()=>router.push("/modules"), 2000);
        }
    };
    const handleBack = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "border-b bg-card shadow-sm sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: ()=>router.push("/modules"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium",
                                    children: [
                                        "Step ",
                                        currentStep + 1,
                                        " of ",
                                        lessonContent.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                            value: progress,
                            className: "h-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8 max-w-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    className: "p-8 animate-fade-in",
                    children: [
                        currentContent.type === "complete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex p-4 mb-6 rounded-full bg-gradient-to-br from-success to-achievement animate-celebration",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                        className: "w-16 h-16 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mb-4",
                                    children: currentContent.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground mb-6 whitespace-pre-line",
                                    children: currentContent.content
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-6 py-3 bg-success/10 text-success rounded-full font-bold text-lg mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "+",
                                        currentContent.xpEarned,
                                        " XP"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold mb-6",
                                    children: currentContent.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                currentContent.type === "quiz" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg mb-6",
                                            children: currentContent.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
                                            value: selectedAnswer?.toString(),
                                            onValueChange: (val)=>setSelectedAnswer(Number(val)),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: currentContent.options?.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center space-x-3 p-4 rounded-lg border-2 transition-colors ${showExplanation && index === currentContent.correctAnswer ? "border-success bg-success/10" : showExplanation && selectedAnswer === index ? "border-destructive bg-destructive/10" : "border-border hover:border-primary"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$radio$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroupItem"], {
                                                                value: index.toString(),
                                                                id: `option-${index}`,
                                                                disabled: showExplanation
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: `option-${index}`,
                                                                className: "flex-1 cursor-pointer font-medium",
                                                                children: option
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            showExplanation && index === currentContent.correctAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-5 h-5 text-success"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        showExplanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "mt-6 p-4 bg-muted/50 animate-fade-in",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-medium mb-2",
                                                    children: "Explanation:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: currentContent.explanation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true) : currentContent.type === "tip" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg whitespace-pre-line",
                                        children: currentContent.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-muted-foreground whitespace-pre-line leading-relaxed",
                                    children: currentContent.content
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-8",
                            children: [
                                currentStep > 0 && currentContent.type !== "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: handleBack,
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Back"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleNext,
                                    className: "flex-1",
                                    children: [
                                        currentContent.type === "complete" ? "Back to Modules" : currentStep === lessonContent.length - 1 ? "Complete" : "Next",
                                        currentContent.type !== "complete" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 68
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lesson/[id]/page.tsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lesson/[id]/page.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/lesson/[id]/page.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/lesson/[id]/page.tsx",
        lineNumber: 110,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Lesson, "G9N2PMPt9BLQWpw0djtgl2kx/bA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Lesson;
const __TURBOPACK__default__export__ = Lesson;
var _c;
__turbopack_context__.k.register(_c, "Lesson");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0aa90acf._.js.map