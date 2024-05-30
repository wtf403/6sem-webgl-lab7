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
  const canvas = document.querySelector("#canvas");
  const gl = canvas.getContext("webgl2");
  if (!gl) {
    return;
  }

  const sliders = document.querySelectorAll("input[type=range]");
  sliders.forEach((slider) => {
    slider.addEventListener("input", updateScene);
  });

  const vertexShaderSource = `#version 300 es
  in vec4 a_position;
  in vec3 a_color;
  uniform mat4 u_matrix;
  out vec3 v_color;
  void main() {
    gl_Position = u_matrix * a_position;
    v_color = a_color;
  }`;

  const fragmentShaderSource = `#version 300 es
  precision mediump float;
  in vec3 v_color;
  out vec4 outColor;
  void main() {
    outColor = vec4(v_color, 1.0);
  }`;

  let translation, rotation, fieldOfViewRadians, fudgeFactor;

  function updateScene() {
    translation = [
      parseFloat(document.getElementById("x").value),
      parseFloat(document.getElementById("y").value),
      parseFloat(document.getElementById("z").value),
    ];

    rotation = [
      degToRad(parseFloat(document.getElementById("angleX").value)),
      degToRad(parseFloat(document.getElementById("angleY").value)),
      degToRad(parseFloat(document.getElementById("angleZ").value)),
    ];

    fudgeFactor = parseFloat(document.getElementById("fudgeFactor").value);
    fieldOfViewRadians = degToRad(
      parseFloat(document.getElementById("fieldOfView").value)
    );

    drawScene(); // Redraw the scene with the new parameters
  }

  const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const colorLocation = gl.getAttribLocation(program, "a_color");
  const matrixLocation = gl.getUniformLocation(program, "u_matrix");

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  setGeometry(gl);

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  setColors(gl);

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  gl.enableVertexAttribArray(positionLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

  gl.enableVertexAttribArray(colorLocation);
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

  translation = [0, 0, -360];
  rotation = [0, 0, 0];
  fieldOfViewRadians = degToRad(60);
  fudgeFactor = 1.0;

  function drawScene() {
    webglUtils.resizeCanvasToDisplaySize(gl.canvas);

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);

    gl.useProgram(program);
    gl.bindVertexArray(vao);

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
    matrix = m4.multiply(matrix, m4.lookAt([0, 0, 0], [0, 0, -1], [0, 1, 0]));

    gl.uniformMatrix4fv(matrixLocation, false, matrix);

    gl.drawArrays(gl.TRIANGLES, 0, arr.length / 3);
  }

  updateScene();
}

function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function setGeometry(gl) {
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(arr), gl.STATIC_DRAW);
}

function setColors(gl) {
  const colors = new Float32Array(arr.length);
  for (let i = 0; i < colors.length; i += 3) {
    colors[i] = Math.random();
    colors[i + 1] = Math.random();
    colors[i + 2] = Math.random();
  }
  gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
}

const m4 = {
  perspective: function (fieldOfViewInRadians, aspect, near, far) {
    const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
    const rangeInv = 1.0 / (near - far);

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
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
  },
  yRotation: function (angleInRadians) {
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
  },
  zRotation: function (angleInRadians) {
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  },
  multiply: function (a, b) {
    const a00 = a[0 * 4 + 0];
    const a01 = a[0 * 4 + 1];
    const a02 = a[0 * 4 + 2];
    const a03 = a[0 * 4 + 3];
    const a10 = a[1 * 4 + 0];
    const a11 = a[1 * 4 + 1];
    const a12 = a[1 * 4 + 2];
    const a13 = a[1 * 4 + 3];
    const a20 = a[2 * 4 + 0];
    const a21 = a[2 * 4 + 1];
    const a22 = a[2 * 4 + 2];
    const a23 = a[2 * 4 + 3];
    const a30 = a[3 * 4 + 0];
    const a31 = a[3 * 4 + 1];
    const a32 = a[3 * 4 + 2];
    const a33 = a[3 * 4 + 3];
    const b00 = b[0 * 4 + 0];
    const b01 = b[0 * 4 + 1];
    const b02 = b[0 * 4 + 2];
    const b03 = b[0 * 4 + 3];
    const b10 = b[1 * 4 + 0];
    const b11 = b[1 * 4 + 1];
    const b12 = b[1 * 4 + 2];
    const b13 = b[1 * 4 + 3];
    const b20 = b[2 * 4 + 0];
    const b21 = b[2 * 4 + 1];
    const b22 = b[2 * 4 + 2];
    const b23 = b[2 * 4 + 3];
    const b30 = b[3 * 4 + 0];
    const b31 = b[3 * 4 + 1];
    const b32 = b[3 * 4 + 2];
    const b33 = b[3 * 4 + 3];
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
  lookAt: function (cameraPosition, target, up) {
    const zAxis = normalize(subtractVectors(cameraPosition, target));
    const xAxis = normalize(cross(up, zAxis));
    const yAxis = cross(zAxis, xAxis);

    return [
      xAxis[0],
      xAxis[1],
      xAxis[2],
      0,
      yAxis[0],
      yAxis[1],
      yAxis[2],
      0,
      zAxis[0],
      zAxis[1],
      zAxis[2],
      0,
      cameraPosition[0],
      cameraPosition[1],
      cameraPosition[2],
      1,
    ];
  },
};

function degToRad(d) {
  return (d * Math.PI) / 180;
}

function radToDeg(r) {
  return (r * 180) / Math.PI;
}

function normalize(v) {
  const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  return [v[0] / length, v[1] / length, v[2] / length];
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ];
}

function subtractVectors(a, b) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

main();
