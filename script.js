const arr = [
  // B front
  -60, 40, 5, -60, -40, 5, -50, 40, 5,

  -60, -40, 5, -50, 40, 5, -50, -40, 5,

  -50, 40, 5, -10, 30, 5, -10, 40, 5,

  -50, 40, 5, -50, 30, 5, -10, 30, 5,

  -25, 5, 5, -20, 30, 5, -10, 30, 5,

  -35, 5, 5, -25, 5, 5, -20, 30, 5,

  -50, 5, 5, -10, 5, 5, -10, -5, 5,

  -50, 5, 5, -50, -5, 5, -10, -5, 5,

  -20, -5, 5, -20, -40, 5, -10, -40, 5,

  -20, -5, 5, -10, -5, 5, -10, -40, 5,

  -50, -30, 5, -50, -40, 5, -20, -30, 5,

  -50, -40, 5, -20, -30, 5, -20, -40, 5,

  // B back
  -60, 40, -5, -60, -40, -5, -50, 40, -5,

  -60, -40, -5, -50, 40, -5, -50, -40, -5,

  -50, 40, -5, -10, 30, -5, -10, 40, -5,

  -50, 40, -5, -50, 30, -5, -10, 30, -5,

  -25, 5, -5, -20, 30, -5, -10, 30, -5,

  -35, 5, -5, -25, 5, -5, -20, 30, -5,

  -50, 5, -5, -10, 5, -5, -10, -5, -5,

  -50, 5, -5, -50, -5, -5, -10, -5, -5,

  -20, -5, -5, -20, -40, -5, -10, -40, -5,

  -20, -5, -5, -10, -5, -5, -10, -40, -5,

  -50, -30, -5, -50, -40, -5, -20, -30, -5,

  -50, -40, -5, -20, -30, -5, -20, -40, -5,

  // B connections
  -10, 5, -5, -10, 5, 5, -10, -40, 5,

  -10, 5, -5, -10, -40, -5, -10, -40, 5,

  -10, -40, -5, -10, -40, 5, -60, -40, 5,

  -10, -40, -5, -60, -40, 5, -60, -40, -5,

  -10, 5, -5, -10, 5, 5, -25, 5, 5,

  -10, 5, -5, -25, 5, 5, -25, 5, -5,

  -25, 5, -5, -25, 5, 5, -10, 30, -5,

  -25, 5, 5, -10, 30, -5, -10, 30, 5,

  -10, 30, 5, -10, 40, 5, -10, 30, -5,

  -10, 30, -5, -10, 40, 5, -10, 40, -5,

  -10, 40, -5, -10, 40, 5, -60, 40, -5,

  -10, 40, 5, -60, 40, -5, -60, 40, 5,

  -60, -40, 5, -60, -40, -5, -60, 40, 5,

  -60, -40, -5, -60, 40, -5, -60, 40, 5,

  -35, 5, 5, -35, 5, -5, -50, 5, -5,

  -35, 5, 5, -50, 5, -5, -50, 5, 5,

  -20, -5, 5, -20, -5, -5, -50, -5, 5,

  -20, -5, -5, -50, 5, -5, -50, -5, 5,

  // M front
  45, -40, 5, 50, 40, 5, 60, -40, 5,

  50, 40, 5, 45, -40, 5, 40, 10, 5,

  50, 40, 5, 40, 10, 5, 30, 15, 5,

  40, 10, 5, 30, 15, 5, 30, -5, 5,

  30, 15, 5, 30, -5, 5, 20, 10, 5,

  30, 15, 5, 20, 10, 5, 10, 40, 5,

  20, 10, 5, 15, -40, 5, 10, 40, 5,

  15, -40, 5, 10, 40, 5, 0, -40, 5,

  // M front
  45, -40, -5, 50, 40, -5, 60, -40, -5,

  50, 40, -5, 45, -40, -5, 40, 10, -5,

  50, 40, -5, 40, 10, -5, 30, 15, -5,

  40, 10, -5, 30, 15, -5, 30, -5, -5,

  30, 15, -5, 30, -5, -5, 20, 10, -5,

  30, 15, -5, 20, 10, -5, 10, 40, -5,

  20, 10, -5, 15, -40, -5, 10, 40, -5,

  15, -40, -5, 10, 40, -5, 0, -40, -5,

  // M connections

  0, -40, 5, 0, -40, -5, 15, -40, 5,

  0, -40, -5, 15, -40, 5, 15, -40, -5,

  45, -40, 5, 45, -40, -5, 60, -40, 5,

  45, -40, -5, 60, -40, 5, 60, -40, -5,

  15, -40, 5, 15, -40, -5, 20, 10, 5,

  15, -40, -5, 20, 10, 5, 20, 10, -5,

  20, 10, 5, 20, 10, -5, 30, -5, 5,

  30, -5, 5, 30, -5, -5, 20, 10, -5,

  30, -5, 5, 30, -5, -5, 40, 10, -5,

  30, -5, 5, 40, 10, -5, 40, 10, 5,

  40, 10, 5, 40, 10, -5, 45, -40, -5,

  45, -40, -5, 45, -40, 5, 40, 10, 5,

  60, -40, 5, 60, -40, -5, 50, 40, -5,

  60, -40, 5, 50, 40, -5, 50, 40, 5,

  50, 40, 5, 50, 40, -5, 30, 15, -5,

  50, 40, 5, 30, 15, -5, 30, 15, 5,

  30, 15, 5, 30, 15, -5, 10, 40, -5,

  30, 15, 5, 10, 40, 5, 10, 40, -5,

  0, -40, 5, 0, -40, -5, 10, 40, -5,

  0, -40, 5, 10, 40, 5, 10, 40, -5,
];

