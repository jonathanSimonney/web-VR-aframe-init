AFRAME.registerComponent('click-destroy-helico', {
    // if clicked?
    init: function () {
        console.log("init")
        //register component animation
        this.el.addEventListener('click', function (evt) {
            console.log("click");
            helicoAnim = document.createElement('a-animation')

            helicoAnim.setAttribute("attribute", "position")
            helicoAnim.setAttribute("dur", "10000")
            helicoAnim.setAttribute("fill", "forwards")
            helicoAnim.setAttribute("to", "1 -10000 -3")
            document.querySelector("#helico").appendChild(helicoAnim)
        });
    }
});