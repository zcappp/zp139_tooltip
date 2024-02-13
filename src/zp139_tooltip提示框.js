import React from "react"

function render({ children }) {
    return children
}

function init({ exc, id, props }) {
    exc('load(["https://unpkg.com/@popperjs/core@2.9.2/dist/umd/popper.min.js", "https://unpkg.com/tippy.js@6.3.1/dist/tippy-bundle.umd.min.js"])', {}, () => {
        tippy("#" + id + "_0", {
            content: props.content || "提示内容",
            allowHTML: true,
            interactive: true,
        })
    })
}

$plugin({
    id: "zp139",
    props: [{
        prop: "content",
        type: "text",
        label: "内容",
        ph: "可以是HTML"
    }],
    noContainer: true,
    render,
    init
})

/*
https://github.com/popperjs/popper.js

*/