function main() {
  // Get A WebGL context
  /** @type {HTMLCanvasElement} */
  let canvas = document.querySelector("#canvas");
  let gl = canvas.getContext("webgl");
  if (!gl) {
    return;
  }

  let program = webglUtils.createProgramFromScripts(gl, [
    "vertex-shader-2d",
    "fragment-shader-2d",
  ]);
  gl.useProgram(program);

  let positionLocation = gl.getAttribLocation(program, "a_position");
  let colorLocation = gl.getUniformLocation(program, "u_color");
  let matrixLocation = gl.getUniformLocation(program, "u_matrix");

  let positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Set geometry data
  setGeometry(gl);

  function radToDeg(r) {
    return (r * 180) / Math.PI;
  }

  function degToRad(d) {
    return (d * Math.PI) / 180;
  }

  // Initial positions
  let translation = [0, 0, -360]; // Center the letter and move it back a bit for visibility
  let rotation = [degToRad(0), degToRad(0), degToRad(0)];
  let color = [Math.random(), Math.random(), Math.random(), 1];
  let fieldOfViewRadians = degToRad(18);

  drawScene();

  // Sliders
  webglLessonsUI.setupSlider("#x", {
    slide: updatePosition(0),
    min: -200,
    max: 200,
  });
  webglLessonsUI.setupSlider("#y", {
    slide: updatePosition(1),
    min: -200,
    max: 200,
  });
  webglLessonsUI.setupSlider("#angleX", {
    value: radToDeg(rotation[0]),
    slide: updateRotation(0),
    min: -360,
    max: 360,
  });
  webglLessonsUI.setupSlider("#angleY", {
    value: radToDeg(rotation[1]),
    slide: updateRotation(1),
    min: -360,
    max: 360,
  });
  webglLessonsUI.setupSlider("#angleZ", {
    value: radToDeg(rotation[2]),
    slide: updateRotation(2),
    min: -360,
    max: 360,
  });
  webglLessonsUI.setupSlider("#fieldOfView", {
    value: radToDeg(fieldOfViewRadians),
    slide: updateFieldOfView,
    min: 1,
    max: 179,
  });

  function updatePosition(index) {
    return function (event, ui) {
      translation[index] = ui.value;
      drawScene();
    };
  }

  function updateRotation(index) {
    return function (event, ui) {
      let angleInDegrees = ui.value;
      let angleInRadians = (angleInDegrees * Math.PI) / 180;
      rotation[index] = angleInRadians;
      drawScene();
    };
  }

  function updateFieldOfView(event, ui) {
    fieldOfViewRadians = degToRad(ui.value);
    drawScene();
  }

  function drawScene() {
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.DEPTH_TEST);

    gl.useProgram(program);

    gl.enableVertexAttribArray(positionLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    let size = 3;
    let type = gl.FLOAT;
    let normalize = false;
    let stride = 0;
    let offset = 0;
    gl.vertexAttribPointer(
      positionLocation,
      size,
      type,
      normalize,
      stride,
      offset
    );

    gl.uniform4fv(colorLocation, color);

    let aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    let zNear = 1;
    let zFar = 2000;
    let matrix = m4.perspective(fieldOfViewRadians, aspect, zNear, zFar);

    matrix = m4.translate(
      matrix,
      translation[0],
      translation[1],
      translation[2]
    );
    matrix = m4.xRotate(matrix, rotation[0]);
    matrix = m4.yRotate(matrix, rotation[1]);
    matrix = m4.zRotate(matrix, rotation[2]);

    gl.uniformMatrix4fv(matrixLocation, false, matrix);

    let primitiveType = gl.TRIANGLES;
    let count = arr.length / 3;
    gl.drawArrays(primitiveType, offset, count);
  }
}

