function sumOfAreas(squareSide, rectSideA, rectSideB, circleRadius, ellipseMajorAxis, ellipseMinorAxis) {
	const SSquare = squareSide ** 2;
	const SRect = rectSideA * rectSideB;
	const SCircle = Math.PI * circleRadius ** 2;
	const SEllipse = Math.PI * ellipseMinorAxis * ellipseMajorAxis;
	const STotal = SSquare + SRect + SCircle + SEllipse;
	return STotal;
}

module.exports = sumOfAreas;