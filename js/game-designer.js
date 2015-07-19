var app = angular.module( 'GameDesigner', [] );

app.controller( 'GameDesignerController', function ( $scope ) {

	$scope.Math = window.Math;

	var range = function ( min, max, step ) {
		if ( !max ) {
			max = min;
			min = 0;
		}
		step = step || 1;
		var result = [];
		for ( var i = min; i < max; i += step ) {
			result.push( i );
		}
		return result;
	};

	$scope.colors = {
		TC: '#666666', // tile color
		TB: '#000000', // tile border
		PC: '#cccccc', // path color
		PB: '#333333', // path border
		BS: '#444444', // backside
		JD: '#666666', // jellyfish dark
		JL: '#888888'  // jellyfish light
	};

	$scope.defaultGray = function () {
		$scope.colors = { TC: '#666666', TB: '#000000', PC: '#cccccc', PB: '#333333', BS: '#444444', JD: '#666666', JL: '#888888' };
	};
	$scope.defaultBlue = function () {
		$scope.colors = { TC: '#336699', TB: '#000000', PC: '#77aadd', PB: '#113355', BS: '#114455', JD: '#336677', JL: '#668899' };
	};
	$scope.defaultRed = function () {
		$scope.colors = { TC: '#aa2200', TB: '#eecc66', PC: '#225599', PB: '#eecc66', BS: '#aa5522', JD: '#773322', JL: '#bb8844' };
	};
	$scope.defaultLight = function () {
		$scope.colors = { TC: '#ffffff', TB: '#aaaaaa', PC: '#bbbbbb', PB: '#666666', BS: '#eeeeee', JD: '#cccccc', JL: '#dddddd' };
	};

	$scope.mode = 'tiles';
	$scope.designer = true;

	$scope.lineEnds = {
		rotations: range( 4 ),
		positions: [ 1/3, 2/3, 4/3, 5/3, 7/3, 8/3, 10/3, 11/3, 13/3, 14/3, 16/3, 17/3 ]
	};

	$scope.tiles = {
		positions: range( 36 )
	};

	$scope.paths = {
		points: [ [1/3,0], [2/3,0], [1,1/3], [1,2/3], [2/3,1], [1/3,1], [0,2/3], [0,1/3] ],
		lines: [ 0, 2, 4, 6 ],
		connections: [
			[1,2,3,4,5,6,7,8],
			[1,2,3,4,5,7,6,8],
			[1,2,3,4,5,8,6,7],
			[1,2,4,7,3,5,6,8],
			[1,2,4,8,3,5,6,7],
			[1,2,4,7,3,6,5,8],
			[1,2,4,8,5,7,3,6],
			[1,2,3,7,4,5,6,8],
			[1,2,3,7,4,6,5,8],
			[1,2,3,7,4,8,5,6],
			[1,2,3,8,4,5,6,7],
			[1,2,3,8,4,6,5,7],
			[1,2,3,8,4,7,5,6],
			[1,3,2,4,5,7,6,8],
			[1,3,2,4,5,8,6,7],
			[2,5,1,3,4,7,6,8],
			[2,5,1,3,4,8,6,7],
			[4,7,2,6,1,3,5,8],
			[1,3,4,8,5,7,2,6],
			[2,7,4,5,1,3,6,8],
			[2,7,5,8,1,3,4,6],
			[1,3,2,8,4,5,6,7],
			[1,3,2,8,5,7,4,6],
			[1,4,2,3,5,8,6,7],
			[2,5,3,7,1,4,6,8],
			[2,5,3,8,1,4,6,7],
			[1,4,5,8,2,6,3,7],
			[2,7,3,6,1,4,5,8],
			[2,3,4,7,1,5,6,8],
			[1,5,2,3,4,8,6,7],
			[1,5,2,4,6,8,3,7],
			[1,5,2,6,3,7,4,8],
			[3,8,4,7,1,5,2,6],
			[1,6,2,5,3,8,4,7],
			[1,8,2,3,4,5,6,7]
		],
		generatePath: function ( point1, point2 ) {
			var x1 = point1[ 0 ] * 10;
			var y1 = point1[ 1 ] * 10;
			var x2 = point2[ 0 ] * 10;
			var y2 = point2[ 1 ] * 10;
			var x1c = Math.max( 1/4, Math.min( 3/4, point1[ 0 ] ) ) * 10;
			var y1c = Math.max( 1/4, Math.min( 3/4, point1[ 1 ] ) ) * 10;
			var x2c = Math.max( 1/4, Math.min( 3/4, point2[ 0 ] ) ) * 10;
			var y2c = Math.max( 1/4, Math.min( 3/4, point2[ 1 ] ) ) * 10;
			var d = 'M ' + x1 + ',' + y1 + ' C ' + x1c + ',' + y1c + ',' + x2c + ',' + y2c + ',' + x2 + ',' + y2;
			return d;
		}
	};

});

