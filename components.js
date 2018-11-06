AFRAME.registerComponent('move-all-children-top', {
    schema: {
        type: 'int',
        default: 30
    },
    // if clicked?
    init: function () {
        console.log(this.data)
        //register component animation
        this.el.childNodes.forEach(elem => {
            //we check the child has attributes
            if (elem.getAttribute){
                //we check elem doesn't have class environment
                console.log(typeof elem.className);
                if (!elem.className.includes("environment")){
                    let initPosition = elem.getAttribute("position");
                    //we check initPosition is not null
                    if (initPosition){
                        initPosition.y += this.data
                        elem.setAttribute("position", initPosition)
                    }
                }
            }

        })
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
        //choose arrival attribute based on initial attribute.
        animationToApply.setAttribute("to", initialRotation.x.toString() + " "  + (initialRotation.y + 360).toString() + " " + initialRotation.z.toString())
        animationToApply.setAttribute("repeat", "2")

        //add animation when element is "hovered"
        elementToRotate.addEventListener('mouseenter', function (evt) {
            console.log("hover begun");
            elementToRotate.appendChild(animationToApply)
        });
    }
});
