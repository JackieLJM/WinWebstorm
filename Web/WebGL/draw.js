function draw (gl.obj) {
	//用黑色清空背景
	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	//设置顶点数组
	gl.bindBuffer(gl.ARRAY_BUFFER,obj.buffer);
	//设置着色器
	gl.useProgram(shaderProgram);
	//设置着色器参数：点点坐标、投影矩阵和模型视图矩阵
	gl.vertexAttribPointer(shaderVertexPositionAttribute,obj.vertsize,gl.FLOAT,false,0,0);
	gl.uniformMatrix4fv(shaderProjectionMatrixUniform,false,projectionMatrix);
	gl.uniformMatrix4fv(shadermodelVeiwMatrixUniform,false,modelViewMatrix);
	//绘制物体
	gl.drawArrays(obj.primtype,0,obj.nVerts);
}