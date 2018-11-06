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

AFRAME.registerComponent('infinite-rotate-on-hover', {
    // if clicked?
    init: function () {
        const elementToRotate = this.el;

        initialRotation = this.el.getAttribute("rotation")
        //create the animation
        let animationToApply = document.createElement('a-animation')

        animationToApply.setAttribute("attribute", "rotation")
        animationToApply.setAttribute("dur", "1000")
        animationToApply.setAttribute("fill", "forwards")
        animationToApply.setAttribute("to", initialRotation.x.toString() + " "  + (initialRotation.y + 360).toString() + " " + initialRotation.z.toString())
        animationToApply.setAttribute("repeat", "indefinite")

        //add animation when element is "hovered"
        this.el.addEventListener('mouseenter', function (evt) {
            console.log("hover begun");
            elementToRotate.appendChild(animationToApply)
        });

        //and remove it (after animation is done) when it isn't
        this.el.addEventListener('mouseleave', function (evt) {
            hasFocus = false;
            console.log("hover lost");
            animationToApply.addEventListener('animationend', () => {
                if (!hasFocus){
                    console.log("suppress the animation!");
                    elementToRotate.removeChild(animationToApply);
                }
            })
        });
    }
});
