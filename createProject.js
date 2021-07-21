function createProject(name, location){

    const listItem = document.createElement("li");
    const linkTag = document.createElement("a");
    linkTag.textContent = name;
    linkTag.setAttribute("href", location);
    listItem.appendChild(linkTag);;
    return listItem;
}