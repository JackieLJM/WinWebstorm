function creatSquare(gl){
	var vertexBuffer;
	vertexBuffer=gl.creatBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
	var verts=[
	.5,.5,0.0,
	-.5,.5,0.0,
	.5,-.5,0.0,
	-.5,-.5,0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(verts),gl.STATIC_DRAW);
	var square={buffer:vertexBuffer,vertSize:3,nVerts:4,primtype:gl.TRIANGLE_STRIP};
	return square;
}