let m4 = {
  perspective: function (fieldOfViewInRadians, aspect, near, far) {
    let f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    let rangeInv = 1.0 / (near - far);

    return [
      f / aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (near + far) * rangeInv,
      -1,
      0,
      0,
      near * far * rangeInv * 2,
      0,
    ];
  },
  translation: function (tx, ty, tz) {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1];
  },
  xRotation: function (angleInRadians) {
    let c = Math.cos(angleInRadians);
    let s = Math.sin(angleInRadians);
    return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
  },
  yRotation: function (angleInRadians) {
    let c = Math.cos(angleInRadians);
    let s = Math.sin(angleInRadians);
    return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
  },
  zRotation: function (angleInRadians) {
    let c = Math.cos(angleInRadians);
    let s = Math.sin(angleInRadians);
    return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  },
  multiply: function (a, b) {
    let a00 = a[0 * 4 + 0];
    let a01 = a[0 * 4 + 1];
    let a02 = a[0 * 4 + 2];
    let a03 = a[0 * 4 + 3];
    let a10 = a[1 * 4 + 0];
    let a11 = a[1 * 4 + 1];
    let a12 = a[1 * 4 + 2];
    let a13 = a[1 * 4 + 3];
    let a20 = a[2 * 4 + 0];
    let a21 = a[2 * 4 + 1];
    let a22 = a[2 * 4 + 2];
    let a23 = a[2 * 4 + 3];
    let a30 = a[3 * 4 + 0];
    let a31 = a[3 * 4 + 1];
    let a32 = a[3 * 4 + 2];
    let a33 = a[3 * 4 + 3];
    let b00 = b[0 * 4 + 0];
    let b01 = b[0 * 4 + 1];
    let b02 = b[0 * 4 + 2];
    let b03 = b[0 * 4 + 3];
    let b10 = b[1 * 4 + 0];
    let b11 = b[1 * 4 + 1];
    let b12 = b[1 * 4 + 2];
    let b13 = b[1 * 4 + 3];
    let b20 = b[2 * 4 + 0];
    let b21 = b[2 * 4 + 1];
    let b22 = b[2 * 4 + 2];
    let b23 = b[2 * 4 + 3];
    let b30 = b[3 * 4 + 0];
    let b31 = b[3 * 4 + 1];
    let b32 = b[3 * 4 + 2];
    let b33 = b[3 * 4 + 3];
    return [
      b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
      b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
      b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
      b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
      b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
      b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
      b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
      b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
      b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
      b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
      b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
      b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
      b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
      b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
      b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
      b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
    ];
  },
  translate: function (m, tx, ty, tz) {
    return m4.multiply(m, m4.translation(tx, ty, tz));
  },
  xRotate: function (m, angleInRadians) {
    return m4.multiply(m, m4.xRotation(angleInRadians));
  },
  yRotate: function (m, angleInRadians) {
    return m4.multiply(m, m4.yRotation(angleInRadians));
  },
  zRotate: function (m, angleInRadians) {
    return m4.multiply(m, m4.zRotation(angleInRadians));
  },
};

// Fill the buffer with the values that define a letter 'F'.
function setGeometry(gl) {
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
}

main();
