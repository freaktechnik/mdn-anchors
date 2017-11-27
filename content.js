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
        const anchorURL = `${window.location.protocol}//${window.location.hostname}${window.location.pathname}#${anchor.id}`; copyLink.addEventListener("click", (e) => {
            e.preventDefault();
            copy(anchorURL);
        }, {
            passive: false
        });
        copyLink.title = anchorURL;
        copyLink.style.position = "absolute";
        copyLink.style.left = "-1.5em";
        copyLink.style.fontFamily = "sans";
        copyLink.style.cursor = "default";
        anchor.appendChild(copyLink);
    };
anchors.forEach(addCopyLink);
