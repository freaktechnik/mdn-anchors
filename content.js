const anchors = document.querySelectorAll("#wikiArticle [id]:not([id='Quick_Links'])"),
    copy = (string) => {
        const input = document.createElement("textarea");
        input.value = string;
        document.body.appendChild(input);
        input.select();
        const result = document.execCommand("copy");
        input.remove();
        return result;
    },
    addCopyLink = (anchor) => {
        const copyLink = document.createElement("a");
        copyLink.textContent = "⚓";
        const URI = new URL(`#${anchor.id}`, window.location.href);
        copyLink.addEventListener("click", (e) => {
            e.preventDefault();
            copy(URI.toString());
        }, {
            passive: false
        });
        copyLink.title = URI.toString();
        copyLink.style.position = "absolute";
        copyLink.style.left = "-1.5em";
        copyLink.style.fontFamily = "sans";
        copyLink.style.cursor = "default";
        anchor.appendChild(copyLink);
    };
anchors.forEach(addCopyLink);
