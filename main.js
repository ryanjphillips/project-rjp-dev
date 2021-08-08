function main(){

    const list = document.querySelector("ul");
    list.appendChild(createProject("30DaysOfJavaScript: Day 23 - Project 1", "code/day23eventlistners/index.html"));
    list.appendChild(createProject("30DaysOfJavaScript: Day 23 - Project 1A","code/day23eventlistners2/day23eventlistners2/index.html"));
    list.appendChild(createProject("30DaysOfJavaScript: Day 24 - Project 1", "code/day24solarsystem/day24solarsystem/index.html"));
    list.appendChild(createProject("30DaysOfJavaScript: Day 25 - Project 1", "code/day25worldcountries/day25worldcountries/index.html"));
    list.appendChild(createProject("30DaysOfJavaScript Final Project: Country Coupling", "code/countrycoupling/countrycoupling/homepage/index.html"));
    list.appendChild(createProject("Poke-Scope", "code/pokescope/poke-scope/public/index.html"));
}


main();
