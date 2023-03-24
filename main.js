function preload(){
	musica = loadSound("world_start.wav");
	setSprite();
	MarioAnimation();
}

function setup(){
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600, 200);

	video.parent("webcam");

	model = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotPoses);
}

function modelLoaded(){
	console.log("O modelo foi carregado!");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);

		narizX = results[0].pose.nose.x;
		narizY = results[0].pose.nose.y;


	}
}

function draw(){
	game();
}