let t
let nl
let totalX
let totalY

colorMode(HSL, 100)

function setup() {
    createCanvas(windowWidth, windowHeight) 
    background("#000000")
    t = 0
    nl = 0.0025
    density = 10

    totalX = windowWidth
    totalY = windowHeight

  
    let col1 = color("#A259FF")
    let col2 = color("blue")

    for(let x = 0; x < totalX; x = x + 1)
        {
            for(let y = 0; y < totalY; y = y + 1)
            {
                let n = noise(x * nl , y * nl) //+ t
                let rn =  n * density - floor(n * density)

                let d = map (rn, 0, 0.5, 0, 1)
                if (rn  > 0.5)
                {
                    d = map(rn, 0.5, 1, 1, 0)
                }

            let finalCol = lerpColor(col2, col1, d)
            set(x, y, finalCol)
            }
    }
    updatePixels()
   //no funciona: t = t + 0.5
}

function draw() {

  
}

function mouseDragged() {
 //   let n = random()
 //   let n = noise(t * nl)

    let n = noise(mouseX * nl, mouseY * nl)
    let size = 20 + n * 20
    //let col1 = color("#A259FF")
    //let col2 = color("blue")
    //let finalCol = lerpColor(col2, col1, n)
   // colorMode(HSL, 100)
  //  let finalCol = color(n * 100, 100, 50)


    noStroke()
    fill(finalCol)
    circle(mouseX, mouseY, size)

    t = t + 0.001
}