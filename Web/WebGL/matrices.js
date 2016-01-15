function initMatrices(){
	modelViewMatrix=new Float32Array(
		[1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,-3.333,1]
	    );
	projectionMatrix=new Float32Array(
		[2.41421,0,0,0
		0,2.41421,0,0,
		0,0,-1.002002,-1,
		0,0,-0.2002002,0]
		);
}