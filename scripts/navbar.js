import { isSectionInViewport } from "./viewport.js";
import { sections } from "../data/sections.js";

export function setActiveSection(oldSection) {
    var i = 0;

    while (i < sections.length && !isSectionInViewport(document.querySelector(`#${sections[i].referenceName}`))) {
        i++;
    }

    if (oldSection != sections[i].referenceName) {
        let oldIcon = document.querySelector(".selected-item");
        oldIcon.classList.remove("selected-item");

        let icon = document.querySelector(`#${sections[i].referenceName}Icon`);
        icon.classList.add("selected-item");
    }
}

export function sidebarIconsHTML() {
    return sections.map((section) => (sidebarIconHTML(section))).join('');
}

function sidebarIconHTML(section) {
    return (`
    <a href="#${section.referenceName}">
        <div class="sidebar-icon ${section.referenceName=='profile' && 'selected-item'}" id="${section.referenceName}Icon">
            <span class="material-symbols-outlined">
                ${section.iconName}
            </span>
            <span>${section.name}</span>
        </div>
    </a>
    `)
}