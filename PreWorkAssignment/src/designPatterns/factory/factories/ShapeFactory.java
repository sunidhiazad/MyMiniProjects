package designPatterns.factory.factories;

import designPatterns.factory.concrete.Circle;
import designPatterns.factory.concrete.Rectangle;
import designPatterns.factory.concrete.Triangle;
import designPatterns.factory.interfaces.Shape;

public class ShapeFactory {

	public Shape getShape(String shapeType) {
		if (shapeType == null) {
			return null;
		}
		if (shapeType.equalsIgnoreCase("CIRCLE")) {
			return new Circle();

		} else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
			return new Rectangle();

		} else if (shapeType.equalsIgnoreCase("TRIANGLE")) {
			return new Triangle();
		}

		return null;
	}

}
